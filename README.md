# Хвостун: Дома Спокойно

## Локальный запуск

```bash
bun install
bun run dev
```

Сайт откроется на http://localhost:5173.

Собранная версия:

```bash
bun run build
bun run preview
```

Порт preview смотри в выводе команды (часто 4173).

## Доступ снаружи через tuna

CLI ставится отдельно: [установка tuna](https://tuna.am/docs/guides/install/install-cli/). Docker не нужен.

Скопируй пример и заполни токен и домен из личного кабинета tuna:

```bash
cp .env.example .env
```

`.env` в git не попадает. Нужны две переменные:

- `TUNA_TOKEN` — токен аккаунта
- `TUNA_DOMAIN` — зарезервированный домен, например `brave-otter-4821.ru.tuna.am`

В одном терминале подними сайт, в другом — туннель на порт 5173:

```bash
bun run dev
bun run tunnel
```

Скрипт `scripts/tunnel.sh` читает `.env` и запускает `tuna http 5173`. Пока оба процесса работают, сайт открывается по `TUNA_DOMAIN`. Остановил их — адрес перестаёт отвечать.

