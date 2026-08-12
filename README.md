# DBGI Platform

Dominica Business Growth & Innovation — the DBGI news platform. Built with Next.js (App Router), styled to the original "Pentagram High-Tension Editorial" design system, with MDX-based articles and Mux-powered video.

## Stack

- **Next.js 16** (App Router, TypeScript) — every article/section/sector page is statically generated at build time (`● SSG` in the build output), so the live site is pre-rendered HTML served from Vercel's edge CDN. That's what lets it hold up under heavy traffic without any extra infrastructure work.
- **MDX content** — articles live as files in `content/`, no database or CMS. You write, commit, deploy.
- **Mux** — video playback via `@mux/mux-player-react`. Adaptive bitrate streaming, no third-party branding.
- **next/image** — automatic image optimization/resizing for every hero image and thumbnail.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Publishing an article

Add a new `.mdx` file to `content/articles/`. The filename (minus `.mdx`) becomes the URL slug.

```mdx
---
title: "Your headline here"
section: "news"          # news | opportunities | founders | sectors | island-life | ideation-hub
sector: "clean-energy"    # optional: clean-energy | agribusiness | tourism | tech-digital | blue-economy
eyebrow: "Clean energy"
standfirst: "One or two sentence summary shown on cards and at the top of the article."
author: "Your name"
authorRole: "Optional role/title"
authorImage: "/images/your-photo.png"   # optional
date: "2026-08-12"
heroImage: "/images/your-hero.jpg"
heroImageAlt: "Describe the image for accessibility"
---

Article body goes here, written in Markdown/MDX. Use `##` for subheadings,
`>` for pull quotes, and normal Markdown links and lists.
```

Put images in `public/images/`. Reference them from frontmatter/body as `/images/filename.jpg`.

The homepage automatically pulls the most recent article as the lead story, the second-most-recent as the mid story, the next four into "Also this week," and the next three into the bottom grid — no manual curation needed. Every article is also reachable from its section page (`/news`, `/founders`, etc.) and, if it has a `sector`, from `/sector/[sector]`.

## Publishing a video article

1. Upload the video in the [Mux dashboard](https://dashboard.mux.com) (or via the Mux API/CLI).
2. Copy the asset's **Playback ID**.
3. Add a `video` block to the article's frontmatter:

```yaml
video:
  playbackId: "your-playback-id"
  title: "Optional title for player analytics"
```

When `video` is present, the article page and any homepage/listing card that features it will show the Mux player (with a "Watch" badge) instead of a static hero image.

The demo article `content/articles/inside-the-founder-house-video-tour.mdx` uses Mux's public sample playback ID (`DS00Spx1CV902MCtPj5WknGlR102V5HFkDe`) as a placeholder — swap it for a real asset before launch.

## Placeholder content

The 10 seed articles and the "Anya Pierre" viewpoint in `content/` are placeholder copy carried over from the original mockup, written to demonstrate every layout slot (lead, mid, side rail, bottom grid, section/sector listings, video). Replace them with real reporting before launch — delete or edit the files in `content/articles/` and `content/viewpoints/` directly.

## Deploying

The site is built for [Vercel](https://vercel.com):

1. Push this repo to GitHub (already at `bmcwhinney/DBGI`).
2. Import the repo in Vercel. No environment variables are required for the current MDX + Mux-playback-ID setup.
3. Point the `dominicabgi.site` domain at the Vercel project.

Every push to `main` triggers a new production build; every article is pre-rendered as static HTML at build time.

## Project structure

```
app/                    routes (homepage, [section], [section]/[slug], sector/[sector])
components/             SiteHeader, SiteFooter, ArticleCards, OpinionBox, VideoEmbed, icons
content/articles/       article MDX files (source of truth for all editorial content)
content/viewpoints/     short opinion-box quotes
lib/                    content loading/query helpers (articles.ts, viewpoints.ts)
types/content.ts        section/sector definitions and TypeScript types
public/images/          brand art, hero images, favicons
```
