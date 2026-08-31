# Zhuoxiang (Shawn) Zhou — academic website

A React and TypeScript academic portfolio built with Vite. The site includes
Home, Research, Teaching, and Photography, with a fixed name and navigation
column beside the scrolling page content.

## Development

Use Node.js 22.12 or newer and npm. Install the versions recorded in the lockfile:

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite. The four pages use hash routes: `#/`,
`#/research`, `#/teaching`, and `#/photography`.

No API key is required for these pages. The unused chat components and Gemini
service are retained from the original app; they are not mounted by `App.tsx`.
If developing that optional feature, keep its `GEMINI_API_KEY` in an ignored
`.env.local` file and never commit credentials.

## Content and layout

- `constants.ts` holds the profile, research, courses, and photo metadata.
- `public/images/bio.jpg` is the portrait; `public/cv.pdf` is the CV.
- `public/photos/` contains the photography assets.
- `App.tsx` owns the persistent layout, routes, page titles, and route-change
  scroll/focus behavior. `components/Navbar.tsx` owns the fixed left column.
- `index.css` controls the layout, typography, responsive spacing, and focus
  treatment. It reserves the sidebar width using the same CSS variable as the
  content offset. Small screens keep a compact left column and stack the home
  content; short windows allow the sidebar itself to scroll to keep links usable.
- `pages/Photography.tsx` measures the gallery's available width rather than
  the full viewport. Its lightbox is rendered at the document body so it can
  cover the entire screen without being constrained by the content column.

The layout follows the approved fixed-left preview inspired by
[Matthew Gentzkow's site](https://matthewgentzkow.com/), while preserving this
site's own content, serif headings, and muted blue links.

`index.html` retains the existing external Tailwind browser CDN and Google Fonts
resources. Those styles and fonts require internet access. Application
dependencies are recorded in `package.json` and `package-lock.json`; this layout
change adds no dependencies.

## Checks and production build

```sh
npm test
npm run typecheck
npm run build
npm run preview -- --host 127.0.0.1
```

The build produces `dist/`, which is generated and ignored by Git. Never edit
that directory by hand. Building or previewing does not publish the live site.

The automated tests compile and server-render the actual page components. They
check the active navigation, preserved content and links, gallery column
boundaries, and fixed-sidebar/responsive CSS contracts. They do not substitute
for a browser visual or interaction review.

For visual review, inspect the four routes at desktop, tablet, and mobile widths
(including 320px) and in a short window. Confirm that:

1. Scrolling leaves the name and navigation stationary without horizontal
   overflow; all links remain reachable on short screens.
2. Changing routes resets the content to the top and the active navigation
   updates. Keyboard users can skip directly to the content.
3. The portrait and biography sit side by side when there is room and stack
   cleanly on narrow screens.
4. The photo gallery reflows, the expand button works, and the lightbox covers
   the full viewport. Escape closes it; arrow keys switch photos; Tab remains
   within the dialog; closing restores focus to the photo trigger.
5. Email, CV, and LinkedIn links still resolve correctly.
