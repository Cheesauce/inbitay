"use client";

import { useEffect, useState } from "react";

export default function FloatingRsvp() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearFoot =
        y + window.innerHeight > document.body.scrollHeight - 900;
      setShown(y > window.innerHeight * 1.2 && !nearFoot);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#rsvp"
      className={`fixed bottom-6 right-6 z-30 rounded-full px-7 py-3 text-[0.6rem] uppercase tracking-label text-cream shadow-[0_16px_34px_-16px_rgba(28,6,12,0.9)] transition-all duration-500 ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{
        background: "linear-gradient(140deg, var(--wine), var(--wine-dark))",
        boxShadow: "inset 0 0 0 1px rgba(230,201,140,0.4)",
      }}
    >
      RSVP
    </a>
  );
}
