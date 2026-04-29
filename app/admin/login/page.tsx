"use client";
import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Login failed.");
      } else {
        router.push(from);
        router.refresh();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-accent-gold">Kingshot Command</h1>
          <p className="text-accent-muted mt-2 text-sm">Admin Access — Alliance Leadership Only</p>
        </div>

        <Card>
          <h2 className="text-lg font-bold mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Username"
              name="username"
              type="text"
              required
              autoComplete="username"
              placeholder="admin"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
            />

            {error && (
              <div className="bg-accent-red/20 text-accent-red p-3 rounded-lg text-sm">{error}</div>
            )}

            <Button type="submit" disabled={loading} className="mt-2">
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
