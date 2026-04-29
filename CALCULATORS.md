
# CALCULATORS.md

# Kingshot Alliance Companion — Calculator Documentation

This document defines all calculators, their purpose, formulas, assumptions, and edge cases.

Calculators are one of the platform’s most important features.

Goals:

- daily utility  
- tactical intelligence  
- easy inputs  
- understandable outputs  

---

# Calculator Directory

Planned calculators:

1. Bear Hunt Optimizer  
2. Alliance Championship Lane Distributor  
3. Strongest Governor Tracker  
4. VIP Progression Planner  
5. Truegold Planner  
6. Training Optimizer  
7. Rally Cap Calculator  

---

# 1. Bear Hunt Optimizer

Route:

```plaintext id="8u6g7s"
/calculators/bear-hunt
````

Purpose:

Optimize rally composition for maximum PvE damage.

---

## Inputs

* Rally Leader
* up to 4 Joiners
* hero buffs
* troop ratios

---

## Outputs

* estimated damage efficiency
* buff overlap warnings
* suggested replacements
* effectiveness score

---

## Logic

Should check:

* duplicate buffs
* chance-based skill overlap
* multiplicative vs additive buffs

Example warning:

```text id="t1y7m4"
Two Jabel skills may overlap and reduce efficiency.
```

---

## Edge Cases

* duplicate heroes
* missing joiners
* invalid hero combinations

---

# 2. Alliance Championship Lane Distributor

Route:

```plaintext id="w3r5k1"
/calculators/championship
```

Purpose:

Distribute alliance members across lanes.

---

## Inputs

* top 60 players
* power data
* troop type strengths

---

## Outputs

* lane assignments
* 2-1 strategy recommendation
* lane power summaries

---

## Logic

Default ratio:

```text id="w6j0v2"
50% Infantry
20% Cavalry
30% Archers
```

Should prioritize:

* strongest players in main lanes
* fillers in sacrifice lane

---

# 3. Strongest Governor Tracker

Route:

```plaintext id="g8m4h2"
/calculators/governor
```

Purpose:

Estimate event score.

---

## Inputs

Examples:

* mythic shards
* speedups
* truegold
* training stockpile

---

## Outputs

* possible score
* recommended event day
* leaderboard viability estimate

---

## Formula Examples

```text id="m2v8k7"
Mythic Hero Shard = 3040 points
Construction Speedup = 30 points/min
```

---

# 4. VIP Progression Planner

Route:

```plaintext id="q6r9d5"
/calculators/vip
```

Purpose:

Estimate progress to next VIP milestone.

---

## Inputs

* current VIP
* daily points
* optional spend

---

## Outputs

* days remaining
* recommended strategy

---

# 5. Truegold Planner

Route:

```plaintext id="n4c7x8"
/calculators/truegold
```

Purpose:

Estimate costs/time to next TG milestone.

---

## Inputs

* current TC/TG level
* current resources
* speedups

---

## Outputs

* missing resources
* estimated completion time

---

# 6. Training Optimizer

Route:

```plaintext id="u1b4f9"
/calculators/training
```

Purpose:

Optimize troop training/promotions.

---

## Inputs

* current troop tiers
* speedups
* target event

---

## Outputs

* best strategy
* point efficiency

---

## Example Logic

Promotion often more efficient than direct training.

---

# 7. Rally Cap Calculator

Route:

```plaintext id="d9h3w6"
/calculators/rally-cap
```

Purpose:

Estimate combined alliance capacity.

---

## Inputs

* selected members

---

## Outputs

* total rally capacity
* total deployment capacity

---

# Shared Rules

All calculators must include:

* validation
* mobile-friendly UI
* explanation text
* clear outputs

---

# Input Validation

Examples:

Reject impossible values.

Example:

```text id="w1p5t8"
negative resources
```

Reject malformed inputs.

---

# Output Style

Outputs should be:

* easy to read
* visually separated
* include warnings if needed

---

# Future Calculators

Possible additions:

* Hero upgrade planner
* Charm planner
* Gear planner
* Event participation planner
* Rally timing synchronizer

---

# Formula Management

All formulas should live in:

```plaintext id="f7m2z4"
/lib/calculators/
```

Each calculator file should include:

* input types
* formulas
* helpers
* tests

Example:

```plaintext id="h5q1s9"
bear-hunt.ts
vip.ts
training.ts
```

---

# Testing Requirements

Each calculator must have:

* unit tests
* edge case tests
* known-value tests

Example:

```text id="w8n6y2"
225K parsed correctly
```

---

# Disclaimers

Some calculators are estimates only.

Example:

Bear Hunt optimizer may not exactly match in-game reports due to hidden mechanics.

Always show disclaimer when precision is uncertain.
