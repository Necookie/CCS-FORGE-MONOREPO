# ⚡ CCS Forge

> **The digital nervous system for the College of Computer Studies.**
> A gamified, high-performance ecosystem engineered to convert continuous effort into digital capital.

[![Astro](https://img.shields.io/badge/Astro-latest-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)

## 📖 The Genesis Protocol

We started in a chaos of fragmented group chats, lost announcements, and untracked achievements. Connections were made, but the legacy was lost the moment the semester ended.

**CCS Forge** was initiated to unify our ecosystem. It is not just a portal—it is our definitive digital home, designed for presence and permanence. Students can build a visible record of their growth through algorithm battles, quizzes, and campus scavenger hunts, accumulating XP on a live, global leaderboard.

---

## 🏗️ Monorepo Architecture Blueprint

This project is structured as a high-performance monorepo utilizing **Turborepo** and **pnpm** for workspace efficiency and lightning-fast build caching. 

### 🌌 Applications (`/apps`)
- **`landing`**: Top-layer landing page. Engineered for SEO, maximum aesthetic impact, and zero-JS payloads using static Astro chapters. Incorporates isolated **React 19 Islands** for specific interactive systems (e.g., live Leaderboards, Supabase Auth flows).
- **`platform`**: Personalized student/admin data portal leveraging **Astro SSR** and Prisma to serve authenticated data layers and statistics seamlessly.

### 📦 Shared Packages (`/packages`)
- **`database`**: Core database logic housing the unified Prisma schema and generated Prisma client layer.
- **`ui`**: The Forge design system interface. A unified component registry featuring Tailwind CSS 4 geometries and Shadcn UI directives.
- **`config-tailwind` / `config`**: Consolidated, strict configuration specifications (ESLint, Prettier, TypeScript, Tailwind) to enforce high-fidelity consistency across the team.

---

## 🎨 Design Aesthetic: "Modern Cyber-Dashboard"

The user interface adheres to a strict guideline, as mapped out in `brand.md`, to reinforce the developer-focused nature of the college:
- **Adaptive Theming:** High-contrast Light Mode default utilizing clean geometries (`slate-50`, `white`), easily swapped to a **Cinematic Dark Mode** utilizing deep space grays (`#1A1A24`, `#252634`).
- **Typography Engine**: `Outfit` for sleek, futuristic readability and `Fira Code` (with enabled glyph ligatures) for strict, monospaced data rendering and system logs.
- **The Glow Doctrine**: Elimination of standard black drop-shadows. Spatial depth is established through vibrant, localized ambient glows and strict border-based elevations. 
- **Core Accent Colors**:
  - `Cyan (#00E5FF)` - Primary interaction, standard operations, and success states.
  - `Purple (#8A2BE2)` - Ambient global broadcasts and secondary highlights.
  - `Coral (#FF6B6B)` - Alerts, danger semantics, and primary ranking statuses.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- `pnpm` (v9+)
- PostgreSQL (for Prisma instance)

### Local Development Protocol

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Database Initialization**
   Navigate to the `packages/database` directory, map `.env` variables, and push the schema:
   ```bash
   pnpm --filter @forge/database run db:push
   ```

3. **Ignition Sequence**
   Boot the local ecosystem:
   ```bash
   pnpm dev
   ```

---

## 🦾 Core Modalities & Features
- **The Arena**: Showcase of legacy wins and ongoing ecosystem activities (e.g., Physical Attendance Quests mapped to digital capital).
- **The Foundry**: Live, real-time leaderboard ranking operators based on continuous activity and validated badges.
- **Challenge Architecture**: Real-world Scavenger hunts, Code battles, and discrete task bounties translated securely via Supabase Auth and Prisma validation.

> *"Turn physical presence into digital capital."* — Code Bearers
