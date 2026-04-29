---
name: Kingshot Alliance Design System
colors:
  surface: '#141314'
  surface-dim: '#141314'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353435'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c6c6cb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#909095'
  outline-variant: '#45474b'
  surface-tint: '#c6c6cc'
  primary: '#c6c6cc'
  on-primary: '#2f3035'
  primary-container: '#0f1115'
  on-primary-container: '#7b7c82'
  inverse-primary: '#5d5e63'
  secondary: '#c4c6d0'
  on-secondary: '#2d3038'
  secondary-container: '#464951'
  on-secondary-container: '#b6b8c1'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#171000'
  on-tertiary-container: '#987900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c6c6cc'
  on-primary-fixed: '#1a1c20'
  on-primary-fixed-variant: '#45474b'
  secondary-fixed: '#e0e2ec'
  secondary-fixed-dim: '#c4c6d0'
  on-secondary-fixed: '#191c22'
  on-secondary-fixed-variant: '#44474e'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#141314'
  on-background: '#e5e2e1'
  surface-variant: '#353435'
  surface-base: '#0F1115'
  surface-elevated: '#1C1F26'
  surface-stroke: '#2D333D'
  accent-gold: '#D4AF37'
  accent-amber: '#FFBF00'
  accent-crimson: '#9E1B1B'
  accent-ice: '#7895B2'
  status-success: '#2D5A27'
  status-warning: '#B45309'
  text-primary: '#F1F5F9'
  text-secondary: '#94A3B8'
  text-muted: '#64748B'
typography:
  h1-display:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2-section:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3-card:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  metadata:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  button-text:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max-width: 1440px
  gutter: 24px
  section-gap: 48px
  card-padding: 20px
  stack-gap-sm: 8px
  stack-gap-md: 16px
---

# DESIGN.md

## Project Name
Kingshot Alliance Companion

## Purpose
This project is a modern multi-page companion platform for a Kingshot alliance/community.

It is NOT a landing page.

The design should feel like a real product used daily by alliance members and leaders for:
- event tracking
- alliance management
- calculators
- roster organization
- quick information lookup

---

# Design Direction

## Theme
Dark fantasy strategy-game inspired.

Mood:
- tactical
- premium
- powerful
- immersive
- polished

Think:
modern dashboard + strategy game UI

Avoid:
- childish/mobile-game aesthetics
- bright playful colors
- generic SaaS-only look
- plain tables with no styling
- landing-page hero-only design

---

# Color Style

Primary:
Deep charcoal / near-black backgrounds

Secondary:
Muted slate / steel tones

Accent:
Gold / amber / crimson / icy blue for highlights depending on context

Examples:
- gold for premium stats
- red for alerts/warnings
- blue for informational widgets
- green for success/verified states

Contrast must remain high for readability.

---

# Typography

Readable and strong.

Use:
- bold section titles
- medium-weight body text
- smaller muted metadata

Hierarchy must be obvious:
1. page title
2. section title
3. card title
4. row content
5. metadata

Avoid:
- tiny unreadable fonts
- decorative fantasy fonts everywhere

Readable > thematic.

---

# Layout Rules

Use spacious layouts.

Requirements:
- modern spacing
- clear grouping
- rounded corners
- visible separation between sections
- cards with depth/shadows/borders
- sticky top navigation if possible

Desktop:
- dashboard grids
- wide tables
- multi-column layouts

Mobile:
- stacked cards
- responsive tables
- collapsible filters/navigation

---

# Site Structure

The site should visually support multiple pages:

## Home / Dashboard
Contains:
- upcoming events widget
- quick calculators widget
- alliance roster summary widget
- recent updates/activity widget
- alerts/notices widget

Should feel like command center.

---

## Events Page
Shows:
- event cards
- event categories
- event cycles/timers if relevant
- filters
- search

Cards should feel browseable.

---

## Calculators Page
Shows:
- calculator cards
- categorized tools
- input/output panels

Tools should feel functional and practical.

---

## Roster Pages
The most important area.

Must include:
- grouped sections
- table view
- optional card view on mobile
- filters
- sorting controls
- status indicators
- verification indicators
- search

Separate groups visually:

### R5
Owner/leader

### R4
Leadership (management) / command-like styling

### R3
Officer / organizer styling

### R2 + R1
Member styling

### Rally Joiners
Support-focused styling

---

## Submit / Form Page
Simple and practical.

Form fields exactly:

- Name
- Town Center
- Rally Cap
- Deployment Cap
- Highest Tier
- Total Troops

Should feel easy and quick.

---

# UI Components

Reusable components should include:

- top navbar
- global search bar
- sidebar or mobile drawer
- dashboard widget cards
- event cards
- calculator cards
- roster table
- member row
- filters bar
- sort dropdown
- badges
- modals/drawers
- notices/alerts
- tabs/section switchers
- pagination or infinite scroll if needed

---

# Search UX

Global search should be prominent.

Can search:
- members
- events
- calculators
- categories

Should feel central to the product.

---

# Tables

Roster tables must be easy to scan.

Include:
- alternating row styles or separators
- sticky headers if possible
- aligned numeric values
- badges for statuses
- sortable columns

Avoid clutter.

---

# Forms

Forms should be:
- minimal
- clean
- easy to use on mobile

Include:
- placeholders
- validation feedback
- confirmation states

---

# Interaction Style

Modern polished interactions:
- hover states
- subtle animations
- transitions
- loading skeletons
- empty states
- confirmation toasts

Avoid excessive motion.

---

# Product Feel

The final result should feel like:

A real alliance management platform.

Not:
- a landing page
- a static mockup
- a dribbble-only concept

It should look buildable and practical.

---

# Priorities

Prioritize:

1. usefulness
2. readability
3. clarity
4. strong hierarchy
5. responsive design
6. immersive but practical visuals

Visual beauty should support utility.
