import { GovernorInput, GovernorOutput } from "@/types/calculator";

export function calculateGovernor(input: GovernorInput): GovernorOutput {
  if (input.pointsPerAction <= 0) return { actionsRequired: 0 };

  const pointsNeeded = Math.max(0, input.targetPoints - input.currentPoints);
  const actionsRequired = Math.ceil(pointsNeeded / input.pointsPerAction);

  return {
    actionsRequired
  };
}
