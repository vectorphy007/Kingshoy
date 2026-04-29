# ROADMAP.md

# Kingshot Alliance Companion — Development Roadmap

This document defines the phased development plan.

The goal is to ship useful features early while building toward a complete alliance command platform.

Priority order:

1. usefulness  
2. stability  
3. scalability  
4. optimization  
5. intelligence / AI  

---

# Phase 1 — Foundation + Roster MVP

Status: Highest Priority

Goal:
Solve the spreadsheet fatigue problem immediately.

Deliverables:

## Core Infrastructure
- Next.js app setup
- TailwindCSS setup
- route structure
- reusable layout system
- navigation
- responsive framework

---

## Dashboard MVP

Basic dashboard with:

- alliance announcements
- quick links
- upcoming event widgets
- quick stats widgets

---

## Roster MVP

Implement:

- Leadership page
- Veterans page
- Members page
- Rally Leaders page
- Rally Joiners page

Features:

- sortable table
- filter controls
- search
- mobile cards

---

## Submit Form MVP

Public form with exact schema:

- Name  
- Town Center  
- Rally Cap  
- Deployment Cap  
- Highest Tier  
- Total Troops  

Implement:

- validation
- parsing
- shorthand support (K / M)

---

## Raw Submission Storage

Implement:

- append-only log
- immutable records

---

## Verified Roster Storage

Implement:

- approved/current records

---

# Phase 2 — Event Intelligence Center

Goal:
Drive daily engagement.

Deliverables:

## Events Listing

Implement:

- event cards
- filters
- search

---

## Event Detail Pages

Pages for:

- Bear Hunt
- Viking Vengeance
- Strongest Governor
- Alliance Championship
- KvK
- Desert Trial
- Roulette Hero
- Eternity’s Reach

---

## Event Calendar

Implement:

- weekly cycle
- monthly cycle
- 4-week cycle

---

## Availability Heatmap

Allow members to submit active hours.

Display:

- peak activity windows

---

# Phase 3 — Basic Calculators

Goal:
Make the site practically useful daily.

Deliverables:

## VIP Planner

---

## Truegold Planner

---

## Strongest Governor Tracker

---

## Training Optimizer

---

## Rally Cap Calculator

All calculators should include:

- inputs
- outputs
- explanations

---

# Phase 4 — Advanced Calculators / Tactical Intelligence

Goal:
Turn the platform into a tactical engine.

Deliverables:

## Bear Hunt Optimizer

Features:

- leader selection
- joiner selection
- overlap detection
- buff recommendations

---

## Championship Lane Distributor

Features:

- top 60 selection
- 2-1 lane logic
- recommendations

---

## Rally Intelligence

Features:

- best joiners
- best leaders
- suggested combinations

---

# Phase 5 — Search + Knowledge Base

Goal:
Improve usability and SEO.

Deliverables:

## Global Search

Search:

- members
- guides
- events
- calculators
- heroes

---

## Knowledge Base

Implement:

- Hero guides
- Formations
- FAQs
- Research priorities

---

# Phase 6 — Admin Tools

Goal:
Give leadership operational tools.

Deliverables:

## Submissions Queue

Approve / reject entries.

---

## Announcements Manager

Edit dashboard announcements.

---

## Event Manager

Manual overrides / edits.

---

## Admin Analytics

Alliance stats.

---

## Settings

Global config.

---

# Phase 7 — Analytics / Reporting

Goal:
Provide insight.

Deliverables:

Charts for:

- power growth
- troop trends
- participation
- inactivity
- update frequency

---

# Phase 8 — AI / ML Layer

Goal:
Automate decisions.

Possible features:

## Grouping Suggestions

Suggest:

- Rally Leaders
- Joiners
- inactive members

---

## Ranking Suggestions

Weighted scoring.

---

## Optional ML

Tiny models only.

Examples:

- decision tree
- logistic regression

Inference only.

---

# Phase 9 — Optimization / Production Readiness

Goal:
Polish and stabilize.

Tasks:

- performance optimization
- accessibility improvements
- mobile audits
- bundle optimization
- caching improvements

---

# Phase 10 — Future Expansion

Potential modules:

- OCR profile parsing
- alliance map / territory
- notifications
- reminders
- AI reports
- exports / reports

---

# Success Criteria Per Phase

A phase is complete only when:

- feature works
- mobile works
- tests pass
- audit passes
- no major regressions

---

# Milestone Summary

Phase 1 → usable MVP  
Phase 2 → engagement  
Phase 3 → practical utility  
Phase 4 → tactical intelligence  
Phase 5 → discoverability  
Phase 6 → leadership tools  
Phase 7 → analytics  
Phase 8 → automation  
Phase 9 → production polish  
Phase 10 → expansion  