import React from "react";
import Card from "@/components/ui/Card";

export default function RosterOverview() {
  return (
    <div className="grid gap-6">
      <Card>
        <h2 className="text-lg font-semibold mb-4">Roster Overview</h2>
        <p className="text-sm text-accent-muted">Select a category from the tabs above to view specific member groups.</p>
      </Card>
    </div>
  );
}
