import React from "react";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { getSubmissions } from "@/lib/storage";

export default async function AdminPage() {
  const submissions = await getSubmissions();
  const pending = submissions.filter((s) => s.status === "pending");
  const approved = submissions.filter((s) => s.status === "approved");
  const rejected = submissions.filter((s) => s.status === "rejected");

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-accent-muted">Pending Review</span>
            <span className="text-4xl font-bold text-accent-gold">{pending.length}</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-accent-muted">Approved</span>
            <span className="text-4xl font-bold text-accent-green">{approved.length}</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-accent-muted">Rejected</span>
            <span className="text-4xl font-bold text-accent-red">{rejected.length}</span>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-bold mb-3 text-accent-red">Pending Submissions</h2>
          <p className="text-sm text-accent-muted mb-4">
            {pending.length === 0
              ? "No submissions awaiting review."
              : `${pending.length} submission${pending.length > 1 ? "s" : ""} awaiting review.`}
          </p>
          <Link
            href="/admin/submissions"
            className="text-sm text-accent-gold hover:underline"
          >
            Manage submissions →
          </Link>
        </Card>

        <Card>
          <h2 className="text-lg font-bold mb-3 text-accent-gold">Announcements</h2>
          <p className="text-sm text-accent-muted mb-4">
            Edit dashboard notices and alliance alerts.
          </p>
          <Link
            href="/admin/announcements"
            className="text-sm text-accent-gold hover:underline"
          >
            Manage announcements →
          </Link>
        </Card>
      </div>
    </div>
  );
}
