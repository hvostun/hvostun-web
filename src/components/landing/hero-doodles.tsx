/**
 * Рукописный слой hero: рассыпанные вокруг текста рисованные контуры
 * (природа и собачьи атрибуты) в духе маркерных набросков поверх фото.
 * Все элементы декоративные, цвет — currentColor.
 */

type DoodleProps = { className?: string };

const base = "pointer-events-none select-none";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Цветок в горшке */
export function DoodleFlowerPot({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 120" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M45 92 C44 74 45 60 46 48" />
        <path d="M46 44 C34 34 30 22 40 16 C48 11 56 18 52 30 C60 20 72 22 72 32 C72 42 60 46 50 44" />
        <path d="M46 46 C36 52 26 50 26 42 C26 35 36 34 44 40" />
        <path d="M24 88 C42 84 62 84 76 88 C74 104 70 114 50 114 C30 114 26 103 24 88 Z" />
      </g>
    </svg>
  );
}

/** Облако свободным росчерком */
export function DoodleCloud({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 130 70" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M28 58 C12 58 4 48 10 38 C15 30 25 28 31 32 C32 16 50 8 62 16 C70 6 88 8 92 20 C106 16 120 26 118 38 C116 50 106 56 94 56 C72 60 48 60 28 58 Z" />
      </g>
    </svg>
  );
}

/** Косточка */
export function DoodleBone({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 110 50" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M28 16 C20 8 8 10 6 20 C4 29 12 34 20 32 C18 40 26 46 34 42 C40 39 42 33 40 28 C56 24 70 24 84 28 C82 34 86 41 94 40 C102 39 106 32 102 26 C110 22 110 12 102 8 C94 4 84 9 84 18 C70 14 56 14 40 18 C40 12 34 9 28 16 Z" />
      </g>
    </svg>
  );
}

/** След лапы */
export function DoodlePaw({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 58" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M19 32 C11 38 9 50 18 54 C26 58 40 57 46 50 C52 43 46 33 38 30 C31 27 25 27 19 32 Z" />
        <path d="M12 14 C8 17 8 24 12 27 C17 30 21 26 21 21 C21 16 17 11 12 14 Z" />
        <path d="M26 6 C22 9 22 17 26 20 C31 23 35 19 35 13 C35 8 31 3 26 6 Z" />
        <path d="M43 12 C39 15 39 23 44 25 C49 27 53 22 52 17 C51 12 47 9 43 12 Z" />
      </g>
    </svg>
  );
}

/** Собака в свободном контуре */
export function DoodleDog({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 130 100" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M24 84 C16 70 18 52 32 44 C46 36 66 38 78 46 C86 40 96 40 100 48 C104 40 116 42 118 52 C120 62 112 68 104 66 C104 76 98 84 88 86" />
        <path d="M24 84 C34 88 62 90 88 86" />
        <path d="M36 84 C34 90 34 94 36 98" />
        <path d="M74 86 C72 92 72 95 74 98" />
        <path d="M100 54 C102 55 104 55 106 54" />
        <circle cx="108" cy="52" r="1.6" fill="currentColor" />
        <path d="M32 46 C24 40 20 30 26 24 C32 30 34 38 32 46 Z" />
      </g>
    </svg>
  );
}

/** Солнце-звездочка */
export function DoodleSun({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 70 70" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <circle cx="35" cy="35" r="14" />
        <path d="M35 6 V16 M35 54 V64 M6 35 H16 M54 35 H64 M14 14 L21 21 M49 49 L56 56 M56 14 L49 21 M21 49 L14 56" />
      </g>
    </svg>
  );
}

/** Веточка с листьями */
export function DoodleBranch({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 140 60" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M4 52 C36 46 82 32 136 10" />
        <path d="M34 44 C30 32 36 22 48 21 C50 33 44 42 34 44 Z" />
        <path d="M66 34 C62 22 68 12 79 11 C82 22 77 31 66 34 Z" />
        <path d="M98 22 C95 11 102 3 112 2 C115 12 109 20 98 22 Z" />
      </g>
    </svg>
  );
}

/** Мячик */
export function DoodleBall({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <circle cx="30" cy="30" r="24" />
        <path d="M8 22 C22 32 38 34 52 26" />
        <path d="M22 8 C28 24 28 40 20 52" />
      </g>
    </svg>
  );
}

/** Свободный росчерк-подчеркивание */
export function DoodleSquiggle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 160 30" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M4 18 C30 6 54 26 80 16 C104 7 128 22 156 10" />
      </g>
    </svg>
  );
}

/** Трава */
export function DoodleGrass({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 60" aria-hidden="true" className={`${base} ${className}`}>
      <g {...stroke}>
        <path d="M10 56 C10 40 6 30 2 22" />
        <path d="M24 56 C22 38 26 26 34 16" />
        <path d="M42 56 C42 42 40 32 34 24" />
        <path d="M58 56 C58 38 62 28 70 20" />
        <path d="M76 56 C76 42 74 34 70 28" />
      </g>
    </svg>
  );
}
