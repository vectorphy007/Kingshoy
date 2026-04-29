import { HeroSkill } from "./hero";

export interface RallyLeaderStats {
  memberId: string;
  combatStats: {
    attackMultiplier: number;
    lethalityMultiplier: number;
    defenseMultiplier: number;
    healthMultiplier: number;
  };
  capacityCap: number;
  heroSkills: HeroSkill[]; // Up to 9
}

export interface RallyJoiner {
  memberId: string;
  heroId: string;
  prioritySkill: HeroSkill; // First skill of first hero
  troopContribution: number;
}

export interface RallyInput {
  leader: RallyLeaderStats;
  joiners: RallyJoiner[];
}

export interface RallyIntelligenceOutput {
  totalCapacity: number;
  appliedJoinerSkills: HeroSkill[];
  wastedSkills: HeroSkill[];
  warnings: string[];
  totalSkillModMultiplier: number;
}
