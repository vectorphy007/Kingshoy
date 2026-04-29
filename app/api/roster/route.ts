import { NextResponse } from "next/server";
import rosterData from "@/data/roster/mock.json";

export async function GET() {
  // Return the mock verified roster
  return NextResponse.json(rosterData);
}
