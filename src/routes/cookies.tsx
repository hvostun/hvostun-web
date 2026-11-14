import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/content";

const TITLE = "Использование cookie и Яндекс Метрики";
const UPDATED = "14 ноября 2026 года";

// TODO: текст — рабочий черновик. Перед слиянием в main сверить с основной политикой (/ppd)
// и согласовать с тем, кто отвечает за обработку персональных данных в проекте.
export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: `${TITLE} — ${SITE_NAME}` },
      { name: "description", content: "Какие cookie и какую веб-аналитику использует сайт и как от них отказаться." },
    ],
    links: [{ rel: "canonical", href: "https://hvostun.com/cookies" }],
  }),
  component: CookiesPage,
});

function H2({ children }: { children: ReactNode }) {
  return <h2 className="display-3 mt-12 text-primary">{children}</h2>;
}

const ITEM =
  "relative pl-6 before:absolute before:left-0 before:top-[0.85em] before:h-[1.5px] before:w-3 before:bg-primary";
const LINK = "font-medium text-primary underline underline-offset-4 hover:no-underline";

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          to="/"
          className="-my-3 inline-block py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          ← На главную
        </Link>
        <h1 className="display-2 mt-6 text-primary">{TITLE}</h1>
        <p className="mt-4 text-sm text-muted-foreground">Редакция от {UPDATED}</p>

        <div className="text-base leading-[1.7] text-foreground sm:text-[1.0625rem]">
          <H2>Что такое cookie</H2>
          <p className="mt-5">
            Cookie — небольшие файлы, которые сайт сохраняет в вашем браузере. Они помогают отличать одного посетителя
            от другого и понимать, как люди пользуются сайтом.
          </p>

          <H2>Что мы используем</H2>
          <p className="mt-5">
            На сайте работает сервис веб-аналитики Яндекс Метрика, который предоставляет ООО «Яндекс». Метрика
            использует cookie и собирает обезличенные сведения о посещении:
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            <li className={ITEM}>IP-адрес и примерное местоположение (город, регион);</li>
            <li className={ITEM}>тип устройства, операционная система, браузер и его язык;</li>
            <li className={ITEM}>откуда вы перешли на сайт, включая рекламное объявление и поисковый запрос;</li>
            <li className={ITEM}>какие страницы открывали, сколько времени на них провели;</li>
            <li className={ITEM}>действия на странице: прокрутка, клики, переходы по ссылкам.</li>
          </ul>
          <p className="mt-5">
            Включены функции «Вебвизор» и «Карта кликов»: они записывают действия на страницах сайта, чтобы мы видели,
            что на сайте неудобно. Мы не просим вводить на сайте имя, телефон или адрес почты: анкеты исследования и
            заявки в пилот заполняются на сторонних сервисах, а не на этом сайте.
          </p>

          <H2>Зачем</H2>
          <ul className="mt-5 flex flex-col gap-3">
            <li className={ITEM}>считать посещаемость и понимать, какие материалы полезны;</li>
            <li className={ITEM}>находить и исправлять неудобные места на сайте;</li>
            <li className={ITEM}>оценивать, из каких источников и объявлений приходят посетители.</li>
          </ul>
          <p className="mt-5">
            Мы не используем эти сведения, чтобы установить вашу личность, и не передаем их никому, кроме Яндекса как
            поставщика сервиса аналитики.
          </p>

          <H2>Как отказаться</H2>
          <ul className="mt-5 flex flex-col gap-3">
            <li className={ITEM}>
              запретить или удалить cookie в настройках браузера — сайт продолжит работать;
            </li>
            <li className={ITEM}>
              установить{" "}
              <a href="https://yandex.ru/support/metrica/general/opt-out.html" target="_blank" rel="noopener noreferrer" className={LINK}>
                блокировщик Яндекс Метрики
              </a>
              {" "}— дополнение для браузера от Яндекса.
            </li>
          </ul>
          <p className="mt-5">
            Продолжая пользоваться сайтом без этих настроек, вы соглашаетесь с использованием cookie и Яндекс Метрики
            на описанных условиях.
          </p>

          <H2>Как данные обрабатывает Яндекс</H2>
          <p className="mt-5">
            Яндекс обрабатывает данные Метрики по своим правилам:{" "}
            <a href="https://yandex.ru/legal/confidential" target="_blank" rel="noopener noreferrer" className={LINK}>
              Политика конфиденциальности Яндекса
            </a>
            {" "}и{" "}
            <a href="https://yandex.ru/legal/metrica_termsofuse" target="_blank" rel="noopener noreferrer" className={LINK}>
              Условия использования сервиса Яндекс Метрика
            </a>
            .
          </p>

          <H2>Связаться с нами</H2>
          <p className="mt-5">
            Вопросы об использовании cookie и аналитики можно задать по адресу{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={LINK}>
              {CONTACT_EMAIL}
            </a>
            . Общие правила работы с персональными данными описаны в{" "}
            <Link to="/ppd" className={LINK}>
              Политике в отношении обработки персональных данных
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
