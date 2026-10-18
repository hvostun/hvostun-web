#!/usr/bin/env bash
# Пробрасывает локальный Vite (порт 5173) наружу через tuna.
# Токен и домен берутся из .env: TUNA_TOKEN, TUNA_DOMAIN.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env"
PORT="${PORT:-5173}"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Нет $ENV_FILE. Скопируй .env.example в .env и заполни TUNA_TOKEN и TUNA_DOMAIN." >&2
  exit 1
fi

while IFS= read -r line || [[ -n "$line" ]]; do
  [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]] && continue
  key="${line%%=*}"
  value="${line#*=}"
  value="${value%\"}"
  value="${value#\"}"
  value="${value%\'}"
  value="${value#\'}"
  export "$key=$value"
done < "$ENV_FILE"

if [[ -z "${TUNA_TOKEN:-}" || -z "${TUNA_DOMAIN:-}" ]]; then
  echo "Заполни TUNA_TOKEN и TUNA_DOMAIN в .env" >&2
  exit 1
fi

if ! command -v tuna >/dev/null 2>&1; then
  echo "tuna не найден в PATH. Установи CLI: https://tuna.am/docs/guides/install/install-cli/" >&2
  exit 1
fi

echo "Туннель на localhost:${PORT} → ${TUNA_DOMAIN}"
exec tuna http "$PORT"
