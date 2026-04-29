# SITEMAP.md

# Kingshot Alliance Companion — Site Map

This document defines the planned route structure and page hierarchy.

---

# Root

/ → Home / Dashboard

Purpose:
Central alliance command center.

Sections:
- Upcoming event countdowns
- Alliance announcements
- Availability heatmap
- Quick calculators
- Roster summary widgets
- Inactive member alerts
- Latest updates
- Needs verification queue
- Global search

---

# Roster

/roster → Alliance Roster Hub

Purpose:
Main alliance member database.

Subroutes:

## Leadership
/roster/leadership

R5 + R4 members.

Focus:
- rally leaders
- officers
- command members

---

## Veterans
/roster/veterans

R3 members.

Focus:
- strong fighters
- core event players

---

## Members
/roster/members

R2 + R1 members.

Focus:
- fillers
- activity monitoring
- inactive tracking

---

## Rally Leaders
/roster/rally-leaders

Best accounts for starting rallies.

Focus:
- highest rally cap
- best heroes
- strongest stats

---

## Rally Joiners
/roster/rally-joiners

Best support accounts.

Focus:
- joiner hero buffs
- expedition skills
- buff utility

---

## Submit Form
/roster/submit

Form fields:

- Name
- Town Center
- Rally Cap
- Deployment Cap
- Highest Tier
- Total Troops

---

## History
/roster/history/[member]

Historical member snapshots.

Includes:
- previous submissions
- growth trends
- status history

---

# Events

/events → Event Intelligence Center

Purpose:
Browse and plan events.

Includes:
- event cards
- event search
- filters

Subroutes:

## Calendar
/events/calendar

Monthly / weekly event cycle calendar.

---

## Event Detail
/events/[event]

Examples:
- /events/bear-hunt
- /events/viking-vengeance
- /events/strongest-governor
- /events/alliance-championship
- /events/kvk
- /events/desert-trial
- /events/roulette-hero
- /events/eternitys-reach

Each page includes:
- event guide
- timers
- linked calculators
- best formations
- recommended heroes

---

# Calculators

/calculators → Calculator Directory

Purpose:
All tools.

Subroutes:

## Bear Hunt
/calculators/bear-hunt

---

## Championship
/calculators/championship

Lane distribution.

---

## Strongest Governor
/calculators/governor

Point tracker.

---

## VIP Planner
/calculators/vip

---

## Truegold Planner
/calculators/truegold

---

## Training Optimizer
/calculators/training

---

## Rally Cap Calculator
/calculators/rally-cap

---

# Guides / Knowledge Base

/guides → Knowledge Base Home

Purpose:
Static guides / SEO pages.

Subroutes:

## Heroes
/guides/heroes

/guides/heroes/[hero]

---

## Formations
/guides/formations

---

## Events Guides
/guides/events

---

## Research Priorities
/guides/research

---

## FAQ
/guides/faq

---

# Search

/search

Purpose:
Global search results.

Categories:
- members
- heroes
- events
- calculators
- guides

---

# Profile

/profile

Purpose:
User/member personal profile.

Includes:
- current stats
- previous submissions
- update actions

---

# Analytics

/analytics

Purpose:
Alliance-wide analytics.

Includes:
- growth charts
- participation charts
- troop trends
- power trends

---

# Admin

/admin

Restricted pages.

Subroutes:

## Submissions Queue
/admin/submissions

Approve/reject records.

---

## Announcements
/admin/announcements

Manage dashboard notices.

---

## Event Management
/admin/events

Edit timers/manual overrides.

---

## Analytics
/admin/analytics

Administrative analytics.

---

## Settings
/admin/settings

Alliance/site settings.

---

# API Routes

/api/submit

/api/search

/api/events

/api/roster

/api/verify

/api/history

/api/calculate/[tool]

---

# Mobile Requirements

All pages must support:

- responsive layouts
- mobile navigation
- mobile-friendly forms
- stacked widgets/cards
- card-based roster views
- responsive tables
- bottom sheets / modals

---

# Future Expansion

Possible future routes:

/heroes  
/tier-lists  
/territory  
/map  
/notifications  
/ai-tools  
/reports  

---

# Build Phases

Phase 1:
Dashboard + Roster + Submit

Phase 2:
Events + Basic Calculators

Phase 3:
Advanced Calculators + Rally Intelligence

Phase 4:
Admin Tools + Search

Phase 5:
Analytics + AI grouping
