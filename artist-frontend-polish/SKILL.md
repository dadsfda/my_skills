---
name: artist-frontend-polish
description: Use when improving, beautifying, restyling, or visually polishing frontend interfaces with an artist's eye for composition, color, typography, spacing, texture, motion, and interaction details. Trigger for requests about UI polish, premium visual feel, art-directed frontend design, tasteful animation, poetic/editorial/gallery-like interfaces, Chinese ink-inspired aesthetics, or reusable visual effects such as canvas ink reveal hero animations.
---

# Artist Frontend Polish

## Purpose

Use this skill to turn an ordinary frontend interface into a visually intentional, production-ready experience. Prioritize taste, restraint, clarity, and domain fit over decorative excess.

## Workflow

1. Inspect the existing app before editing:
   - Identify framework, styling system, component conventions, icons, tokens, and layout patterns.
   - Preserve product function and existing interaction semantics.
   - Avoid unrelated rewrites.

2. Define a short visual direction:
   - Name the desired mood in concrete terms, e.g. "quiet editorial", "gallery-like", "technical atelier", "warm paper and ink", "precise enterprise tool".
   - State the audience and what the page must help them do.
   - Pick 2-3 visual levers only: composition, typography, color, texture, motion, imagery, density.

3. Improve composition first:
   - Establish a clear focal point.
   - Use rhythm: repeated spacing, aligned edges, consistent section cadence.
   - Remove weak decoration before adding new decoration.
   - Use full-width bands or unframed layouts for page sections; reserve cards for repeated items, tools, and modals.

4. Tune the visual system:
   - Use a restrained palette with contrast between background, surface, ink, accent, and state colors.
   - Avoid one-note palettes dominated by a single hue family.
   - Use typography hierarchy through size, weight, line-height, and measure; do not rely on huge text everywhere.
   - Add texture only when it supports the concept, such as paper grain, ink reveal, subtle borders, or image treatment.

5. Add motion last:
   - Motion must explain state, reveal content, or make interaction feel tactile.
   - Prefer short, interruptible transitions.
   - Respect `prefers-reduced-motion`.
   - For pointer-driven effects, disable or simplify on touch devices.

6. Verify:
   - Check desktop and mobile.
   - Check text wrapping and overflow.
   - Check hover/focus/active states.
   - Check performance for animations and canvases.

## Decision Rules

- If the page is a work tool, make it calmer, denser, and easier to scan.
- If the page is a landing page, make the first viewport instantly communicate the product/person/place/object.
- If the user asks for a "premium feel", translate it into specific choices: fewer colors, stronger alignment, better spacing, better typography, more purposeful imagery, and restrained motion.
- If an effect can distract from the task, make it smaller or remove it.
- If using a strong art direction, keep controls conventional and accessible.

## Reusable Resources

- Read `references/aesthetic-checklist.md` when reviewing or planning a visual polish pass.
- Use `assets/ink-reveal-hero/` when the user asks for a MiMo-like canvas ink reveal, mouse-following reveal mask, water-ink hover effect, or poetic hero animation.
- Use `assets/polish-css/` when a project needs a small CSS layer for editorial spacing, surfaces, buttons, and interaction polish.

## Implementation Notes

- Prefer existing components, variables, and design tokens.
- Keep edits closely scoped to the requested screen or component.
- Do not introduce a new design system for a single-page polish.
- Use real images or generated bitmap assets when visual media is central.
- Use canvas for organic pointer effects that require soft masks, procedural edges, or repeated stamping.
- Avoid copying another site's brand assets, exact layout, or proprietary visual identity.
