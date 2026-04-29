# FILE_TREE.md

# Kingshot Alliance Command — Repository File Tree

This document defines the expected repository structure.

The goal is to keep the project:

* organized
* scalable
* maintainable
* easy to navigate

---

```plaintext
KINGSHOTBATTLE/
│
├── docs/
│   ├── research.md
│   ├── detailed_research.md
│   ├── mechanics-analysis.md
│   └── reports/
│
├── stitch_kingshot_alliance_command/
│   ├── a_tactical_dark_fantasy_strategy_game/
│   ├── admin_control_panel/
│   ├── alliance_roster_hub/
│   ├── calculator_directory/
│   ├── calculators_mobile/
│   ├── dashboard_mobile/
│   ├── event_intelligence_center/
│   ├── events_mobile/
│   ├── global_dashboard/
│   ├── kingshot_alliance_design/
│   ├── member_profile/
│   ├── member_roster_submission/
│   ├── roster_hub_mobile/
│   ├── search_results/
│   ├── strategic_calculators/
│   ├── submission_successful/
│   ├── submission_successful_2/
│   ├── submission_successful_3/
│   ├── design.md
│   └── ...
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── roster/
│   │   ├── page.tsx
│   │   ├── leadership/
│   │   │   └── page.tsx
│   │   ├── veterans/
│   │   │   └── page.tsx
│   │   ├── members/
│   │   │   └── page.tsx
│   │   ├── rally-leaders/
│   │   │   └── page.tsx
│   │   ├── rally-joiners/
│   │   │   └── page.tsx
│   │   └── submit/
│   │       └── page.tsx
│   │
│   ├── events/
│   │   ├── page.tsx
│   │   ├── bear-hunt/
│   │   ├── viking-vengeance/
│   │   ├── strongest-governor/
│   │   ├── alliance-championship/
│   │   ├── kvk/
│   │   ├── desert-trial/
│   │   ├── roulette-hero/
│   │   └── eternitys-reach/
│   │
│   ├── calculators/
│   │   ├── page.tsx
│   │   ├── bear-hunt/
│   │   ├── championship/
│   │   ├── governor/
│   │   ├── vip/
│   │   ├── truegold/
│   │   ├── training/
│   │   └── rally-cap/
│   │
│   ├── guides/
│   │   ├── page.tsx
│   │   ├── heroes/
│   │   ├── formations/
│   │   ├── faq/
│   │   └── research-priorities/
│   │
│   ├── admin/
│   │   ├── page.tsx
│   │   ├── announcements/
│   │   ├── analytics/
│   │   ├── submissions/
│   │   ├── events/
│   │   └── settings/
│   │
│   ├── search/
│   │   └── page.tsx
│   │
│   └── api/
│       ├── submit/
│       ├── search/
│       ├── roster/
│       ├── history/
│       ├── events/
│       ├── availability/
│       ├── calculate/
│       └── admin/
│
├── components/
│   ├── ui/
│   ├── dashboard/
│   ├── roster/
│   ├── events/
│   ├── calculators/
│   ├── forms/
│   ├── search/
│   ├── charts/
│   └── layout/
│
├── lib/
│   ├── calculators/
│   ├── validation/
│   ├── grouping/
│   ├── search/
│   ├── timezone/
│   ├── translation/
│   └── utils/
│
├── types/
│   ├── roster.ts
│   ├── event.ts
│   ├── calculator.ts
│   ├── api.ts
│   └── admin.ts
│
├── data/
│   ├── roster/
│   ├── submissions/
│   ├── history/
│   ├── events/
│   ├── guides/
│   ├── analytics/
│   └── derived/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── heroes/
│   ├── events/
│   └── logos/
│
├── styles/
│
├── README.md
├── agents.md
├── API.md
├── ARCHITECTURE.md
├── CALCULATORS.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── DATA_MODEL.md
├── DEPLOYMENT.md
├── EVENTS.md
├── FAQ.md
├── FILE_TREE.md
├── KNOWN_ISSUES.md
├── ROADMAP.md
├── SECURITY.md
├── SEO.md
├── SITEMAP.md
├── STYLEGUIDE.md
├── TESTING.md
└── design.md
```

---

## Notes

### docs/

Contains all research and game mechanic documentation.

---

### stitch_kingshot_alliance_command/

Contains raw design exports from Stitch.

These should be treated as visual references and refactored into production-ready components.

---

### app/

Contains actual production pages and routes.

---

### components/

Reusable UI components.

---

### lib/

Business logic, calculations, search, timezone handling, translation helpers.

---

### data/

JSON/mock datasets and future persistent storage structures.

---

### Root Markdown Files

These files act as the project’s source of truth for:

* architecture
* API design
* styling
* testing
* deployment
* roadmap
* SEO
* security

This structure should remain consistent as the project scales.
