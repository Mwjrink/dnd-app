export const Dice = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"] as const;
export type Die = typeof Dice[number];

export const Sizes = [
  "tiny",
  "small",
  "medium",
  "large",
  "huge",
  "gargantuan",
] as const;
export type Size = typeof Sizes[number];

export const DamageTypes = [
  "slashing",
  "piercing",
  "bludgeoning",
  "poison",
  "acid",
  "fire",
  "cold",
  "radiant",
  "necrotic",
  "lightning",
  "thunder",
  "force",
  "psychic",
] as const;
export type DamageType = typeof DamageTypes[number];
