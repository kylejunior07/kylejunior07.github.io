#!/usr/bin/env bash
# Build each featured project as a static site and copy it into public/demos/<slug>/,
# so the portfolio can host playable demos while the source repos stay private.
#
# Usage: scripts/build-demos.sh [path-to-folder-containing-the-project-clones]
# Defaults to the portfolio's parent folder (clones side by side with this repo).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CLONES="$(cd "${1:-$ROOT/..}" && pwd)"
# Must match the portfolio's own base path (see vite.config.ts).
SITE_BASE="${BASE_PATH:-/osmond-portfolio/}"

DEMOS=(
  generative-poster-maker
  formation-builders
  interactive-data-story
  moodboard-palette-extractor
  penalty-shootout
)

for slug in "${DEMOS[@]}"; do
  src="$CLONES/$slug"
  out="$ROOT/public/demos/$slug"
  if [[ ! -f "$src/package.json" ]]; then
    echo "✗ $slug: no clone at $src" >&2
    exit 1
  fi
  echo "▶ building $slug"
  (cd "$src" && npm ci --silent && BASE_PATH="${SITE_BASE}demos/$slug/" npm run build --silent)
  rm -rf "$out"
  mkdir -p "$out"
  cp -R "$src/dist/." "$out/"
  echo "✓ $slug → public/demos/$slug ($(du -sh "$out" | cut -f1))"
done
