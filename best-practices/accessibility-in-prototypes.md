# Accessibility in Prototypes

Ensure your interactive prototypes are accessible to all users, including those with disabilities.

---

## Why Accessibility Matters

- ♿ **Legal:** Many jurisdictions require accessible digital products
- 👥 **Users:** ~15-20% of population has some disability
- 💡 **Better Design:** Accessibility practices improve UX for everyone
- 🌍 **Inclusive:** Serves users in various contexts

---

## WCAG Guidelines

Follow Web Content Accessibility Guidelines (WCAG 2.1):

### Perceivable
- Provide text alternatives
- Don't rely on color alone
- Provide captions and transcripts
- Make text resizable

### Operable
- Ensure keyboard navigation
- Avoid content that flashes
- Provide skip links
- Make interactive elements discoverable

### Understandable
- Use clear language
- Label inputs consistently
- Provide error messages
- Help users avoid mistakes

### Robust
- Use valid HTML
- Proper ARIA labels
- Test with assistive technology
- Support multiple browsers

---

## Accessibility Checklist

### Colors
- [ ] Don't rely on color alone for information
- [ ] Use sufficient contrast (4.5:1 minimum)
- [ ] Test with color blindness simulator

### Typography
- [ ] Font size minimum 14px (body text)
- [ ] Sufficient line height (1.5x)
- [ ] Good spacing between elements

### Navigation
- [ ] Keyboard navigation works
- [ ] Tab order logical
- [ ] Focus states visible
- [ ] Skip links for repetitive content

### Interactive Elements
- [ ] Buttons have clear labels
- [ ] Form fields labeled properly
- [ ] Error messages clear and actionable
- [ ] Feedback provided for all interactions

### Images & Media
- [ ] Descriptive alt text
- [ ] Captions for videos
- [ ] Transcripts for audio

### Focus Management
- [ ] Focus visible at all times
- [ ] Focus moves logically
- [ ] No keyboard traps

---

## Testing for Accessibility

### Automated Testing
- axe DevTools
- WAVE Browser Extension
- Lighthouse
- Contract checker tools

### Manual Testing
- Navigate with keyboard only
- Test with screen reader (NVDA, JAWS)
- Zoom to 200%
- Test color contrast

### User Testing
- Include users with disabilities
- Test with assistive technology
- Observe real usage patterns

---

## Common Accessibility Issues

❌ **Color Only**
✅ Solution: Add patterns, icons, text

❌ **Unlabeled Buttons**
✅ Solution: Add aria-labels, visible text

❌ **No Focus State**
✅ Solution: Show clear focus indicator

❌ **Image Without Alt Text**
✅ Solution: Write descriptive alt text

❌ **Keyboard Inaccessible**
✅ Solution: Support Tab, Enter, Escape keys

---

**Remember: Accessibility is not an afterthought—design it in from the start!**
