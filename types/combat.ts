export interface TroopStats {
  attack: number;
  lethality: number;
  defense: number;
  health: number;
}

export interface DamageInput {
  troopCount: number;
  baseAttack: number;
  attackMultiplier: number;
  lethalityMultiplier: number;
  enemyDefense: number;
  enemyDefenseMultiplier: number;
  enemyHealth: number;
  enemyHealthMultiplier: number;
  skillModMultiplier: number; // calculated from skillMod engine
}

export interface DamageOutput {
  estimatedCasualties: number;
  numerator: number;
  denominator: number;
  warning?: string;
}

export type TroopClass = "infantry" | "cavalry" | "archers";

export interface FormationInput {
  infantryRatio: number; // 0 to 1
  cavalryRatio: number; // 0 to 1
  archerRatio: number; // 0 to 1
  scenario: "bear_hunt" | "pvp_garrison" | "pvp_open_field" | "mystic_coliseum" | "mystic_crystal_cave";
}

export interface FormationOutput {
  isOptimal: boolean;
  recommendedRatio: {
    infantry: number;
    cavalry: number;
    archers: number;
  };
  explanation: string;
}

export interface PRNGSimulationOutput {
  worstCaseDamage: number;
  averageDamage: number;
  bestCaseDamage: number;
}
