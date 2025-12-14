module.exports = {
  '*.{ts,tsx,js,jsx,json}': ['biome check --apply --no-errors-on-unmatched'],
  '*.{md,yml,yaml}': ['biome format --write --no-errors-on-unmatched'],
}
