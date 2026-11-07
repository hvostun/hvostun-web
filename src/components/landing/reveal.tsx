import type { CSSProperties, ReactNode } from "react";

/**
 * Легкое появление блока при прокрутке — только на CSS (scroll-driven animations), без JavaScript.
 *
 * Раньше блок был прозрачным в серверной разметке и проявлялся только после загрузки скрипта
 * и срабатывания IntersectionObserver: на медленном интернете текст появлялся с опозданием,
 * а без JavaScript не появлялся вовсе. Теперь то, что уже на экране, видно сразу;
 * браузеры без поддержки показывают блок без анимации. Правила — .reveal в styles.css.
 *
 * delay — небольшое смещение появления (для лесенки карточек), в миллисекундах прежней анимации.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure";
}) {
  const style = delay ? ({ "--reveal-shift": `${Math.round(delay / 2)}px` } as CSSProperties) : undefined;
  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
