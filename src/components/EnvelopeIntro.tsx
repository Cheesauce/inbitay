"use client";

import { useEffect, useRef, useState } from "react";
import { Monogram } from "./Ornaments";
import { INVITATION_UNSEALED } from "./MusicPlayer";

type Stage = "sealed" | "breaking" | "opening" | "open" | "dismissed";

const COUPLE = "Kristine & Ejay";
const DATE_LABEL = "06 . 15 . 27";

const SCALLOP_X = {
  backgroundImage:
    "radial-gradient(circle 5px at 5px 5px, #fffdf9 4.6px, transparent 5px)",
  backgroundSize: "10px 10px",
  backgroundRepeat: "repeat-x",
};

const SCALLOP_Y = {
  ...SCALLOP_X,
  backgroundRepeat: "repeat-y",
};

export default function EnvelopeIntro() {
  const [stage, setStage] = useState<Stage>("sealed");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    document.body.style.overflow = stage === "dismissed" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  useEffect(() => {
    const active = timers.current;
    return () => active.forEach(clearTimeout);
  }, []);

  function handleBreakSeal() {
    if (stage !== "sealed") return;
    setStage("breaking");
    // synchronous: the music has to land on the press, not trail the animation
    window.dispatchEvent(new Event(INVITATION_UNSEALED));
    timers.current.push(setTimeout(() => setStage("opening"), 520));
    timers.current.push(setTimeout(() => setStage("open"), 1400));
  }

  const flapOpen =
    stage === "opening" || stage === "open" || stage === "dismissed";
  const isOpen = stage === "open" || stage === "dismissed";
  const sealGone = stage !== "sealed";

  return (
    <div
      className={`grain fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        stage === "dismissed"
          ? "pointer-events-none scale-[1.08] opacity-0"
          : "scale-100 opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 50% 18%, #fdfaf5 0%, var(--parchment) 58%, #e6d7c4 100%)",
      }}
    >
      {/* gold frame */}
      <div className="pointer-events-none absolute inset-4 border border-gold/25 sm:inset-6" />
      <div className="pointer-events-none absolute inset-[22px] border border-gold/15 sm:inset-8" />

      <div className="relative flex flex-col items-center px-6">
        <div
          className="flex flex-col items-center transition-opacity duration-500"
          style={{ opacity: flapOpen ? 0 : 1 }}
        >
          <span className="mb-1 text-[0.6rem] uppercase tracking-label text-wine/50">
            Together with their families
          </span>
          <div className="mb-8 h-px w-28 bg-gold/40" />
        </div>

        <div
          className="relative"
          style={{ perspective: "1600px", width: "min(80vw, 340px)" }}
        >
          <div className="relative" style={{ aspectRatio: "4 / 3" }}>
            {/* envelope interior */}
            <div
              className="absolute inset-0 rounded-[2px]"
              style={{
                background:
                  "linear-gradient(150deg, var(--wine-dark), var(--wine-deep))",
                boxShadow:
                  "0 35px 70px -25px rgba(28,6,12,0.65), inset 0 0 0 1px rgba(230,201,140,0.22)",
              }}
            />

            {/* card with lace edge */}
            <div
              className="absolute inset-x-0 z-10 mx-auto transition-transform duration-[1500ms] ease-out"
              style={{
                top: "8%",
                width: "52%",
                transitionDelay: isOpen ? "120ms" : "0ms",
                transform: isOpen
                  ? "translateY(-86%) scale(1.12)"
                  : "translateY(0) scale(1)",
              }}
            >
              <div className="relative">
                {/* scalloped lace border */}
                <div
                  className="absolute -inset-[7px]"
                  style={{
                    background: "#fffdf9",
                    borderRadius: 3,
                    boxShadow: "0 10px 26px -12px rgba(28,6,12,0.5)",
                  }}
                />
                <div
                  className="absolute -left-[7px] -right-[7px] -top-[12px] h-[10px]"
                  style={{ ...SCALLOP_X }}
                />
                <div
                  className="absolute -bottom-[12px] -left-[7px] -right-[7px] h-[10px]"
                  style={{ ...SCALLOP_X }}
                />
                <div
                  className="absolute -bottom-[7px] -left-[12px] -top-[7px] w-[10px]"
                  style={{ ...SCALLOP_Y }}
                />
                <div
                  className="absolute -bottom-[7px] -right-[12px] -top-[7px] w-[10px]"
                  style={{ ...SCALLOP_Y }}
                />

                <div
                  className="relative flex flex-col items-center justify-center px-3 text-center"
                  style={{
                    aspectRatio: "1 / 1.1",
                    background:
                      "linear-gradient(160deg, var(--dusty-blue-light), var(--dusty-blue))",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.7)",
                  }}
                >
                  <div className="absolute inset-[7px] border border-dashed border-white/70" />
                  <span className="text-[0.5rem] uppercase tracking-label text-wine-deep/60">
                    Save the
                  </span>
                  <span className="font-serif text-[0.95rem] font-medium uppercase tracking-[0.3em] text-wine-deep">
                    Date
                  </span>
                  <span className="mt-1.5 font-script text-2xl leading-none text-wine">
                    {COUPLE}
                  </span>
                  <div className="my-1.5 h-px w-10 bg-wine/30" />
                  <span className="text-[0.6rem] tracking-[0.32em] text-wine-deep/80">
                    {DATE_LABEL}
                  </span>
                </div>
              </div>
            </div>

            {/* envelope front — everything below the flap's fold lines */}
            <div
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background:
                  "linear-gradient(200deg, var(--wine) 0%, var(--wine-dark) 62%, var(--wine-deep) 100%)",
                clipPath:
                  "polygon(0% 0%, 50% 61%, 100% 0%, 100% 100%, 0% 100%)",
                filter: "drop-shadow(0 -1px 0 rgba(230,201,140,0.4))",
                opacity: isOpen ? 0 : 1,
                transition: "opacity 0.6s ease-out",
                transitionDelay: isOpen ? "420ms" : "0ms",
              }}
            />

            {/* flap */}
            <div
              className="absolute inset-x-0 top-0 z-30 origin-top"
              style={{
                height: "60%",
                background:
                  "linear-gradient(165deg, var(--wine) 0%, var(--wine-dark) 92%)",
                clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                backfaceVisibility: "hidden",
                transform: flapOpen ? "rotateX(178deg)" : "rotateX(0deg)",
                transition:
                  "transform 0.95s cubic-bezier(.45,.05,.2,1), opacity 0.5s ease-out",
                opacity: isOpen ? 0 : 1,
                transitionDelay: isOpen ? "0ms, 420ms" : "0ms, 0ms",
              }}
            />

            {/* addressing on the envelope front */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-[11%] z-20 flex flex-col items-center gap-1.5"
              style={{
                opacity: isOpen ? 0 : 1,
                transition: "opacity 0.4s ease-out",
              }}
            >
              <span className="font-script text-lg text-gold-light/75">
                to our dearest
              </span>
              <span className="text-[0.5rem] uppercase tracking-label text-gold-light/45">
                Family &amp; Friends
              </span>
            </div>

            {/* wax seal */}
            <button
              type="button"
              onClick={handleBreakSeal}
              aria-label="Break the seal to open the invitation"
              className={`absolute left-1/2 z-40 -translate-x-1/2 ${
                sealGone ? "pointer-events-none" : "cursor-pointer"
              }`}
              style={{ top: "44%", width: "24%", aspectRatio: "1" }}
            >
              {/* animation lives here so it never fights the centring transform */}
              <span
                className={`relative block h-full w-full ${
                  sealGone ? "seal-break" : "seal-idle"
                }`}
              >
                <span
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 32% 28%, #92243c 0%, var(--wine) 42%, var(--wine-deep) 100%)",
                    boxShadow:
                      "0 6px 16px -4px rgba(28,6,12,0.7), inset 0 1px 2px rgba(255,255,255,0.25)",
                    clipPath:
                      "polygon(50% 0%, 63% 6%, 78% 4%, 86% 16%, 98% 26%, 95% 41%, 100% 55%, 90% 66%, 88% 80%, 74% 85%, 62% 96%, 48% 92%, 34% 98%, 23% 87%, 9% 83%, 6% 68%, 0% 54%, 7% 41%, 3% 26%, 16% 18%, 22% 5%, 37% 8%)",
                  }}
                />
                <span className="absolute inset-[22%] flex items-center justify-center">
                  <Monogram className="h-full w-full text-gold-light/80" />
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 flex h-12 items-center justify-center">
          {stage === "sealed" && (
            <span className="animate-fade-up text-[0.65rem] uppercase tracking-label text-wine/60">
              Press the seal
            </span>
          )}
          {isOpen && (
            <button
              type="button"
              onClick={() => setStage("dismissed")}
              className="animate-fade-up cursor-pointer rounded-full px-10 py-3 text-xs uppercase tracking-label text-cream shadow-[0_14px_28px_-14px_rgba(47,10,19,0.8)] transition hover:brightness-110"
              style={{
                background:
                  "linear-gradient(140deg, var(--wine) 0%, var(--wine-dark) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(230,201,140,0.45)",
              }}
            >
              Open the invitation
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
