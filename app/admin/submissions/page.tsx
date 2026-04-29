"use client";
import React, { useState, useEffect, useCallback } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Submission } from "@/lib/storage";

type FilterStatus = "pending" | "approved" | "rejected" | "all";

const statusColors: Record<Submission["status"], string> = {
  pending: "text-accent-gold bg-accent-gold/10 border-accent-gold/30",
  approved: "text-accent-green bg-accent-green/10 border-accent-green/30",
  rejected: "text-accent-red bg-accent-red/10 border-accent-red/30",
};

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("pending");
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/submissions");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSubmissions(data);
    } catch {
      setError("Failed to load submissions.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleAction = async (id: string, action: "approve" | "reject") => {
    setActionLoading(id + action);
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      if (!res.ok) throw new Error("Action failed");
      await fetchSubmissions();
    } catch {
      setError("Action failed. Please try again.");
    } finally {
      setActionLoading(null);
    }
  };

  const displayed =
    filter === "all" ? submissions : submissions.filter((s) => s.status === filter);

  const counts = {
    all: submissions.length,
    pending: submissions.filter((s) => s.status === "pending").length,
    approved: submissions.filter((s) => s.status === "approved").length,
    rejected: submissions.filter((s) => s.status === "rejected").length,
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {(["pending", "approved", "rejected", "all"] as FilterStatus[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              filter === f
                ? "bg-accent-gold text-background"
                : "bg-card border border-slate-700 text-accent-muted hover:text-foreground"
            }`}
          >
            {f} ({counts[f]})
          </button>
        ))}
      </div>

      {error && (
        <div className="bg-accent-red/20 text-accent-red p-3 rounded-lg text-sm">{error}</div>
      )}

      {loading ? (
        <Card>
          <p className="text-accent-muted text-sm">Loading submissions…</p>
        </Card>
      ) : displayed.length === 0 ? (
        <Card>
          <p className="text-accent-muted text-sm">
            No {filter === "all" ? "" : filter} submissions found.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {displayed.map((sub) => (
            <Card key={sub.id}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Member info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-bold text-lg">{sub.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded border capitalize ${statusColors[sub.status]}`}
                    >
                      {sub.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 text-sm">
                    <div>
                      <span className="text-accent-muted">TC: </span>
                      <span>Level {sub.townCenter}</span>
                    </div>
                    <div>
                      <span className="text-accent-muted">Rally: </span>
                      <span>{sub.rallyCap}</span>
                    </div>
                    <div>
                      <span className="text-accent-muted">Deploy: </span>
                      <span>{sub.deploymentCap}</span>
                    </div>
                    <div>
                      <span className="text-accent-muted">Tier: </span>
                      <span>{sub.highestTier}</span>
                    </div>
                    <div>
                      <span className="text-accent-muted">Troops: </span>
                      <span>{sub.totalTroops}</span>
                    </div>
                  </div>
                  <p className="text-xs text-accent-muted mt-2">
                    Submitted: {new Date(sub.submittedAt).toLocaleString()}
                    {sub.reviewedAt && (
                      <> · Reviewed: {new Date(sub.reviewedAt).toLocaleString()}</>
                    )}
                  </p>
                </div>

                {/* Actions */}
                {sub.status === "pending" && (
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      variant="primary"
                      onClick={() => handleAction(sub.id, "approve")}
                      disabled={actionLoading !== null}
                      className="text-sm py-1.5"
                    >
                      {actionLoading === sub.id + "approve" ? "…" : "Approve"}
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleAction(sub.id, "reject")}
                      disabled={actionLoading !== null}
                      className="text-sm py-1.5"
                    >
                      {actionLoading === sub.id + "reject" ? "…" : "Reject"}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
