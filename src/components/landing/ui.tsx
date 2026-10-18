import { SITE_NAME } from "@/lib/content";

/**
 * Общие элементы интерфейса лендинга: текстовый логотип, CTA-ссылки,
 * заголовки секций. Без надзаголовков и капса: иерархию держат размер
 * и вес заголовка, акцент — одно слово цветом.
 */

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="/#top"
      className={`font-display text-[1.375rem] font-bold tracking-[-0.035em] ${
        inverted ? "text-primary-foreground" : "text-foreground"
      }`}
      aria-label={`${SITE_NAME} — на начало страницы`}
    >
      {SITE_NAME}
    </a>
  );
}

/** Стрелка для кнопок и текстовых ссылок; сдвигается при наведении */
export function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
      className="btn-arrow shrink-0"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CtaLinkProps = {
  href: string;
  variant?: "cta" | "dark" | "blue" | "light" | "outline" | "outline-invert" | "ondark";
  size?: "md" | "sm";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * Ссылка-кнопка. Внутренние якоря (#...) открываются в той же вкладке,
 * внешние формы — в новой вкладке с безопасными rel-атрибутами.
 */
export function CtaLink({
  href,
  variant = "cta",
  size = "md",
  arrow = false,
  className = "",
  children,
}: CtaLinkProps) {
  const isAnchor = href.startsWith("#") || href.startsWith("/#");
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`}
      {...(isAnchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {arrow ? <Arrow /> : null}
    </a>
  );
}

/** Заголовок секции: крупный, без надзаголовка; accent — слово, выделенное цветом */
export function SectionHeading({
  title,
  accent,
  id,
  className = "",
  inverted = false,
  accentClassName = "text-accent",
}: {
  title: string;
  accent?: string;
  id?: string;
  className?: string;
  inverted?: boolean;
  accentClassName?: string;
}) {
  return (
    <h2
      id={id}
      className={`display-2 whitespace-pre-line ${
        inverted ? "text-primary-foreground" : "text-foreground"
      } ${className}`}
    >
      {title}
      {accent ? (
        <>
          {" "}
          <span className={accentClassName}>{accent}</span>
        </>
      ) : null}
    </h2>
  );
}
