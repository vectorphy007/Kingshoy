export type EventType = "bear-hunt" | "viking-vengeance" | "strongest-governor" | "alliance-championship" | "kvk" | "desert-trial" | "roulette-hero" | "eternitys-reach";

export interface KingshotEvent {
  id: string;
  name: string;
  type: EventType;
  description: string;
  startTimeUTC: string; // ISO 8601 string
  endTimeUTC: string; // ISO 8601 string
}
