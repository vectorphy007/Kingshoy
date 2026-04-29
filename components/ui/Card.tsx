import React from "react";

export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-xl p-6 shadow-md border border-slate-700 ${className}`}>
      {children}
    </div>
  );
}
