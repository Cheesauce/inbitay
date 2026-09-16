type SvgProps = { className?: string };

export function Monogram({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <circle
        cx="60"
        cy="60"
        r="52"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <circle
        cx="60"
        cy="60"
        r="46"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.35"
      />
      <path
        d="M60 74c-7-6-15-11-15-19a7.5 7.5 0 0 1 15-3 7.5 7.5 0 0 1 15 3c0 8-8 13-15 19Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.8"
      />
      <path
        d="M22 60c6-4 10-9 12-16M98 60c-6-4-10-9-12-16"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}

export function FloralDivider({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 320 44"
      fill="none"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M4 22h112" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M204 22h112" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />

      {/* left vine */}
      <path
        d="M116 22c10 0 20-2 30-8"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.7"
      />
      <path
        d="M116 22c10 0 20 2 30 8"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {[
        [124, 18, -1],
        [133, 15, -1],
        [124, 26, 1],
        [133, 29, 1],
      ].map(([x, y, dir], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="5.4"
          ry="2.1"
          fill="currentColor"
          opacity="0.6"
          transform={`rotate(${dir * 24} ${x} ${y})`}
        />
      ))}

      {/* right vine */}
      <path
        d="M204 22c-10 0-20-2-30-8"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.7"
      />
      <path
        d="M204 22c-10 0-20 2-30 8"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {[
        [196, 18, 1],
        [187, 15, 1],
        [196, 26, -1],
        [187, 29, -1],
      ].map(([x, y, dir], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="5.4"
          ry="2.1"
          fill="currentColor"
          opacity="0.6"
          transform={`rotate(${dir * 24} ${x} ${y})`}
        />
      ))}

      {/* centre bloom */}
      <g opacity="0.9">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="160"
            cy="16.5"
            rx="2.4"
            ry="5.5"
            fill="currentColor"
            transform={`rotate(${deg} 160 22)`}
          />
        ))}
        <circle cx="160" cy="22" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Sprig({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 60 120" fill="none" className={className} aria-hidden>
      <path
        d="M30 118C30 84 30 44 30 6"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
      />
      {[18, 34, 50, 66, 82, 98].map((y, i) => (
        <g key={y} opacity={0.7 - i * 0.05}>
          <path
            d={`M30 ${y}c-12-4-18-10-20-18 10 0 17 6 20 18Z`}
            fill="currentColor"
          />
          <path
            d={`M30 ${y + 8}c12-4 18-10 20-18-10 0-17 6-20 18Z`}
            fill="currentColor"
          />
        </g>
      ))}
      <circle cx="30" cy="6" r="3" fill="currentColor" />
    </svg>
  );
}

export function RingsIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="19" cy="29" r="11" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="30" cy="29" r="11" stroke="currentColor" strokeWidth="1.1" />
      <path d="m30 13 4 5h-8l4-5Z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function GlassIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M16 8h16l-2 13a6 6 0 0 1-12 0L16 8Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M24 27v12M18 40h12" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function CakeIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M11 38V26c0-2 2-4 4-4h18c2 0 4 2 4 4v12"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M8 38h32" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M24 22v-6M24 10c2 1 2 3 0 4-2-1-2-3 0-4Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function MusicIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M20 33V12l16-4v21"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="33" r="4.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="32" cy="29" r="4.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
