# Kingshot Alliance Companion

A modern, multi-page alliance management and strategy companion platform for the mobile strategy game **Kingshot**.

This platform is designed to help alliance leaders and members manage events, optimize rallies, organize rosters, and access useful calculators and guides.

---

## Features

### Dashboard / Command Center
A central alliance HQ screen featuring:

- upcoming event countdowns
- alliance announcements
- availability heatmap
- quick calculators
- roster summary widgets
- inactive member alerts
- recent updates
- verification queue

---

### Alliance Roster System
Organized alliance member database with separate sections for:

- Leadership (R5 / R4)
- Veterans (R3)
- Members (R2 / R1)
- Rally Leaders
- Rally Joiners

Includes:

- sorting
- filtering
- search
- historical snapshots
- verification statuses

---

### Events Intelligence Center
Track and plan alliance events:

- Bear Hunt
- Viking Vengeance
- Strongest Governor
- Alliance Championship
- Kingdom of Power / KvK
- Desert Trial
- Roulette Hero
- Eternity's Reach

Includes:

- event guides
- event calendars
- timers
- linked calculators

---

### Calculators
Useful tools for players and officers:

- Bear Hunt Optimizer
- Championship Lane Distributor
- Strongest Governor Tracker
- VIP Planner
- Truegold Planner
- Training Optimizer
- Rally Cap Calculator

---

### Knowledge Base
SEO-friendly guides and static content:

- hero guides
- troop formations
- event walkthroughs
- research priorities
- FAQs

---

### Admin Panel
For alliance leadership:

- approve/reject submissions
- edit announcements
- manage events
- analytics
- settings

---

## Tech Stack

Recommended stack:

- Next.js
- React
- TypeScript
- TailwindCSS

Storage:

- JSON / Flat-file
- optional Vercel Blob / KV

Deployment:

- Vercel
- GitHub Pages compatibility where possible

---

## Project Structure

```bash
/
├── AGENT.md
├── DESIGN.md
├── SITEMAP.md
├── README.md
│
├── app/
├── components/
├── lib/
├── data/
├── docs/
├── public/
├── scripts/
└── types/
```

---

## Public Form Schema

The public member form uses this exact schema:

```text
Name
Town Center
Rally Cap
Deployment Cap
Highest Tier
Total Troops
```

Example:

```text
Vector
TC21
225K
47K
T7
78K
```

---

## Data Architecture

The system uses a 3-layer trust model:

### 1. Raw Submissions

Append-only immutable submission log.

### 2. Verified Current Roster

Only approved entries affect live UI and calculators.

### 3. Derived Groupings

Auto-generated groups:

* Leadership
* Veterans
* Members
* Rally Leaders
* Rally Joiners
* Inactive
* Needs Review

---

## Installation

Clone the repo:

```bash
git clone <repo-url>
cd kingshot-alliance-companion
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Run production:

```bash
npm run start
```

---

## Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_SITE_URL=
BLOB_READ_WRITE_TOKEN=
KV_URL=
KV_REST_API_URL=
KV_REST_API_TOKEN=
```

---

## Mobile Support

The platform is designed for both:

* Desktop (admins / officers)
* Mobile (players while gaming)

Mobile includes:

* responsive cards
* accordion roster entries
* mobile drawers
* bottom sheets
* touch-friendly forms

---

## Build Roadmap

### Phase 1

Dashboard + Roster + Submit Form

### Phase 2

Events + Basic Calculators

### Phase 3

Advanced Calculators + Rally Intelligence

### Phase 4

Admin + Search + SEO

### Phase 5

Analytics + AI Grouping

---

## Future Features

Potential additions:

* AI-based grouping suggestions
* territory map tools
* notifications/reminders
* OCR stat extraction
* advanced analytics
* alliance reports

---

## Contribution Rules

Please follow:

* AGENT.md for implementation rules
* DESIGN.md for UI consistency
* SITEMAP.md for route structure

Do not overengineer the stack.

Keep it simple, maintainable, and scalable.

---

## License

MIT