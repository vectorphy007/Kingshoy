import { NextResponse } from "next/server";
import { calculateBatchHeal } from "@/lib/calculators/economic";
import { BatchHealInput } from "@/types/economic";

export async function POST(req: Request) {
  try {
    const body = await req.json() as BatchHealInput;
    const result = calculateBatchHeal(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
}
