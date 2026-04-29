# mechanics-analysis.md

# Kingshot Mechanics Analysis

This file contains technical game mechanic notes.

## Combat Formula

Approximation:

Kills = √Troops × (ATK × Lethality) / (Enemy DEF × Enemy HP) × SkillMod

Implications:

- troop count has diminishing returns
- stats matter more at scale
- lethality heavily impacts damage

---

## Troop Types

### Infantry

Frontline tanks.

Priority:

- Health
- Defense

---

### Cavalry

Midline divers.

Priority:

- Attack
- Lethality

---

### Archers

Backline DPS.

Priority:

- Lethality
- Attack

---

## Meta Ratios

General PvP:

50 / 20 / 30

Inf / Cav / Arch

Bear Hunt:

10 / 30 / 60 early

1 / 10 / 89 late

---

## Rally Mechanics

Leader stats apply globally.

Joiner mechanics:

- only first skill
- only top 4 unique skills
- duplicate / chance skills may overlap poorly

---

## Progression Systems

Unlocks:

TC15 → Hero Gear  
TC20 → Mastery Forging  
TC22 → Governor Gear  
TC25 → Charms  
TC30 → Truegold

---

## Training Efficiency

Promotions are more efficient than direct training.

Example:

T9 → T10 promotion better for Governor event scoring.

---

## Event Logic

### Viking

20 waves.

Important:

7 / 14 / 17

HQ:

10 / 20

---

### Strongest Governor

7-day cycle.

Construction  
Hero  
Skill  
Training  
Gathering  
Mixed  
Rush

---

### Alliance Championship

Top 60.

2-1 strategy.

---

## Validation Baselines

Example:

TC21:

Rally Cap ≈ 225K  
Deployment ≈ 40.5K

Used for form validation.

---

## AI/ML Opportunities

Possible use cases:

- role grouping
- rally suggestions
- suspicious stat detection

Rules-first recommended.