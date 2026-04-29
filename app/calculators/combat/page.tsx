"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { calculateDamage, recommendFormation } from "@/lib/calculators/damage";

export default function CombatEngine() {
  const [troops, setTroops] = useState("10000");
  const [attack, setAttack] = useState("200"); // percent
  const [lethality, setLethality] = useState("150"); // percent
  const [defense, setDefense] = useState("100"); // base
  const [defPercent, setDefPercent] = useState("150"); // percent
  const [healthPercent, setHealthPercent] = useState("200"); // percent
  const [skillMod, setSkillMod] = useState("1.5");

  const [result, setResult] = useState<{ casualties: number; warning?: string } | null>(null);
  const [formationResult, setFormationResult] = useState<{ recommendedRatio: { infantry: number; cavalry: number; archers: number }; explanation: string } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateDamage({
      troopCount: parseInt(troops),
      baseAttack: 100, // placeholder
      attackMultiplier: parseFloat(attack) / 100,
      lethalityMultiplier: parseFloat(lethality) / 100,
      enemyDefense: parseInt(defense),
      enemyDefenseMultiplier: parseFloat(defPercent) / 100,
      enemyHealth: 100, // placeholder
      enemyHealthMultiplier: parseFloat(healthPercent) / 100,
      skillModMultiplier: parseFloat(skillMod)
    });

    setResult({ casualties: res.estimatedCasualties, warning: res.warning });
  };

  const getFormation = () => {
    setFormationResult(recommendFormation("bear_hunt")); // Demo default
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Combat Simulation Engine</h1>
        <Link href="/calculators"><Button variant="secondary">Back</Button></Link>
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-4">Damage Estimator</h2>
        <form onSubmit={handleCalculate} className="grid grid-cols-2 gap-4">
          <Input label="Troop Count" type="number" value={troops} onChange={(e) => setTroops(e.target.value)} />
          <Input label="Attack Boost (%)" type="number" value={attack} onChange={(e) => setAttack(e.target.value)} />
          <Input label="Lethality Boost (%)" type="number" value={lethality} onChange={(e) => setLethality(e.target.value)} />
          <Input label="Enemy Base Defense" type="number" value={defense} onChange={(e) => setDefense(e.target.value)} />
          <Input label="Enemy Defense Boost (%)" type="number" value={defPercent} onChange={(e) => setDefPercent(e.target.value)} />
          <Input label="Enemy Health Boost (%)" type="number" value={healthPercent} onChange={(e) => setHealthPercent(e.target.value)} />
          <Input label="SkillMod Multiplier" type="number" step="0.1" value={skillMod} onChange={(e) => setSkillMod(e.target.value)} />

          <div className="col-span-2">
            <Button type="submit">Simulate Damage</Button>
          </div>
        </form>
        {result && (
          <div className="mt-4 p-4 bg-accent-blue/10 border border-accent-blue rounded">
            <p className="text-lg">Estimated Casualties: <strong>{Math.round(result.casualties).toLocaleString()}</strong></p>
            {result.warning && <p className="text-red-400 mt-2 text-sm">{result.warning}</p>}
          </div>
        )}
      </Card>

      <Card>
        <h2 className="text-xl font-bold mb-4">Formation Optimizer</h2>
        <Button variant="secondary" onClick={getFormation}>Get Bear Hunt Optimal Formation</Button>
        {formationResult && (
          <div className="mt-4">
            <p><strong>Ratio:</strong> Inf: {formationResult.recommendedRatio.infantry * 100}%, Cav: {formationResult.recommendedRatio.cavalry * 100}%, Arch: {formationResult.recommendedRatio.archers * 100}%</p>
            <p className="text-sm mt-2 text-accent-muted">{formationResult.explanation}</p>
          </div>
        )}
      </Card>
    </div>
  );
}
