
# EVENTS.md

# Kingshot Alliance Companion — Events Documentation

This document defines major Kingshot events, schedules, mechanics, and related tools/pages.

This file acts as a single source of truth for event logic.

Goals:

- accurate scheduling  
- quick reference  
- linked calculators  
- tactical guidance  

---

# Event Categories

Events can be grouped into:

- PvE  
- PvP  
- Alliance  
- Kingdom-wide  
- Progression  

---

# Core Event List

Major tracked events:

1. Bear Hunt / Pitfall  
2. Viking Vengeance  
3. Strongest Governor / Hall of Governors  
4. Alliance Championship  
5. Kingdom of Power / KvK  
6. Desert Trial  
7. Roulette Hero  
8. Eternity’s Reach  

---

# 1. Bear Hunt / Pitfall

Route:

```plaintext id="d7f4m1"
/events/bear-hunt
````

Category:

```text id="w5q8s2"
PvE / Alliance
```

Duration:

```text id="h3k9n0"
30 minutes
```

Purpose:

Deal maximum damage to static boss.

---

## Strategies

* Archer-heavy formations
* fewer but fuller rallies
* unique joiner buffs

Example ratios:

Gen 1:

```text id="g2t8r4"
10 / 30 / 60
```

Gen 4+:

```text id="n6u1x5"
1 / 10 / 89
```

---

## Linked Calculator

```plaintext id="v9y0m7"
/calculators/bear-hunt
```

---

# 2. Viking Vengeance

Route:

```plaintext id="b5j4w9"
/events/viking-vengeance
```

Category:

```text id="p2z7r8"
PvE / Alliance Defense
```

Mechanic:

20 waves.

Important waves:

```text id="j8x4k3"
7
14
17
```

HQ waves:

```text id="f3w1m2"
10
20
```

---

## Strategies

* empty city
* reinforce online members
* recall for HQ defense

---

# 3. Strongest Governor / Hall of Governors

Route:

```plaintext id="u7r6d2"
/events/strongest-governor
```

Category:

```text id="q1e9m6"
Progression / Competitive
```

Duration:

```text id="c8t4b1"
7 days
```

---

## Daily Themes

Day 1:

City Construction

Day 2:

Hero Development

Day 3:

Basic Skill Up

Day 4:

Combat Training

Day 5:

Gathering / Skill

Day 6:

Construction / Training

Day 7:

Rush / Mixed

---

## Linked Calculator

```plaintext id="y5m3u7"
/calculators/governor
```

---

# 4. Alliance Championship

Route:

```plaintext id="m2j8v4"
/events/alliance-championship
```

Category:

```text id="w4x7n1"
PvP / Alliance
```

Mechanic:

Automated lane battle.

---

## Meta Ratio

```text id="v8n5p6"
50% Infantry
20% Cavalry
30% Archers
```

---

## Strategies

* 2-1 lane strategy
* strongest players in main lanes
* sacrifice lane fillers

---

## Linked Calculator

```plaintext id="e3t9c0"
/calculators/championship
```

---

# 5. Kingdom of Power / KvK

Route:

```plaintext id="z9u1x2"
/events/kvk
```

Category:

```text id="f5b6m8"
Kingdom-wide PvP
```

Mechanics:

multi-stage kingdom war.

---

## Strategies

* hoard for preparation phase
* A/B defense strategy
* heal in small batches

---

# 6. Desert Trial

Route:

```plaintext id="k3p7r5"
/events/desert-trial
```

Category:

```text id="d1w8e9"
PvE
```

Focus hero:

```text id="s4m0v3"
Diana
```

---

## Strategies

* start rallies yourself
* use stamina efficiently
* shard farming after max stars

---

# 7. Roulette Hero

Route:

```plaintext id="l7x4c2"
/events/roulette-hero
```

Category:

```text id="r9j6b5"
Progression
```

---

## Strategies

* 10x spin rule
* target 70 / 120 milestones
* conserve chips

---

# 8. Eternity’s Reach

Route:

```plaintext id="h6q1n7"
/events/eternitys-reach
```

Category:

```text id="x8m4k0"
PvP / Resource
```

Duration:

```text id="u2v9w1"
30 minutes
```

---

## Strategies

* vein tap strategy
* XP rush
* fractured vein priority

---

# Event Calendar Logic

The site should support:

* weekly cycles
* monthly cycles
* 4-week cycles

---

# Event Data Schema Example

```json id="q4z8f6"
{
  "eventId": "bear_hunt",
  "name": "Bear Hunt",
  "category": "PvE",
  "durationMinutes": 30,
  "linkedCalculator": "bear-hunt"
}
```

---

# Dashboard Widgets

Possible widgets:

* next event countdown
* current strongest governor day
* upcoming alliance championship
* next bear timer

---

# Search Requirements

Events should be searchable by:

* name
* category
* type
* cycle

---

# Admin Features

Admins should be able to:

* edit event timers
* add manual overrides
* update notes

---

# Future Event Support

Add support for:

* new hero events
* new PvP modes
* limited-time events

This file should be updated whenever the game introduces new event cycles.

