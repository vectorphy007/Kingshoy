import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50";
  let variantStyle = "";

  if (variant === "primary") {
    variantStyle = "bg-accent-gold text-background hover:bg-yellow-500";
  } else if (variant === "secondary") {
    variantStyle = "bg-transparent border border-accent-muted text-foreground hover:bg-card";
  } else if (variant === "danger") {
    variantStyle = "bg-accent-red text-foreground hover:bg-red-600";
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
