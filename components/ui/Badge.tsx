import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "green" | "red" | "blue" | "muted";
  className?: string;
}

export default function Badge({ children, variant = "muted", className = "" }: BadgeProps) {
  const variants = {
    gold: "bg-accent-gold/20 text-accent-gold",
    green: "bg-accent-green/20 text-accent-green",
    red: "bg-accent-red/20 text-accent-red",
    blue: "bg-accent-blue/20 text-accent-blue",
    muted: "bg-accent-muted/20 text-accent-muted",
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-md ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
