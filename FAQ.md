
# FAQ.md

# Kingshot Alliance Companion — Project FAQ

This document answers common project and architecture questions.

Purpose:

- help contributors onboard faster  
- prevent repeated questions  
- explain architectural decisions  
- reduce unnecessary rewrites  

---

# General Questions

## What is this project?

Kingshot Alliance Companion is a multi-page alliance management and tactical support platform for the mobile game **Kingshot**.

It helps with:

- alliance roster management  
- event planning  
- tactical calculators  
- rally optimization  
- guides and search  

It is NOT a landing page.

---

## Who is this for?

Primary users:

- R4 / R5 leaders  
- alliance officers  
- rally leaders  
- regular alliance members  

---

## Why does this project exist?

To replace:

- spreadsheets  
- scattered notes  
- Discord-only coordination  
- memory-based rally planning  

The goal is to centralize alliance intelligence.

---

# Architecture Questions

## Why use Next.js?

Because it provides:

- routing  
- API routes  
- static generation  
- server rendering  
- Vercel compatibility  

It fits both static and dynamic needs.

---

## Why use TypeScript?

Because it improves:

- maintainability  
- consistency  
- safer refactoring  

---

## Why use TailwindCSS?

Because it allows:

- rapid UI building  
- consistent spacing  
- responsive styling  
- reusable design tokens  

---

## Why static-first architecture?

Benefits:

- faster loads  
- simpler hosting  
- fewer backend complexities  
- cheaper deployment  

Dynamic features are added only where needed.

---

## Why use JSON / flat-file first?

Benefits:

- simple  
- portable  
- easy to inspect  
- easy to deploy  

Can migrate later if needed.

---

## Why not start with a full database?

Because early complexity is unnecessary.

Only migrate when:

- scale increases  
- writes increase  
- performance requires it  

---

# Data Questions

## Why are raw submissions not trusted?

Public submissions can be abused.

Examples:

- fake entries  
- spam  
- inflated stats  

Therefore:

raw submissions go to moderation first.

---

## Why use the 3-layer trust model?

It separates:

1. raw data  
2. verified data  
3. derived intelligence  

This protects calculators and analytics.

---

## Why never hard delete members?

Because history matters.

Useful for:

- tracking growth  
- rejoin handling  
- analytics  

Use archive/inactive statuses instead.

---

## Why store history snapshots?

To support:

- historical growth charts  
- rollback  
- audits  
- change tracking  

---

# Feature Questions

## Why is the public form limited?

To keep submissions quick and simple.

Current visible schema:

```text id="6p3xj1"
Name
Town Center
Rally Cap
Deployment Cap
Highest Tier
Total Troops
````

More complexity can exist behind the scenes.

---

## Why no login/auth yet?

To reduce friction.

Members should update quickly.

Security is handled via:

* moderation
* validation
* rate limiting

---

## Why no heavy AI yet?

Because:

* rules solve most cases
* AI adds complexity
* explainability matters

Rules-first is more practical.

---

## Why use calculators?

They provide daily utility.

Examples:

* Bear Hunt optimizer
* VIP planner
* governor tracker

These improve retention.

---

# Deployment Questions

## Why Vercel?

Best fit for:

* Next.js
* APIs
* simple deployment
* serverless features

---

## Why not GitHub Pages only?

GitHub Pages cannot handle:

* APIs
* dynamic search
* live calculators

It can host static-only content.

---

# SEO Questions

## Why include guides?

Guides improve:

* SEO traffic
* discoverability
* usefulness

They also support internal linking.

---

## Why optimize for AEO?

AI tools and answer engines increasingly drive traffic.

Structured content helps visibility.

---

# Security Questions

## How do we reduce spam?

Use:

* rate limiting
* moderation
* duplicate detection
* validation

---

## How do we prevent bad data from affecting calculators?

Calculators use verified roster only.

Never raw submissions.

---

# Contribution Questions

## Where should new routes go?

Follow:

```text id="9v2n4q"
SITEMAP.md
```

---

## How should new UI match?

Follow:

```text id="7k1m8z"
DESIGN.md
STYLEGUIDE.md
```

---

## How should new logic be tested?

Follow:

```text id="3j6w0p"
TESTING.md
```

---

## Where should formulas go?

Place in:

```text id="5t9x2v"
/lib/calculators/
```

---

## Where should reusable UI go?

Place in:

```text id="1p8q6m"
/components/
```

---

# Future Questions

## Will this eventually use a database?

Possibly.

When:

* roster grows large
* writes increase
* JSON becomes limiting

---

## Will this eventually have authentication?

Possibly.

Examples:

* admin auth
* officer auth
* optional member login

---

## Will this eventually include AI?

Possibly.

Examples:

* grouping suggestions
* rally recommendations
* anomaly detection

---

# Final Rule

When in doubt:

Prioritize:

1. usefulness
2. simplicity
3. maintainability
4. scalability

Avoid overengineering.
