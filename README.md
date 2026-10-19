# Хвостун: Дома Спокойно

## Локальный запуск

```bash
bun install
bun run dev
```

Сайт откроется на http://localhost:5173.

## Доступ снаружи через tuna

Cloudflare / Wrangler не нужны — tuna пробрасывает локальный `dev`-сервер.

CLI ставится отдельно: [установка tuna](https://tuna.am/docs/guides/install/install-cli/). Docker не нужен.

Скопируй пример и заполни `.env`:

```bash
cp .env.example .env
```

Нужны `TUNA_TOKEN` и **один** из вариантов:

- `TUNA_DOMAIN` — свой домен (`tuna http 5173 --domain=…`)
- `TUNA_SUBDOMAIN` — поддомен tuna (`tuna http 5173 --subdomain=…`)

Опционально: `TUNA_LOCATION` (`ru` или `nl`).

В одном терминале подними сайт, в другом — туннель:

```bash
bun run dev
bun run tunnel
```

Пока оба процесса работают, сайт открывается по адресу tuna. Остановил их — адрес перестаёт отвечать.
