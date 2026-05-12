---
title: "Projects"
date: 2026-05-12
draft: false
---

## What We Build

**For everyone:** At Resolvora LLC, we create software products that solve real operational problems. Our projects range from project delivery platforms to security analysis tools—all designed to make complex tasks simpler and more reliable.

---

```bash
$ ls -la ~/projects/
total 2

drwxr-xr-x  forwardcast/    # Project delivery platform
drwxr-xr-x  dnssecured/     # DNS security stack
```

---

## `~/projects/forwardcast/`

```
 _______________________________________________
|                                               |
|  ForwardCast                                  |
|  Project Delivery Platform                    |
|_______________________________________________|
```

### **What It Does (Plain English)**

ForwardCast is a platform for managing project delivery from planning through execution. Think of it as an intelligent workspace where teams can track projects, get AI suggestions for planning, and analyze finances—all in one place.

**Real-world use:** Instead of juggling spreadsheets, email threads, and multiple tools, teams use ForwardCast to manage everything in dedicated workspaces with built-in intelligence.

---

### **Overview**

```javascript
const forwardcast = {
  type: "Multi-tenant SaaS Platform",
  url: "app.forwardcast.io",
  status: "Production",
  deployment: "Kubernetes + PostgreSQL",
  access: "Buyer storefront + dedicated customer workspaces"
};
```

A complete project delivery platform with buyer-facing storefront, dedicated customer workspaces, and serverless API infrastructure.

---

### **Core Capabilities**

**→ Project Delivery Workspace**
- Complete project lifecycle management (create, update, archive)
- Multiple views: Gantt charts, Kanban boards, calendars, forecasts
- Team-scoped projects with organization support
- Multiple project teams per organization

**→ AI-Assisted Planning**
- AI draft suggestions for project metadata (owner, phase, risk, budget, scope)
- Reusable AI templates to prefill project scope forms
- Historical recommendations from your team's past projects
- Smart defaults based on project patterns

**→ Finance Planning Tools**
- Yearly forecast guidance from historical data
- P&L (Profit & Loss) creation with flexible team scoping
- Active-team, selected-team, or parent-company level reporting
- CSV export for financial analysis

**→ Multi-Tenant Architecture**
- Buyer-account creation and plan selection
- Dedicated instance provisioning per customer
- Dedicated workspaces on `*.app.forwardcast.io` subdomains
- Custom domain routing support

**→ Authentication & Security**
- Email verification for new accounts
- TOTP (two-factor authentication) support
- Session management
- Case-insensitive email matching
- Bootstrap admin account provisioning

**→ Billing Integration**
- Stripe Checkout subscription flow
- Multiple billing tiers via Stripe lookup keys
- Enterprise pricing options
- Controlled billing bypass for testing

**→ Progressive Web App**
- Installable as PWA on desktop and mobile
- Service worker for offline capabilities
- Cached static assets for fast repeat launches
- Network-first for live data freshness

**→ Mobile Support**
- Native iPhone app via Capacitor
- Tenant-aware mobile experience
- Preferred workspace saving
- Direct dashboard access for executives

---

### **Tech Stack**

```yaml
Frontend:
  - React + TypeScript
  - Vite build system
  - Progressive Web App
  - Capacitor (iOS native shell)

Backend:
  - Serverless Node.js API
  - PostgreSQL database
  - Kubernetes deployment
  - RESTful API design

Infrastructure:
  - Multi-tenant routing
  - Cloudflare DNS management
  - Subdomain provisioning
  - LoadBalancer service

Integration:
  - Stripe payment processing
  - Email verification
  - TOTP authentication
  - API key management
```

---

### **Product URLs**

```
Production:
├─ https://app.forwardcast.io        # Storefront & buyer signup
├─ https://api.forwardcast.io        # Platform API
└─ https://*.app.forwardcast.io      # Customer workspaces

Example customer workspace:
└─ https://acme.app.forwardcast.io
```

---

### **What Makes It Different**

**Multi-tenant from day one:** Each customer gets their own dedicated workspace, not just a shared account.

**AI where it matters:** Rather than generic AI everywhere, we focus AI on the painful parts—initial project scoping and budget estimation.

**Finance-aware:** Built-in P&L and forecasting tools mean finance teams don't need separate spreadsheets.

**Production-ready infrastructure:** Kubernetes, PostgreSQL, multi-region capable, with proper billing and auth from the start.

---

## `~/projects/dnssecured/`

```
  ____  _   _ ____                                      _ 
 |  _ \| \ | / ___|___  ___  ___ _   _ _ __ ___  __| |
 | | | |  \| \___ / __|/ _ \/ __| | | | '__/ _ \/ _` |
 | |_| | |\  |___) \__|  __/ (__| |_| | | |  __/ (_| |
 |____/|_| \_|____\___|\___|\___|\__,_|_|  \___|\__,_|
                                                       
  DNS Security Stack in Go
```

### **What It Does (Plain English)**

DNSsecured analyzes the security configuration of email domains and DNS setups. It checks things like: Is DNSSEC enabled? Are email authentication records (SPF, DKIM, DMARC) configured correctly? Are SSL certificates valid?

**Real-world use:** Email security platforms, domain registrars, and IT teams use it to automatically validate DNS security posture and catch misconfigurations before they cause problems.

---

### **Overview**

```go
type DNSsecured struct {
    Type string  // "Reusable Go library + HTTP service"
    Use  string  // "Embedded library OR standalone service"
    For  string  // "DNS security validation and scoring"
}
```

A library-first DNS security stack that can run as both an embedded library and a standalone HTTP service.

---

### **Security Checks**

**→ DNS Infrastructure**
- **NS Redundancy:** Analyzes authoritative nameserver redundancy (weak fault tolerance detection)
- **DNSSEC Validation:** Checks DNSSEC signing and validation chain
- **Resolver Health:** Tests DNS resolution reliability

**→ Email Security**
- **SPF:** Sender Policy Framework validation
- **DKIM Selector Health:** Validates DKIM signing key configurations
- **DMARC:** Checks email authentication policy
- **MTA-STS:** Mail Transfer Agent Strict Transport Security
- **TLS-RPT:** TLS reporting configuration

**→ Transport Security**
- **DANE/TLSA:** DNS-based Authentication of Named Entities
- **TLS Certificate Posture:** Certificate expiry, validity, and modern TLS enforcement
- **HTTPS Configuration:** Web server TLS posture

**→ Brand Protection**
- **BIMI:** Brand Indicators for Message Identification

---

### **Architecture**

```
Pluggable Check Pipeline:
├─ Bounded concurrent execution
├─ Replaceable DNS resolver layer (net.Resolver default)
├─ Custom check support via WithChecks(...)
├─ Performance tuning via WithTimeout(...) and WithMaxConcurrency(...)
└─ Scoring model: posture score + normalized findings
```

**Why it's reusable:**
- Runs as **embedded library** OR **standalone service**
- Keeps proprietary logic separate while exposing infrastructure primitives
- Production-grade hardening suitable for commercial platforms

---

### **API Endpoints**

```
HTTP Service:
├─ GET  /healthz
├─ POST /v1/scan                       # Compatibility endpoint
├─ POST /v1/analyze                    # Preferred analysis
├─ POST /v1/authoritative/validate     # Nameserver hardening
├─ POST /v1/dnssec/plan                # DNSSEC rollover planning
└─ POST /v1/steering/decision          # Traffic-steering decisions
```

**Request example:**
```json
{
  "tenant_id": "public",
  "domain": "example.com",
  "dkim_selectors": ["s1", "default"]
}
```

---

### **Tech Stack**

```yaml
Language:
  - Go (library-first design)
  - Standard library focused
  - Zero external dependencies for core

Components:
  - pkg/dnssecured/      # Core engine & checks
  - pkg/authoritative/   # NS security validator
  - pkg/dnssec/          # DNSSEC rollover planner
  - pkg/steering/        # Traffic-steering engine
  - cmd/dnssecured/      # Standalone HTTP runtime

Resolver Support:
  - System resolver (net.Resolver)
  - UDP DNS
  - DNS-over-TLS (DoT)
  - DNS-over-HTTPS (DoH)
  - Custom nameserver targeting
  - TLS certificate pinning

Configuration:
  - Caddy-style DNSsecuredfile
  - Environment variables
  - Programmatic configuration
```

---

### **CLI Commands**

```bash
# Caddy-style command interface
dnssecured run --config ./DNSsecuredfile
dnssecured validate --config ./DNSsecuredfile
dnssecured list-checks
dnssecured version

# Default command (no args = run)
dnssecured
```

---

### **Library Embedding**

```go
// Embed in your Go application
resolver := dnssecured.NewNetResolver()
scanner := dnssecured.NewScanner(
    resolver,
    dnssecured.WithTimeout(8*time.Second),
    dnssecured.WithMaxConcurrency(6),
)

result, err := scanner.Scan(ctx, dnssecured.ScanRequest{
    TenantID: "public",
    Domain:   "example.com",
})

// Result includes:
// - Posture score
// - Individual check results
// - Normalized findings
// - Actionable recommendations
```

---

### **Recent Enhancements**

**NS1-style Resilience:**  
Added authoritative nameserver redundancy analysis to flag weak DNS fault tolerance—inspired by enterprise DNS platforms.

**ZeroSSL-aligned SSL Control:**  
Added HTTPS certificate posture validation for certificate expiry and modern TLS enforcement to support automated renewal operations.

---

### **Use Cases**

- **Email security platforms:** Validate customer domain configurations
- **Domain registrars:** Pre-flight security checks before domain transfer
- **DevOps automation:** CI/CD pipeline security validation
- **Security audits:** Automated compliance checking
- **Traffic steering:** Health-aware DNS routing decisions

---

## `~/projects/resolvora-llc/`

```
  ____                 _                      
 |  _ \ ___  ___  ___ | |_   _____ _ __ __ _ 
 | |_) / _ \/ __|/ _ \| \ \ / / _ \ '__/ _` |
 |  _ <  __/\__ \ (_) | |\ V /  __/ | | (_| |
 |_| \_\___||___/\___/|_| \_/ \___|_|  \__,_|
                                              
 Building intelligent software products
```

### **Company Overview**

**Resolvora LLC** is a software development company focused on building practical, intelligent tools that solve real operational problems.

```json
{
  "name": "Resolvora LLC",
  "founded": "2020",
  "founder": "Daniel J. Burkhart",
  "mission": "Build intelligent software that solves real problems",
  "products": ["ForwardCast", "DNSsecured"],
  "focus": [
    "Multi-tenant SaaS platforms",
    "DNS and email security",
    "AI-assisted workflows",
    "Reusable infrastructure"
  ]
}
```

---

### **Development Philosophy**

```bash
#!/bin/bash
# How we build software

build_for_production() {
    # Multi-tenant from day one
    # Real authentication and billing
    # Kubernetes-ready infrastructure
    # Reusable libraries, not monoliths
}

use_ai_strategically() {
    # AI where it adds real value (planning, suggestions)
    # Not AI for the sake of AI
    # Practical intelligence over hype
}

ship_real_products() {
    # Production-deployed, not demos
    # Real customers, real domains
    # Actual billing and provisioning
    # Built to scale
}
```

---

### **Technology Expertise**

```
Product Stack:
├── React + TypeScript (modern web UIs)
├── Go (high-performance services & libraries)
├── Node.js (serverless APIs)
├── PostgreSQL (reliable data persistence)
└── Kubernetes (production orchestration)

Infrastructure:
├── Multi-tenant architecture
├── Cloudflare DNS management
├── Stripe billing integration
├── Progressive Web Apps
└── Mobile (Capacitor/iOS)

AI/ML:
├── AI-assisted planning
├── Historical pattern analysis
├── Smart template generation
└── Recommendation engines
```

---

## **Want to Learn More?**

```bash
$ ./contact.sh

# Interested in:
→ ForwardCast for your team
→ DNSsecured for email security validation
→ Building similar systems
→ Technical collaboration

Email: me@danielburkhart.com
GitHub: https://github.com/djburkhart
LinkedIn: https://www.linkedin.com/in/danieljamesburkhart/
Twitter/X: https://x.com/DannyBurkhart
```

---

```bash
$ exit
# Two products. Both solving real problems. Both in production.
```
