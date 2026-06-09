# Portfolio Project — Claude Code Instructions

## Project Overview
A professional web developer portfolio site built to showcase past work and generate client leads via ads.

## Tech Stack
- **Framework:** React 18 (Vite)
- **Styling:** CSS Modules (no Tailwind — keep it lightweight)
- **Routing:** React Router v6
- **Form handling:** EmailJS (for contact form, no backend needed)
- **Deployment:** Vercel
- **Language:** JavaScript (not TypeScript)

## Project Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Projects.jsx
    Services.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js       ← all project info lives here
    services.js       ← services & pricing
    testimonials.js   ← client quotes
  styles/
    global.css        ← CSS variables, resets, typography
    [Component].module.css
  App.jsx
  main.jsx
```

## Design Tokens (use these everywhere, never hardcode)
```css
--color-bg:        #0A0F1E;
--color-surface:   #111827;
--color-surface-2: #060913;
--color-accent:    #4F46E5;
--color-cta:       #10B981;
--color-text:      #F8F7F3;
--color-muted:     #94A3B8;
--color-border:    rgba(255, 255, 255, 0.07);
--font-display:    'Syne', sans-serif;
--font-body:       'Inter', sans-serif;
--radius-sm:       6px;
--radius-md:       10px;
--radius-lg:       14px;
```

## Coding Rules
- **Components:** functional components only, no class components
- **Styling:** one CSS Module per component, no inline styles except truly dynamic values
- **Data:** all content (projects, services, testimonials) lives in `src/data/` — never hardcoded inside JSX
- **Images:** use `/public/images/` for project screenshots; reference as `/images/filename.jpg`
- **No unnecessary dependencies** — if it can be done in vanilla JS/CSS, do it that way
- **Mobile first** — write mobile CSS first, use `min-width` media queries to scale up

## Key Breakpoints
```css
/* mobile:  default (< 768px)  */
/* tablet:  @media (min-width: 768px)  */
/* desktop: @media (min-width: 1100px) */
```

## Contact Form (EmailJS)
- Service ID, Template ID, and Public Key go in `.env` as:
  ```
  VITE_EMAILJS_SERVICE_ID=
  VITE_EMAILJS_TEMPLATE_ID=
  VITE_EMAILJS_PUBLIC_KEY=
  ```
- Never hardcode these values in source files

## What TO Do
- Keep components small and focused (one job each)
- Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<main>`)
- Add `alt` text to all images
- Use CSS transitions for hover effects (not JS)
- Keep bundle size small — no heavy animation libraries

## What NOT To Do
- Do NOT install unnecessary npm packages
- Do NOT use TypeScript
- Do NOT use Tailwind (we have our own token system)
- Do NOT put content/copy inside JSX — use the data files
- Do NOT use `useEffect` just to fetch static data — import it directly
- Do NOT use `any` inline styles for colors or spacing — use CSS variables

## Session Guide (to stay within Pro plan limits)
Build one section per session in this order:
1. Scaffold + global styles + Navbar
2. Hero section (typewriter effect)
3. Projects grid + data file
4. Services + Contact form (EmailJS)
5. Testimonials + Footer + responsive fixes
6. SEO meta tags + Vercel deploy

## Deployment Checklist (Session 6)
- [ ] All `.env` variables added to Vercel dashboard
- [ ] `og:image`, `og:title`, `og:description` meta tags set
- [ ] Google Analytics or Plausible snippet added
- [ ] Test contact form end-to-end
- [ ] Lighthouse score > 90 on Performance and SEO
- [ ] Custom domain connected (if available)
