import React from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Global Search</h1>
      <Card>
        <div className="flex gap-2">
          <Input placeholder="Search members, guides, events..." className="flex-1" />
          <Button>Search</Button>
        </div>
      </Card>
      <div className="mt-4">
        <p className="text-accent-muted text-sm">Search results will appear here...</p>
      </div>
    </div>
  );
}
