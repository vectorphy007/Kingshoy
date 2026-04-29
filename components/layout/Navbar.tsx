import React from "react";
import Link from "next/link";

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <header className={`bg-secondary border-b border-slate-700 p-4 flex justify-between items-center ${className}`}>
      <Link href="/">
        <h1 className="text-xl font-bold text-accent-gold">Kingshot Command</h1>
      </Link>
      <button className="p-2 border border-slate-700 rounded-lg focus:outline-none">
        Menu
      </button>
    </header>
  );
}
