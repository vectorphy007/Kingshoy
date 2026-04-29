# AGENTS.md

# Kingshot Alliance Companion — Agent Instructions

This document defines the rules, constraints, and expectations for all AI agents working on this repository.

Applicable agents include:

- Jules (coding / implementation)
- Stitch (design / UI generation)
- Copilot / Cursor / Codeium
- future autonomous agents

---

# Project Goal

Build a practical, production-style **Kingshot Alliance Companion platform**.

This is NOT a landing page.

The platform should function as a real alliance command center and include:

- Dashboard / Home
- Event Intelligence Center
- Calculator Tools
- Alliance Roster System
- Rally Joiners / Rally Leaders tools
- Search across the entire site
- Admin workflows
- Analytics / reports
- Future expansion without redesign

Primary goals:

1. usefulness  
2. maintainability  
3. scalability  
4. mobile friendliness  
5. deployment simplicity  

---

# Research First Rule

Before implementing features, verify mechanics using trusted sources.

Primary sources include:

- official Kingshot sources  
- patch notes  
- in-game references  
- community wikis  
- trusted guides  

Repository research files may include:

- `/docs/research.md`
- uploaded reports
- architecture reports

Do not invent unsupported mechanics.

If uncertain:
flag assumptions clearly.

---

# Technology Rules

Preferred stack:

Frontend:
- Next.js  
- React  
- TypeScript  
- TailwindCSS  

Storage:
- JSON / flat-file first  
- Vercel Blob / KV only if justified  
- simple APIs  

Deployment:
- Vercel preferred  
- GitHub Pages compatibility where possible  

Avoid:
- heavy backend systems  
- unnecessary databases  
- complex infrastructure  

---

# Design Rules

Follow `/DESIGN.md`

Theme:
dark fantasy strategy-game inspired.

Must feel like:

modern tactical alliance command center.

Avoid:
- generic SaaS dashboards  
- generic gaming landing pages  
- childish visuals  

---

# Routing Rules

Follow `/SITEMAP.md`

Do not create inconsistent routes.

Prefer modular pages and reusable layouts.

---

# Public Form Rule

The public form must keep this exact visible schema:

- Name  
- Town Center  
- Rally Cap  
- Deployment Cap  
- Highest Tier  
- Total Troops  

Example:

Vector  
TC21  
225K  
47K  
T7  
78K  

Do not change visible fields.

Hidden metadata fields may be added.

---

# Data Trust Model

The platform uses a 3-layer trust model.

## Layer 1: Raw Submissions
Immutable append-only logs.

## Layer 2: Verified Current Roster
Approved entries only.

## Layer 3: Derived Groupings

Examples:

- Leadership  
- Veterans  
- Members  
- Rally Leaders  
- Rally Joiners  
- Inactive  
- Needs Review  

Raw submissions must never directly affect calculators.

---

# Member Lifecycle Rules

Never hard delete.

Statuses include:

- active  
- inactive  
- left  
- archived  
- rejoined  

Preserve history.

---

# Update Rules

Each submission becomes a snapshot.

Support:

- current state  
- historical state  
- last verified  
- version history  

Newest approved snapshot becomes current.

---

# Anti-Fraud Rules

No auth system is required initially.

Mitigate abuse using:

- moderation queue  
- verification state  
- confidence score  
- admin approval  

Unverified data must not affect calculators.

---

# AI / ML Rules

Prefer:

1. rules engine  
2. weighted scoring  
3. tiny ML only if needed  

If ML is used:

Preferred:
- decision tree  
- logistic regression  

Avoid:
- large hosted models  
- training in production  

Inference must remain lightweight enough for Vercel.

---

# Mobile Rules

Every page must support mobile.

Requirements:

- responsive layouts  
- card views for tables  
- collapsible filters  
- touch-friendly inputs  
- mobile navigation  
- bottom sheets or modals  

---

# Reusable Components

Prefer reusable components.

Examples:

- navbar  
- search bar  
- widget cards  
- roster table  
- player cards  
- event cards  
- calculator cards  
- filters  
- badges  
- modals  
- charts  

Avoid duplication.

---

# Coding Rules

Write production-style code.

Rules:

- TypeScript types where possible  
- modular components  
- reusable hooks/utilities  
- avoid duplicate logic  
- document important logic  
- keep code readable  

---

# Performance Rules

Keep the app lightweight.

Avoid:

- huge dependencies  
- unnecessary client-side rendering  
- large bundles  

Prefer:

- server components where appropriate  
- static rendering where possible  
- incremental loading  

---

# Testing & Audit Rules

All agents must perform rigorous testing before marking work complete.

No feature should be considered complete without validation.

---

## Required Testing Types

### 1. Unit Testing

Test isolated logic such as:

- calculators  
- validation functions  
- grouping logic  
- sorting/filtering  
- parsing functions  
- utility functions  

Examples:

- Rally Cap parser  
- Town Center validation  
- event-cycle calculations  
- roster grouping rules  

---

### 2. Integration Testing

Test interactions between modules.

Examples:

- form submission → raw submissions log  
- approval → verified roster update  
- verified roster → calculators  
- search → multiple data sources  
- event pages → linked calculators  

---

### 3. UI / Component Testing

Verify all reusable UI components.

Examples:

- tables  
- cards  
- forms  
- modals  
- drawers  
- dropdowns  
- filters  
- charts  

Ensure:

- rendering is correct  
- interactions work  
- empty states work  
- loading states work  

---

### 4. Mobile Responsiveness Testing

Every page must be tested on mobile sizes.

Test:

- navigation  
- forms  
- tables/cards  
- search  
- modals  
- charts  
- filters  

Supported breakpoints:

- small phones  
- large phones  
- tablets  
- desktop  

---

### 5. Performance Testing

Check:

- page load speed  
- bundle size  
- unnecessary rerenders  
- slow queries  
- excessive API calls  

Optimize when necessary.

---

### 6. Accessibility Testing

Check:

- contrast ratios  
- keyboard navigation  
- focus states  
- semantic structure  
- aria labels where needed  

---

### 7. Data Integrity Testing

Ensure:

- invalid data is rejected  
- impossible stats are flagged  
- duplicate entries are handled  
- history snapshots work  
- latest approved snapshot logic works  

---

# End-to-End Testing

Before completion, perform full E2E testing.

Critical flows:

### Roster Flow

- submit form  
- review submission  
- approve submission  
- verify roster update  
- verify history update  

---

### Search Flow

- global search  
- member search  
- event search  
- calculator search  

---

### Event Flow

- browse event  
- open event page  
- use linked calculator  

---

### Calculator Flow

- enter inputs  
- verify outputs  
- verify edge cases  

---

### Admin Flow

- approve/reject entries  
- update announcements  
- edit events/settings  

---

### Mobile Flow

Test all critical flows on mobile layouts.

---

# Final End-to-End Audit

Before final delivery, agents must perform a massive audit.

Audit checklist:

## Design Audit

Check:

- styling consistency  
- spacing consistency  
- typography consistency  
- color consistency  
- navigation consistency  

---

## Functional Audit

Check:

- all routes work  
- all pages exist  
- no broken links  
- forms work  
- calculators work  
- search works  

---

## Mobile Audit

Check:

- every page responsive  
- no overflow  
- touch-friendly controls  

---

## Data Audit

Check:

- calculations accurate  
- validations accurate  
- grouping logic accurate  
- event data accurate  

---

## Performance Audit

Check:

- optimized assets  
- optimized rendering  
- minimal bundle size  

---

## Deployment Audit

Check:

- builds successfully  
- environment variables documented  
- deployable on Vercel  

Agents should not mark work complete until these audits pass.

---

# Deliverables

Agents should prioritize delivering:

1. verified research summary  
2. architecture proposal  
3. site map adherence  
4. reusable UI components  
5. maintainable code  
6. practical calculators  
7. mobile support  
8. deployment readiness  

---

# Prohibited Behaviors

Do NOT:

- redesign the whole architecture unnecessarily  
- overengineer storage  
- invent Kingshot mechanics  
- break existing routes  
- replace working components without reason  
- add heavy infrastructure early  

---

# Success Criteria

The final product should feel like:

a real alliance management platform.

Not:

- a mockup  
- a landing page  
- disconnected generated screens  

Priority order:

1. Utility first  
2. Consistency second  
3. Visual polish third  