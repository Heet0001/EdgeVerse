# EdgeVerse - Perceiva Website

A modern React website for Perceiva — AI-powered perception and safety solutions for automotive and smart mobility. Built with Vite, React, Tailwind CSS, Framer Motion, and Recharts.

## Prerequisites

**Node.js is required.** If you see `node.exe is not recognized`:

1. Install Node.js from [nodejs.org](https://nodejs.org/) (LTS recommended)
2. Or run the installer you have: `D:\Download\Applications\node-v22.12.0-x64.msi`
3. Restart your terminal/PowerShell after installation
4. Verify: `node -v` and `npm -v` should work

## Setup

```bash
cd "D:\Internship\Internship (EdgeVerse)\Main Website\perceiva-website"
npm install
```

## Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview with:

```bash
npm run preview
```

## Tech Stack

- **React 18** + Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for survey chart
- **Lucide React** for icons

## Project Structure

```
src/
├── components/     # Section components (Hero, Features, etc.)
├── ui/             # Shared primitives (Button, Card, SectionTitle)
├── data/           # Content and config
├── hooks/          # useInView, etc.
└── assets/         # Images, icons
```

