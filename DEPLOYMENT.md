
# DEPLOYMENT.md

# Kingshot Alliance Companion — Deployment Guide

This document explains how to deploy the project.

Primary target:

- Vercel

Secondary target:

- GitHub Pages (static sections only)

Goals:

- simple deployment  
- easy maintenance  
- predictable builds  

---

# Deployment Targets

## 1. Vercel (Recommended)

Best for:

- Next.js
- serverless APIs
- dynamic pages
- storage integrations

Supports:

- App Router
- serverless functions
- edge functions
- environment variables

---

## 2. GitHub Pages

Best for:

- static exports
- guides / documentation pages

Limitations:

- no serverless APIs
- no dynamic backend features

---

# Prerequisites

Before deployment ensure:

- project builds locally
- environment variables configured
- dependencies installed

---

# Local Build Test

Run:

```bash id="zv1n0e"
npm install
npm run build
npm run start
````

If build fails:
fix before deployment.

---

# Environment Variables

Create:

```plaintext id="6e6j1g"
.env.local
```

Example:

```env id="31av0u"
NEXT_PUBLIC_SITE_URL=
BLOB_READ_WRITE_TOKEN=
KV_URL=
KV_REST_API_URL=
KV_REST_API_TOKEN=
```

Optional future:

```env id="m7v8k0"
DATABASE_URL=
SUPABASE_URL=
SUPABASE_KEY=
```

---

# Deploy to Vercel

## Step 1

Push code to GitHub.

---

## Step 2

Connect repo to Vercel.

---

## Step 3

Configure:

Framework preset:

```text id="m6w2sz"
Next.js
```

Build command:

```text id="0m4w1j"
npm run build
```

Output:

auto-detected.

---

## Step 4

Add environment variables in Vercel dashboard.

---

## Step 5

Deploy.

---

# Vercel Build Expectations

Build should pass:

* TypeScript checks
* linting
* route generation
* static generation

---

# Vercel Functions

Used for:

```plaintext id="2n7q5v"
/api/submit
/api/search
/api/roster
/api/history
/api/calculate/*
```

Should remain lightweight.

Avoid:

* long-running processes
* training ML models
* huge memory usage

---

# Static Generation Strategy

Prefer static generation for:

* guides
* event pages
* knowledge base
* hero pages

Prefer dynamic rendering for:

* roster
* admin
* search
* calculators

---

# Incremental Static Regeneration

Use ISR for:

* event pages
* guides
* static datasets that update occasionally

Example:

```text id="n8k3yo"
revalidate: 3600
```

---

# Image Optimization

Use Next/Image where possible.

Optimize:

* hero images
* event assets
* icons

---

# GitHub Pages Deployment

Only for static export.

Example:

```bash id="h0g8i3"
npm run build
npm run export
```

Output:

```plaintext id="x2g7m5"
/out
```

Deploy `/out`.

---

# Deployment Checklist

Before deploy check:

* build passes
* lint passes
* tests pass
* env vars set
* no broken links
* mobile works

---

# Common Build Issues

## Missing Environment Variables

Error:

```text id="w7u9r2"
undefined env variable
```

Fix:
set variable.

---

## Type Errors

Error:

```text id="b4n0w8"
TypeScript build failed
```

Fix:
resolve typing issues.

---

## Dynamic Route Errors

Error:

```text id="e6y5r1"
Missing generateStaticParams
```

Fix:
define params or use dynamic rendering.

---

## Import Errors

Error:

```text id="v8f4k6"
Module not found
```

Fix:
check paths.

---

# Rollback Plan

If deployment breaks:

1. revert latest commit
2. redeploy previous stable build
3. investigate logs

---

# Monitoring

Monitor:

* build logs
* runtime errors
* API errors
* performance metrics

Tools:

* Vercel Analytics
* Lighthouse
* browser console logs

---

# Performance Targets

Recommended:

```text id="f1w3u8"
LCP < 2.5s
CLS < 0.1
TTFB < 800ms
```

---

# Production Readiness Checklist

Before production:

* all pages exist
* APIs functional
* search works
* calculators accurate
* forms submit properly
* admin tools work
* mobile responsive
* audits complete

---

# Future Deployment Considerations

Possible future additions:

* CDN caching
* custom domain
* scheduled jobs
* analytics integrations
* backup storage

Keep deployment simple unless scaling demands complexity.
