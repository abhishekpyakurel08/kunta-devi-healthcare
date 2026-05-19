# Kunta Devi Health Care

A modern, responsive, and performance-optimized healthcare web application built for Kunta Devi Health Care & Diagnostic Center located in Kathmandu, Nepal. The platform serves as a central hub for patients to book appointments, explore medical services, view doctors' profiles, and learn about comprehensive health packages.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & custom Shadcn-style components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form + Zod (Validation)
- **Package Manager**: [pnpm](https://pnpm.io/)

## ✨ Key Features

### 📱 Mobile-First Responsive Design
Built with a fully responsive architecture that adapts seamlessly across all screen sizes — from 320px mobile devices to ultra-wide 4K displays — ensuring a flawless healthcare experience everywhere.

### ⚡ Performance Optimized
Powered by modern Next.js optimization techniques including:
- `next/image`
- Server Components
- Static Rendering
- Route-based code splitting
- Optimized font loading

### 🎬 Scroll-Based Animations
Lightweight, native scroll-triggered animations using Intersection Observer APIs create elegant fade, slide, and stagger effects without heavy animation libraries.

### 🩺 Healthcare-Focused User Experience
Designed specifically for the medical industry with:
- Clean visual hierarchy
- Soft rounded UI
- Accessible typography
- Trust-oriented color palette
- Premium micro-interactions

### 📅 Appointment Booking System
Patients can easily:
- Browse doctors
- Select departments
- Choose appointment slots
- Submit inquiries

## 🌐 Core Pages

- Home
- About Us
- Medical Services
- Doctors & Specialists
- Health Packages
- Appointment Booking
- Contact & Location
- FAQs

## 🎨 Design System

The platform uses a custom Tailwind CSS v4 design language focused on modern healthcare aesthetics.

- **🎯 Primary Theme**
  - **Primary Color**: `#0EA5A4`
  - Represents trust, wellness, calmness, and healthcare professionalism.
- **✍️ Typography**
  - **Font Family**: `Plus Jakarta Sans`
  - Modern, highly legible, and optimized for digital interfaces.
- **🟢 UI Style**
  - Large rounded corners (`rounded-4xl`, `rounded-6xl`)
  - Soft shadows
  - Spacious layouts
  - Minimal visual clutter
  - Smooth hover transitions

## 📈 SEO & Accessibility

Built with modern SEO and accessibility standards:
- Semantic HTML5 structure
- Next.js Metadata API & Server-rendered pages
- Accessible forms, buttons, and keyboard navigation support
- ARIA attributes and labels for assistive technologies
- Fast-loading optimized assets for high Lighthouse performance scores

## 📁 Project Structure

```text
kunta-devi-healthcare/
├── public/                 # Static assets (images, fonts, favicons)
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── (routes)/       # Main application routes (about, services, doctors)
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI components
│   │   ├── home/           # Homepage specific sections (Hero, About, Services)
│   │   ├── layout/         # Layout components (Navbar, Footer, Container, ScrollObserver)
│   │   └── ui/             # Base UI elements (Buttons, Inputs, Cards)
│   ├── data/               # Static mocked data (Doctors, Services, FAQs)
│   ├── lib/                # Utility functions (cn, etc.)
│   └── styles/             # Global CSS & Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies and scripts
```

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18.17+ 
- pnpm (Recommended)

### Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

---
*Built with ❤️ for Kunta Devi Health Care.*
