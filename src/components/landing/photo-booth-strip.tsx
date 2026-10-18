/**
 * Вертикальная фотополоска в эстетике аналоговой фотобудки.
 * Пока доступен один кадр — он используется во всех окнах полоски
 * с разным кадрированием и легкой разницей в тоне.
 * TODO: заменить frames[].src на кадры одной фотосерии (человек и собака дома).
 */

type Frame = {
  src: string;
  alt: string;
  /** object-position для кадрирования */
  position: string;
  /** легкая разница в тональности */
  filter: string;
  scale?: string;
};

const FRAMES: Frame[] = [
  {
    src: "/images/hero-dog.webp",
    alt: "Человек и собака рядом дома в первые дни адаптации",
    position: "50% 22%",
    filter: "saturate(0.86) contrast(1.04) brightness(1.02)",
  },
  {
    src: "/images/hero-dog.webp",
    alt: "",
    position: "26% 74%",
    filter: "saturate(0.72) contrast(1.12) brightness(0.96)",
    scale: "1.7",
  },
  {
    src: "/images/hero-dog.webp",
    alt: "",
    position: "74% 34%",
    filter: "saturate(0.92) contrast(1) brightness(1.07)",
    scale: "2.1",
  },
  {
    src: "/images/hero-dog.webp",
    alt: "",
    position: "44% 58%",
    filter: "saturate(0.82) contrast(1.04) brightness(1.01)",
    scale: "1.15",
  },
];

export function PhotoBoothStrip({
  className = "",
  frames = 4,
  orientation = "vertical",
}: {
  className?: string;
  /** сколько кадров показывать (3 на планшете, 4 на десктопе) */
  frames?: 3 | 4;
  orientation?: "vertical" | "horizontal";
}) {
  const list = FRAMES.slice(0, frames);
  const horizontal = orientation === "horizontal";

  return (
    <figure className={`photo-strip ${horizontal ? "photo-strip--row" : ""} ${className}`}>
      <span aria-hidden="true" className="photo-strip-tape" />
      <div className={horizontal ? "flex gap-[6px]" : "flex flex-col gap-[6px]"}>
        {list.map((frame, i) => (
          <div
            key={i}
            className={`photo-strip-frame ${horizontal ? "flex-1" : ""}`}
            style={{ aspectRatio: horizontal ? "3 / 4" : "16 / 10" }}
          >
            <img
              src={frame.src}
              alt={frame.alt}
              width={320}
              height={240}
              loading="lazy"
              decoding="async"
              style={{
                objectPosition: frame.position,
                filter: frame.filter,
                transform: frame.scale ? `scale(${frame.scale})` : undefined,
              }}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <figcaption className="photo-strip-caption">первые дни вместе</figcaption>
    </figure>
  );
}
