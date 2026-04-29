import React from "react";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function EventDetail() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Roulette Hero</h1>
        <Link href="/events"><Button variant="secondary">Back to Events</Button></Link>
      </div>
      <Card>
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <p className="text-accent-muted mb-4">Timers and strategies sync to 00:00 UTC.</p>
      </Card>
    </div>
  );
}
