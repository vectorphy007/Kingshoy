import { NextResponse } from "next/server";
import { calculateDamage } from "@/lib/calculators/damage";
import { DamageInput } from "@/types/combat";

export async function POST(req: Request) {
  try {
    const body = await req.json() as DamageInput;
    const result = calculateDamage(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
}
