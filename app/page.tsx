import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Alliance Command Center</h1>
          <p className="text-sm text-accent-muted mt-1">Welcome back, Commander.</p>
        </div>
        <Link href="/roster/submit">
          <Button>Update Stats</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="flex flex-col gap-3">
            <div className="bg-background p-3 rounded-lg border border-slate-700">
              <div className="flex justify-between">
                <span className="font-semibold text-accent-blue">Bear Hunt</span>
                <span className="text-sm">Starts in 2h</span>
              </div>
              <p className="text-xs text-accent-muted mt-1">Local: 21:00 (19:00 UTC)</p>
            </div>
            <Link href="/events" className="text-sm text-accent-gold hover:underline">View all events →</Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-4">Roster Summary</h2>
          <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-2">
            <span className="text-sm">Total Members</span>
            <span className="font-bold">95/100</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-2">
            <span className="text-sm">Needs Review</span>
            <span className="font-bold text-accent-red">3</span>
          </div>
          <Link href="/roster" className="text-sm text-accent-gold hover:underline">Manage roster →</Link>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-4">Quick Tools</h2>
          <div className="flex flex-col gap-2">
            <Link href="/calculators/bear-hunt">
              <Button variant="secondary" className="w-full text-left">Bear Hunt Optimizer</Button>
            </Link>
            <Link href="/calculators/championship">
              <Button variant="secondary" className="w-full text-left">Championship Lanes</Button>
            </Link>
            <Link href="/calculators" className="text-sm text-accent-gold hover:underline mt-2">All tools →</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
