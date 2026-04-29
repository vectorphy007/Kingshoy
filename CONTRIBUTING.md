
# CONTRIBUTING.md

# Kingshot Alliance Companion — Contribution Guide

Thank you for contributing.

This project aims to remain:

- maintainable  
- scalable  
- consistent  
- lightweight  

Please follow these rules before contributing.

---

# Before You Start

Read these files first:

- README.md  
- AGENTS.md  
- DESIGN.md  
- STYLEGUIDE.md  
- SITEMAP.md  
- ARCHITECTURE.md  
- DATA_MODEL.md  
- TESTING.md  

These define the project rules.

---

# Development Setup

Clone the repo:

```bash id="q9j2w7"
git clone <repo-url>
cd kingshot-alliance-companion
````

Install dependencies:

```bash id="y7p4d1"
npm install
```

Run locally:

```bash id="e5h8u3"
npm run dev
```

---

# Branch Naming Rules

Use clear branch names.

Examples:

```text id="m1t5k9"
feature/roster-search
feature/bear-hunt-calculator
fix/mobile-overflow
fix/search-results-bug
docs/update-readme
```

---

# Commit Message Rules

Use clear commit messages.

Examples:

```text id="f3n7r2"
feat: add roster search
fix: correct rally cap parser
docs: update API documentation
style: improve mobile spacing
refactor: simplify search logic
```

Preferred prefixes:

```text id="v8d4q6"
feat
fix
docs
style
refactor
test
chore
perf
```

---

# Pull Request Rules

Before opening PR:

* code builds
* tests pass
* lint passes
* no major regressions

PR should include:

* summary
* screenshots if UI changed
* test notes
* linked issue if applicable

---

# Coding Standards

Use:

* TypeScript
* modular components
* reusable utilities
* clear naming

Avoid:

* duplicate logic
* hardcoded values where avoidable
* unnecessary complexity

---

# Design Standards

Follow:

* DESIGN.md
* STYLEGUIDE.md

Maintain:

* dark fantasy style
* spacing consistency
* typography consistency
* responsive layouts

---

# Routing Rules

Follow:

* SITEMAP.md

Do not create inconsistent routes.

---

# Testing Requirements

All contributions should include testing.

Examples:

* unit tests
* integration tests
* UI checks
* mobile checks

Before merging:

```bash id="p7u3r5"
npm run test
npm run build
```

---

# Documentation Rules

If you add major features:

Update relevant docs.

Examples:

* API.md
* DATA_MODEL.md
* CALCULATORS.md
* EVENTS.md
* CHANGELOG.md

---

# Performance Rules

Keep the app lightweight.

Avoid:

* large dependencies
* unnecessary rerenders
* excessive client-side rendering

---

# Security Rules

Do not bypass:

* moderation flow
* verification logic
* validation logic

Public form submissions must never directly update verified roster.

---

# Mobile Rules

Every contribution must work on mobile.

Check:

* no overflow
* touch-friendly inputs
* responsive layouts

---

# Definition of Done

A contribution is done when:

* feature works
* tests pass
* mobile works
* docs updated
* no regressions introduced

---

# Questions / Discussions

If unsure:

Open an issue or discussion before major architectural changes.

Avoid unnecessary rewrites.

