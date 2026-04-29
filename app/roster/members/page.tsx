import React from "react";
import Card from "@/components/ui/Card";

export default function MembersRoster() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Members</h2>
      <p className="text-sm text-accent-muted">Displaying verified members.</p>
    </Card>
  );
}
