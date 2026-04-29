"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { calculateGovernor } from "@/lib/calculators/governor";

export default function GovernorCalculator() {
  const [current, setCurrent] = useState("");
  const [target, setTarget] = useState("");
  const [actionPoints, setActionPoints] = useState("");
  const [result, setResult] = useState<{ actionsRequired: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const c = parseFloat(current);
    const t = parseFloat(target);
    const ap = parseFloat(actionPoints);
    if (!isNaN(c) && !isNaN(t) && !isNaN(ap)) {
      setResult(calculateGovernor({ currentPoints: c, targetPoints: t, pointsPerAction: ap }));
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Strongest Governor Tracker</h1>
        <Link href="/calculators"><Button variant="secondary">Back</Button></Link>
      </div>

      <Card>
        <form onSubmit={handleCalculate} className="flex flex-col gap-4">
          <Input label="Current Points" type="number" value={current} onChange={(e) => setCurrent(e.target.value)} required placeholder="e.g. 5000" />
          <Input label="Target Points" type="number" value={target} onChange={(e) => setTarget(e.target.value)} required placeholder="e.g. 20000" />
          <Input label="Points per Action (e.g. per troop trained)" type="number" value={actionPoints} onChange={(e) => setActionPoints(e.target.value)} required />
          <Button type="submit" className="mt-2">Calculate Requirements</Button>
        </form>
      </Card>

      {result && (
        <Card className="bg-accent-red/10 border-accent-red">
          <h2 className="text-lg font-bold text-accent-red mb-4">Required Effort</h2>
          <div>
            <p className="text-sm text-accent-muted">Actions Required to Reach Target</p>
            <p className="text-2xl font-bold">{Math.ceil(result.actionsRequired).toLocaleString()}</p>
          </div>
        </Card>
      )}
    </div>
  );
}
