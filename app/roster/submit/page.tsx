"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SubmitStats() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      townCenter: parseInt((form.elements.namedItem("townCenter") as HTMLInputElement).value, 10),
      rallyCap: (form.elements.namedItem("rallyCap") as HTMLInputElement).value,
      deploymentCap: (form.elements.namedItem("deploymentCap") as HTMLInputElement).value,
      highestTier: (form.elements.namedItem("highestTier") as HTMLInputElement).value,
      totalTroops: (form.elements.namedItem("totalTroops") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Submission failed. Please try again.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card>
        <h1 className="text-2xl font-bold mb-2">Update Alliance Stats</h1>
        <p className="text-sm text-accent-muted mb-6">
          Submit your latest verified statistics. Data will be pending until reviewed by Leadership.
        </p>

        {success ? (
          <div className="bg-accent-green/20 text-accent-green p-4 rounded-lg font-semibold text-center">
            Submission successful! Pending review.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input label="In-game Name" name="name" required placeholder="e.g. Vector" />
            <Input label="Town Center Level" name="townCenter" required type="number" min="1" max="30" placeholder="e.g. 21" />
            <Input label="Rally Capacity" name="rallyCap" required placeholder="e.g. 225K" />
            <Input label="Deployment Capacity" name="deploymentCap" required placeholder="e.g. 47K" />
            <Input label="Highest Tier (T1-T10)" name="highestTier" required placeholder="e.g. T7" />
            <Input label="Total Troops" name="totalTroops" required placeholder="e.g. 78K" />

            {error && (
              <div className="bg-accent-red/20 text-accent-red p-3 rounded-lg text-sm">{error}</div>
            )}

            <Button type="submit" disabled={loading} className="mt-4">
              {loading ? "Submitting..." : "Submit Stats"}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
