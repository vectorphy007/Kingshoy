import { NextResponse } from "next/server";
import { analyzeRally } from "@/lib/calculators/rally";
import { RallyInput } from "@/types/rally";

export async function POST(req: Request) {
  try {
    const body = await req.json() as RallyInput;
    const result = analyzeRally(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
}
