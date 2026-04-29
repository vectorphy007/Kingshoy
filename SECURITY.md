
# SECURITY.md

# Kingshot Alliance Companion — Security Guide

This document defines security practices and abuse prevention rules.

The project currently does NOT use full authentication.

Therefore, validation and moderation are critical.

Goals:

- prevent abuse  
- protect data integrity  
- reduce spam  
- prevent malicious submissions  
- maintain trusted calculations  

---

# Security Priorities

Highest priority:

1. protect verified roster  
2. protect calculators from bad data  
3. protect admin tools  
4. reduce spam and fake submissions  

---

# Public Form Risks

The public form is the largest attack surface.

Visible fields:

- Name  
- Town Center  
- Rally Cap  
- Deployment Cap  
- Highest Tier  
- Total Troops  

Possible abuse:

- fake submissions  
- spam  
- inflated stats  
- malformed inputs  
- script injection attempts  

---

# Validation Rules

All public inputs must be validated.

Examples:

---

## Name Validation

Rules:

- limit length  
- strip unsafe characters  
- sanitize HTML / JS  

Reject:

```text id="j6p4n1"
<script>alert(1)</script>
````

---

## Town Center Validation

Accept only:

```text id="u8v1t9"
1–30
TG1+
```

Reject impossible values.

Example:

```text id="x3r5k7"
TC99
```

---

## Rally Cap Validation

Must be numeric internally.

Allow UI shorthand:

```text id="q7n2c4"
225K
1.5M
```

Reject impossible values.

---

## Deployment Cap Validation

Must be:

```text id="n4z9f1"
<= totalTroops
```

---

## Highest Tier Validation

Only allow:

```text id="d8w2u6"
T1–T12
```

---

# Data Trust Model

Never trust raw submissions.

Use 3 layers:

---

## Layer 1 — Raw Submissions

Stores everything.

No direct use in calculators.

---

## Layer 2 — Verified Roster

Only approved records.

Used by:

* roster pages
* calculators
* analytics

---

## Layer 3 — Derived Intelligence

Generated from verified data only.

---

# Moderation Queue

All public submissions should enter moderation.

Statuses:

```text id="k1h6p8"
pending
approved
rejected
archived
```

---

# Anti-Spam Protections

Implement:

* rate limiting
* submission throttling
* duplicate detection
* cooldown windows

Example:

```text id="m7v3t0"
max 3 submissions / hour / IP
```

---

# Duplicate Detection

Flag possible duplicates based on:

* same name
* same IP
* similar values
* repeated submissions

---

# Sanitization Rules

Sanitize:

* text fields
* URLs
* query params

Prevent:

* XSS
* injection attacks
* malformed payloads

---

# Search Security

Sanitize search queries.

Prevent:

* injection
* malformed regex
* heavy search abuse

---

# Admin Protection

Admin routes should be protected.

Examples:

```plaintext id="w4p7m9"
/admin/*
/api/admin/*
```

Even without full auth initially, implement:

* hidden routes
* role checks if possible
* environment-based restrictions

---

# API Security

All APIs must:

* validate inputs
* sanitize inputs
* enforce moderation rules

Public APIs should NOT:

* overwrite verified roster
* bypass approval

---

# Rate Limiting

Recommended for:

```plaintext id="r2m8x1"
/api/submit
/api/search
/api/admin/*
```

---

# Logging

Log security-relevant events.

Examples:

* spam attempts
* rejected payloads
* failed approvals
* suspicious updates

---

# Suspicious Change Detection

Flag suspicious jumps.

Example:

```text id="q5u9n2"
TC20 → TC30 in one day
```

Example:

```text id="p8f1v6"
225K → 5M rally cap
```

Should require review.

---

# Dependency Security

Regularly check dependencies.

Run:

```bash id="e3m7k9"
npm audit
```

Update vulnerable packages.

---

# Environment Variable Security

Never commit:

```plaintext id="c4t8w0"
.env.local
```

Commit only:

```plaintext id="g1x6p7"
.env.example
```

---

# Deployment Security

Before deploy:

* verify env vars
* check logs
* check admin access
* verify rate limits

---

# Future Security Enhancements

Possible future additions:

* CAPTCHA
* email/login auth
* role-based auth
* audit logs
* IP reputation scoring

Keep security simple but effective.

