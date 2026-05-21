---
name: fixing-accessibility
description: Add accessibility to React components. Apply ARIA labels, keyboard navigation, focus management, semantic HTML, and WCAG 2.1 AA compliance.
---

For every component, ensure:
- All interactive elements have aria-label or aria-labelledby
- Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- Focus is visible and well-styled (never outline:none without replacement)
- Images have meaningful alt text
- Headings follow logical hierarchy (h1 > h2 > h3)
- Color contrast ratio minimum 4.5:1 for text
- Buttons use <button>, links use <a>
- Forms have <label> for every input
- Animations respect prefers-reduced-motion
- Touch targets minimum 44x44px
