"use client";

const PETALS = Array.from({ length: 11 }, (_, i) => ({
  left: (i * 9.3 + (i % 3) * 4) % 100,
  delay: (i % 7) * 2.6,
  duration: 16 + (i % 5) * 3.4,
  size: 6 + (i % 3) * 3,
  drift: i % 2 === 0 ? "7vw" : "-6vw",
  tone: i % 2 === 0 ? "var(--blush)" : "var(--gold-light)",
  opacity: 0.3,
}));

export default function Petals() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.72,
            background: p.tone,
            opacity: p.opacity,
            borderRadius: "70% 30% 62% 38% / 56% 62% 38% 44%",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}
