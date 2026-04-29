import { calculateBatchHeal } from "../economic";

describe("Economic Calculators", () => {
  it("calculates batch heal correctly", () => {
    const input = {
      treatiesAssists: 30,
      secondsPerAssist: 200,
      totalInjuredTroops: 100000,
      timeToHealOneTroopSeconds: 2
    };

    // totalInstantHeal = 6000
    // optimalBatchSize = 3000
    // batchesNeeded = ceil(100000 / 3000) = 34

    const result = calculateBatchHeal(input);
    expect(result.optimalBatchSize).toBe(3000);
    expect(result.totalBatchesRequired).toBe(34);
    expect(result.totalInstantHealTimeSeconds).toBe(6000);
  });
});
