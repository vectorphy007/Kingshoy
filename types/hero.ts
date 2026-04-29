export type EffectOpType = number; // e.g., 101, 102, 111, 112, 113, 201, 202

export interface HeroSkill {
  id: string;
  name: string;
  description: string;
  effectOp: EffectOpType;
  value: number; // percentage usually
  isChanceBased: boolean;
  chanceProbability?: number; // e.g. 0.5 for 50%
  skillLevel: number;
  role?: string; // used to identify gatherer skills
}

export interface Hero {
  id: string;
  name: string;
  generation: number;
  type: "infantry" | "cavalry" | "archers" | "mixed";
  role: "attack" | "defense" | "support" | "gatherer"; // gatherer represents non-combat
  skills: HeroSkill[];
  hasWidget: boolean;
}
