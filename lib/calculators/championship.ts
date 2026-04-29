import { ChampionshipInput, ChampionshipOutput } from "@/types/calculator";

export function calculateChampionship(input: ChampionshipInput): ChampionshipOutput {
  if (input.lanes <= 0) return { averagePowerPerLane: 0, playersPerLane: 0 };

  const averagePowerPerLane = input.totalPower / input.lanes;
  const playersPerLane = input.players / input.lanes;

  return {
    averagePowerPerLane,
    playersPerLane
  };
}
