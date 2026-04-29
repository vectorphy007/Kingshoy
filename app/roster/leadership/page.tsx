import React from "react";
import Card from "@/components/ui/Card";

export default function LeadershipRoster() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Leadership (R5 / R4)</h2>
      <p className="text-sm text-accent-muted mb-4">Core alliance command.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700 text-accent-muted text-sm">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">TC</th>
              <th className="py-3 px-4">Rally Cap</th>
              <th className="py-3 px-4">Deploy Cap</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800 hover:bg-background/50">
              <td className="py-3 px-4 font-semibold text-accent-gold">Vector</td>
              <td className="py-3 px-4">21</td>
              <td className="py-3 px-4 text-accent-green">225K</td>
              <td className="py-3 px-4">47K</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
