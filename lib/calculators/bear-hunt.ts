import { BearHuntInput, BearHuntOutput } from "@/types/calculator";

export function calculateBearHunt(input: BearHuntInput): BearHuntOutput {
  const dps = input.playerDamage / input.durationSeconds;

  // Example heuristic: assume total combat time is exactly durationSeconds
  // A more advanced simulation might account for buff windows or animation times
  const estimatedTotal = dps * input.durationSeconds;

  return {
    dps,
    estimatedTotal
  };
}
