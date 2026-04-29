/**
 * Storage abstraction layer.
 * Uses @vercel/kv when KV_REST_API_URL and KV_REST_API_TOKEN are set,
 * otherwise falls back to local JSON file operations (for dev/testing).
 */

import fs from "fs";
import path from "path";

export interface Submission {
  id: string;
  name: string;
  townCenter: number;
  rallyCap: string;
  deploymentCap: string;
  highestTier: string;
  totalTroops: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  reviewedAt?: string;
  reviewNote?: string;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  type: "info" | "warning" | "success";
  createdAt: string;
  updatedAt: string;
}

function useKV(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

// ─── KV helpers ──────────────────────────────────────────────────────────────

async function kvGet<T>(key: string): Promise<T | null> {
  const { kv } = await import("@vercel/kv");
  return kv.get<T>(key);
}

async function kvSet(key: string, value: unknown): Promise<void> {
  const { kv } = await import("@vercel/kv");
  await kv.set(key, value);
}

// ─── Local JSON helpers ───────────────────────────────────────────────────────

function localRead<T>(file: string, fallback: T): T {
  try {
    const raw = fs.readFileSync(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function localWrite(file: string, value: unknown): void {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2), "utf8");
}

const DATA_DIR = path.join(process.cwd(), "data");

// ─── Submissions ─────────────────────────────────────────────────────────────

export async function getSubmissions(): Promise<Submission[]> {
  if (useKV()) {
    return (await kvGet<Submission[]>("submissions")) ?? [];
  }
  return localRead<Submission[]>(path.join(DATA_DIR, "submissions", "mock.json"), []);
}

export async function addSubmission(sub: Omit<Submission, "id" | "submittedAt" | "status">): Promise<Submission> {
  const submissions = await getSubmissions();
  const newSub: Submission = {
    ...sub,
    id: crypto.randomUUID ? crypto.randomUUID() : `sub_${Date.now()}`,
    submittedAt: new Date().toISOString(),
    status: "pending",
  };
  submissions.push(newSub);

  if (useKV()) {
    await kvSet("submissions", submissions);
  } else {
    localWrite(path.join(DATA_DIR, "submissions", "mock.json"), submissions);
  }

  return newSub;
}

export async function updateSubmissionStatus(
  id: string,
  status: "approved" | "rejected",
  reviewNote?: string
): Promise<Submission | null> {
  const submissions = await getSubmissions();
  const idx = submissions.findIndex((s) => s.id === id);
  if (idx === -1) return null;

  submissions[idx] = {
    ...submissions[idx],
    status,
    reviewedAt: new Date().toISOString(),
    reviewNote,
  };

  if (useKV()) {
    await kvSet("submissions", submissions);
  } else {
    localWrite(path.join(DATA_DIR, "submissions", "mock.json"), submissions);
  }

  return submissions[idx];
}

// ─── Announcements ────────────────────────────────────────────────────────────

const ANNOUNCEMENTS_FILE = path.join(DATA_DIR, "announcements.json");

export async function getAnnouncements(): Promise<Announcement[]> {
  if (useKV()) {
    return (await kvGet<Announcement[]>("announcements")) ?? getDefaultAnnouncements();
  }
  return localRead<Announcement[]>(ANNOUNCEMENTS_FILE, getDefaultAnnouncements());
}

export async function saveAnnouncements(announcements: Announcement[]): Promise<void> {
  if (useKV()) {
    await kvSet("announcements", announcements);
  } else {
    localWrite(ANNOUNCEMENTS_FILE, announcements);
  }
}

function getDefaultAnnouncements(): Announcement[] {
  return [
    {
      id: "1",
      title: "Welcome to Kingshot Alliance Command",
      body: "Use the roster tools to submit and manage alliance member stats.",
      type: "info",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}
