import React from "react";
import Link from "next/link";

export default function Sidebar({ className = "" }: { className?: string }) {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Roster Hub", path: "/roster" },
    { name: "Events Center", path: "/events" },
    { name: "Calculators", path: "/calculators" },
    { name: "Guides", path: "/guides" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <aside className={`bg-secondary border-r border-slate-700 flex flex-col p-4 ${className}`}>
      <div className="mb-8">
        <h1 className="text-xl font-bold text-accent-gold">Kingshot Command</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="px-4 py-2 rounded-lg hover:bg-card text-foreground transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
