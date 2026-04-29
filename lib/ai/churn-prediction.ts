export function predictChurn(lastActiveDaysAgo: number, participationRate: number): number {
  // Returns a probability between 0 and 1
  let churnProbability = 0.1; // Base probability

  if (lastActiveDaysAgo > 7) {
    churnProbability += 0.4;
  } else if (lastActiveDaysAgo > 3) {
    churnProbability += 0.2;
  }

  if (participationRate < 0.2) {
    churnProbability += 0.3;
  } else if (participationRate < 0.5) {
    churnProbability += 0.1;
  }

  return Math.min(churnProbability, 1.0);
}
