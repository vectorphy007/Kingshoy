import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm text-accent-muted">{label}</label>}
      <input
        className={`bg-secondary border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground ${className}`}
        {...props}
      />
    </div>
  );
}
