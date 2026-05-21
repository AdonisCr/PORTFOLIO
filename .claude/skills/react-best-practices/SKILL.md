---
name: react-best-practices
description: React + TypeScript + Tailwind best practices for clean, performant components.
---

Structure:
- One component per file, named same as file
- Props interface defined at top of file with explicit types
- No any type — use proper TypeScript types
- Extract reusable logic into custom hooks in /hooks/
- Keep components under 150 lines — split if larger

Performance:
- Use useCallback for handlers passed as props
- Use useMemo for expensive computations
- Lazy load heavy components with React.lazy + Suspense
- Images: always specify width and height

Tailwind:
- Use CSS variables for theme tokens, not hardcoded colors
- Mobile-first: base styles for mobile, sm/md/lg for larger screens
- Extract repeated class combinations into @apply in globals.css

Animations (Framer Motion):
- Always provide reduced-motion fallback
- Prefer layout animations over position changes
- Use variants for coordinated animations
