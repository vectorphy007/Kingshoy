import React from "react";
import Card from "@/components/ui/Card";

export default function GuidesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Knowledge Base</h1>
      <p className="text-accent-muted">Guides, formations, and research priorities.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-bold mb-2">Heroes</h2>
          <p className="text-sm text-accent-muted">Best pairs and skill priorities.</p>
        </Card>
        <Card>
          <h2 className="text-lg font-bold mb-2">Formations</h2>
          <p className="text-sm text-accent-muted">Optimized troop ratios for rallies.</p>
        </Card>
      </div>
    </div>
  );
}
