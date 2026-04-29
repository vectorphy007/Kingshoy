
# STYLEGUIDE.md

# Kingshot Alliance Companion — Style Guide

This document defines the implementation-level design rules for the platform.

Unlike DESIGN.md (vision), this file defines exact UI consistency rules.

Goals:

- visual consistency  
- reusable design patterns  
- predictable implementation  
- responsive layouts  

---

# Theme

Style:

Dark fantasy strategy-game inspired.

Mood:

- tactical  
- premium  
- immersive  
- polished  

The product should feel like:

a modern alliance command center.

Avoid:

- childish visuals  
- generic SaaS templates  
- bright/cluttered mobile-game aesthetics  

---

# Color Palette

## Background Colors

Primary background:

```text id="9s2w4x"
#0B0F14
````

Secondary background:

```text id="6f8n1r"
#111827
```

Card background:

```text id="7v3m9q"
#1F2937
```

---

## Accent Colors

Gold / premium:

```text id="1b4k7z"
#F59E0B
```

Red / warning:

```text id="8p6w2t"
#EF4444
```

Blue / informational:

```text id="5j7n3m"
#3B82F6
```

Green / verified:

```text id="2h9r1c"
#22C55E
```

Muted gray:

```text id="4q8u6v"
#9CA3AF
```

---

# Typography

Use readable modern fonts.

Examples:

* Inter
* Geist
* system fonts

Avoid decorative fantasy fonts.

---

## Typography Hierarchy

Page title:

```text id="1x7v4e"
text-3xl / font-bold
```

Section title:

```text id="5n2p9u"
text-2xl / font-semibold
```

Card title:

```text id="7r3m8k"
text-lg / font-semibold
```

Body:

```text id="6c1w9d"
text-sm / text-base
```

Metadata:

```text id="3f8z2q"
text-xs / muted
```

---

# Spacing Scale

Use consistent spacing.

Examples:

```text id="8v6n4m"
4px
8px
12px
16px
24px
32px
48px
64px
```

Tailwind examples:

```text id="0q5t1k"
p-2
p-4
p-6
gap-4
gap-6
```

---

# Border Radius

Use rounded corners.

Examples:

```text id="2u4j8r"
rounded-lg
rounded-xl
rounded-2xl
```

Cards should feel soft but structured.

---

# Shadows / Borders

Cards should have subtle depth.

Examples:

```text id="7d1m6v"
shadow-md
border border-slate-700
```

Avoid heavy shadows.

---

# Buttons

## Primary Button

Used for:

* submit
* calculate
* save

Style:

* gold or blue accent
* medium-large size
* rounded

---

## Secondary Button

Used for:

* cancel
* back
* neutral actions

Style:

* muted gray / outlined

---

## Danger Button

Used for:

* delete
* reject

Style:

* red accent

---

# Inputs

Inputs must be touch-friendly.

Styles:

* dark background
* visible border
* strong focus ring

Numeric fields should trigger numeric keyboard on mobile.

---

# Cards

Cards are used heavily.

Examples:

* dashboard widgets
* event cards
* calculator cards
* player cards

Rules:

* consistent padding
* consistent spacing
* consistent title placement

---

# Tables

Tables must be readable.

Requirements:

* sticky headers if useful
* aligned numeric values
* alternating rows or separators
* sortable columns

Important columns visually emphasized:

* Highest Tier
* Rally Cap
* Deployment Cap

---

# Badges

Used for:

* rank
* verification
* status
* event type

Examples:

Leadership:

gold

Verified:

green

Warning:

red

Info:

blue

---

# Navigation

## Desktop

Top nav or sidebar.

Should include:

* Dashboard
* Roster
* Events
* Calculators
* Guides
* Search

---

## Mobile

Use:

* hamburger menu
  or
* bottom nav for quick actions

Must remain easy to use.

---

# Forms

Forms should be simple.

Rules:

* clear labels
* placeholders
* validation messages
* visible submit CTA

---

# Modals / Drawers

Use for:

* member details
* edit forms
* alerts

Desktop:

center modal

Mobile:

bottom sheet or full-screen drawer

---

# Charts / Analytics

Charts must remain readable.

Rules:

* responsive
* dark-friendly colors
* simple legends

---

# Loading States

Use:

* skeleton loaders
* spinners when needed

Avoid blank screens.

---

# Empty States

Provide useful messaging.

Example:

```text id="5t8m3j"
No rally joiners found.
```

Include action suggestions if possible.

---

# Responsive Rules

Breakpoints:

```text id="9w1r7v"
sm
md
lg
xl
2xl
```

---

## Mobile

Stack vertically.

Tables → cards/accordions.

---

## Desktop

Use:

* grids
* wide tables
* multi-column layouts

---

# Animation Rules

Use subtle motion.

Examples:

* hover transitions
* accordion animations
* modal fade/scale

Avoid excessive motion.

---

# Consistency Rule

Every page must reuse:

* same colors
* same spacing
* same typography
* same buttons
* same cards
* same badges

The platform should feel like one cohesive product.
