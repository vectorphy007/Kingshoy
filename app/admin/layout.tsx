"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const adminTabs = [
  { name: "Overview", path: "/admin" },
  { name: "Submissions", path: "/admin/submissions" },
  { name: "Announcements", path: "/admin/announcements" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  // Don't render nav on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Control Panel</h1>
          <p className="text-sm text-accent-muted mt-1">Restricted area — Alliance Leadership only.</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg border border-slate-700 text-accent-muted hover:text-foreground hover:bg-card transition-colors text-sm"
        >
          Sign Out
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-700">
        {adminTabs.map((tab) => {
          const isActive =
            tab.path === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(tab.path);
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`px-4 py-2 whitespace-nowrap text-sm font-medium rounded-t-lg transition-colors ${
                isActive
                  ? "bg-card text-accent-gold border-b-2 border-accent-gold"
                  : "text-accent-muted hover:bg-card hover:text-foreground"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      <div>{children}</div>
    </div>
  );
}
