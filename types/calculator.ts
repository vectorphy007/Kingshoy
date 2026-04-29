export interface BearHuntInput {
  playerDamage: number;
  durationSeconds: number;
}

export interface BearHuntOutput {
  dps: number;
  estimatedTotal: number;
}

export interface ChampionshipInput {
  lanes: number;
  players: number;
  totalPower: number;
}

export interface ChampionshipOutput {
  averagePowerPerLane: number;
  playersPerLane: number;
}

export interface GovernorInput {
  currentPoints: number;
  targetPoints: number;
  pointsPerAction: number;
}

export interface GovernorOutput {
  actionsRequired: number;
}

export * from "./combat";
export * from "./rally";
export * from "./economic";
export * from "./hero";
