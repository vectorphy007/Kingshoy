import { RosterMember, RosterGroup } from "@/types/roster";

// A simple rules engine to suggest player roles based on their stats
export function suggestPlayerRole(member: Partial<RosterMember>, activityScore?: number): RosterGroup {
  const tc = member.townCenter || 0;

  // Parse rally cap
  let rallyCapNum = 0;
  if (typeof member.rallyCap === "string") {
    // "225K" -> 225000
    const val = parseFloat(member.rallyCap);
    if (!isNaN(val)) rallyCapNum = member.rallyCap.toUpperCase().includes('K') ? val * 1000 : val;
  } else if (typeof member.rallyCap === "number") {
    rallyCapNum = member.rallyCap;
  }

  // Base rules including activity heuristic if available
  const isActive = activityScore === undefined || activityScore > 50;

  if (!isActive && tc > 0) {
    return "Inactive";
  }

  // Advanced Rules based on research
  if (tc >= 35 && rallyCapNum >= 300000) {
    return "Rally Leaders";
  } else if (tc >= 30) {
    return "Veterans"; // Transitioning to Truegold
  } else if (tc >= 20) {
    return "Members";
  } else if (tc > 0) {
    return "Needs Review"; // Very low level
  }

  return "Needs Review";
}
