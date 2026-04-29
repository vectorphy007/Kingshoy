
# API.md

# Kingshot Alliance Companion — API Documentation

This document defines the internal API routes and expected request/response formats.

The API should remain lightweight and Vercel-friendly.

Goals:

- simple
- maintainable
- predictable
- easy to expand

---

# Base API Structure

```plaintext id="1hl3ul"
/api/*
````

Examples:

```plaintext id="0z0t3o"
/api/submit
/api/search
/api/roster
/api/history
/api/events
/api/calculate/*
/api/admin/*
```

---

# 1. Submit Form API

Route:

```plaintext id="wxyg0o"
/api/submit
```

Method:

```text id="ud4jmv"
POST
```

Purpose:

Receive public roster submissions.

---

## Request Body

```json id="lcfw5x"
{
  "name": "Vector",
  "townCenter": "TC21",
  "rallyCap": "225K",
  "deploymentCap": "47K",
  "highestTier": "T7",
  "totalTroops": "78K"
}
```

---

## Behavior

Should:

* parse shorthand values
* validate data
* store raw submission
* return success/failure

---

## Success Response

```json id="2j8b2q"
{
  "success": true,
  "submissionId": "sub_001",
  "message": "Submission received"
}
```

---

## Error Response

```json id="gmk6v2"
{
  "success": false,
  "error": "Invalid Town Center"
}
```

---

# 2. Search API

Route:

```plaintext id="z0v1lk"
/api/search
```

Method:

```text id="v2nm2s"
GET
```

Example:

```plaintext id="xnyukr"
/api/search?q=amadeus
```

Searches across:

* members
* heroes
* events
* guides
* calculators

---

## Response

```json id="klgv5t"
{
  "results": [
    {
      "type": "hero",
      "title": "Amadeus",
      "url": "/guides/heroes/amadeus"
    }
  ]
}
```

---

# 3. Roster API

Route:

```plaintext id="9y5qbi"
/api/roster
```

Method:

```text id="5cuhh4"
GET
```

Supports query params:

```plaintext id="u8r4e6"
?rank=R3
?group=rally_leader
?search=vector
```

---

## Response

```json id="0c0r0y"
{
  "members": []
}
```

---

# 4. Single Member API

Route:

```plaintext id="o95kjf"
/api/roster/[memberId]
```

Method:

```text id="tr4hry"
GET
```

Response:

```json id="4z1ykh"
{
  "memberId": "mem_001",
  "name": "Vector"
}
```

---

# 5. History API

Route:

```plaintext id="hrrl2v"
/api/history/[memberId]
```

Method:

```text id="5b5j2w"
GET
```

Returns:

* snapshots
* historical growth

---

# 6. Events API

Route:

```plaintext id="jq3m7s"
/api/events
```

Method:

```text id="2a8ytb"
GET
```

Returns:

* event list
* cycles
* metadata

---

# 7. Single Event API

Route:

```plaintext id="c3u6uh"
/api/events/[event]
```

Method:

```text id="v6i2tq"
GET
```

Returns:

* guide
* timers
* linked calculators

---

# 8. Calculator APIs

Route pattern:

```plaintext id="7vw2kp"
/api/calculate/[tool]
```

Examples:

```plaintext id="r41fuv"
/api/calculate/bear-hunt
/api/calculate/vip
/api/calculate/governor
```

Method:

```text id="v2jvya"
POST
```

---

## Example Request

```json id="3h7y4m"
{
  "currentVip": 4
}
```

---

## Example Response

```json id="9cwrqo"
{
  "daysToNext": 12
}
```

---

# 9. Verify Submission API

Route:

```plaintext id="l6b5h6"
/api/verify/[submissionId]
```

Method:

```text id="kj0r4g"
POST
```

Purpose:

Approve or reject a submission.

---

## Request

```json id="k6s4yd"
{
  "action": "approve"
}
```

---

# 10. Admin Announcements API

Route:

```plaintext id="ujyx0w"
/api/admin/announcements
```

Methods:

```text id="t7xoq6"
GET
POST
PUT
DELETE
```

---

# 11. Admin Events API

Route:

```plaintext id="4j8h8j"
/api/admin/events
```

Methods:

```text id="qmv4wh"
GET
POST
PUT
DELETE
```

---

# 12. Admin Analytics API

Route:

```plaintext id="q3jv6z"
/api/admin/analytics
```

Method:

```text id="yw9n1e"
GET
```

Returns:

* alliance stats
* trends
* growth metrics

---

# 13. Availability API

Route:

```plaintext id="m8t3vk"
/api/availability
```

Method:

```text id="9w7t0n"
POST
GET
```

Purpose:

Store / retrieve heatmap data.

---

# Common Validation Rules

Town Center:

```text id="k9e2v1"
1–30 / TG
```

Highest Tier:

```text id="s3j6qn"
T1–T12
```

Numeric parsing:

```text id="g9k4f2"
225K → 225000
1.5M → 1500000
```

---

# Status Codes

```text id="9g6n3h"
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Server Error
```

---

# Security Rules

Must include:

* validation
* sanitization
* rate limiting
* moderation enforcement

Public APIs should never:

* directly overwrite verified roster
* bypass approval flow

---

# Future APIs

Possible future additions:

```plaintext id="d1x8rc"
/api/ocr
/api/notifications
/api/reports
/api/ai/grouping
/api/map
```

Keep routes modular and predictable.

