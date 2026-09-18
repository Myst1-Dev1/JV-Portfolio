---
name: nextjs-app-router
description: Guidelines for generating and editing Next.js 14+ App Router features, components, and Server Actions. Use this when the user asks to build new pages, routing, or data fetching.
---

# Next.js App Router Architecture Skills

When modifying or creating files for this Next.js project, strictly adhere to these rules:

## 1. Component Defaults
- All components inside the `app/` directory are **Server Components** by default.
- Only add `'use client'` at the top of a file if the component requires interactivity (`useState`, `useEffect`) or browser-only APIs.

## 2. Data Fetching & Mutations
- Use native `async/await` directly inside Server Components to fetch data.
- For form submissions or mutations, use **Server Actions** (`'use server'`) placed inside an `actions.ts` file or directly inside the component.
- Always implement proper error boundaries (`error.tsx`) and loading states (`loading.tsx`).

## 3. Styling Constraints
- Utilize **Tailwind CSS** utility classes exclusively for styling.
- Keep components responsive using mobile-first breakpoints (`sm:`, `md:`, `lg:`).
