# Sovereign Group — Website Build Plan
**For use in Cursor / Claude Code**
*Version 1.0 · May 2026*

---

## 0. Before You Start — The Design Problem to Solve

Both existing pages contain excellent copy and accurate content. The issue is structural and aesthetic, not editorial:

- **Information density without hierarchy.** Every section carries the same visual weight. Nothing breathes.
- **Generic component patterns.** Numbered service cards, stat rows, pipeline tables, and footer CTAs arranged in ways that are immediately recognisable as AI-generated.
- **No sense of place or authority.** The brand guide specifies *prestige, warmth, cohesion* — none of those feelings come through in a standard dark-navy-with-gold-cards layout.
- **Missing spatial flow.** A premium site earns the reader's trust through restraint and pacing — not by showing everything on one scroll.

The design direction for this build: **editorial luxury, not fintech dashboard.** Think Aesop, Loewe, Investec's brand presence — long-form, unhurried, confident. Navy and cream as the dominant surfaces. Gold as a precise editorial accent (rules, monogram, selected typographic moments), not a fill colour. Generous vertical rhythm. Typography doing most of the work.

---

## 1. Site Architecture — Hub and Spoke

### Decision: One group domain + one standalone domain

```
sovereigncapital.co.za          ← Group hub (institutional)
│
├── /                           ← Group homepage
├── /about                      ← Group identity, structure, philosophy
├── /living                     ← Sovereign Living (sub-page)
├── /developments               ← Sovereign Developments (sub-page)
├── /money                      ← Sovereign Money (sub-page)
├── /impact                     ← Sovereign Impact (sub-page)
├── /consortium                 ← Partners: Lombard, Fedgroup, Absolute Life
├── /pipeline                   ← Group-level deal pipeline
├── /leadership                 ← Combined leadership across group
└── /contact

retirement247.co.za             ← Standalone site (own domain, own audience)
│
├── /                           ← Homepage: the life rights proposition
├── /why-life-rights            ← The model explained (for developers/funds)
├── /services                   ← The 9 service categories
├── /who-we-serve               ← Three audience types
├── /pipeline                   ← RT247-specific mandates + fee schedule
├── /team                       ← Gavin + Arthur
└── /contact
```

### Why this split?

| Factor | Sovereign Capital | Retirement 247 |
|--------|------------------|----------------|
| Audience | Institutional — funds, family offices, capital partners | Operational — developers, landowners, REITs |
| Tone | Capital stewardship, long-horizon authority | Specialist expertise, transactional confidence |
| Domain | sovereigncapital.co.za | retirement247.co.za (own domain per brief) |
| Brand | Group brand system — navy primary | Sub-brand — 247 numeral identity, same palette |
| Legal entity | Holding company | Own legal entity |

**Sovereign Living, Developments, Money, and Impact** are sub-pages within the group site. They each get their own section page but share navigation and footer — they are business units, not separate brands at this stage.

If any of these later becomes a distinct consumer-facing brand (e.g. Sovereign Living acquiring its own domain and marketing budget), the sub-page can be extracted into a standalone site without rebuilding from scratch — that's baked into the component architecture below.

---

## 2. Technology Stack

```
Framework:        Next.js 14 (App Router)
Styling:          Tailwind CSS + CSS custom properties (from brand tokens)
Fonts:            Google Fonts — Cormorant Garamond (display) + Montserrat (body)
Animation:        Framer Motion (scroll reveals, nav transitions)
CMS:              None initially — MDX files for copy, easy to migrate to Sanity later
Email:            Resend (for contact form)
Deployment:       Vercel
```

**Why Next.js over plain HTML?** The hub-and-spoke structure, shared navigation, and brand consistency across 10+ pages makes a component-based framework the right call. It also sets you up for CMS integration and performance (ISR) without rebuilding.

---

## 3. File & Folder Structure

```
sovereign-group/
├── apps/
│   ├── sovereign-capital/          ← sovereigncapital.co.za
│   │   ├── app/
│   │   │   ├── layout.tsx          ← Root layout: nav, footer, fonts
│   │   │   ├── page.tsx            ← Homepage
│   │   │   ├── about/page.tsx
│   │   │   ├── living/page.tsx
│   │   │   ├── developments/page.tsx
│   │   │   ├── money/page.tsx
│   │   │   ├── impact/page.tsx
│   │   │   ├── consortium/page.tsx
│   │   │   ├── pipeline/page.tsx
│   │   │   ├── leadership/page.tsx
│   │   │   └── contact/page.tsx
│   │   └── ...
│   │
│   └── retirement247/              ← retirement247.co.za
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── why-life-rights/page.tsx
│       │   ├── services/page.tsx
│       │   ├── who-we-serve/page.tsx
│       │   ├── pipeline/page.tsx
│       │   ├── team/page.tsx
│       │   └── contact/page.tsx
│       └── ...
│
├── packages/
│   ├── brand/
│   │   ├── tokens.ts               ← sovereign-brand-tokens.ts (generated)
│   │   ├── tokens.css              ← sovereign-brand-tokens.css (generated)
│   │   └── emblem.tsx              ← SVG emblem component (all 4 variants)
│   │
│   └── ui/                         ← Shared components used by both sites
│       ├── SovereignNav.tsx
│       ├── SovereignFooter.tsx
│       ├── HeroLockup.tsx
│       ├── SectionRule.tsx         ← Gold rule divider with section number
│       ├── StatBlock.tsx           ← R9B+ / 7+ / etc.
│       ├── PipelineTable.tsx
│       ├── LeadershipCard.tsx
│       ├── ConsortiumBlock.tsx
│       └── ContactForm.tsx
│
└── tailwind.config.ts              ← Shared config referencing brand tokens
```

---

## 4. Design System — Translating Brand Tokens to Components

### 4.1 Colour Usage Rules (enforce in code)

```
Navy  (#0C1D47)  → page backgrounds (dark sections), emblem fills, nav
Gold  (#C8A96E)  → horizontal rules, monogram, section numbers, hover states
Bronze(#B09A6E)  → gold on light backgrounds (never gold on cream)
Ivory (#F0E8D0)  → body text on dark backgrounds, wordmark on dark
Cream (#F8F5EE)  → light section backgrounds, cards on light surfaces
Steel (#7A9ABE)  → supporting/caption text on dark backgrounds ONLY

NEVER: gold text on cream | drop shadows on monogram | logo on busy photos
```

### 4.2 Typography Scale (CSS)

```css
/* Applied via Tailwind custom classes */
.t-wordmark    { font: 300 clamp(36px,5vw,52px)/1 'Cormorant Garamond'; letter-spacing: 0.25em; text-transform: uppercase; }
.t-headline    { font: 400 clamp(28px,3.5vw,44px)/1.1 'Cormorant Garamond'; }
.t-subheading  { font: 600 clamp(10px,1.1vw,13px)/1 'Montserrat'; letter-spacing: 0.3em; text-transform: uppercase; }
.t-body        { font: 400 clamp(15px,1.1vw,17px)/1.7 'Montserrat'; }
.t-label       { font: 500 11px/1 'Montserrat'; letter-spacing: 0.4em; text-transform: uppercase; }
.t-caption     { font: 400 12px/1.5 'Montserrat'; color: var(--color-steel-blue); }
```

### 4.3 Section Rhythm

Every section follows this pattern — the antidote to the "wall of cards" problem:

```
[section-number label]  ←  Montserrat, 11px, tracked, gold
[headline]              ←  Cormorant Garamond, 44px, ivory/navy
[short deck copy]       ←  Montserrat, 16px, max-width 560px
[content]               ←  grid / prose / table
[gold rule]             ←  1px, #C8A96E, 40% opacity
```

Minimum vertical padding per section: `py-24` (96px) on desktop, `py-16` on mobile.
Max content width: `1200px` centred. Body copy columns: `max-w-[60ch]`.

### 4.4 The "AI look" anti-patterns to avoid

| Avoid | Use instead |
|-------|-------------|
| Numbered cards in a 3-col grid | Alternating prose + detail rows with asymmetric layout |
| Stat row: icon + number + label | Large typographic numbers (Cormorant, 80px) with a single line of copy beneath |
| Dark card with gold border-radius everywhere | Mostly flat sections with a single full-bleed navy section per page |
| "Get In Touch" CTA button at bottom of every section | One contact section at the bottom of the page, sparse, with a pull quote |
| Bold headings on every paragraph | Section headings only; body copy carries the weight in regular weight |

---

## 5. Page-by-Page Specification

### 5.1 Sovereign Capital — Homepage (`/`)

**Layout: Full-bleed, editorial, 6 sections**

```
SECTION 1 — HERO (navy bg, full viewport height)
  · Sovereign emblem SVG (S monogram), centred, 120px
  · Wordmark: SOVEREIGN CAPITAL (tracked caps, ivory, 52px)
  · Tagline: "Capital with conscience. Care with authority."
    → Split across two lines. Cormorant Garamond, 44px, ivory.
  · Sub-label: "Somerset West · Stellenbosch · Mauritius"
    → Montserrat, 11px, tracked, steel blue
  · No button. No arrow. Let it breathe.
  · Subtle: grain texture overlay on navy, 4% opacity

SECTION 2 — NUMBERS (cream bg)
  · Four stats displayed as large typographic moments:
    R9B+  /  7  /  R30B  /  2
  · Each: Cormorant 80px, navy. Label below: Montserrat 11px, tracked.
  · Single horizontal row, generous spacing. No cards, no icons.

SECTION 3 — WHO WE ARE (navy bg, prose)
  · Section label: "01 — WHO WE ARE"
  · Headline: "A private capital group built for the long horizon"
  · Body: 2 paragraphs, max-width 600px
  · Pull quote (right column on desktop):
    "We are asset custodians and operators — not short-cycle developers."
    → Cormorant italic, 24px, gold vertical rule left

SECTION 4 — BUSINESS UNITS (cream bg)
  · Section label: "02 — THE GROUP"
  · Four units listed as editorial rows (not cards):
    Sovereign Living / Sovereign Developments / Sovereign Money / Sovereign Impact
  · Each row: unit name (Cormorant 28px) + one-sentence descriptor + arrow link
  · Hover: gold underline animates in from left

SECTION 5 — CONSORTIUM (navy bg)
  · Section label: "03 — CONSORTIUM"
  · 4 entities: Sovereign Capital (lead) / Absolute Life / Lombard / Fedgroup
  · Horizontal list on desktop, stacked on mobile
  · Name + role only — no logos yet (placeholder noted)

SECTION 6 — CONTACT (cream bg)
  · Pull quote: "Conversations begin quietly."
  · Two columns: address / contact on left; short CTA paragraph on right
  · Single mailto link, no form on homepage
```

---

### 5.2 Sovereign Capital — Business Unit Pages

Each of the four business unit sub-pages (`/living`, `/developments`, `/money`, `/impact`) follows the same template shell:

```
SECTION 1 — UNIT HERO (navy, 60vh)
  · Unit monogram or initial (if assigned) + unit name
  · One-sentence proposition
  · Breadcrumb: Sovereign Capital → [Unit Name]

SECTION 2 — THE PROPOSITION (cream)
  · What this unit does, why it exists, who it serves
  · 3 paragraphs max. No bullet lists.

SECTION 3 — CAPABILITIES / SERVICES (navy)
  · Prose-led, not cards. 3–5 items as numbered editorial rows.

SECTION 4 — LINK BACK (cream)
  · "Part of the Sovereign Capital Group"
  · Link to consortium page + link to relevant standalone site (if applicable)
```

**Sovereign Living** specifically links to → `retirement247.co.za` (cross-site link in footer + in body).

---

### 5.3 Retirement 247 — Homepage (`/`)

**Layout: Standalone, own brand expression, 7 sections**

```
SECTION 1 — HERO (navy, full viewport)
  · RT247 emblem (247 monogram, same double-ring system)
  · Wordmark: "retirement / 247" — lowercase "retirement", large "247"
    → This typographic treatment is distinctive; preserve it exactly.
  · Subline: "Strategy · Design · Marketing · Sales"
    → Montserrat, 11px, tracked, steel blue
  · Hero line: "Life rights expertise. Always on."
    → Cormorant, 44px, ivory

SECTION 2 — THE OPPORTUNITY (cream)
  · Section label: "01 — THE OPPORTUNITY"
  · 4 stats as large type (same pattern as SC homepage):
    5.4M / 2% / 5–10yr / R80–100B
  · Short opportunity statement in prose (2 sentences max)

SECTION 3 — WHY LIFE RIGHTS (navy, prose + pull quote)
  · This is the intellectual centrepiece of the site.
  · Cormorant headline: "Why the life rights model is structurally different"
  · Body: model explanation in 3 focused paragraphs
  · Pull quote: "The life right model, when ethically applied, offers a fair exchange —
    and a compounding long-term asset for the owner."
  · Returns table (developer glance stats): displayed as 4 large typographic numbers
    ~20% / 8–10% / 100% / 3%
    NOT as a table — as a 2×2 typographic grid

SECTION 4 — WHAT WE DO (cream)
  · Section label: "02 — SERVICES"
  · 9 services displayed as editorial list rows — NOT as numbered card grid
  · Format per row:
    [01]  Value Proposition Development
          One sentence. →
  · On hover: row background shifts to ivory, text to navy, arrow animates right
  · Services can expand inline (accordion) on click — no new page needed

SECTION 5 — WHO WE SERVE (navy)
  · 3 audience types — Landowners / Developers / Funds & REITs
  · Displayed as editorial columns, not cards
  · Each: audience title (Cormorant, 24px) + 2-sentence description

SECTION 6 — PIPELINE (cream)
  · Section label: "03 — CURRENT MANDATES"
  · Intro: "A pipeline built on relationships, not tenders."
  · Pipeline table — styled cleanly:
    - Montserrat 12px, generous row padding (py-4)
    - Gold bottom border on header row only
    - Status column: colour-coded dot (green = Secured, amber = Negotiation, blue = Mandated)
    - Fee column right-aligned
  · Note: "Project details disclosed at our discretion"

SECTION 7 — CONTACT (navy)
  · Pull quote: "The life rights model suits your site. Let's run the numbers."
  · Gavin Vickers contact + email link
  · "Part of the Sovereign Capital Group" with SC logo lockup (light variant)
```

---

### 5.4 Leadership Page — Sovereign Capital (`/leadership`)

```
· Full-width section, cream background
· Each principal: name (Cormorant 28px) + title (Montserrat label) + bio prose
· NO headshots initially (placeholder noted in code with a comment)
· Arranged as editorial rows, not portrait cards
· Order: Lauren Peacock · Rhys Meredith · Arthur Case · Gavin Vickers
```

---

### 5.5 Pipeline Page — Sovereign Capital (`/pipeline`)

```
· Summary stat bar at top: R9B+ pipeline / 8 active projects / SA + Mauritius
· Full table using the same RT247 table style
· Status filter (small toggle: All / Secured / Negotiation / Mandated)
· Note on Mauritius mandate — separate paragraph, not a table row
```

---

## 6. Shared Component Specifications

### `SovereignEmblem.tsx`
```tsx
// Props: monogram ('S' | 'SLf' | '247' | 'LR'), size (px), variant ('dark' | 'light')
// Renders SVG emblem with correct double-ring system
// Used in: nav, hero sections, footer, favicon
```

### `SectionRule.tsx`
```tsx
// Renders: [number] — [label] above a 1px gold rule
// Props: number ('01'), label ('WHO WE ARE'), theme ('dark' | 'light')
```

### `HeroLockup.tsx`
```tsx
// Full-viewport hero. Props: headline, subline, label, theme
// Handles Framer Motion reveal on mount (staggered: emblem → wordmark → headline → label)
```

### `PipelineTable.tsx`
```tsx
// Renders pipeline data. Props: rows[], showFees (boolean)
// SC version: no fees column. RT247 version: fees column visible.
// Shared component, different data.
```

### `PullQuote.tsx`
```tsx
// Cormorant italic, 22–26px, with gold vertical rule on left
// Used in: WHO WE ARE, CONTACT, WHY LIFE RIGHTS
```

---

## 7. Navigation Design

### Sovereign Capital Nav
```
[S emblem — 40px] SOVEREIGN CAPITAL    About  What We Do  Consortium  Pipeline  Leadership  Contact
```
- Sticky, transparent on hero (ivory text), solid navy below fold
- On mobile: hamburger → full-screen navy overlay, centre-aligned links, Cormorant 32px

### Retirement 247 Nav
```
[247 emblem — 36px] retirement247      Why Life Rights  Services  Who We Serve  Pipeline  Team  Speak to Us
```
- Same sticky behaviour
- Footer: includes "A Sovereign Capital Group company" with SC emblem (light variant, 32px)

---

## 8. Animation Principles

Keep it restrained — one well-orchestrated moment per section is enough.

```
Page load:        Hero elements stagger in (opacity + translateY, 40px → 0, 0.6s ease-out)
Scroll reveals:   Sections animate in as they enter viewport (Framer Motion whileInView)
                  → opacity 0→1, translateY 24px→0, duration 0.5s
Hover states:     Nav links: gold underline scales from 0→100% width (scaleX transform)
                  Pipeline rows: background transition 200ms
                  Service rows: arrow translateX 6px, 200ms
Gold rule:        Animate width from 0→100% on scroll entry (CSS animation, 0.8s)
```

No parallax. No scroll-triggered counting numbers. No typewriter effects. These are the tells.

---

## 9. Copy Editing Decisions

The existing copy is strong. The following editorial refinements should be applied in the build:

**Sovereign Capital**
- Remove the sub-brand list in "Who We Are" — it reads as a footnote. Move consortium detail to `/consortium` page only.
- The PBSA section (point 05 under What We Do) and the CSR/Ground Up Programme (point 06) feel like a different company. Flag for Lauren to confirm whether these belong on the SC homepage or on a `/impact` sub-page only.
- Pipeline table: remove "Gross Sales" column header — implied. Rename to "R247 Fees" only on the RT247 version.

**Retirement 247**
- The "Model Explained" section duplicates content already in "Why Life Rights." In the build, consolidate these into one section with an expand/collapse for the detailed bullet lists (For the Asset Owner / For the Resident).
- The consortium section at the bottom is correct and should be kept — it provides institutional credibility. Use the light variant logo lockup.

---

## 10. Prompts for Claude Code / Cursor

Use these as your starting prompts in sequence:

### Prompt 1 — Project scaffold
```
Create a Next.js 14 monorepo with two apps: 'sovereign-capital' and 'retirement247', 
and a shared 'packages/ui' directory. Configure Tailwind CSS in both apps using the 
shared tailwind.config.ts. Add Cormorant Garamond and Montserrat via next/font/google. 
Set up the CSS custom properties from sovereign-brand-tokens.css in each app's 
globals.css. No content yet — just the working scaffold with correct folder structure.
```

### Prompt 2 — Brand tokens + emblem
```
Using the sovereign-brand-tokens.ts file, create a SovereignEmblem React component 
in packages/ui/. It should accept props: monogram (string), size (number, default 80), 
variant ('dark' | 'light'). Render the double-ring SVG emblem: navy fill circle, 
outer gold ring at 1.6px stroke, inner gold ring at 0.53px stroke and 45% opacity, 
four compass diamond ornaments at N/E/S/W positions, and the monogram letter centred 
in Cormorant Garamond 300 weight. Test it by rendering all four variants (S, SLf, 247, LR).
```

### Prompt 3 — Sovereign Capital homepage
```
Build the Sovereign Capital homepage (apps/sovereign-capital/app/page.tsx) with 6 
sections as specified in the build plan. Use Framer Motion for scroll reveals. 
Sections: Hero (full-viewport, navy, emblem + wordmark + headline), Stats (cream, 
4 large typographic numbers), Who We Are (navy, prose + pull quote), Business Units 
(cream, 4 editorial rows with hover states), Consortium (navy, 4 entities), Contact 
(cream, minimal). All copy from the sovereign-capital copy document. Brand tokens 
from sovereign-brand-tokens.css. No generic card components — layout must feel 
editorial and unhurried.
```

### Prompt 4 — Retirement 247 homepage
```
Build the Retirement 247 homepage (apps/retirement247/app/page.tsx) with 7 sections 
as specified in the build plan. The RT247 brand uses the same palette but a distinct 
typographic identity: the wordmark is lowercase 'retirement' above a large '247'. 
Include: Hero, Opportunity stats, Why Life Rights (prose + pull quote + 4 typographic 
return stats in a 2×2 grid — not a table), Services (9 accordion rows, not cards), 
Who We Serve (3 editorial columns), Pipeline table (with status dots and fee column), 
Contact. All copy from the retirement247 copy document.
```

### Prompt 5 — Navigation + footer (shared)
```
Build SovereignNav and SovereignFooter components in packages/ui/. Nav: sticky, 
transparent over hero (ivory text), solid navy below scroll threshold. Logo: 
SovereignEmblem + wordmark. Mobile: full-screen navy overlay. Footer: address, 
contact, copyright, sub-brand links. RT247 footer includes 'A Sovereign Capital 
Group company' with SC emblem light variant. Use the brand tokens throughout.
```

### Prompt 6 — Pipeline table component
```
Build a PipelineTable component in packages/ui/. Props: rows (array of project 
objects), showFees (boolean), showGrossSales (boolean). Each row: Project name, 
Location, Units, Status (with colour-coded dot: green=Secured, amber=Negotiation, 
blue=Mandated), and conditional fee/gross sales columns. Style: Montserrat 12px, 
generous row padding, gold 1px bottom border on header, no outer border, cream 
background. Rows highlight on hover (ivory bg transition 150ms).
```

---

## 11. Decisions Still Outstanding

| Item | Options | Recommended |
|------|---------|-------------|
| Headshots for leadership | Placeholder vs. illustrated vs. initials monogram | Initials monogram (brand system, consistent with emblem) until photography available |
| PBSA / Ground Up on SC site | Homepage vs. /impact sub-page only | Move to /impact — keep SC homepage focused on life rights and capital |
| Contact form vs. mailto | Form (Resend) vs. mailto link | Mailto for now; add form when Resend is configured |
| Sovereign Living sub-domain | Sub-page now, sovereignliving.co.za later | Sub-page (`/living`) structured so it can be extracted without rebuild |
| CMS | MDX files vs. Sanity | MDX for build phase; migrate to Sanity when content updates become frequent |
| Photography / imagery | None / stock / commissioned | No stock. Navy + cream + gold sections without photography reads as intentional restraint, not absence. Add real photography when available. |

---

*End of build plan. Use the six Claude Code prompts in sequence. Each prompt is self-contained and produces a testable output before moving to the next.*
