---
name: ui-ux-design-system
description: UI/UX rules, accessibility (a11y), Tailwind CSS, and design tokens
---

# UI/UX & Tailwind Guidelines

1. **Design System & Tailwind:**
   - Use semantic and neutral colors (`bg-background`, `text-foreground`, `border-border`).
   - Ensure full dark mode support using the `dark:` prefix.
   - Add comprehensive visual states for interactive elements: `hover:`, `focus-visible:ring-2`, `active:`, `disabled:opacity-50`.

2. **Accessibility (a11y):**
   - Use semantic HTML elements (`<main>`, `<nav>`, `<article>`, `<header>`, `<footer>`).
   - Add `aria-label` to icon-only buttons.
   - Guarantee high text contrast and visible focus indicators when navigating via keyboard.

3. **Animations & Visual Feedback:**
   - Add smooth transitions on hovers and color changes (`transition-colors duration-200`).
   - Implement elegant loading skeletons and empty states for asynchronous responses.