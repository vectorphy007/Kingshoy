import { HeroSkill, EffectOpType } from "@/types/hero";

export function calculateSkillModMultiplier(skills: HeroSkill[]): number {
  if (skills.length === 0) return 1;

  // Group by effectOp
  const opGroups: Record<EffectOpType, number> = {};

  skills.forEach(skill => {
    // Only process guaranteed skills for deterministic SkillMod
    // Chance-based skills handled in PRNG simulation
    if (!skill.isChanceBased) {
      if (!opGroups[skill.effectOp]) {
        opGroups[skill.effectOp] = 0;
      }
      // Same effect_op -> Additive
      opGroups[skill.effectOp] += skill.value / 100;
    }
  });

  // Different effect_op -> Multiplicative
  let finalMultiplier = 1;
  Object.values(opGroups).forEach(groupValue => {
    finalMultiplier *= (1 + groupValue);
  });

  return finalMultiplier;
}
