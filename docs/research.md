# research.md

# Kingshot Alliance Companion — Research Summary

This file contains consolidated product and gameplay research.

## Problem Being Solved

Kingshot alliances currently rely on:

- spreadsheets
- Discord chats
- screenshots
- manual coordination

This causes:

- stale data
- inefficient rallies
- missed events
- poor leadership visibility

The platform centralizes alliance intelligence.

---

## Core Gameplay Systems

Kingshot combines:

- city building
- troop progression
- hero collection
- alliance warfare
- recurring events

Core progression milestones:

- TC1–30
- Truegold progression
- War Academy
- T11 / T12 troops

---

## Alliance Roles

### Leadership

R5 / R4

Responsibilities:

- event planning
- rally organization
- approvals
- announcements
- lane assignments

### Veterans

R3

Strong contributors.

### Members

R1 / R2

Fill rallies and support.

---

## Rally System

Rally Leaders contribute:

- full stats
- gear
- research
- pets
- hero skills

Rally Joiners contribute:

- troops
- first expedition skill of leftmost hero

Only top 4 joiner skills apply.

This makes roster organization critical.

---

## Major Events

Tracked events:

- Bear Hunt
- Viking Vengeance
- Strongest Governor
- Alliance Championship
- KvK
- Desert Trial
- Roulette Hero
- Eternity’s Reach

---

## Key Site Modules

- Dashboard
- Roster Hub
- Event Center
- Calculators
- Guides / SEO
- Admin Panel

---

## Core Data Schema

Visible form fields:

- Name
- Town Center
- Rally Cap
- Deployment Cap
- Highest Tier
- Total Troops

---

## Retention Features

Useful retention loops:

- daily event checks
- calculator usage
- roster updates
- announcements
- reminders

---

## Future Expansion

Potential additions:

- OCR scanning
- notifications
- map tools
- AI grouping

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
