import { calculateDamage, recommendFormation } from "../damage";
import { DamageInput } from "@/types/combat";

describe("Damage Calculator", () => {
  it("calculates damage correctly", () => {
    const input: DamageInput = {
      troopCount: 10000, // sqrt is 100
      baseAttack: 100,
      attackMultiplier: 1.0, // +100%
      lethalityMultiplier: 1.0, // +100%
      enemyDefense: 100,
      enemyDefenseMultiplier: 1.0, // +100%
      enemyHealthMultiplier: 1.0, // +100%
      skillModMultiplier: 1.5
    };

    // numerator = 100 * 100 * 2 * 2 * 1.5 = 60000
    // denominator = 1000 * 100 * 2 * 2 = 400000
    // casualties = 60000 / 400000 = 0.15

    const result = calculateDamage(input);
    expect(result.estimatedCasualties).toBeCloseTo(0.15);
  });

  it("warns when troops are too high due to diminishing returns", () => {
    const input: DamageInput = {
      troopCount: 600000,
      baseAttack: 100,
      attackMultiplier: 1.0,
      lethalityMultiplier: 1.0,
      enemyDefense: 100,
      enemyDefenseMultiplier: 1.0,
      enemyHealthMultiplier: 1.0,
      skillModMultiplier: 1.0
    };

    const result = calculateDamage(input);
    expect(result.warning).toBeDefined();
  });
});

describe("Formation Optimizer", () => {
  it("recommends 10/10/80 for Bear Hunt", () => {
    const result = recommendFormation("bear_hunt");
    expect(result.recommendedRatio.archers).toBe(0.8);
  });
});
