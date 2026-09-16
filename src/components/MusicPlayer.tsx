"use client";

import { useEffect, useRef, useState } from "react";

export const INVITATION_UNSEALED = "invitation:unsealed";

// the recording opens with 12.0s of digital silence before the piano enters
const TRACK_START = 12;

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // iOS only unlocks audio inside a real gesture, so do a silent play/pause on
    // the first touch. pointerdown lands a few ms before the click that starts the
    // music for real, so never pause or rewind once that start has happened.
    const prime = async () => {
      const audio = audioRef.current;
      if (!audio || startedRef.current) return;
      audio.volume = 0;
      try {
        await audio.play();
        if (startedRef.current) return;
        audio.pause();
      } catch {
        // locked until the seal breaks; start() retries there
      }
      if (!startedRef.current) audio.currentTime = TRACK_START;
    };
    window.addEventListener("pointerdown", prime, { once: true });
    return () => window.removeEventListener("pointerdown", prime);
  }, []);

  useEffect(() => {
    // brief enough to read as instant, long enough not to pop
    const fadeIn = (audio: HTMLAudioElement) => {
      setPlaying(true);
      const target = 0.55;
      const fade = setInterval(() => {
        if (audio.volume >= target - 0.06) {
          audio.volume = target;
          clearInterval(fade);
          return;
        }
        audio.volume = Math.min(target, audio.volume + 0.06);
      }, 35);
    };

    // fires synchronously from the press that breaks the seal, so playback begins
    // inside the user gesture itself rather than leaning on sticky activation
    const start = () => {
      const audio = audioRef.current;
      if (!audio) return;
      startedRef.current = true;
      setReady(true);
      audio.volume = 0;
      if (audio.currentTime < TRACK_START) audio.currentTime = TRACK_START;
      audio
        .play()
        .then(() => fadeIn(audio))
        .catch(() => {
          // a stricter browser refused; take the next tap anywhere as consent
          setPlaying(false);
          const retry = () => {
            audio.volume = 0;
            audio
              .play()
              .then(() => fadeIn(audio))
              .catch(() => {});
          };
          document.addEventListener("pointerdown", retry, { once: true });
        });
    };

    window.addEventListener(INVITATION_UNSEALED, start);
    return () => window.removeEventListener(INVITATION_UNSEALED, start);
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.55;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <>
      {/* looped by hand so repeats skip the silent lead-in, not via `loop` */}
      <audio
        ref={audioRef}
        src="/audio/kay-tagal-kitang-hinintay.mp3"
        // metadata up front so the seek to TRACK_START resolves the moment they press
        preload="metadata"
        onEnded={(e) => {
          const audio = e.currentTarget;
          audio.currentTime = TRACK_START;
          audio.play().catch(() => setPlaying(false));
        }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause the music" : "Play the music"}
        className={`fixed bottom-6 left-6 z-30 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-500 ${
          ready ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          background: "linear-gradient(140deg, var(--wine), var(--wine-dark))",
          boxShadow:
            "inset 0 0 0 1px rgba(230,201,140,0.4), 0 14px 30px -14px rgba(28,6,12,0.9)",
        }}
      >
        <span className="flex h-4 items-end gap-[3px]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-[2px] rounded-full bg-gold-light/85"
              style={{
                height: playing ? undefined : "5px",
                animation: playing
                  ? `bar-dance ${0.9 + i * 0.22}s ease-in-out ${i * 0.12}s infinite`
                  : undefined,
              }}
            />
          ))}
        </span>
      </button>
    </>
  );
}
