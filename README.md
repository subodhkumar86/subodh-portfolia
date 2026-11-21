# Subodh Kumar — Full Stack Developer Portfolio

A production-ready, high-performance single-page developer portfolio engineered for **Subodh Kumar** (Full Stack Developer with 2.5+ years of experience), built using **Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion**.

![Stack](https://img.shields.io/badge/Stack-Next.js%2014%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20Framer%20Motion-indigo)
![License](https://img.shields.io/badge/Status-Production%20Ready-emerald)

---

## 🌟 Key Features

1. **Dark Developer Palette**: Styled with `#090D16` deep background, `#111827` card containers, crisp `1px` borders, and subtle indigo/emerald accents with ambient lighting.
2. **Hero Section with Terminal Vitals**:
   - Status badge: *"Available for High-Impact Engineering Roles"*.
   - Direct CTAs: "Download Resume" (`/resume.pdf`), "View Projects", and quick social links.
   - Live interactive terminal mock showing verified runtime stack, notice period, and production uptime.
3. **Recruiter Scan Mode (30-Second Fast Scan)**:
   - One-click toggle in Navbar and Hero.
   - Condenses the entire portfolio into a high-density recruiter view: core stack pills, 4-box vitals (experience, notice period, location, education), top production system highlights, and immediate contact CTAs.
4. **Featured Engineering Case Studies with Architecture Drawers**:
   - **GMDA TDR Portal** (Assam Urban Development) — Transferable Development Rights, multi-department approval state machine, ACID ledger transactions, and departmental RBAC.
   - **Fleetovo** (Car Rental Operations SaaS) — Quotations, view-tracked tokenized preview links, automated Razorpay webhook conversions, driver duty portals (`v1/client/bookings`), and dynamic UPI QR collections.
   - **BusinessOS** (Multi-Tenant ERP) — PostgreSQL Row-Level Security (RLS) kernel isolation, pessimistic row locks (`SELECT FOR UPDATE`), Redis session stores, and CSRF protection.
   - **DronaAIm** (Telematics & Fleet Backend) — IoT GPS ingestion, Redis Pub/Sub, live WebSocket dispatch, MongoDB-to-PostgreSQL schema migration, and driver underwriting risk engine.
   - **Interactive Modal**: Step-by-step pipeline diagram, core engineering modules, technical concurrency highlights, and security/scalability breakdown.
5. **Full Portfolio Scope (Categorized Projects)**:
   - **Luxorides & Weddings Luxury Ecosystem** (Consumer portals + Admin CMS).
   - **Distributed Order Processing System** (Distributed Saga microservices with compensating rollbacks).
   - **Deploy Control Panel** (CI/CD container orchestrator with BullMQ and AWS SSM/Lambda).
   - **Live Deployments**: AI Recruitment Calling Agent, ISIKKO, KriyaX Gym SaaS, EduERP, and LMS.
6. **Career Timeline & Education**:
   - Umbrella Room Ventures India Pvt. Ltd. (Sep 2026 – Present)
   - Maaze Underwriting Solution Pvt. Ltd. (Jan 2026 – Aug 2026)
   - Qurilo Solutions (Aug 2025 – Jan 2026)
   - Etaya Innovations Pvt. Ltd. (Aug 2024 – Jul 2025)
   - B.Tech in CSE — JSS Academy of Technical Education, Noida (2021 – 2025)
7. **Contact & Accessibility**:
   - One-click copy for email (`subodhkumar2520@gmail.com`) and phone (`+91 8650162716`) with feedback states.
   - Direct link to LinkedIn and GitHub.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css           # Custom dark theme, scrollbars, and grid patterns
│   ├── layout.tsx            # Root layout with SEO meta tags & OpenGraph
│   └── page.tsx              # Single-page portfolio shell with recruiter toggle
├── components/
│   ├── Navbar.tsx            # Sticky header with recruiter mode toggle & mobile drawer
│   ├── Hero.tsx              # Candidate intro, terminal vitals, and CTAs
│   ├── RecruiterScanMode.tsx # 30-second candidate scan view
│   ├── CaseStudies.tsx       # 4 featured case studies with modal triggers
│   ├── ArchitectureModal.tsx # Interactive architecture & pipeline flow drawer
│   ├── OtherProjects.tsx     # Categorized grid for additional production work
│   ├── ExperienceTimeline.tsx# Chronological career & education journey
│   ├── SkillsSection.tsx     # 4-tier matrix: Languages, Frontend, Backend, Databases/DevOps
│   └── ContactFooter.tsx     # Direct email/phone copy, social channels, and resume link
├── data/
│   └── portfolio.ts          # Strictly verified candidate data and architecture specs
├── public/
│   └── resume.pdf            # Candidate resume file
├── package.json              # Project dependencies and scripts
├── tailwind.config.ts        # Custom theme extensions (palette, fonts, animations)
├── tsconfig.json             # TypeScript compiler settings
└── next.config.mjs           # Next.js App Router configuration
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js (v18.x or newer)** and **npm** installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

### Method 1: Push to GitHub & Import to Vercel (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio for Subodh Kumar"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Navigate to [Vercel Dashboard](https://vercel.com/new).
3. Select and import the repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and serve the application globally on its Edge Network.

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to deploy directly.
