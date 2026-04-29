
# TESTING.md

# Kingshot Alliance Companion — Testing Guide

This document defines testing requirements and QA standards.

No feature is complete until tested.

Goals:

- reliability  
- consistency  
- performance  
- responsiveness  
- accuracy  

---

# Testing Levels

The project should use multiple layers of testing.

Levels:

1. Unit Testing  
2. Integration Testing  
3. UI / Component Testing  
4. Mobile Testing  
5. Performance Testing  
6. Accessibility Testing  
7. Data Integrity Testing  
8. End-to-End Testing  

---

# 1. Unit Testing

Test isolated logic.

Examples:

- calculators  
- parsing functions  
- validation logic  
- grouping logic  
- sorting/filtering logic  
- utility functions  

---

## Examples

### Rally Cap Parser

Input:

```text id="nl7j1u"
225K
````

Expected:

```text id="1e0t5a"
225000
```

---

### Million Parser

Input:

```text id="2h6j7k"
1.5M
```

Expected:

```text id="k7m4t1"
1500000
```

---

### Town Center Validation

Valid:

```text id="v1t6dx"
TC21
```

Invalid:

```text id="q7j3pl"
TC99
```

---

### Total Troops Validation

Should fail if:

```text id="v6p0wa"
totalTroops < deploymentCap
```

---

# 2. Integration Testing

Test module interactions.

Examples:

* submit form → raw submissions
* approve submission → verified roster
* verified roster → calculators
* events → linked calculators
* search → multiple indexes

---

## Example Flow

```plaintext id="m5f7s8"
Submit form
↓
Validation
↓
Raw submission saved
↓
Approval
↓
Verified roster updated
```

---

# 3. UI / Component Testing

All reusable UI must be tested.

Examples:

* navbar
* search bar
* tables
* cards
* forms
* dropdowns
* modals
* drawers
* charts
* heatmaps

---

## Check

* renders correctly
* interactions work
* loading states work
* empty states work
* errors display properly

---

# 4. Mobile Testing

Every page must be tested on mobile.

Breakpoints:

```text id="9m6w2e"
320px
375px
768px
1024px
1440px
```

---

## Mobile Checklist

Check:

* navigation
* forms
* search
* tables/cards
* charts
* filters
* modals
* drawers

---

## Roster Mobile

Tables should become:

* cards
  or
* accordions

---

## Dashboard Mobile

Widgets should stack vertically.

---

## Calculator Mobile

Input/output should stack.

---

# 5. Performance Testing

Measure:

* page speed
* bundle size
* API response time
* render speed

---

## Performance Targets

Example goals:

```text id="8y2f2m"
LCP < 2.5s
CLS < 0.1
TTFB < 800ms
```

---

## Check for

* unnecessary rerenders
* large bundles
* slow calculations
* slow search

---

# 6. Accessibility Testing

Check:

* contrast
* focus states
* keyboard navigation
* semantic HTML
* labels
* aria tags where needed

---

# 7. Data Integrity Testing

Ensure:

* impossible values rejected
* duplicates handled
* latest approved logic works
* history preserved
* archived users hidden where needed

---

## Examples

Reject:

```text id="g4h9te"
TC15 with 5M rally cap
```

Reject:

```text id="1p7l4o"
deploymentCap > totalTroops
```

---

# 8. End-to-End Testing

Critical user flows must work.

---

## Roster Flow

```plaintext id="j9m5s2"
submit
→ review
→ approve
→ roster update
→ history update
```

---

## Search Flow

```plaintext id="uk1v8c"
search member
search event
search calculator
search guide
```

---

## Event Flow

```plaintext id="e4r7w1"
browse event
→ open detail page
→ use linked calculator
```

---

## Calculator Flow

```plaintext id="j4s9k7"
input values
→ calculate
→ validate outputs
```

---

## Admin Flow

```plaintext id="f8c1s0"
approve/reject
edit announcement
edit events
manage settings
```

---

# Recommended Tools

Possible testing tools:

Unit / Integration:

* Vitest
* Jest

UI:

* React Testing Library

E2E:

* Playwright
* Cypress

Performance:

* Lighthouse

Accessibility:

* axe

---

# Regression Testing

Every major change should check:

* existing routes still work
* calculators still accurate
* search still works
* roster pages still load

---

# Final Audit Checklist

Before release:

---

## Design Audit

Check:

* consistent colors
* consistent spacing
* consistent typography
* consistent components

---

## Functional Audit

Check:

* no broken links
* all pages render
* forms work
* APIs work

---

## Mobile Audit

Check:

* no overflow
* touch-friendly controls
* responsive layouts

---

## Data Audit

Check:

* calculations correct
* validations correct
* grouping correct

---

## Performance Audit

Check:

* optimized images
* optimized scripts
* acceptable bundle size

---

## Deployment Audit

Check:

* builds successfully
* env vars documented
* deployable on Vercel

---

No release until audits pass.

