"use client";
import React, { useState, useEffect, useCallback } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import type { Announcement } from "@/lib/storage";

const typeColors: Record<Announcement["type"], string> = {
  info: "text-accent-blue bg-accent-blue/10 border-accent-blue/30",
  warning: "text-accent-gold bg-accent-gold/10 border-accent-gold/30",
  success: "text-accent-green bg-accent-green/10 border-accent-green/30",
};

const emptyForm = { title: "", body: "", type: "info" as Announcement["type"] };

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [editing, setEditing] = useState<Announcement | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);

  const fetchAnnouncements = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/announcements");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setAnnouncements(data);
    } catch {
      setError("Failed to load announcements.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
    setSuccess(null);
  };

  const openEdit = (ann: Announcement) => {
    setEditing(ann);
    setForm({ title: ann.title, body: ann.body, type: ann.type });
    setShowForm(true);
    setSuccess(null);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm(emptyForm);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const payload = editing ? { ...form, id: editing.id } : form;
      const res = await fetch("/api/admin/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Save failed");
      setSuccess(editing ? "Announcement updated." : "Announcement created.");
      setShowForm(false);
      setEditing(null);
      setForm(emptyForm);
      await fetchAnnouncements();
    } catch {
      setError("Failed to save announcement.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this announcement?")) return;
    setDeleting(id);
    setError(null);
    try {
      const res = await fetch("/api/admin/announcements", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Delete failed");
      setSuccess("Announcement deleted.");
      await fetchAnnouncements();
    } catch {
      setError("Failed to delete announcement.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-accent-muted">
          Manage dashboard notices shown to all alliance members.
        </p>
        {!showForm && (
          <Button onClick={openNew} className="text-sm py-1.5">
            + New Announcement
          </Button>
        )}
      </div>

      {error && (
        <div className="bg-accent-red/20 text-accent-red p-3 rounded-lg text-sm">{error}</div>
      )}
      {success && !showForm && (
        <div className="bg-accent-green/20 text-accent-green p-3 rounded-lg text-sm">{success}</div>
      )}

      {/* Form */}
      {showForm && (
        <Card>
          <h2 className="font-bold mb-4">{editing ? "Edit Announcement" : "New Announcement"}</h2>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <Input
              label="Title"
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="e.g. Alliance Bear Hunt this weekend"
            />
            <div className="flex flex-col gap-1">
              <label className="text-sm text-accent-muted">Body</label>
              <textarea
                required
                value={form.body}
                onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                placeholder="Announcement details…"
                rows={4}
                className="bg-secondary border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground resize-y"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-accent-muted">Type</label>
              <select
                value={form.type}
                onChange={(e) =>
                  setForm((f) => ({ ...f, type: e.target.value as Announcement["type"] }))
                }
                className="bg-secondary border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-gold text-foreground"
              >
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="success">Success</option>
              </select>
            </div>
            <div className="flex gap-3 mt-2">
              <Button type="submit" disabled={saving}>
                {saving ? "Saving…" : editing ? "Save Changes" : "Create"}
              </Button>
              <Button type="button" variant="secondary" onClick={cancelForm}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* List */}
      {loading ? (
        <Card>
          <p className="text-accent-muted text-sm">Loading announcements…</p>
        </Card>
      ) : announcements.length === 0 ? (
        <Card>
          <p className="text-accent-muted text-sm">No announcements yet. Create your first one above.</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {announcements.map((ann) => (
            <Card key={ann.id}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold">{ann.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded border capitalize ${typeColors[ann.type]}`}
                    >
                      {ann.type}
                    </span>
                  </div>
                  <p className="text-sm text-accent-muted whitespace-pre-wrap">{ann.body}</p>
                  <p className="text-xs text-accent-muted mt-2">
                    Updated: {new Date(ann.updatedAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    variant="secondary"
                    onClick={() => openEdit(ann)}
                    className="text-sm py-1.5"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(ann.id)}
                    disabled={deleting === ann.id}
                    className="text-sm py-1.5"
                  >
                    {deleting === ann.id ? "…" : "Delete"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
