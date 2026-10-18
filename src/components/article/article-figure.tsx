import { useEffect, useState } from "react";

const PUBLISHED_HOSTS = ["hvostun.com", "www.hvostun.com", "hvostun.lovable.app"];

/**
 * Фото в статье — фотокарточка в стиле главной: белое поле и мягкая тень.
 * Без src: в режиме разработки — нейтральный плейсхолдер с сюжетом,
 * на опубликованном сайте блок не рендерится вовсе.
 */
export function ArticleFigure({
  src,
  alt,
  caption,
  credit,
  subject,
  ratio = "3/2",
  tilt = 0,
  className = "",
}: {
  src?: string | undefined;
  alt: string;
  caption?: string;
  credit?: string;
  /** Сюжет для плейсхолдера */
  subject?: string;
  ratio?: "3/2" | "4/3";
  /** Небольшой наклон карточки в градусах */
  tilt?: number;
  className?: string;
}) {
  // Пустые места видны в предпросмотре и скрываются только на опубликованном сайте
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (!src && PUBLISHED_HOSTS.includes(window.location.hostname)) setHidden(true);
  }, [src]);
  if (hidden) return null;

  return (
    <figure className={className}>
      <div
        className="photo-print photo-print--plain"
        style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="block w-full object-cover"
            style={{ aspectRatio: ratio }}
          />
        ) : (
          <div
            className="flex w-full items-center justify-center bg-muted px-4 text-center text-sm text-muted-foreground"
            style={{ aspectRatio: ratio }}
          >
            {subject ?? alt}
          </div>
        )}
      </div>
      {caption || credit ? (
        <figcaption className="mt-4 text-sm text-foreground/65">
          {caption}
          {credit ? <span className="text-foreground/55">{caption ? " · " : ""}{credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
