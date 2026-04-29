import { RosterMember } from "@/types/roster";

export function detectAnomalies(member: RosterMember): string[] {
  const anomalies: string[] = [];

  const tc = member.townCenter || 0;

  // Parse rally cap
  let rallyCapNum = 0;
  if (typeof member.rallyCap === "string") {
    const val = parseFloat(member.rallyCap);
    if (!isNaN(val)) rallyCapNum = member.rallyCap.toUpperCase().includes('K') ? val * 1000 : member.rallyCap.toUpperCase().includes('M') ? val * 1000000 : val;
  } else if (typeof member.rallyCap === "number") {
    rallyCapNum = member.rallyCap;
  }

  // Example rules for impossible stats
  if (tc < 20 && rallyCapNum > 150000) {
    anomalies.push("Rally cap is unusually high for a Town Center below level 20.");
  }

  if (tc > 50) {
    anomalies.push("Town Center level exceeds typical known maximums.");
  }

  return anomalies;
}
