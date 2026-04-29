import { NextResponse } from "next/server";
import { SubmissionForm } from "@/types/roster";
import { addSubmission } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body: SubmissionForm = await request.json();

    // Basic validation
    if (!body.name || !body.townCenter || !body.rallyCap || !body.deploymentCap || !body.highestTier || !body.totalTroops) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await addSubmission({
      name: body.name,
      townCenter: body.townCenter,
      rallyCap: body.rallyCap,
      deploymentCap: body.deploymentCap,
      highestTier: body.highestTier,
      totalTroops: body.totalTroops,
    });

    return NextResponse.json({ success: true, message: "Submission added to verification queue." });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
