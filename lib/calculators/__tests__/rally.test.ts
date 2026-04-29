import { analyzeRally } from "../rally";
import { RallyInput } from "@/types/rally";
import { HeroSkill } from "@/types/hero";

describe("Rally Intelligence Engine", () => {
  it("detects gatherer override", () => {
    const gathererSkill: HeroSkill = {
      id: "gather_1", name: "Gather Wood", description: "...",
      effectOp: 301, value: 10, isChanceBased: false, skillLevel: 5, role: "gatherer"
    };

    const input: RallyInput = {
      leader: {
        memberId: "L1", capacityCap: 100000, heroSkills: [],
        combatStats: { attackMultiplier: 1, lethalityMultiplier: 1, defenseMultiplier: 1, healthMultiplier: 1 }
      },
      joiners: [
        { memberId: "J1", heroId: "H1", troopContribution: 10000, prioritySkill: gathererSkill }
      ]
    };

    const result = analyzeRally(input);
    expect(result.warnings.some(w => w.includes("Gatherer override"))).toBe(true);
  });
});
