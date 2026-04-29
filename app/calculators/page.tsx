import React from "react";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function CalculatorsHub() {
  const calculators = [
    { name: "Bear Hunt Optimizer", path: "/calculators/bear-hunt", desc: "Calculate damage per second and total output." },
    { name: "Championship Lane Distributor", path: "/calculators/championship", desc: "Optimize power distribution across lanes." },
    { name: "Strongest Governor Tracker", path: "/calculators/governor", desc: "Track points needed for your target." },
    { name: "Combat Simulation Engine", path: "/calculators/combat", desc: "Advanced damage and formation calculations." },
    { name: "Truegold Planner", path: "/calculators/truegold", desc: "Calculate Truegold costs for high-level upgrades." },
    { name: "Healing Optimizer", path: "/calculators/healing", desc: "Optimize batch healing utilizing alliance treaties." }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Strategic Calculators</h1>
      <p className="text-accent-muted">Tools to optimize your alliance's performance.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Link key={calc.path} href={calc.path}>
            <Card className="hover:border-accent-gold transition-colors cursor-pointer h-full">
              <h2 className="text-lg font-bold text-accent-gold">{calc.name}</h2>
              <p className="text-sm text-accent-muted mt-2">{calc.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
