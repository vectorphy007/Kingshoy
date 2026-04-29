"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { calculateChampionship } from "@/lib/calculators/championship";

export default function ChampionshipCalculator() {
  const [lanes, setLanes] = useState("3");
  const [players, setPlayers] = useState("30");
  const [power, setPower] = useState("");
  const [result, setResult] = useState<{ averagePowerPerLane: number; playersPerLane: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseInt(lanes);
    const p = parseInt(players);
    const pow = parseFloat(power);
    if (!isNaN(l) && !isNaN(p) && !isNaN(pow)) {
      setResult(calculateChampionship({ lanes: l, players: p, totalPower: pow }));
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Championship Lane Distributor</h1>
        <Link href="/calculators"><Button variant="secondary">Back</Button></Link>
      </div>

      <Card>
        <form onSubmit={handleCalculate} className="flex flex-col gap-4">
          <Input label="Number of Lanes" type="number" value={lanes} onChange={(e) => setLanes(e.target.value)} required />
          <Input label="Total Players Available" type="number" value={players} onChange={(e) => setPlayers(e.target.value)} required />
          <Input label="Total Alliance Power" type="number" value={power} onChange={(e) => setPower(e.target.value)} required placeholder="e.g. 150000000" />
          <Button type="submit" className="mt-2">Calculate Distribution</Button>
        </form>
      </Card>

      {result && (
        <Card className="bg-accent-gold/10 border-accent-gold">
          <h2 className="text-lg font-bold text-accent-gold mb-4">Distribution Strategy</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-accent-muted">Players per Lane</p>
              <p className="text-xl font-bold">{Math.floor(result.playersPerLane)}</p>
            </div>
            <div>
              <p className="text-sm text-accent-muted">Target Average Power / Lane</p>
              <p className="text-xl font-bold">{Math.round(result.averagePowerPerLane).toLocaleString()}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
