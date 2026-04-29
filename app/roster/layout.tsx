import React from "react";
import Link from "next/link";

export default function RosterLayout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { name: "Overview", path: "/roster" },
    { name: "Leadership", path: "/roster/leadership" },
    { name: "Veterans", path: "/roster/veterans" },
    { name: "Members", path: "/roster/members" },
    { name: "Rally Leaders", path: "/roster/rally-leaders" },
    { name: "Rally Joiners", path: "/roster/rally-joiners" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Alliance Roster</h1>
        <Link href="/roster/submit">
          <button className="bg-accent-gold text-background px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Submit Stats
          </button>
        </Link>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-700">
        {tabs.map(tab => (
          <Link
            key={tab.path}
            href={tab.path}
            className="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-t-lg hover:bg-card text-accent-muted hover:text-foreground"
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div>{children}</div>
    </div>
  );
}
