export interface TruegoldCostInput {
  currentLevel: string; // "TC35" or "TG1" format
  targetLevel: string; // "TC40" or "TG2" format
}

export interface TruegoldCostOutput {
  totalTruegoldRequired: number;
  totalTemperedTruegoldRequired: number;
  estimatedRefinementWeeks: number;
}

export interface BatchHealInput {
  treatiesAssists: number;
  secondsPerAssist: number;
  totalInjuredTroops: number;
  timeToHealOneTroopSeconds: number; // base time depending on tier
}

export interface BatchHealOutput {
  optimalBatchSize: number; // number of troops per batch
  totalInstantHealTimeSeconds: number; // max time that can be instantly healed
  totalBatchesRequired: number;
}

export interface MasterAcademyInput {
  dailyAdventureSupplies: number;
  currentManuscripts: number;
  currentEmblems: number;
}

export interface MasterAcademyOutput {
  efficiencyLossWarning?: string;
  recommendedActions: string[];
}
