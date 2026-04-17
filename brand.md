# Design System & Brand Guidelines: CCS Forge (v3.0)

## 1. Brand DNA & Philosophy
**CCS Forge** is the digital nervous system for the College of Computer Studies. The visual identity is **"Modern Cyber-Dashboard"**—a deliberate departure from sterile academic portals. It is engineered to feel like a premium developer tool or a high-end gaming client. 

* **The Vibe:** Dark, moody, cinematic, and technically precise. 
* **The Architecture:** Fluid, floating panels over rigid grids.
* **The Edge:** Neon glows, soft glassmorphism, and physics-based micro-interactions.

**Keywords for AI Generation:** Dark mode SaaS, floating bento-alternative layout, glassmorphism, neon cyberpunk glow, 3D stylized abstract assets, technical data-heavy UI, high-contrast gamification.

---

## 2. Color System & Semantic Usage
The palette is built on a foundation of deep, desaturated space-grays, allowing the high-octane neon accents to command attention without causing eye strain.

### 2.1 Surfaces & Canvas (The Void)
* **`--color-surface-base` (`#1A1A24`):** The absolute background. Used for the main body of the application. Should feel endless.
* **`--color-surface-panel` (`#252634`):** Default background for floating content panels, sidebars, and inactive cards.
* **`--color-surface-elevated` (`#2D2E42`):** Used strictly for modal dialogs, dropdown menus, and active hover states on panels.
* **`--color-glass` (`rgba(37, 38, 52, 0.6)`):** Used in conjunction with `backdrop-blur-md` for sticky headers or overlapping UI elements.

### 2.2 Primary Accents (The Core)
* **`--color-accent-teal` (`#00E5FF`):** The primary brand color. Used for primary call-to-action (CTA) buttons, active navigation states, and successful challenge completions. 
    * *Glow Token:* `shadow-[0_0_20px_rgba(0,229,255,0.4)]`
* **`--color-accent-purple` (`#8A2BE2`):** The secondary brand color. Used for highlighting hero sections, premium badges, or transitioning gradients (`bg-gradient-to-r from-purple-500 to-teal-400`).
* **`--color-accent-coral` (`#FF6B6B`):** The attention color. Used for critical alerts, overdue deadlines, and notification bubbles.

### 2.3 Status & Utility (The Logic)
* **Success/Online:** `#2D6A4F` (Deep Forest Green) - Used for organic accents or "System Normal" indicators.
* **Warning/Pending:** `#F4A261` (Muted Amber) - Used for "In Review" challenge statuses.
* **Borders/Dividers:** `rgba(255, 255, 255, 0.08)` - Barely-there borders to define edges without cluttering the UI.

### 2.4 Typography Colors
* **Primary Text:** `#FFFFFF` (Pure White) - For H1-H6 and critical data points.
* **Secondary Text:** `#A0A0B0` (Desaturated Taupe) - For body copy, placeholders, and descriptions.
* **Disabled Text:** `#5C5C70` - For inactive buttons or unavailable features.

---

## 3. Typography Architecture
Typography must balance human readability with machine-like precision.

### 3.1 Primary Font: Sans-Serif (e.g., Inter, Plus Jakarta Sans)
Used for all readable content and standard UI elements.
* **Display/H1:** `text-4xl md:text-5xl font-bold tracking-tight text-white`
* **H2 (Section Headers):** `text-2xl font-semibold tracking-tight text-white`
* **H3 (Card Headers):** `text-lg font-medium text-white`
* **Body:** `text-base font-normal text-[#A0A0B0] leading-relaxed`

### 3.2 Secondary Font: Monospace (e.g., JetBrains Mono)
Used strictly for technical data, metadata, system tags, and micro-copy to reinforce the "developer" aesthetic.
* **System Tags:** `text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] text-teal-400` (e.g., `[ STATUS: VERIFIED ]`).
* **Code Blocks:** `text-sm font-mono bg-[#12131A] text-slate-300 p-4 rounded-lg border border-white/5`.

---

## 4. Spatial System & Layout Engine
Do not use rigid, unbroken grid lines. The UI must feel like it is floating.

* **The Canvas:** The main layout should be a Flexbox column (`flex flex-col gap-6 md:gap-8`) with a maximum width (`max-w-7xl mx-auto`) to maintain readability on ultrawide monitors.
* **Floating Panels (Cards):** All content blocks are distinct panels with `p-6` or `p-8` padding.
* **Geometry:** Use aggressive rounding to soften the dark theme. 
    * Panels/Modals: `rounded-2xl` or `rounded-3xl`.
    * Buttons/Inputs/Tags: `rounded-full` (pill shape) or `rounded-xl` for larger touch targets.
* **Separators:** Avoid straight horizontal lines (`<hr>`). Separate major distinct sections (like a Hero banner and a Challenge list) using negative space (`mt-12`) or soft, organic SVG waves.

---

## 5. Component Anatomy

### 5.1 Buttons
* **Primary (Neon):** `bg-[#00E5FF] text-[#1A1A24] font-bold rounded-full px-6 py-3 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]`.
* **Secondary (Ghost):** `bg-transparent border border-[#A0A0B0] text-[#A0A0B0] rounded-full px-6 py-3 transition-all hover:border-white hover:text-white hover:bg-white/5`.
* **Danger/Destructive:** `bg-transparent border border-[#FF6B6B]/50 text-[#FF6B6B] rounded-full px-6 py-3 hover:bg-[#FF6B6B]/10`.

### 5.2 Forms & Inputs
Inputs must feel recessed into the panel.
* **Wrapper:** `flex flex-col gap-2`.
* **Label:** `text-xs font-mono uppercase tracking-widest text-[#A0A0B0]`.
* **Field:** `bg-[#12131A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#5C5C70] transition-all focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)]`.

### 5.3 Elevation & Shadows (The Glow Doctrine)
**Rule:** Black drop shadows are strictly forbidden. Depth is achieved entirely through border highlighting and colored glows.
* **Resting Panel:** `bg-[#252634] border border-white/5 shadow-none`.
* **Hovered/Active Panel:** `bg-[#2D2E42] border border-[#8A2BE2]/50 shadow-[0_8px_32px_rgba(138,43,226,0.15)] transform -translate-y-1`.

---

## 6. Motion & Choreography
Animations must feel physical, snappy, and responsive. They should guide the eye, not distract.

* **Easing Curve:** Use `cubic-bezier(0.4, 0, 0.2, 1)` for all standard transitions.
* **Micro-Interactions (150ms):** Hovering over interactive elements should scale them up (`scale-105`) and transition their borders/glows instantly.
* **Page Transitions (300ms):** When an Astro page loads or a React Island mounts, panels should fade in (`opacity-0` to `opacity-100`) and slide up slightly (`translate-y-4` to `translate-y-0`).
* **Success/Gamification (500ms):** When a user earns points, the point counter should tick up dynamically, accompanied by a subtle scale pulse (`1.0` -> `1.2` -> `1.0`) and a quick burst of neon box-shadow.

---

## 7. AI Prompting Directives (For UI/UX Generation)
*When generating Astro components, React islands, or Tailwind HTML based on this system, adhere strictly to the following:*

1.  **Always enforce Dark Mode:** Do not generate light mode variants. Default all backgrounds to slate-900/slate-950 equivalents.
2.  **Tailwind Arbitrary Values:** Liberally use arbitrary values for glows (e.g., `shadow-[0_0_15px_rgba(0,229,255,0.3)]`) and specific hex codes.
3.  **Glassmorphism over Opacity:** Use `bg-[#252634]/80 backdrop-blur-md` for floating elements like navbars instead of solid colors.
4.  **Data Hierarchy:** Always prioritize the visibility of numerical data (Points, Ranks, Deadlines). Use the monospace font stack for these data points to make them stand out against the sans-serif body copy.
5.  **Stateful Design:** When generating a component (like a Challenge Card), always provide the CSS classes for its default, hover, and focus states. 

---

## 8. Tone of Voice & Microcopy
The system's voice is intelligent, concise, and slightly gamified. 

* **Error Messages:** Do not say "Oops, something went wrong!" Say "Connection failed. Retrying..." or "[ SYSTEM ERROR: INVALID_INPUT ]".
* **Success Messages:** Do not say "Yay, you did it!" Say "Challenge Verified. +50 Points Allocated."
* **Empty States:** Do not say "There is nothing here yet." Say "No data found. Initiate scan or join a challenge."