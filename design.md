# OnePercent (onepercent.co.in) — Design & Specification Document

## 1. Executive Summary & Brand Positioning

**OnePercent** is a specialized SAP Business Technology Platform (BTP) services, open-source innovation, and upskilling ecosystem. 
While [learnings.onepercent.co.in](https://learnings.onepercent.co.in) focuses on hands-on SAP BTP Integration Suite education, **onepercent.co.in** serves as the official corporate landing portal and technical hub.

### Core Objectives:
1. **SAP BTP Client Projects & Consulting**: Highlight expertise in executing enterprise projects across the SAP BTP stack (Joule AI, Integration Suite, Cloud Foundry, Kyma, Extension Suite, CAP/RAP).
2. **Open-Source Innovation Hub**: Showcase open-source SAP utilities, plugins, and accelerators hosted at [github.com/orgs/onepercent-solutions](https://github.com/orgs/onepercent-solutions).
3. **Upskilling & Education Ecosystem**: Seamlessly direct engineers and enterprise teams to [learnings.onepercent.co.in](https://learnings.onepercent.co.in).

---

## 2. Brand Identity & Design System

The design system directly aligns with the aesthetic established on `learnings.onepercent.co.in`, featuring a high-contrast dark aesthetic illuminated by an electric neon lime accent.

### Color Palette

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Electric Accent** | `#C6FF3B` | Main visual highlights, active states, call-to-action buttons, glow effects |
| **Primary Accent Hover** | `#B0E630` | Hover states for buttons and primary interactive elements |
| **Dark Background Base** | `#050505` | Main document background color |
| **Surface Card Background** | `#0E121A` | Dark glassmorphism cards and container backgrounds |
| **Surface Card Border** | `#1E2536` | Card borders, dividing lines (glows `#C6FF3B` on hover) |
| **Text Primary (Headings)** | `#FFFFFF` | High priority typography, titles, and section headings |
| **Text Secondary (Body)** | `#A0A0A0` | Body content, descriptions, and metadata |
| **Text Muted / Subhead** | `#666666` | Helper text, footers, subtle labels |

### Typography

- **Headings**: `'Poppins', sans-serif` (Weights: 600, 700)
- **Body & Controls**: `'Inter', sans-serif` (Weights: 400, 500, 600)
- **Code & Tech Snippets**: `'Fira Code', 'Courier New', monospace`

---

## 3. Web Page Architecture & Section Layout

The static website is designed as a single-page modern enterprise application (`index.html`) supported by modular CSS (`styles.css`) and dynamic JavaScript (`app.js`).

### Section Breakdown

1. **Header & Navigation Bar (`<header>`)**
   - Logo: **OnePercent** with neon lime highlight dot.
   - Nav Links: `Services`, `SAP BTP Stack`, `Open Source`, `Learnings`, `About Us`.
   - Action CTA: **"Book Project Consultation"** (Electric Lime Button).

2. **Hero Section (`#hero`)**
   - Headline: *"Mastering & Executing SAP BTP Enterprise Solutions"*
   - Subhead: *"From SAP Joule AI & Integration Suite to Cloud Foundry & Open Source Accelerators — We Architect, Build, and Train."*
   - Badges: `SAP BTP Specialized` | `Open Source Driven` | `Enterprise Ready`
   - Primary CTAs: **"Hire Us For BTP Projects"** & **"Explore Open Source Repos"**
   - Visual Visualizer: Interactive visual node-map representing SAP BTP Services (Integration Suite, Joule, Cloud Foundry, Kyma, CAP/RAP).

3. **SAP BTP Capabilities & Domains (`#capabilities`)**
   - **SAP Integration Suite**: Cloud Integration, API Management, Integration Advisor, Event Mesh.
   - **Joule & AI Capabilities**: SAP Joule integration, AI Foundation, vector engines & extensibility.
   - **Cloud Foundry & Kyma**: Native cloud microservices, SAP CAP (Cloud Application Programming), RAP (ABAP RESTful Application Programming).
   - **BTP Extensibility**: Clean Core extension strategy, side-by-side extensions, S/4HANA integrations.

4. **Client Services & Engagement Models (`#services`)**
   - **Enterprise SAP BTP Projects**: End-to-end architecture, development, and deployment.
   - **Custom Open-Source Accelerators**: Pre-built frameworks for rapid integration & migration.
   - **Corporate Upskilling & Enablement**: Custom training programs leveraging `learnings.onepercent.co.in`.

5. **Open-Source Repository Showcase (`#open-source`)**
   - Direct integration highlight with `https://github.com/orgs/onepercent-solutions`.
   - Feature cards displaying key open-source projects:
     - *BTP Integration Utilities*
     - *Custom CPI/Integration Suite Adapters*
     - *Joule & AI Extension Starter Kits*
     - *Groovy & Scripting Libraries for CPI*
   - Interactive statistics & quick links to GitHub repos.

6. **Learnings & Training Platform Integration (`#learnings`)**
   - Dedicated highlight banner for [learnings.onepercent.co.in](https://learnings.onepercent.co.in).
   - Features list: Hands-on BTP labs, real-world case studies, Integration Suite mastery courses, community discord/discussion support.

7. **Project Inquiry & Consultation Modal / Form (`#contact`)**
   - Interactive project proposal request form (Name, Work Email, SAP BTP Focus Area, Project Scope/Timeline).
   - Instant validation & direct contact options.

8. **Footer (`<footer>`)**
   - Quick links, GitHub organization, Learning Portal link, privacy policy, and copyright.

---

## 4. Technical Stack & File Structure

```
onepercent.co.in/
├── index.html           # Main HTML structure with semantic tags and SEO metadata
├── styles.css           # Custom dark theme styles, animations, glassmorphism, responsive grids
├── app.js               # Interactive components (Mobile nav toggle, project filtering, modal forms, counters)
├── design.md            # This design specification document
└── assets/              # Images, icons, and SVG graphics
```

---

## 5. Next Steps

1. Review and validate this `design.md` specification.
2. Build `index.html`, `styles.css`, `app.js`, and visual assets.
3. Validate locally with standard dev server and browser testing.
