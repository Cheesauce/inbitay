"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    mins: Math.floor((diff / 60_000) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const tick = () => setTime(getTimeLeft(new Date(target)));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: [string, number | undefined][] = [
    ["Days", time?.days],
    ["Hours", time?.hours],
    ["Minutes", time?.mins],
    ["Seconds", time?.secs],
  ];

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-5">
      {units.map(([label, value], i) => (
        <div key={label} className="flex items-stretch">
          <div
            className="flex min-w-[68px] flex-col items-center justify-center px-3 py-5 sm:min-w-[104px] sm:px-6"
            style={{ boxShadow: "inset 0 0 0 1px rgba(230,201,140,0.28)" }}
          >
            <span className="font-serif text-3xl font-light tabular-nums text-cream sm:text-5xl">
              {value === undefined ? "—" : String(value).padStart(2, "0")}
            </span>
            <span className="mt-2 text-[0.55rem] uppercase tracking-label text-gold-light/70 sm:text-[0.62rem]">
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="self-center px-0.5 font-serif text-2xl text-gold/40 sm:px-2">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
