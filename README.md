# 100xAI — Merged Portfolio + Audit Landing

Unified Vite + React 18 app combining two previously separate projects:

- **Homepage** (`/`) — the main 100xAI portfolio/agency site.
- **Audit page** (`/audit`) — the workshop/audit landing page that the
  homepage's "Book Free Audit" CTAs route to.

## Routing

Client-side routing via `react-router-dom`:

| Route     | Component                   | Source of truth                         |
|-----------|-----------------------------|------------------------------------------|
| `/`       | `src/Home.jsx`              | Homepage sections in `src/sections/`     |
| `/audit`  | `src/audit/AuditPage.jsx`   | Landing components in `src/audit/components/` |

## How the two pages stay isolated

Both projects historically used overlapping class names (`.navbar`,
`.container`, `.btn-primary`, `.section-title`, `.footer`, etc.) and
had conflicting `body { … }` rules. To keep each page pixel-identical
to its standalone build:

1. All audit-page CSS selectors are prefixed with `.audit-scope` (see
   `src/audit/components/*.css`). The wrapper `<div className="audit-scope">`
   lives in `AuditPage.jsx`.
2. Audit-page body styles activate via a `body.audit-body` class that
   `AuditPage.jsx` toggles on mount/unmount.
3. Shared assets (logo SVG, `Faces/`) live once in `src/assets/`; the
   audit components import them via `../../assets/…`.

## Homepage CTAs that go to `/audit`

- Navbar — "Book Free Audit" (desktop + mobile menu)
- Footer — "Book Free Audit" in the CTA banner

All other `#contact` anchors on the homepage still scroll to the
homepage's Contact section, unchanged.

## Scripts

```bash
npm install
npm run dev       # local dev on :5173
npm run build     # production build -> dist/
npm run preview   # serve dist/ locally
```

## Deployment

Because routing is client-side, the host must serve `index.html` for
unknown paths. Config files included:

- `public/_redirects` — Netlify
- `vercel.json` — Vercel
- For nginx: `try_files $uri /index.html;`
- For Apache: standard `FallbackResource /index.html`
