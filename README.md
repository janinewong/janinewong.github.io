# Janine portfolio - milestone 5

Homepage implementation based on the Figma portfolio design.

## Preview locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Milestone 5 image-quality changes

- Manage + Multichannel: original Figma raster sources (from milestone 4)
- Promotions: high-resolution original UI source instead of the 624px flattened card preview
- Premier Bays: high-resolution original UI source instead of the flattened card preview
- Developer Center: rebuilt as layered artwork from original Figma source assets
- FUT 18: still uses the flattened Figma card preview as a temporary fallback; replace with a higher-resolution source asset when available

The Figma-hosted source URLs are temporary preview assets. Before publishing, copy final source assets into `/public` and update project data to local URLs.

## Milestone 6
Homepage project artwork was refreshed from the latest PNG assets in Figma and sized to the exact desktop proportions from the source design. Figma MCP asset links are temporary during review; before production deployment they should be downloaded into /public and referenced locally.

## Protected case studies

Manage & Analytics and Multichannel Selling share a server-verified password.
Set `CASE_STUDY_PASSWORD` and `CASE_STUDY_SESSION_SECRET` in `.env.local` for local
work and in the hosting service's environment settings for production. See
`.env.example` for names. Never prefix either value with `NEXT_PUBLIC_`.
A local Maru-inspired password has been generated in `.env.local` (excluded from git).

Successful entry sets a signed, HttpOnly, SameSite cookie for seven days; production
cookies require HTTPS. Rotate the session secret to revoke all existing sessions.
Protected screenshots live in `private/case-studies` and are served only after
session verification. Public homepage thumbnails are intentionally separate.
The Next.js tracing configuration includes the private image files in server builds.
Deploy with a Next.js server runtime, not a static export. The password endpoint
limits failed attempts per IP in each server process; use the host's shared rate
limiting when scaling across multiple instances.
