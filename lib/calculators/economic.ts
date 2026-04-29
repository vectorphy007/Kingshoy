import {
  TruegoldCostInput,
  TruegoldCostOutput,
  BatchHealInput,
  BatchHealOutput,
  MasterAcademyInput,
  MasterAcademyOutput
} from "@/types/economic";

// Hardcoded sample values based on report
// A complete implementation would map every sub-level.
const TRUEGOLD_COSTS: Record<string, number> = {
  "TC35": 158, // Per sub-level average or sum
  "TC40": 238,
  "TC45": 280,
  "TC50": 335,
};

export function calculateTruegoldCost(input: TruegoldCostInput): TruegoldCostOutput {
  // Simplified calculation for demonstration.
  // Real implementation requires iterating between current and target parsing "TG1", "TG2" etc.
  let totalTruegoldRequired = 5715; // Placeholder sum to TG5 based on report
  let totalTemperedTruegoldRequired = 0;

  // Logic to determine if tempered is needed (TG5+)
  if (input.targetLevel.includes("TG") && parseInt(input.targetLevel.replace("TG", "")) >= 5) {
    totalTemperedTruegoldRequired = 1000; // placeholder
  }

  // Refinement limit is 100 per week, optimal is 20 + 6 = 26 per week for efficiency
  const estimatedRefinementWeeks = totalTemperedTruegoldRequired > 0 ? Math.ceil(totalTemperedTruegoldRequired / 26) : 0;

  return {
    totalTruegoldRequired,
    totalTemperedTruegoldRequired,
    estimatedRefinementWeeks
  };
}

export function calculateBatchHeal(input: BatchHealInput): BatchHealOutput {
  // Total instant heal time = treatiesAssists * secondsPerAssist
  const totalInstantHealTimeSeconds = input.treatiesAssists * input.secondsPerAssist;

  // How many troops fit into this time window?
  // optimalBatchSize = totalInstantHealTime / timeToHealOneTroop
  const optimalBatchSize = Math.floor(totalInstantHealTimeSeconds / input.timeToHealOneTroopSeconds);

  const totalBatchesRequired = Math.ceil(input.totalInjuredTroops / optimalBatchSize);

  return {
    optimalBatchSize,
    totalInstantHealTimeSeconds,
    totalBatchesRequired
  };
}

export function calculateMasterAcademy(input: MasterAcademyInput): MasterAcademyOutput {
  const recommendedActions: string[] = [];
  let efficiencyLossWarning = undefined;

  // Check if daily supplies are accumulating (they shouldn't)
  if (input.dailyAdventureSupplies > 100) { // example cap
    efficiencyLossWarning = "Adventure Supplies cap reached or exceeded! You are permanently losing compounding efficiency. Spend them immediately.";
  }

  if (input.currentManuscripts > 0) {
    recommendedActions.push(`You have ${input.currentManuscripts} Manuscripts. Inject them into skill trees for permanent combat multipliers.`);
  }

  if (input.currentEmblems > 0) {
    recommendedActions.push(`You have ${input.currentEmblems} Emblems. Use them to break relationship affinity gates.`);
  }

  if (recommendedActions.length === 0) {
    recommendedActions.push("Complete daily Badlands encounters to acquire more Master Academy materials.");
  }

  return {
    efficiencyLossWarning,
    recommendedActions
  };
}
