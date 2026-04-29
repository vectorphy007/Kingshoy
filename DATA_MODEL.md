
# DATA_MODEL.md

# Kingshot Alliance Companion — Data Model

This document defines the schemas and data structures used across the platform.

The system uses a layered trust model:

1. Raw submissions  
2. Verified roster  
3. Derived intelligence  

---

# Core Public Form Schema

The public form must keep this exact visible schema:

```text id="j11jpn"
Name
Town Center
Rally Cap
Deployment Cap
Highest Tier
Total Troops
````

Example:

```text id="l8x1u3"
Vector
TC21
225K
47K
T7
78K
```

---

# 1. Raw Submission Schema

Path example:

```plaintext id="juh29s"
/data/submissions/
```

Example:

```json id="jqcnj8"
{
  "id": "sub_001",
  "memberId": "mem_001",
  "name": "Vector",
  "townCenter": 21,
  "rallyCap": 225000,
  "deploymentCap": 47000,
  "highestTier": "T7",
  "totalTroops": 78000,
  "submittedAt": "2026-04-29T12:00:00Z",
  "source": "public_form",
  "status": "pending",
  "confidence": 0.75,
  "notes": null
}
```

Rules:

* append-only
* immutable
* never overwritten

---

# 2. Verified Roster Schema

Path example:

```plaintext id="8b7cyr"
/data/roster/
```

Example:

```json id="58h9z4"
{
  "memberId": "mem_001",
  "name": "Vector",
  "townCenter": 21,
  "rallyCap": 225000,
  "deploymentCap": 47000,
  "highestTier": "T7",
  "totalTroops": 78000,
  "rank": "R3",
  "status": "active",
  "verified": true,
  "lastVerifiedAt": "2026-04-29T13:00:00Z",
  "historyRef": ["sub_001", "sub_002"]
}
```

Rules:

* source of truth
* used in UI
* used in calculators

---

# 3. History Schema

Path example:

```plaintext id="6myg68"
/data/history/
```

Example:

```json id="w70f2x"
{
  "memberId": "mem_001",
  "snapshots": [
    {
      "submittedAt": "2026-04-20",
      "townCenter": 20,
      "rallyCap": 195000
    },
    {
      "submittedAt": "2026-04-29",
      "townCenter": 21,
      "rallyCap": 225000
    }
  ]
}
```

---

# 4. Member Lifecycle Fields

Possible statuses:

```text id="taz3y0"
active
inactive
left
archived
rejoined
```

Rules:

* never hard delete
* preserve history

---

# 5. Derived Intelligence Schema

Path example:

```plaintext id="fd4qz7"
/data/derived/
```

Example:

```json id="2fysw5"
{
  "memberId": "mem_001",
  "group": "rally_leader",
  "score": 92,
  "reasons": [
    "High rally cap",
    "High tier"
  ],
  "suggestedRole": "Bear Hunt Leader"
}
```

Possible groups:

```text id="pvx84a"
leadership
veteran
member
rally_leader
rally_joiner
inactive
needs_review
```

---

# 6. Rank Schema

Possible values:

```text id="yz0tbp"
R5
R4
R3
R2
R1
```

---

# 7. Hero Schema

Future use.

Example:

```json id="6q7ppw"
{
  "heroId": "hero_001",
  "name": "Amadeus",
  "type": "Infantry",
  "generation": 2,
  "skills": [
    {
      "name": "Aegis of Fate",
      "type": "Expedition",
      "value": 25
    }
  ]
}
```

---

# 8. Rally Joiner Schema

Example:

```json id="65gtnv"
{
  "memberId": "mem_001",
  "primaryJoinerHero": "Chenko",
  "expeditionSkillLevel": 5,
  "buffType": "Lethality",
  "buffValue": 25
}
```

---

# 9. Event Schema

Path example:

```plaintext id="ttzv7f"
/data/events/
```

Example:

```json id="ljm1v3"
{
  "eventId": "bear_hunt",
  "name": "Bear Hunt",
  "category": "PvE",
  "cycle": "weekly",
  "durationMinutes": 30,
  "linkedCalculators": ["bear-hunt"]
}
```

---

# 10. Guide Schema

Example:

```json id="ij6q76"
{
  "guideId": "guide_001",
  "title": "Best Bear Hunt Formation",
  "category": "formations",
  "slug": "best-bear-hunt-formation"
}
```

---

# 11. Search Index Schema

Example:

```json id="8f40gq"
{
  "id": "search_001",
  "type": "member",
  "title": "Vector",
  "url": "/roster/veterans/vector"
}
```

Types:

```text id="lfj5hp"
member
hero
event
guide
calculator
```

---

# 12. Calculator Input / Output Schema

Example:

```json id="i1q4zf"
{
  "calculator": "vip",
  "inputs": {
    "currentVip": 4
  },
  "outputs": {
    "daysToNext": 12
  }
}
```

---

# 13. Admin Actions Schema

Example:

```json id="e5z76s"
{
  "actionId": "act_001",
  "adminId": "admin_001",
  "type": "approve_submission",
  "targetId": "sub_001",
  "timestamp": "2026-04-29T13:00:00Z"
}
```

---

# 14. Availability Heatmap Schema

Example:

```json id="8vzk72"
{
  "memberId": "mem_001",
  "availability": [
    {
      "day": "Monday",
      "hours": [18,19,20]
    }
  ]
}
```

---

# Validation Rules

Town Center:

* 1–30
* TG1+ later

Highest Tier:

```text id="5hhw7l"
T1-T12
```

Numeric fields:

* integers only internally

Shorthand accepted in UI:

```text id="h9i8pm"
225K
1.5M
```

Parsed to:

```text id="q8t4mj"
225000
1500000
```

---

# Relationships

```plaintext id="h9y0ho"
Member
├── submissions
├── history
├── availability
├── derived intelligence
├── heroes
```

This structure should remain simple and portable.
