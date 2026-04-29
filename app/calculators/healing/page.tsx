"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { calculateBatchHeal } from "@/lib/calculators/economic";

export default function HealingOptimizer() {
  const [treatiesAssists, setTreatiesAssists] = useState("30");
  const [secondsPerAssist, setSecondsPerAssist] = useState("247");
  const [injuredTroops, setInjuredTroops] = useState("100000");
  const [timeToHealOne, setTimeToHealOne] = useState("1.5");
  const [result, setResult] = useState<{ optimalBatchSize: number; totalInstantHealTimeSeconds: number; totalBatchesRequired: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateBatchHeal({
      treatiesAssists: parseInt(treatiesAssists),
      secondsPerAssist: parseInt(secondsPerAssist),
      totalInjuredTroops: parseInt(injuredTroops),
      timeToHealOneTroopSeconds: parseFloat(timeToHealOne)
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Batch Healing Optimizer</h1>
        <Link href="/calculators"><Button variant="secondary">Back</Button></Link>
      </div>

      <Card>
        <form onSubmit={handleCalculate} className="flex flex-col gap-4">
          <Input
            label="Alliance Treaties Assists"
            type="number"
            value={treatiesAssists}
            onChange={(e) => setTreatiesAssists(e.target.value)}
            required
          />
          <Input
            label="Seconds Reduced Per Assist"
            type="number"
            value={secondsPerAssist}
            onChange={(e) => setSecondsPerAssist(e.target.value)}
            required
          />
          <Input
            label="Total Severely Injured Troops"
            type="number"
            value={injuredTroops}
            onChange={(e) => setInjuredTroops(e.target.value)}
            required
          />
          <Input
            label="Time to Heal 1 Troop (Seconds)"
            type="number"
            step="0.1"
            value={timeToHealOne}
            onChange={(e) => setTimeToHealOne(e.target.value)}
            required
          />
          <Button type="submit" className="mt-2">Calculate</Button>
        </form>
      </Card>

      {result && (
        <Card className="bg-accent-blue/10 border-accent-blue">
          <h2 className="text-lg font-bold text-accent-blue mb-4">Results</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-accent-muted">Optimal Batch Size</p>
              <p className="text-xl font-bold">{result.optimalBatchSize.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-accent-muted">Total Batches Needed</p>
              <p className="text-xl font-bold">{result.totalBatchesRequired.toLocaleString()}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-accent-muted">Instant Heal Time Window</p>
              <p className="text-xl font-bold">{(result.totalInstantHealTimeSeconds / 60).toFixed(2)} minutes</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
