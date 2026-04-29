import { RallyInput, RallyLeaderStats } from "@/types/rally";

export function recommendRallyConfiguration(candidates: RallyLeaderStats[]) {
  if (candidates.length === 0) return null;

  // Simple heuristic: best leader is the one with highest capacity and base stats
  let bestLeader = candidates[0];
  let maxScore = 0;

  candidates.forEach(candidate => {
    // Score based on capacity and stat multipliers
    const statScore = candidate.combatStats.attackMultiplier +
                      candidate.combatStats.lethalityMultiplier +
                      candidate.combatStats.healthMultiplier +
                      candidate.combatStats.defenseMultiplier;
    const score = candidate.capacityCap * (1 + statScore);

    if (score > maxScore) {
      maxScore = score;
      bestLeader = candidate;
    }
  });

  return {
    bestLeader,
    recommendedRatio: "10/10/80 (Bear Hunt) or 60/15/25 (PvP Garrison)",
    joinerAdvice: "Use diverse effectOps. Avoid gatherer skills."
  };
}
