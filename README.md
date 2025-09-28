# Bad Accessibility SaaS Landing Page

This is a sample SaaS landing page intentionally built with poor accessibility practices for testing and demonstration purposes. The site should visually look fine but score poorly on accessibility audits (targeting around 45%).

## Intentional Accessibility Issues

### Poor Color Contrast (20+ issues)
- Low contrast text colors (#6B7280, #9CA3AF)
- Poor contrast buttons and interactive elements
- Insufficient color contrast ratios throughout
- Navigation and body text with poor readability

### Missing Semantic HTML (25+ issues)
- No proper landmarks (`<main>`, `<nav>`, `<footer>`, `<section>`)
- Incorrect heading hierarchy (h2 before h1, skipping from h4 to h6)
- Interactive elements using `<div>` instead of proper `<button>` or `<a>` tags
- Missing `<article>` elements for content blocks
- No proper list structure for navigation or features

### Missing ARIA Attributes (15+ issues)
- No `aria-label` for navigation or interactive elements
- Missing `aria-describedby` for form elements
- No `aria-expanded` for mobile menu
- Missing `role` attributes for custom interactive elements
- No ARIA live regions for dynamic content

### Image Accessibility Issues (10+ issues)
- All images missing `alt` attributes
- Decorative images without empty alt text
- Icons and logos without proper descriptions
- Social proof logos without context

### Keyboard Navigation Problems (15+ issues)
- Interactive elements using `<div>` without proper keyboard handling
- Missing or poor focus indicators
- No tab index management
- No skip links for keyboard users
- JavaScript interactions without keyboard support

### Form Accessibility Issues (8+ issues)
- Newsletter signup styled as `<div>` elements instead of proper form
- Missing labels and proper form structure
- No error handling or validation messages
- Poor focus management in form interactions

### Screen Reader Issues (12+ issues)
- Poor document structure without landmarks
- Empty page title
- Inconsistent heading levels (h2, h4, h5, h6, h3)
- Links without proper context ("Learn more →")
- Missing announcements for dynamic content changes

### JavaScript Accessibility Problems (10+ issues)
- No keyboard event handlers (only mouse events)
- Missing ARIA state updates
- No screen reader announcements for interactions
- Poor focus management after dynamic changes
- No proper error handling with accessibility feedback

## Quick Setup (HTML/CSS/JS Version)

Simply open `index.html` in a web browser - no build process required!

For local development with live reload:
1. Use a simple HTTP server: `python -m http.server 8000` or `npx serve`
2. Open `http://localhost:8000`

## Testing Accessibility

Test this site with accessibility tools to see the issues:

### Browser Extensions:
- **axe DevTools** - Will find 40+ issues
- **WAVE** - Will highlight contrast and structural problems  
- **Lighthouse** - Should score ~45% accessibility
- **Accessibility Insights** - Will show focus and keyboard issues

### Screen Reader Testing:
- NVDA (Windows)
- JAWS (Windows) 
- VoiceOver (Mac)
- Screen Reader (mobile)

### Manual Testing:
- Try navigating with only the keyboard (Tab key)
- Check color contrast with online tools
- Validate HTML structure
- Test with JavaScript disabled

## Expected Issues Found:

**Lighthouse Accessibility Score: ~45%**
- 20+ color contrast failures
- 25+ HTML structure violations  
- 15+ missing ARIA attributes
- 10+ image accessibility issues
- 15+ keyboard navigation problems

## File Structure:
```
├── index.html          # Main page with poor semantic structure
├── styles.css          # CSS with poor contrast and missing focus indicators  
├── script.js           # JavaScript without accessibility support
└── README.md           # This documentation
```

Perfect for testing accessibility tools and training on common web accessibility issues!