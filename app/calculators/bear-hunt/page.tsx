"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { calculateBearHunt } from "@/lib/calculators/bear-hunt";

export default function BearHuntCalculator() {
  const [damage, setDamage] = useState("");
  const [duration, setDuration] = useState("300"); // 5 mins default
  const [result, setResult] = useState<{ dps: number; estimatedTotal: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const dmg = parseFloat(damage);
    const dur = parseFloat(duration);
    if (!isNaN(dmg) && !isNaN(dur)) {
      setResult(calculateBearHunt({ playerDamage: dmg, durationSeconds: dur }));
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bear Hunt Optimizer</h1>
        <Link href="/calculators"><Button variant="secondary">Back</Button></Link>
      </div>

      <Card>
        <form onSubmit={handleCalculate} className="flex flex-col gap-4">
          <Input
            label="Total Damage"
            type="number"
            value={damage}
            onChange={(e) => setDamage(e.target.value)}
            required
            placeholder="e.g. 5000000"
          />
          <Input
            label="Duration (seconds)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
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
              <p className="text-sm text-accent-muted">Damage Per Second (DPS)</p>
              <p className="text-xl font-bold">{Math.round(result.dps).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-accent-muted">Estimated Total Output</p>
              <p className="text-xl font-bold">{Math.round(result.estimatedTotal).toLocaleString()}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
