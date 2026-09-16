"use client";

import { useEffect, useRef, useState } from "react";

export const INVITATION_OPENED = "invitation:opened";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // start buffering on the first touch (the seal press) so playback is instant
    const prime = () => audioRef.current?.load();
    window.addEventListener("pointerdown", prime, { once: true });
    return () => window.removeEventListener("pointerdown", prime);
  }, []);

  useEffect(() => {
    // the open click is the user gesture browsers require before audio may start
    const start = () => {
      const audio = audioRef.current;
      if (!audio) return;
      setReady(true);
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setPlaying(true);
          const target = 0.42;
          const fade = setInterval(() => {
            if (audio.volume >= target - 0.02) {
              audio.volume = target;
              clearInterval(fade);
              return;
            }
            audio.volume = Math.min(target, audio.volume + 0.02);
          }, 90);
        })
        .catch(() => setPlaying(false));
    };

    window.addEventListener(INVITATION_OPENED, start);
    return () => window.removeEventListener(INVITATION_OPENED, start);
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.42;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/kay-tagal-kitang-hinintay.mp3" loop preload="none" />
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
