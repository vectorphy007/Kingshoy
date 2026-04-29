import { NextResponse } from "next/server";
import { calculateTruegoldCost } from "@/lib/calculators/economic";
import { TruegoldCostInput } from "@/types/economic";

export async function POST(req: Request) {
  try {
    const body = await req.json() as TruegoldCostInput;
    const result = calculateTruegoldCost(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
}
