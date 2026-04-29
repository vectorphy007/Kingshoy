import { NextRequest, NextResponse } from "next/server";
import { getAnnouncements, saveAnnouncements } from "@/lib/storage";
import type { Announcement } from "@/lib/storage";

export async function GET() {
  try {
    const announcements = await getAnnouncements();
    return NextResponse.json(announcements);
  } catch {
    return NextResponse.json({ error: "Failed to fetch announcements" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Upsert: if id exists, update; otherwise create new
    const announcements = await getAnnouncements();
    const now = new Date().toISOString();

    if (body.id) {
      const idx = announcements.findIndex((a) => a.id === body.id);
      if (idx !== -1) {
        announcements[idx] = { ...announcements[idx], ...body, updatedAt: now };
      } else {
        announcements.push({ ...body, createdAt: now, updatedAt: now } as Announcement);
      }
    } else {
      const newAnnouncement: Announcement = {
        id: `ann_${Date.now()}`,
        title: body.title,
        body: body.body,
        type: body.type ?? "info",
        createdAt: now,
        updatedAt: now,
      };
      announcements.push(newAnnouncement);
    }

    await saveAnnouncements(announcements);
    return NextResponse.json({ success: true, announcements });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    const announcements = await getAnnouncements();
    const filtered = announcements.filter((a) => a.id !== id);
    await saveAnnouncements(filtered);
    return NextResponse.json({ success: true, announcements: filtered });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
