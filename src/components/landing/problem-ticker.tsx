const PHRASES = [
  "Первые месяца три он не спал до четырех, до пяти",
  "Собака не ест, боится лифта, лает на соседей, не остается одна",
  "Есть ощущение беспомощности",
];

export function ProblemTicker() {
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    text: PHRASES[i % PHRASES.length],
  }));

  return (
    <section
      aria-label="Примеры сложностей адаптации"
      className="mt-12 flex h-24 items-center overflow-hidden border-y border-border bg-background sm:mt-16 sm:h-28"
    >
      <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap px-4 sm:gap-12 sm:px-6">
        {items.map((item) => (
          <span
            key={item.id}
            className="font-quote text-[1.3125rem] italic text-foreground/80 sm:text-[1.5rem]"
          >
            «{item.text}»
            <span className="ml-8 sm:ml-12 inline-block h-1.5 w-1.5 rounded-full bg-lilac" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap px-4 sm:gap-12 sm:px-6" aria-hidden="true">
        {items.map((item) => (
          <span
            key={`dup-${item.id}`}
            className="font-quote text-[1.3125rem] italic text-foreground/80 sm:text-[1.5rem]"
          >
            «{item.text}»
            <span className="ml-8 sm:ml-12 inline-block h-1.5 w-1.5 rounded-full bg-lilac" aria-hidden="true" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .ticker-track {
          animation: ticker-scroll 28s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
