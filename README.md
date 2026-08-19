# Laiba Khan — Portfolio

Personal portfolio for Laiba Khan, an Artificial Intelligence undergraduate at NED University of Engineering & Technology, specializing in machine learning, computer vision, and AI-driven software development.

**Live site:** [me.laibakhan.xyz](https://me.laibakhan.xyz)

## Overview

A single-page portfolio covering education, skills, selected AI/ML/CV projects, certifications, leadership activities, and contact details — built with a focus on editorial typography and restrained, purposeful motion rather than generic template animation.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals, hover interactions, and page transitions
- [Lucide React](https://lucide.dev) for icons

## Features

- Scroll-spy navigation with animated active-link underline
- Staggered entrance animations and 3D tilt/spotlight effects on project cards
- Rotating role text, magnetic buttons, and a cinematic intro reveal
- Fully responsive, dark/light-aware design system driven by CSS custom properties

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```
src/
├── app/            # Next.js App Router entry (layout, page, globals.css)
├── components/     # Section and UI components (Hero, Projects, Nav, etc.)
└── lib/data.ts     # Portfolio content (profile, education, skills, projects, etc.)
```

Content is centralized in `src/lib/data.ts` — update that file to change resume/portfolio content without touching component code.

## Deployment

Deployed on [Vercel](https://vercel.com), served from a custom domain (`me.laibakhan.xyz`) proxied through Cloudflare DNS. Pushes to `master` can be connected to auto-deploy via Vercel's Git integration.
