# ⚡ Code Bearers Design System & Branding Guidelines (v3.0)

> "Turn physical presence into digital capital."

This document serves as the absolute source of truth for the **CCS Forge** ecosystem's UI/UX standards. The aesthetic is defined as **"Modern Cyber-Dashboard"**, synthesizing high-performance developer tooling with premium, gamified consumer software.

---

## 1. Core Philosophy

1. **Information Density over Clutter:** The interface must handle complex data (leaderboards, Git-like histories, system logs) without overwhelming the user. Use generous padding, subtle demarcations, and precise typography to establish hierarchy.
2. **Accessible by Default, Cinematic by Choice:** The application employs **Adaptive Theming**. The default state is a crisp, highly legible **Light Mode**. Dark Mode is opt-in only via the UI theme toggle and must never be auto-enabled on first visit.
3. **The Glow Doctrine:** Eliminate standard, muddy black drop-shadows. Spatial depth is strictly established through vibrant, localized ambient glows (using shadows inheriting accent colors) and precise 1px borders.

---

## 2. Color Architecture

The brand has been re-oriented. **Code Bearers Purple** is the definitive primary driver of action and structure.

| Semantics | Hex Value | Tailwind Class References | Usage Rules |
| :--- | :--- | :--- | :--- |
| **Primary Base** | `#8A2BE2` | `purple-600` / `purple-500` | Primary buttons, active states, top-tier leaderboard ranks, primary trace borders, and hover glows. |
| **Secondary Ambient** | `#00E5FF` | `cyan-600` / `cyan-500` | Secondary metadata bounds, "System Online" indicators, hover-text transitions, and ambient gradient backdrops. |
| **Alert/Danger** | `#FF6B6B` | `rose-600` / `rose-500` | Destructive actions, pending/locked states, or missing data warnings. |
| **Success/Verified** | `#2D6A4F` | `emerald-700` (`#2D6A4F`) | Exclusive to "Verified" or "Secured" completion tags. Use sparingly to maintain impact. |
| **Warning/Pending** | `#F4A261` | `amber-600` (`#F4A261`) | Used for pending reviews or items requiring attention. |

### The Surface Foundations

The UI does not use pure black (`#000000`) or generic Tailwind slates for core dark surfaces. We utilize specialized "Space Grays" for elevated cyberpunk aesthetics.

- **Light Mode Foundations:**
  - Background: `slate-50` (`#F8FAFC`)
  - Elevated Cards: `white` (`#FFFFFF`)
  - Subdued Borders: `slate-200`
- **Dark Mode Foundations:**
  - Background: `#1A1A24` (Deep void gray)
  - Elevated Cards: `#252634` (Soft lifted gray)
  - Subdued Borders: `white/5` or `white/10`

---

## 3. Typography Engine

Typography is key to the "developer-first" identity of Code Bearers. Never use system default fonts.

### Headline & Body: **Outfit**
*Weights: 300, 400, 500, 600, 700*
- Used for all primary headlines (`h1` through `h6`), standard body paragraphs, and UI button labels.
- **Rule:** Headlines utilize `tracking-tighter` to achieve a sleek, tightly-kerned startup aesthetic.
- **Why:** `Outfit` provides a hyper-modern, geometric sans-serif look that feels cutting-edge but remains incredibly readable at small sizes.

### Data & System Logs: **Fira Code**
*Weights: 400, 500, 600, 700*
- Used for metadata tags, commit IDs, timestamps, uppercase system status pills, and code blocks.
- **Rule:** `font-feature-settings: "liga" 1, "calt" 1;` must be enabled globally to ensure programming ligatures (like `=>`, `!=`) render beautifully.
- **Why:** Immediate visual distinction between "Prose" and "System Data". It screams "built by engineers."

---

## 4. UI/UX Interaction Standards

### Form Geometries and Borders
- **Rounding:** Use extreme, friendly border-radii for macro elements (e.g., `rounded-[2rem]` or `rounded-[3rem]` for main section cards). Use `rounded-xl` for interactive micro-components (buttons, inputs, inner images).
- **The Hairline Border:** Elements should rarely bleed into the background. Every container requires a `border border-slate-200 dark:border-white/5` outline to give it a tangible, physical presence.

### Micro-Animations
- Ensure the interface feels "alive".
- **Hover Lifts:** Interactive cards must implement `hover:-translate-y-1` or `group-hover:scale-105` paired with a `duration-300` or `duration-500` transition.
- **System Pulses:** Use Tailwind's `animate-pulse` on tiny colored indicator dots (e.g., `w-1.5 h-1.5 bg-purple-500`) to signify live states or active servers.

### Handling Assets (The "Data Attachment" Pattern)
- Avoid massive, screen-dominating images that distort user flow. 
- Render raw image assets as "Attachments." Use `object-contain` combined with fixed heights (e.g., `h-24` or `h-32`) to establish thumbnail grids. 
- Never force an image into an unnatural aspect ratio via `object-cover` without strict contextual necessity. Images must maintain pristine clarity and zero distortion.

---

## 5. Implementation Architecture Checklists

### Accessibility & SEO
- **Semantic HTML:** Strict adherence to `<section>`, `<article>`, `<nav>`, and single `<h1>` architectures payload per page.
- **FOUC Prevention:** Theme-switching logic must be executed as an inline, synchronous `<script>` in the `<head>` checking `localStorage` before the DOM paints.
- **Theme Default Rule:** If no stored preference exists, initialize `localStorage.theme` to `light` and ensure the root document does not carry the `dark` class.

### File Structure Topology
- **`apps/landing`**: Static, zero-JS Astro application for the unauthenticated marketing layer.
- **`apps/platform`**: Authenticated dashboard using React islands and Astro SSR.
- **`packages/ui`**: Shared, strictly typed Tailwind CSS 4 & Shadcn components ensuring the "Glow Doctrine" is applied universally.
