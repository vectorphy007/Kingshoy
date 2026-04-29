"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { calculateTruegoldCost } from "@/lib/calculators/economic";

export default function TruegoldPlanner() {
  const [currentLevel, setCurrentLevel] = useState("TC35");
  const [targetLevel, setTargetLevel] = useState("TG5");
  const [result, setResult] = useState<{ totalTruegoldRequired: number; totalTemperedTruegoldRequired: number; estimatedRefinementWeeks: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculateTruegoldCost({ currentLevel, targetLevel }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Truegold Planner</h1>
        <Link href="/calculators"><Button variant="secondary">Back</Button></Link>
      </div>

      <Card>
        <form onSubmit={handleCalculate} className="flex flex-col gap-4">
          <Input
            label="Current Level"
            value={currentLevel}
            onChange={(e) => setCurrentLevel(e.target.value)}
            required
            placeholder="e.g. TC35 or TG1"
          />
          <Input
            label="Target Level"
            value={targetLevel}
            onChange={(e) => setTargetLevel(e.target.value)}
            required
            placeholder="e.g. TG5"
          />
          <Button type="submit" className="mt-2">Calculate</Button>
        </form>
      </Card>

      {result && (
        <Card className="bg-accent-blue/10 border-accent-blue">
          <h2 className="text-lg font-bold text-accent-blue mb-4">Results</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-accent-muted">Total Truegold</p>
              <p className="text-xl font-bold">{result.totalTruegoldRequired.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-accent-muted">Tempered Truegold</p>
              <p className="text-xl font-bold">{result.totalTemperedTruegoldRequired.toLocaleString()}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-accent-muted">Estimated Refinement Weeks (Max Efficiency)</p>
              <p className="text-xl font-bold">{result.estimatedRefinementWeeks}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
