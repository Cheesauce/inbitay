"use client";

import { useState } from "react";
import { fetchGuests, formatName, RSVP_ENDPOINT, type Guest } from "@/lib/rsvp";

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

export default function GuestList() {
  const [key, setKey] = useState("");
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const [capacity, setCapacity] = useState({ max: 100, seatsLeft: 100 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(event?: React.FormEvent) {
    event?.preventDefault();
    if (!key.trim() || loading) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchGuests(key.trim());
      setGuests(data.guests);
      setCapacity({ max: data.max, seatsLeft: data.seatsLeft });
    } catch (err) {
      setGuests(null);
      setError(err instanceof Error ? err.message : "Could not load the list");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <header className="mb-10 border-b border-wine/15 pb-6">
          <h1 className="font-serif text-3xl text-wine-deep">Guest list</h1>
          <p className="mt-2 text-[0.6rem] uppercase tracking-label text-wine/50">
            Kristine &amp; Ejay
          </p>
        </header>

        {!RSVP_ENDPOINT && (
          <p className="mb-8 border border-wine/20 bg-parchment p-4 text-sm text-wine-deep/75">
            No RSVP endpoint configured. Set{" "}
            <code className="text-wine">NEXT_PUBLIC_RSVP_ENDPOINT</code> to your
            Apps Script URL.
          </p>
        )}

        {guests === null ? (
          <form onSubmit={load} className="flex items-end gap-3">
            <label className="flex-1">
              <span className="block text-[0.6rem] uppercase tracking-label text-wine/50">
                Password
              </span>
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                autoFocus
                className="mt-2 w-full border-b border-wine/25 bg-transparent pb-2 font-serif text-lg text-wine-deep focus:border-wine focus:outline-none"
              />
            </label>
            <button
              type="submit"
              disabled={!key.trim() || loading}
              className="cursor-pointer rounded-full bg-wine px-8 py-3 text-[0.6rem] uppercase tracking-label text-cream transition hover:bg-wine-dark disabled:opacity-40"
            >
              {loading ? "Checking…" : "View"}
            </button>
          </form>
        ) : (
          <>
            <div className="mb-6 flex items-baseline justify-between">
              <p className="font-serif text-2xl text-wine-deep">
                {guests.length} attending
                <span className="ml-3 text-sm text-wine/45">
                  {capacity.seatsLeft} of {capacity.max} seats left
                </span>
              </p>
              <button
                onClick={() => load()}
                className="cursor-pointer text-[0.6rem] uppercase tracking-label text-wine/50 transition hover:text-wine"
              >
                {loading ? "Refreshing…" : "Refresh"}
              </button>
            </div>

            {guests.length === 0 ? (
              <p className="text-sm text-wine-deep/60">No replies yet.</p>
            ) : (
              <ol className="divide-y divide-wine/10">
                {guests.map((guest, i) => (
                  <li
                    key={`${guest.first}-${guest.last}-${i}`}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="font-serif text-lg text-wine-deep">
                      <span className="mr-3 text-xs text-wine/35 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {formatName(guest)}
                    </span>
                    <span className="shrink-0 text-[0.6rem] uppercase tracking-label text-wine/40">
                      {formatDate(guest.at)}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </>
        )}

        {error && <p className="mt-6 text-sm text-wine">{error}</p>}
      </div>
    </main>
  );
}
