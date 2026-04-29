import { RallyInput, RallyIntelligenceOutput, RallyJoiner } from "@/types/rally";
import { HeroSkill } from "@/types/hero";
import { calculateSkillModMultiplier } from "./skillmod";

export function analyzeRally(input: RallyInput): RallyIntelligenceOutput {
  const warnings: string[] = [];

  // Determine total capacity based on leader cap and joiner contributions
  let currentCapacity = 0; // The leader contributes their own troops as well. In a full system, you would pass leader contribution too.
  input.joiners.forEach(joiner => {
    currentCapacity += joiner.troopContribution;
  });

  // Enforce capacity constraint (in a real scenario, sum of joiners + leader's troops <= leader.capacityCap)
  let totalCapacity = Math.min(currentCapacity, input.leader.capacityCap); // Assuming joiners fill the cap for this simulation.

  // Gather all joiner priority skills
  const joinerSkills: HeroSkill[] = input.joiners.map(j => j.prioritySkill);

  // Filter out Gatherer skills and add warnings
  const validCombatSkills = joinerSkills.filter(skill => {
    // Assuming effectOps in the 300s or some specific property denotes gathering
    if (skill.name.toLowerCase().includes("gather") || skill.role === "gatherer") {
      warnings.push(`Gatherer override detected! ${skill.name} is a non-combat skill and overrides combat modifiers.`);
      return true; // The engine unfortunately still applies it, wiping out a useful slot
    }
    return true;
  });

  // Sort by skill level descending, then chronological (simulated by array index)
  // This replicates the engine's prioritization logic
  validCombatSkills.sort((a, b) => b.skillLevel - a.skillLevel);

  // Engine only selects top 4
  const appliedJoinerSkills = validCombatSkills.slice(0, 4);
  const wastedSkills = validCombatSkills.slice(4);

  if (wastedSkills.length > 0) {
    warnings.push(`${wastedSkills.length} skills were wasted due to the Four-Skill Constraint.`);
  }

  // Detect duplicate chance-based skills among applied
  const chanceSkillOps = new Set<number>();
  appliedJoinerSkills.forEach(skill => {
    if (skill.isChanceBased) {
      if (chanceSkillOps.has(skill.effectOp)) {
        warnings.push(`Duplicate chance-based skill waste detected for effectOp ${skill.effectOp}. Chance skills do not stack.`);
      } else {
        chanceSkillOps.add(skill.effectOp);
      }
    }
  });

  // Combine with leader's skills
  const allAppliedSkills = [...input.leader.heroSkills, ...appliedJoinerSkills];

  // Detect duplicate effectOps for additive warning vs multiplicative
  const effectOpCounts: Record<number, number> = {};
  appliedJoinerSkills.forEach(skill => {
    effectOpCounts[skill.effectOp] = (effectOpCounts[skill.effectOp] || 0) + 1;
  });

  Object.keys(effectOpCounts).forEach(op => {
    if (effectOpCounts[parseInt(op)] > 1) {
      warnings.push(`Duplicate effect_op detected (${op}). This results in less efficient additive stacking rather than multiplicative compounding.`);
    }
  });

  const totalSkillModMultiplier = calculateSkillModMultiplier(allAppliedSkills);

  return {
    totalCapacity,
    appliedJoinerSkills,
    wastedSkills,
    warnings,
    totalSkillModMultiplier
  };
}
