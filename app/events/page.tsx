import React from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function EventsHub() {
  const events = [
    { name: "Bear Hunt", path: "/events/bear-hunt", desc: "Alliance boss damage optimization." },
    { name: "Viking Vengeance", path: "/events/viking-vengeance", desc: "Defend against the Viking horde." },
    { name: "Strongest Governor", path: "/events/strongest-governor", desc: "Track points across phases." },
    { name: "Alliance Championship", path: "/events/alliance-championship", desc: "Organize lane distributions." },
    { name: "Kingdom of Power (KvK)", path: "/events/kvk", desc: "Server vs Server warfare." },
    { name: "Desert Trial", path: "/events/desert-trial", desc: "Tactical progression strategies." },
    { name: "Roulette Hero", path: "/events/roulette-hero", desc: "Spin efficiency and hero fragments." },
    { name: "Eternity's Reach", path: "/events/eternitys-reach", desc: "Endgame scaling strategies." }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Event Intelligence Center</h1>
      <p className="text-accent-muted">Track schedules, calculate strategies, and prepare for upcoming phases. All times are converted from UTC to your local time automatically.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((ev) => (
          <Link key={ev.path} href={ev.path}>
            <Card className="hover:border-accent-gold transition-colors cursor-pointer h-full">
              <h2 className="text-lg font-bold text-accent-gold">{ev.name}</h2>
              <p className="text-sm text-accent-muted mt-2">{ev.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
