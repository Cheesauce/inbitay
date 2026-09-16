export default function Marquee({ items }: { items: string[] }) {
  const line = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gold/25 bg-wine-deep py-3.5">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex">
            {line.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center text-[0.6rem] uppercase tracking-label text-gold-light/75"
              >
                {item}
                <span className="px-6 text-gold/50">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
