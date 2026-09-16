"use client";

import { useState } from "react";
import {
  GuestListFullError,
  RSVP_ENDPOINT,
  submitRsvp,
  type GuestName,
} from "@/lib/rsvp";

type State = "idle" | "sending" | "done" | "full" | "error";

const FIELD =
  "w-full border-b border-cream/25 bg-transparent px-1 pb-2.5 font-serif text-lg text-cream placeholder:text-cream/35 focus:border-gold/70 focus:outline-none";

export default function RsvpForm() {
  const [guest, setGuest] = useState<GuestName>({
    first: "",
    middle: "",
    last: "",
  });
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  const trimmed: GuestName = {
    first: guest.first.trim(),
    middle: guest.middle.trim().toUpperCase(),
    last: guest.last.trim(),
  };
  const complete = Boolean(trimmed.first && trimmed.last);
  const started = Boolean(guest.first || guest.middle || guest.last);

  function update(field: keyof GuestName, value: string) {
    // one letter only, no digits or punctuation
    const clean =
      field === "middle"
        ? value.replace(/[^A-Za-z]/g, "").slice(0, 1).toUpperCase()
        : value;
    setGuest((prev) => ({ ...prev, [field]: clean }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (state === "sending") return;

    if (!complete) {
      setState("error");
      setMessage("Please give a first and last name.");
      return;
    }

    if (!RSVP_ENDPOINT) {
      setState("error");
      setMessage("The guest list isn't connected yet.");
      return;
    }

    setState("sending");
    try {
      await submitRsvp(trimmed);
      setState("done");
    } catch (err) {
      if (err instanceof GuestListFullError) {
        setState("full");
        return;
      }
      setState("error");
      setMessage("Something went wrong. Please try again, or message us.");
    }
  }

  if (state === "done") {
    return (
      <div className="animate-fade-up mt-10 text-center">
        <p className="font-script text-4xl text-cream">
          We can&apos;t wait to see you
        </p>
        <p className="mt-4 text-[0.6rem] uppercase tracking-label text-cream/60">
          Your seat is saved, {trimmed.first}
        </p>
      </div>
    );
  }

  if (state === "full") {
    return (
      <div className="animate-fade-up mt-10 text-center">
        <p className="font-script text-4xl text-cream">
          Our list is full
        </p>
        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
          We&apos;ve reached the number of guests our venue can hold. Please
          message us directly and we&apos;ll do our best.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full text-left">
      <div className="grid grid-cols-[1fr_3.5rem] gap-3 sm:grid-cols-[1fr_3.5rem_1fr]">
        <input
          value={guest.first}
          onChange={(e) => update("first", e.target.value)}
          placeholder="First name"
          aria-label="First name"
          autoComplete="given-name"
          className={FIELD}
        />
        {/* no maxLength: it blocks keystrokes before the sanitiser sees them,
            so a stray character would swallow the letter typed after it */}
        <input
          value={guest.middle}
          onChange={(e) => update("middle", e.target.value)}
          placeholder="M.I."
          aria-label="Middle initial"
          autoComplete="off"
          className={`${FIELD} text-center uppercase`}
        />
        <input
          value={guest.last}
          onChange={(e) => update("last", e.target.value)}
          placeholder="Last name"
          aria-label="Last name"
          autoComplete="family-name"
          className={`${FIELD} col-span-2 sm:col-span-1`}
        />
      </div>

      <p className="mt-6 text-center text-xs leading-relaxed text-cream/50">
        We&apos;re keeping the day small and close, so each invitation is for
        the one person it was sent to. Thank you for understanding.
      </p>

      <div className="mt-8 flex flex-col items-center">
        <button
          type="submit"
          disabled={!started || state === "sending"}
          className="rounded-full bg-cream px-12 py-4 text-xs uppercase tracking-label text-wine-deep shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {state === "sending" ? "Sending…" : "Share your details"}
        </button>

        {state === "error" && (
          <p className="mt-4 text-xs text-gold-light/90">{message}</p>
        )}
      </div>
    </form>
  );
}
