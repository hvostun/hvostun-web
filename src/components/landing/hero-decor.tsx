/**
 * Небольшой набор связующих hand-drawn деталей hero:
 * ветка, цветок, облако, звезда, направляющая линия, силуэт лапы.
 * Все элементы декоративные (aria-hidden), цвет — через currentColor.
 */

type DecorProps = { className?: string };

const base = "pointer-events-none select-none";

/** Ветка с листьями — уравновешивает фотополоску сверху */
export function DecorBranch({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 140 60"
      fill="none"
      aria-hidden="true"
      className={`${base} ${className}`}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 48 C34 42 78 30 134 12" />
      <path d="M32 42 C30 30 36 22 46 21 C48 31 43 40 32 42 Z" />
      <path d="M62 33 C58 22 63 13 73 11 C77 21 72 30 62 33 Z" />
      <path d="M96 24 C93 13 99 5 109 4 C112 14 107 22 96 24 Z" />
    </svg>
  );
}

/** Простой цветок */
export function DecorFlower({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 60 84"
      fill="none"
      aria-hidden="true"
      className={`${base} ${className}`}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M30 80 C29 62 30 48 31 38" />
      <path d="M31 60 C22 58 16 52 15 44 C24 44 30 50 31 60 Z" />
      <path d="M31 52 C39 49 44 43 44 36 C36 37 31 43 31 52 Z" />
      <circle cx="30" cy="24" r="9" />
      <path d="M30 15 C34 6 42 5 46 9 C43 15 37 17 30 15 Z" />
      <path d="M30 15 C26 6 18 5 14 9 C17 15 23 17 30 15 Z" />
      <path d="M39 30 C48 30 53 36 52 42 C45 42 40 37 39 30 Z" />
    </svg>
  );
}

/** Облако */
export function DecorCloud({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 54"
      fill="none"
      aria-hidden="true"
      className={`${base} ${className}`}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 44 C10 44 4 36 8 28 C11 22 18 20 23 22 C25 10 38 4 48 9 C54 3 66 4 71 12 C82 8 94 14 94 24 C104 24 110 30 108 38 C106 44 99 45 92 44 C70 46 44 46 22 44 Z" />
    </svg>
  );
}

/** Звезда-искра */
export function DecorSpark({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={`${base} ${className}`}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 4 C22 14 25 18 36 20 C25 22 22 26 20 36 C18 26 15 22 4 20 C15 18 18 14 20 4 Z" />
    </svg>
  );
}

/** Мягкая направляющая линия к заголовку */
export function DecorLine({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      aria-hidden="true"
      className={`${base} ${className}`}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 30 C36 34 62 22 90 14 C114 7 138 6 156 10" />
    </svg>
  );
}

/** Редкий акцент: одиночный след лапы */
export function DecorPaw({ className = "" }: DecorProps) {
  return (
    <svg
      viewBox="0 0 48 46"
      fill="none"
      aria-hidden="true"
      className={`${base} ${className}`}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 26 C10 31 9 39 15 42 C21 45 30 45 35 41 C40 37 37 29 32 26 C26 23 20 22 15 26 Z" />
      <path d="M10 13 C7 15 7 20 10 22 C13 24 16 22 16 18 C16 15 13 11 10 13 Z" />
      <path d="M20 6 C17 8 17 14 20 16 C23 18 26 15 26 11 C26 8 23 4 20 6 Z" />
      <path d="M32 8 C29 10 29 16 32 18 C35 20 38 17 38 13 C38 10 35 6 32 8 Z" />
    </svg>
  );
}
