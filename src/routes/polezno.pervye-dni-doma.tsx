import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaLink } from "@/components/landing/ui";
import { ArticleFigure } from "@/components/article/article-figure";
import { content, PILOT_FORM_URL, SITE_NAME } from "@/lib/content";
const TITLE = "У вас появилась собака из приюта. Что делать?";
const LEAD =
  "Первые недели после переезда — самые важные. Рассказываем, как подготовить дом и помочь собаке почувствовать себя в безопасности.";
const URL = "https://hvostun.com/polezno/pervye-dni-doma";
const AUTHORS = "Ирина Кано, Ирина Зеленина";
const SOURCE = "sputnik.dog";
const READING_TIME = "4 минуты чтения";

/** Изображения: подставьте src, когда они будут готовы */
const IMAGES = {
  hero: "/images/maurice-dt--GvI1Y2Cw08-unsplash.jpg",
  rest: "/images/maurice-dt-C7g--tKpd1A-unsplash.jpg",
};

export const Route = createFileRoute("/polezno/pervye-dni-doma")({
  head: () => ({
    meta: [
      { title: `${TITLE} — ${SITE_NAME}` },
      { name: "description", content: LEAD },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: LEAD },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ArticlePage,
});

const SECTION = "mt-16 sm:mt-20";
const END_BLOCK =
  "grid gap-6 rounded-[20px] p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:p-14";
const END_TITLE =
  "font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold uppercase leading-[1.1] text-balance text-primary";

/** Заголовок раздела: Oswald капсом синим, как заголовки на главной */
function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="display-3 scroll-mt-28 text-primary">
      {children}
    </h2>
  );
}

/** Правило внутри раздела: подзаголовок и текст на общей левой линии статьи */
function Rule({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-xl">{title}</h3>
      <p className="mt-2 text-muted-foreground">{children}</p>
    </div>
  );
}

const PREP: readonly ReactNode[] = [
  "Уберите все, что собака может испортить или чем может пораниться: провода, обувь, дорогие вам вещи.",
  "Подготовьте два спальных места, например две лежанки в разных местах.",
  "Купите две миски: для еды и для воды.",
  "Купите все для прогулок: анатомическую шлейку (шлейка имеет H-образную форму по спинке и Y-образную спереди) и длинный поводок на 5–7 метров. На таком поводке у собаки больше свободы, а вы все равно ее контролируете.",
  "Позаботьтесь о полах. На скользком полу собака скользит, и это вредно для ее суставов. Если у вас ламинат или плитка, постелите коврики там, где собака будет чаще всего ходить.",
];

function ArticlePage() {
  const { pilot, articleResearch } = content;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="overflow-x-clip">
        {/* Шапка статьи на синем, как первый экран главной; фото заходит на ее нижний край */}
        <header className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pb-40 sm:pt-14 lg:pt-20">
            <div className="mx-auto max-w-[720px]">
              <Link
                to="/"
                className="text-[15px] font-medium text-blue transition-colors hover:text-cream"
              >
                ← На главную
              </Link>
              <h1 className="display-2 mt-8 text-blue sm:mt-10">{TITLE}</h1>
              <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-pretty text-cream sm:text-xl">
                {LEAD}
              </p>
              <p className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[15px] text-cream/75">
                <span>
                  Авторы: <span className="font-semibold text-lime">{AUTHORS}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>{SOURCE}</span>
                <span aria-hidden="true">·</span>
                <span>{READING_TIME}</span>
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ArticleFigure
            src={IMAGES.hero}
            alt="Собака в новом доме"
            subject="Собака в новом доме"
            className="relative mx-auto -mt-16 max-w-[960px] sm:-mt-28"
          />

          <div className="mx-auto mt-12 max-w-[720px] sm:mt-16">
            <article className="min-w-0 text-base leading-[1.7] text-foreground sm:text-[1.0625rem] lg:text-lg">
              <section aria-labelledby="podgotovka">
                <H2 id="podgotovka">Подготовьтесь заранее</H2>
                <p className="mt-5">Если вы решили взять собаку, к ее появлению лучше подготовиться заранее.</p>
                <ul className="mt-6 border-b border-border">
                  {PREP.map((item, i) => (
                    <li key={i} className="border-t border-border py-4 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-medium leading-relaxed sm:text-xl">
                  <span className="marker">
                    И главное: будьте спокойны и морально готовы к тому, что первое время будет непросто.
                  </span>
                </p>
              </section>

              <section className={SECTION} aria-labelledby="chuvstva">
                <H2 id="chuvstva">Что чувствует собака</H2>
                <p className="mt-5">
                  Помните, что собаке сейчас страшно. Она не понимает, где оказалась и что ее ждет. Скорее всего, сначала она
                  будет напряженной и закрытой. Чтобы узнать, какой у нее на самом деле характер, нужно время.
                </p>
                <p className="mt-4">
                  Ваша задача — помочь ей почувствовать себя в безопасности и начать вам доверять. Вот что для этого нужно
                  делать.
                </p>
              </section>

              <section className={SECTION} aria-labelledby="spokoystvie">
                <H2 id="spokoystvie">Ведите себя предсказуемо и спокойно</H2>
                <p className="mt-5">Дайте собаке спокойно привыкнуть к новому месту.</p>
                <div className="mt-8 flex flex-col gap-8">
                  <Rule title="Знакомство с семьей">
                    Если вы живете не одни, знакомьте собаку с домашними на нейтральной территории, например на улице, и не
                    подходите близко. Человек выходит, собака видит его, он видит собаку. Тот, кто привел собаку, представляет
                    их друг другу: называет имя собаки и имя человека. На этом все. К собаке не подходите, а спокойно
                    занимайтесь своими делами. Никаких бурных эмоций, держитесь спокойно и ровно.
                  </Rule>
                  <Rule title="Не трогайте собаку руками">
                    Не пытайтесь сразу ее гладить и обнимать, даже если очень хочется. Вы пока ничего о ней не знаете. Ей
                    может быть неприятно или страшно. Просто дайте ей время.
                  </Rule>
                  <Rule title="Сделайте ей безопасное место">
                    Например, лежанку в тихом углу. Там от собаки ничего не требуется и ее никто не трогает. Это ее личная
                    территория, где можно отдохнуть и прийти в себя.
                  </Rule>
                </div>

                <ArticleFigure
                  src={IMAGES.rest}
                  alt="Собака отдыхает на своем месте"
                  subject="Собака отдыхает на своем месте"
                  ratio="4/3"
                  tilt={-1.5}
                  className="my-12"
                />

                <div className="flex flex-col gap-8">
                  <Rule title="Проходите мимо по дуге">
                    Первое время не идите прямо на собаку, а обходите ее стороной, полукругом. Для нее это понятный сигнал:
                    «Я не опасен, я тебе не угрожаю».
                  </Rule>
                  <Rule title="Не мешайте собаке есть">
                    Место, где она ест, тоже должно быть спокойным. Не ходите рядом, пока она ест, и никогда не пытайтесь
                    забрать у нее еду.
                  </Rule>
                </div>
              </section>

              <section className={SECTION} aria-labelledby="rezhim">
                <H2 id="rezhim">Соблюдайте режим и привычный порядок дня</H2>
                <div className="mt-8 flex flex-col gap-8">
                  <Rule title="Режим">
                    Кормите и выгуливайте собаку в одно и то же время. Собака должна точно знать, что она всегда гуляет три
                    раза в день и всегда ест два раза в день. Такая стабильность дает ей уверенность и чувство
                    защищенности.
                  </Rule>
                  <Rule title="Прогулки">
                    Сначала собаке нужно изучить территорию рядом с домом, поэтому начните с двора. Возможно, вначале ей
                    хватит 10–15 минут, чтобы все осмотреть и обнюхать. Не переживайте, со временем она сама захочет гулять
                    дальше.
                  </Rule>
                  <Rule title="Ежедневные ритуалы">
                    Вспомните, что вы обычно делаете по утрам. У каждого есть свой порядок: встали, умылись, приняли душ,
                    выпили кофе. Встройте дела, связанные с собакой, в свой привычный распорядок. Собака быстро это запомнит
                    и будет понимать: «Ага, душ, кофе. Значит, сейчас пойдем гулять».
                  </Rule>
                </div>
              </section>

              <section className={SECTION} aria-labelledby="nablyudenie">
                <H2 id="nablyudenie">Наблюдайте и узнавайте свою собаку</H2>
                <p className="mt-5">
                  Присмотритесь к ее характеру, привычкам и потребностям. Со временем вы многое поймете. Например:
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  <li className="relative pl-6 before:absolute before:left-0 before:top-[0.85em] before:h-[1.5px] before:w-3 before:bg-primary sm:pl-0 sm:before:-left-6">
                    если собаке неуютно на месте, где лежит ее лежанка, предложите ей другое;
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-[0.85em] before:h-[1.5px] before:w-3 before:bg-primary sm:pl-0 sm:before:-left-6">
                    если вы заметите, где ей не нравится гулять или с кем она не хочет встречаться, просто обходите такие
                    места и не допускайте лишних встреч.
                  </li>
                </ul>
              </section>

              <section className={SECTION} aria-labelledby="veterinar">
                <H2 id="veterinar">Ветеринар</H2>
                <p className="mt-5">
                  От здоровья собаки во многом зависит, насколько комфортно будет жить ей и вам вместе с ней. Можно
                  сказать, что это 80% успеха.
                </p>
                <p className="mt-4">
                  Примерно через пару месяцев совместной жизни сходите с собакой на профилактический осмотр к ветеринару.
                  Если же что-то беспокоит раньше, обращайтесь к врачу сразу, как только заметите проблему.
                </p>
              </section>

              <section className={SECTION} aria-labelledby="dressirovka">
                <H2 id="dressirovka">А как же дрессировка?</H2>
                <p className="mt-5">
                  Не переживайте об этом. Когда вы приучаете собаку к правилам жизни в вашем доме, вы уже ее воспитываете.
                </p>
              </section>

              <aside
                className={`${SECTION} rounded-[20px] bg-lilac p-7 text-foreground sm:p-10`}
                aria-labelledby="bezopasnost"
              >
                <h2 id="bezopasnost" className="display-3 text-navy">
                  Ваша безопасность
                </h2>
                <p className="mt-4 text-pretty text-foreground">
                  Если вам показалось, что собака ведет себя агрессивно по отношению к вам, в первую очередь думайте о
                  своей безопасности. Используйте намордник или специальные перегородки-решетки, чтобы разделить
                  пространство.
                </p>
              </aside>

              <p className="mt-10 text-lg font-medium leading-relaxed sm:text-xl">
                <span className="marker">Безвыходных ситуаций не бывает.</span> Всегда можно обратиться к
                специалисту по поведению собак, его еще называют зоопсихологом.
              </p>
            </article>
          </div>

          {/* Два финальных блока с одинаковой раскладкой: заголовок слева, текст и кнопка справа */}
          <div className="mx-auto mb-16 mt-20 flex max-w-[960px] flex-col gap-5 sm:mb-24 sm:mt-28">
            <section aria-labelledby="article-research-title" className={`${END_BLOCK} bg-tint-blue`}>
              <h2 id="article-research-title" className={END_TITLE}>
                {articleResearch.title}
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-base leading-relaxed text-pretty text-foreground sm:text-[17px]">{articleResearch.text}</p>
                <div>
                  <CtaLink href="/research" variant="cta" arrow>
                    {articleResearch.cta}
                  </CtaLink>
                </div>
              </div>
            </section>

            {/* Приглашение в пилот: статья читается теми же людьми, для кого пилот */}
            <section aria-labelledby="article-pilot-title" className={`${END_BLOCK} bg-lime`}>
              <h2 id="article-pilot-title" className={END_TITLE}>
                {pilot.titleBefore} {pilot.titleAccent}
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-base leading-relaxed text-pretty text-foreground sm:text-[17px]">{pilot.text}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <CtaLink href={PILOT_FORM_URL} variant="cta" arrow>
                    {pilot.cta}
                  </CtaLink>
                  <span className="whitespace-nowrap text-center text-[15px] font-medium text-navy sm:text-left">
                    {pilot.note}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
