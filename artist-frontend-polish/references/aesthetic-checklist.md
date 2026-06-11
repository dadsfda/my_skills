# Aesthetic Checklist

Use this checklist before and after frontend polish work.

## Composition

- One clear focal point exists above the fold.
- Major edges align across header, hero, content, and footer.
- Section spacing follows a visible rhythm.
- Cards are not nested inside cards.
- Dense tools use compact, predictable layouts instead of marketing-style hero treatment.

## Color

- Palette includes distinct roles: background, surface, ink, muted ink, border, accent, state.
- Accent color is used sparingly.
- The interface is not dominated by one hue family unless the brand explicitly requires it.
- Contrast is sufficient for body text and controls.

## Typography

- Heading, body, caption, and control text have distinct but related styles.
- Line length is comfortable.
- Text does not depend on viewport-width font scaling.
- Letter spacing is normal unless there is a specific typographic reason.

## Texture And Imagery

- Texture supports the concept and never reduces legibility.
- Images show the real product, state, place, object, or mood needed by the page.
- Decorative imagery is not a substitute for useful visual content.

## Motion

- Motion has a job: reveal, orient, confirm, or create tactile feedback.
- Pointer effects pause when idle and avoid constant unnecessary rendering.
- Touch devices get a static or simplified version.
- `prefers-reduced-motion` is respected.

## Final QA

- Check 375px, 768px, 1440px, and one wide desktop viewport.
- Confirm no text overlaps or escapes containers.
- Confirm hover, focus-visible, disabled, loading, and active states.
- Confirm animation performance remains smooth.
