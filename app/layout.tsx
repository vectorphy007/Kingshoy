import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Kingshot Alliance Companion",
  description: "A modern, multi-page alliance management and strategy companion platform for the mobile strategy game Kingshot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col md:flex-row bg-background text-foreground">
        <Sidebar className="hidden md:flex w-64 flex-shrink-0" />
        <div className="flex flex-col flex-1 min-w-0">
          <Navbar className="md:hidden" />
          <main className="flex-1 p-4 md:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
