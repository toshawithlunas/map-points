# Plan: Responsive layout of the "Map Pins" Figma import

## Context
The user imported a Figma frame (`/src/imports/MapPins/index.tsx`) — a "Surroundings" map screen for *Quay Quarter Tower*: a top tab bar, a large interactive map (with compass, zoom/action buttons, distance filter, category filter chips, and colored category pins) on the left, and a right sidebar listing toggleable attraction categories.

The import is generated as a single fixed‑size canvas (1440px wide) where **every element is absolutely positioned at hard pixel coordinates**. It does not flow or adapt to smaller viewports. The user's only ask: "просто сверстать эту страницу так, чтобы она была респонсив" — lay this page out so it is responsive. No interactivity/state is needed; it is a static, faithful, responsive layout.

No `@make-kits` design system is installed (confirmed in `package.json`), so we render the import faithfully rather than swapping to DS components. Per the design-imports skill, `src/imports/` is read‑only — all adaptation happens in new components we author.

## Approach
Author a new component that re-creates the import's visual structure, but replaces the top-level absolute-position layout with responsive flex/grid. Leaf/detail components (icons, pins, buttons, toggles, compass) are carried over **faithfully with their exact classes**, importing `svgPaths` and the 4 PNGs from the import folder. Only the *container/layout* level changes.

### Files
- **Create `src/app/components/map-pins.tsx`** — the responsive screen. Re-author the import's components here (faithful classes), changing only layout containers:
  - **Top bar** (from `Frame5`): a `flex` row, full width, `~64px` tall. Title "Quay Quarter Tower" (left), `Tabs` (Overview / Offices / Maps[active] / Favorites+counter) centered, settings ghost button (right). On narrow screens: tabs become horizontally scrollable (`overflow-x-auto`), title may truncate; settings button stays right.
  - **Body**: replace the absolute `Interactive` + `SurroundingContent` + `Frame19` with a responsive container — `flex` that is `flex-row` on `lg+` and `flex-col` on small screens.
    - **Map panel** (from `Interactive`): `flex-1`, `relative`, `rounded-[24px]`, `overflow-clip`, min-height (e.g. `h-[60vh] lg:h-auto`), with the map images (`imgImage8`, `img...152328`, blur layer) as `object-cover` fills. Overlays repositioned with edge anchors / percentages instead of fixed px:
      - Category filter chips (`ButtonGroup1`: All, Food & Drink, Shopping, Services, Leisure & Recreation, Health, Education) → top-left, wrapped in an `overflow-x-auto` row so they scroll on small screens.
      - Action buttons (`ActionButtons`: layers, zoom +/- group, compass-N button) → `absolute right-4 top-1/2 -translate-y-1/2`.
      - Distance floating (`DistanceFloating`: "Distance:" + 5km/10km checks) → `absolute bottom-4 left-1/2 -translate-x-1/2`.
      - `Compas` → `absolute left-5 top-5`.
      - Pins (`Pin`…`Pin5`) → positioned with **percentage** `left/top` (derived from their original px over the ~945×804 map) so they scale with the panel.
    - **Sidebar** (from `SurroundingContent` + `Frame19`): fixed `w-full lg:w-[439px]` column, `flex-col gap-[24px]`. Header row = "Surroundings" title + "Hide all". Then the 6 `AttractionGroup` rows (Food & Drink, Shopping, Services, Leisure & Recreation, Health, Education) each with icon, label, counter, and the white pill toggle — carried faithfully. Add `overflow-y-auto` for small screens.
  - Keep the page background treatment (`imgImage12` blurred backdrop + dark base) so the white text remains legible, matching the import.
- **Edit `src/app/App.tsx`** — replace the placeholder with `<MapPins />` rendered full-screen (`size-full`, dark background container).
- **Edit `src/styles/fonts.css`** (currently empty) — add a `@import` for **General Sans** (Fontshare CDN) at the top of the file, since the design's `font-['General_Sans:*']` classes reference it and it is not yet loaded. If the font cannot be loaded, the existing sans fallback already applies.

### Asset handling
- Import `svgPaths from "../../imports/MapPins/svg-1437l3d6ft"` and the 4 PNGs via their relative paths from the new component (bare-file ES module imports, passed to `src`).
- Reuse the import's inline SVG path markup verbatim — do not redraw.

## Verification
- Run the app via the `run` skill (the Vite dev server is already running; do not start it manually) and view the preview.
- Confirm at desktop width: top tab bar, map with pins/compass/controls on the left, attraction sidebar on the right — visually matching the screenshot.
- Resize / check a narrow (mobile) width: header tabs scroll horizontally, map and sidebar stack vertically, chips scroll, nothing clips or overflows the viewport.
- Confirm all 6 PNG/SVG assets render and General Sans (or fallback) applies.
