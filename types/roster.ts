export type RosterStatus = "active" | "inactive" | "left" | "archived" | "rejoined";
export type RosterGroup = "Leadership" | "Veterans" | "Members" | "Rally Leaders" | "Rally Joiners" | "Inactive" | "Needs Review";

export interface RosterMember {
  id: string;
  name: string;
  townCenter: number;
  rallyCap: string | number; // String e.g. "225K" or Number 225000
  deploymentCap: string | number;
  highestTier: string; // e.g., "T7"
  totalTroops: string | number;
  status: RosterStatus;
  group: RosterGroup;
  lastUpdated: string; // ISO 8601 string
}

export interface SubmissionForm {
  name: string;
  townCenter: number;
  rallyCap: string;
  deploymentCap: string;
  highestTier: string;
  totalTroops: string;
}
