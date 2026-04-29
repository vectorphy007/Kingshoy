import { DamageInput, DamageOutput, FormationInput, FormationOutput, PRNGSimulationOutput } from "@/types/combat";
import { HeroSkill } from "@/types/hero";
import { calculateSkillModMultiplier } from "./skillmod";

// Constants from Kingshot mathematics
export const CONST_K = 1000;

export function calculateDamage(input: DamageInput): DamageOutput {
  const {
    troopCount,
    baseAttack,
    attackMultiplier,
    lethalityMultiplier,
    enemyDefense,
    enemyDefenseMultiplier,
    enemyHealth,
    enemyHealthMultiplier,
    skillModMultiplier
  } = input;

  // Numerator: sqrt(troops) * Base_Attack * (1 + Attack%) * (1 + Lethality%) * SkillMod
  const numerator = Math.sqrt(troopCount) * baseAttack * (1 + attackMultiplier) * (1 + lethalityMultiplier) * skillModMultiplier;

  // Denominator: K * Base_Defense * (1 + Defense%) * (1 + Health%)
  // Capping Defense efficiency at approx +200% (3.0 multiplier limit as heuristic if needed, but per research, it's a logarithmic curve in reality)
  // We use the basic mathematical interpretation provided in the report
  const denominator = CONST_K * enemyDefense * (1 + enemyDefenseMultiplier) * (1 + enemyHealthMultiplier);

  let estimatedCasualties = 0;
  if (denominator > 0) {
    estimatedCasualties = numerator / denominator;
  }

  let warning = undefined;
  if (troopCount > 500000) {
    warning = "Extreme diminishing returns on troop count due to sqrt() scaling.";
  }

  return {
    estimatedCasualties,
    numerator,
    denominator,
    warning
  };
}

export function recommendFormation(scenario: FormationInput["scenario"]): FormationOutput {
  let recommendedRatio = { infantry: 0, cavalry: 0, archers: 0 };
  let explanation = "";

  switch (scenario) {
    case "bear_hunt":
      recommendedRatio = { infantry: 0.1, cavalry: 0.1, archers: 0.8 };
      explanation = "10/10/80 is the optimal Bear Hunt formation. 80% Archers maximizes output, while 10% Inf/Cav satisfies the minimum thresholds for buffs.";
      break;
    case "pvp_garrison":
      recommendedRatio = { infantry: 0.6, cavalry: 0.15, archers: 0.25 };
      explanation = "60/15/25 setup establishes a massive health pool at the frontline to absorb burst damage, protecting the 25% Archers.";
      break;
    case "pvp_open_field":
      recommendedRatio = { infantry: 0.5, cavalry: 0.2, archers: 0.3 };
      explanation = "50/20/30 offers balanced attrition. High infantry health absorbs strikes while giving cavalry bypassing flexibility.";
      break;
    case "mystic_coliseum":
      recommendedRatio = { infantry: 0.5, cavalry: 0.1, archers: 0.4 };
      explanation = "50/10/40 is ideal for absorbing aggressive first-turn strikes from the AI, giving time to trigger conditional abilities.";
      break;
    case "mystic_crystal_cave":
      recommendedRatio = { infantry: 0.6, cavalry: 0.2, archers: 0.2 };
      explanation = "60/20/20 extreme defensive posture to endure massive AI bursts based on charm stats.";
      break;
  }

  return {
    isOptimal: true,
    recommendedRatio,
    explanation
  };
}

export function simulatePRNGDamage(
  baseInput: DamageInput,
  chanceSkills: HeroSkill[],
  iterations: number = 1000
): PRNGSimulationOutput {
  let minDmg = Infinity;
  let maxDmg = 0;
  let totalDmg = 0;

  for (let i = 0; i < iterations; i++) {
    // Determine which chance skills trigger this iteration
    let iterationSkillMod = baseInput.skillModMultiplier;

    chanceSkills.forEach(skill => {
      const roll = Math.random();
      if (skill.chanceProbability && roll <= skill.chanceProbability) {
        // Skill triggers
        // Note: For simplicity, assuming chance skills act multiplicatively on top, or modify the final multiplier
        // In real Kingshot engine, they don't stack with duplicate chance skills
        iterationSkillMod *= (1 + (skill.value / 100));
      }
    });

    const iterationInput = { ...baseInput, skillModMultiplier: iterationSkillMod };
    const result = calculateDamage(iterationInput);

    if (result.estimatedCasualties < minDmg) minDmg = result.estimatedCasualties;
    if (result.estimatedCasualties > maxDmg) maxDmg = result.estimatedCasualties;
    totalDmg += result.estimatedCasualties;
  }

  return {
    worstCaseDamage: minDmg,
    averageDamage: totalDmg / iterations,
    bestCaseDamage: maxDmg
  };
}
