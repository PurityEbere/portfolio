# Purity Udeh — Portfolio

A minimal personal portfolio built with [Next.js](https://nextjs.org) (App Router), React, TypeScript and Tailwind CSS. It has a Build landing page, Projects gallery, Case Studies index, Activities & Writing page, About page, and individual project pages.

## Requirements

- [Node.js](https://nodejs.org) 18.18 or newer (20 or 22 recommended)
- npm (comes with Node.js)

Check your versions with:

```bash
node -v
npm -v
```

## Getting started

```bash
# 1. Install dependencies (first time only, or after pulling changes)
npm install

# 2. Start the development server
npm run dev
```

Open <http://localhost:3000> in your browser. The page reloads automatically when you save a file.

To use a different port: `npm run dev -- -p 4000`.

## Production build

```bash
npm run build   # creates an optimized build in .next/
npm run start   # serves that build at http://localhost:3000
```

Run `npm run build` before deploying to catch any errors.

## Editing content

Almost everything you'll want to change lives in **`lib/data.ts`**:

| What | Where in `lib/data.ts` |
| --- | --- |
| Name, year, email, Twitter, LinkedIn, GitHub | `site` |
| About page paragraphs and links | `about` |
| Projects (gallery + project pages) | `projects` |

### Project fields

```ts
{
  slug: "billery",            // URL: /work/billery
  title: "Billery",
  role: "Product Manager",
  company: "Raven",           // optional line under the role; delete to hide
  year: "2025",               // "" hides the year
  description: [              // optional; one string per paragraph; [] hides it
    "First paragraph.",
    "Second paragraph.",
  ],
  credits: ["Name One", "Name Two"],  // collaborators
  video: "/assets/billery.mp4",       // optional; adds a play button
  ...phone("billery.png"),            // image in public/assets/
}
```

Notes:

- The order of `projects` is the order in the gallery.
- Descriptions show on desktop only (hidden on phones and tablets), matching the original design.
- If you change a `slug`, the project's URL changes too.

### Images and videos

Put files in **`public/assets/`** and reference them as `/assets/<file>`.

- Gallery images are tall phone mockups, **1317 × 2676 px** (PNG with a transparent background). The `phone("file.png")` helper sets that size.
- If you use an image with a different size, set it explicitly instead of using the helper:
  `image: "/assets/new.png", width: 1200, height: 2500,`
- Videos (`.mp4` or `.webm`) are optional. When a project has one, the project page shows a play/pause button that swaps the image for the video.

### Favicon

The "PU" favicon is `app/favicon.ico` (32 × 32). Replace that file to change it.

## Project structure

```
app/
  layout.tsx          # root layout, fonts, page title
  page.tsx            # home: horizontal gallery
  about/page.tsx      # About page
  work/[slug]/page.tsx# project pages (one per entry in lib/data.ts)
  globals.css         # Tailwind + a few global styles
  favicon.ico
components/
  Header.tsx          # name/year + nav (About, Twitter, LinkedIn)
  WorkView.tsx        # project page layout, video play/pause
lib/
  data.ts             # ← all site content
  fonts.ts            # IBM Plex Mono + Inter (via next/font)
public/assets/        # project images and videos
```

## Deploying

The easiest option is [Vercel](https://vercel.com/new) (made by the Next.js team): push this folder to a GitHub repository, import it on Vercel, and keep the default settings. Any host that supports Next.js (Netlify, Render, a Node server running `npm run build && npm run start`) also works.

## Troubleshooting

- **Port 3000 already in use:** stop the other process, or run `npm run dev -- -p 4000`.
- **Old favicon still showing:** browsers cache favicons; hard-refresh with Cmd+Shift+R (Ctrl+Shift+R on Windows).
- **Strange build errors after changing dependencies:** delete `.next` and `node_modules`, then run `npm install` again.
\n## Adding articles\n\nOpen `app/activities/page.tsx` and add entries to the `articles` array with `title`, `publication`, `date`, and `url`. Add your real article URLs; the page intentionally does not invent article details.\n# portfolio
