#!/usr/bin/env bash
# Пробрасывает локальный Vite (порт 5173) наружу через tuna.
# В .env нужен TUNA_TOKEN и одно из: TUNA_DOMAIN или TUNA_SUBDOMAIN.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env"
PORT="${PORT:-5173}"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Нет $ENV_FILE. Скопируй .env.example в .env и заполни TUNA_TOKEN плюс TUNA_DOMAIN или TUNA_SUBDOMAIN." >&2
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

if [[ -z "${TUNA_TOKEN:-}" ]]; then
  echo "Заполни TUNA_TOKEN в .env" >&2
  exit 1
fi

has_domain=0
has_subdomain=0
[[ -n "${TUNA_DOMAIN:-}" ]] && has_domain=1
[[ -n "${TUNA_SUBDOMAIN:-}" ]] && has_subdomain=1

if (( has_domain == 0 && has_subdomain == 0 )); then
  echo "Укажи в .env либо TUNA_DOMAIN, либо TUNA_SUBDOMAIN." >&2
  exit 1
fi

if (( has_domain == 1 && has_subdomain == 1 )); then
  echo "В .env заданы и TUNA_DOMAIN, и TUNA_SUBDOMAIN — оставь только одно." >&2
  exit 1
fi

if ! command -v tuna >/dev/null 2>&1; then
  echo "tuna не найден в PATH. Установи CLI: https://tuna.am/docs/guides/install/install-cli/" >&2
  exit 1
fi

args=(http "$PORT")
if (( has_domain == 1 )); then
  echo "Туннель на localhost:${PORT} → ${TUNA_DOMAIN}"
  args+=(--domain="$TUNA_DOMAIN")
else
  echo "Туннель на localhost:${PORT} → ${TUNA_SUBDOMAIN}.*.tuna.am"
  args+=(--subdomain="$TUNA_SUBDOMAIN")
fi

if [[ -n "${TUNA_LOCATION:-}" ]]; then
  args+=(--location="$TUNA_LOCATION")
fi

exec tuna "${args[@]}"
