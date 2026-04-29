
# KNOWN_ISSUES.md

# Kingshot Alliance Companion — Known Issues

This document tracks current bugs, limitations, technical debt, and unresolved concerns.

Purpose:

- prevent duplicate bug reports  
- help contributors understand current limitations  
- avoid unnecessary rewrites  
- prioritize fixes  

---

# Current Known Issues

## 1. Public Form Abuse Risk

Status:

```text id="d1m7q4"
Open
````

Issue:

Without authentication, public submissions can be abused.

Examples:

* fake entries
* spam submissions
* inflated stats

Temporary mitigation:

* moderation queue
* rate limiting
* duplicate detection

Future fix:

* optional login / role-based submission

---

## 2. Search May Be Basic Initially

Status:

```text id="j8w3p6"
Open
```

Issue:

Initial search may rely on simple filtering or Fuse.js.

Limitations:

* imperfect fuzzy matching
* no typo tolerance at scale
* limited ranking logic

Future fix:

* indexed search
* improved scoring
* server-side indexing

---

## 3. Event Cycles May Change

Status:

```text id="n4x2v7"
Ongoing
```

Issue:

Kingshot event schedules may change after updates.

Affected:

* timers
* event calendar
* countdown widgets

Future fix:

* admin override tools
* easier manual updates

---

## 4. Hidden Game Mechanics

Status:

```text id="m2q9t1"
Ongoing
```

Issue:

Some game formulas are hidden or estimated.

Affected calculators:

* Bear Hunt Optimizer
* Strongest Governor Tracker
* Rally calculations

Future fix:

* community testing
* updated formulas

---

## 5. Mobile Table Complexity

Status:

```text id="r7v4k2"
Open
```

Issue:

Large roster tables may be difficult on mobile.

Temporary solution:

* cards
* accordions
* horizontal scroll

Future fix:

* smarter responsive layouts

---

## 6. Performance Risks With Large Rosters

Status:

```text id="x1m8w5"
Open
```

Issue:

Large datasets may slow:

* roster pages
* search
* analytics

Future fix:

* pagination
* virtualization
* caching

---

## 7. Duplicate Member Records

Status:

```text id="q4t7n9"
Open
```

Issue:

Multiple submissions may create duplicates.

Cause:

* name mismatch
* typo
* rejoin cases

Future fix:

* stronger member matching
* manual merge tools

---

## 8. AI / ML Grouping Accuracy

Status:

```text id="p3w1k8"
Future Concern
```

Issue:

Rules/ML suggestions may be inaccurate.

Affected:

* rally leader suggestions
* joiner recommendations
* inactivity detection

Future fix:

* manual override
* feedback loops

---

## 9. Admin Security Is Basic

Status:

```text id="u6m4x0"
Open
```

Issue:

Without full authentication, admin routes are vulnerable.

Future fix:

* auth system
* role-based permissions

---

## 10. Static Export Limitations

Status:

```text id="t8q5n3"
Known Limitation
```

Issue:

GitHub Pages cannot run:

* APIs
* dynamic calculators
* live search

Future fix:

* use Vercel for full features

---

# Technical Debt

Current technical debt items:

* event formulas may need updates
* search indexing may need rewrite
* duplicated utility logic may appear early
* JSON storage may need migration later

---

# Bugs To Watch For

Common bug areas:

* numeric parsing
* TC parsing
* duplicate submissions
* roster sorting
* calculator edge cases
* mobile overflow

---

# Deferred Features

Planned but not yet implemented:

* OCR stat extraction
* notifications/reminders
* alliance territory map
* exports/reports
* advanced AI suggestions

---

# Issue Priority Levels

Use these labels:

```text id="v9k6r2"
Critical
High
Medium
Low
Future
```

---

# Fix Workflow

When fixing an issue:

1. update this file
2. update CHANGELOG.md
3. add tests if applicable

---

# Notes

This file should stay current.

It helps contributors and AI agents avoid solving already-known problems incorrectly.
