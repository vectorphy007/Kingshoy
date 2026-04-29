Perfect. We’ll go one by one.

First file: **ARCHITECTURE.md**

````md id="k1wp72"
# ARCHITECTURE.md

# Kingshot Alliance Companion — Architecture Overview

This document defines the technical architecture of the Kingshot Alliance Companion platform.

The goal is to keep the system:

- lightweight
- scalable
- maintainable
- Vercel-friendly
- easy to extend

---

# High-Level Architecture

The platform follows a static-first architecture with lightweight dynamic features.

Layers:

1. Frontend/UI Layer  
2. API / Logic Layer  
3. Data / Storage Layer  
4. Derived Intelligence Layer  

---

# 1. Frontend / UI Layer

Tech stack:

- Next.js App Router
- React
- TypeScript
- TailwindCSS

Responsibilities:

- render pages
- display dashboards
- render tables/cards
- handle forms
- search UI
- calculator UI
- admin UI

---

## Main UI Modules

### Dashboard
Displays:

- event countdowns
- announcements
- quick calculators
- heatmaps
- alerts

---

### Roster Hub

Displays:

- Leadership
- Veterans
- Members
- Rally Leaders
- Rally Joiners

Supports:

- sorting
- filtering
- search
- history views

---

### Event Center

Displays:

- event calendar
- event detail pages
- guides
- timers

---

### Calculators

Dedicated calculator pages.

Each calculator has:

- input pane
- output pane
- explanations

---

### Admin Panel

Restricted interface for:

- approvals
- announcements
- analytics
- settings

---

# 2. API / Logic Layer

Purpose:

Handle lightweight dynamic operations.

Examples:

```plaintext id="jlwmcw"
/api/submit
/api/search
/api/roster
/api/history
/api/events
/api/calculate/*
/api/admin/*
````

Responsibilities:

* validation
* parsing
* filtering
* calculations
* approvals
* search indexing

---

# 3. Data / Storage Layer

Storage should stay simple.

Preferred order:

### Level 1

JSON / flat-file storage

Examples:

```plaintext id="e92z2l"
/data/roster/
/data/submissions/
/data/events/
/data/guides/
```

---

### Level 2

Vercel Blob / KV

For:

* larger dynamic datasets
* persistent writes

---

### Level 3

Light DB only if necessary

Examples:

* Postgres
* Supabase

Avoid early.

---

# Data Trust Architecture

The platform uses 3 trust layers.

---

## Layer 1: Raw Submissions

Append-only.

Stores every form submission.

Example:

```json id="40v1jj"
{
  "name": "Vector",
  "townCenter": 21,
  "submittedAt": "2026-04-29"
}
```

Never directly used by calculators.

---

## Layer 2: Verified Current Roster

Approved records only.

Used by:

* roster pages
* calculators
* analytics

---

## Layer 3: Derived Intelligence Layer

Generated data.

Examples:

* grouped ranks
* rally leaders
* best joiners
* inactivity alerts
* suspicious changes

---

# Submission Flow

Flow:

```plaintext id="z5mh4o"
User submits form
↓
Validation
↓
Raw submissions log
↓
Admin review / auto-review
↓
Approved or rejected
↓
Verified roster updated
↓
Derived intelligence recalculated
```

---

# Search Architecture

Global search queries:

* roster
* events
* guides
* calculators
* heroes

Implementation:

Simple index-based search first.

Later:

fuzzy search / Fuse.js / server-side indexing.

---

# Calculator Architecture

Each calculator should be isolated.

Structure:

```plaintext id="5ptbmk"
/lib/calculators/
```

Examples:

```plaintext id="04zjfr"
bear-hunt.ts
championship.ts
governor.ts
vip.ts
truegold.ts
```

Each calculator includes:

* inputs
* formulas
* validation
* outputs

---

# AI / Grouping Layer

Optional future layer.

Rules-first.

Possible flow:

```plaintext id="z66nnh"
verified roster
↓
rules engine
↓
weighted scoring
↓
optional ML inference
```

Possible models:

* decision tree
* logistic regression

Inference only.

Training offline.

---

# Mobile Architecture

Responsive-first.

Patterns:

* cards instead of tables
* accordions
* drawers
* bottom sheets

---

# Performance Strategy

Keep lightweight.

Use:

* server components
* static rendering
* caching
* incremental generation

Avoid:

* unnecessary hydration
* huge bundles

---

# Deployment Architecture

Preferred:

Vercel

Supports:

* Next.js
* APIs
* edge/serverless functions

Secondary:

GitHub Pages for static sections.

---

# Security Model

No auth initially.

Protection methods:

* moderation queue
* verification flags
* rate limiting
* validation rules

---

# Future Expansion

Potential future modules:

* AI tools
* OCR extraction
* territory maps
* notifications
* reports

Architecture should support expansion without rewrites.

## Global Time Standardization and Localization

Kingshot operates on a universal server-time model.

All official event cycles, daily resets, and time-sensitive mechanics are synchronized to **UTC**.

The game’s “new day” refresh occurs precisely at:

**00:00 UTC**

This refresh governs:

* Daily missions
* Resource resets
* Event phase changes
* VIP / login rewards
* gathering refreshes
* stamina-related mechanics
* countdown timers

The companion site must use **UTC as the single source of truth** for all backend calculations and scheduling logic.

This ensures consistency across alliances with globally distributed players.

However, because alliance members are located worldwide, all UTC-based times must be converted dynamically into the user’s local timezone on the frontend.

For example:

**Bear Hunt starts at 19:00 UTC**

Should display as:

* 00:30 IST for India
* 15:00 EDT for Eastern US
* 21:00 CEST for Central Europe

The site should automatically detect the user’s local timezone using browser APIs such as:

```javascript id="j21ldo"
Intl.DateTimeFormat().resolvedOptions().timeZone
```

Then convert UTC event timestamps into local display times.

Recommended display format:

**Local Time**
**UTC reference in smaller text**

Example:

```text id="yjlwmf"
00:30 IST
(19:00 UTC)
```

This should apply to:

* event calendars
* countdown widgets
* dashboard reminders
* availability heatmaps
* announcement scheduling

All server-side stored timestamps should remain in UTC ISO format.

Example:

```text id="ub4jbe"
2026-04-29T19:00:00Z
```

This avoids timezone drift and daylight-saving issues.

---

## Internationalization and Translation Accessibility

Kingshot has a global player base.

Alliance members may come from:

* Asia
* Europe
* North America
* South America
* Middle East
* Africa

Many players may not understand English fluently.

To maximize usability and adoption, the companion site should provide an accessible translation option.

Instead of implementing a heavy custom i18n system in early versions, the platform should leverage the user’s native browser translation functionality.

Recommended implementation:

Provide a clearly visible “Translate” or “View in your language” control.

This button can trigger or guide the user toward native browser translation tools.

Examples:

**Google Chrome:**
“Translate this page”

**Microsoft Edge:**
Built-in page translation

**Safari:**
Built-in webpage translation

This approach provides:

* lower development overhead
* immediate multilingual support
* automatic content translation
* no maintenance burden for language files

For future expansion, a proper i18n layer can be implemented.

Potential future support:

* English
* Hindi
* Spanish
* Portuguese
* Arabic
* Russian
* German
* French

Critical UI labels should remain icon-supported to reduce language dependency.

Examples:

* Search icon
* Calendar icon
* Warning icon
* Rally icon
* Hero icon

This improves usability even when translation is imperfect.

Dynamic content such as:

* guides
* announcements
* event notes
* calculator explanations

should remain browser-translatable.

Short labels and concise phrasing improve translation accuracy.

The overall goal is to make the platform universally accessible regardless of geography or language.
