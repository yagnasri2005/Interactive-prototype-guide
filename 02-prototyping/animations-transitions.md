# Animations & Transitions Guide

Use animations and transitions to guide user attention, provide feedback, and create a polished experience.

---

## Why Animations Matter

✨ **Guide Attention**
- Draw focus to important elements
- Indicate state changes

✨ **Provide Feedback**
- Confirm user actions
- Show system responses

✨ **Improve Perceived Performance**
- Make loading feel faster
- Show that something is happening

✨ **Enhance Delight**
- Create memorable moments
- Build emotional connection

---

## Animation Principles

### 1. Timing
- **Fast (100-200ms):** Immediate feedback
- **Medium (300-500ms):** Noticeable but not distracting
- **Slow (600-1000ms):** Emphasize importance

### 2. Easing
- **Ease-out:** Natural, deceleration (most common)
- **Ease-in:** Acceleration (use sparingly)
- **Ease-in-out:** Balanced feel
- **Linear:** Mechanical (use rarely)

### 3. Distance
- Longer distances = longer durations
- Small micro-interactions = short durations
- Consistency across similar elements

### 4. Restraint
- Not everything needs animation
- Avoid animation fatigue
- Purpose over decoration

---

## Common Animation Types

### Micro-interactions
Small, purposeful animations (100-300ms):
- Button hover states
- Loading spinners
- Checkmark on task completion
- Form field focus states

### Page Transitions
Movement between screens (300-500ms):
- Fade in/out
- Slide in from side
- Zoom in/out
- Reveal animation

### Entrance Animations
Elements appearing on screen (200-400ms):
- Fade in
- Slide up
- Scale up
- Bounce in

### Exit Animations
Elements leaving screen (200-400ms):
- Fade out
- Slide down
- Scale down

### State Change Animations
Indicating status updates (200-600ms):
- Color change
- Icon morphing
- Position change
- Size change

---

## Animation Specifications Template

```
Element: [Button Name]
Trigger: Hover
Animation Type: Scale + Color
Duration: 200ms
Easing: Ease-out
Details:
  - Scale from 100% to 105%
  - Color from [Color1] to [Color2]
  - No delay
```

---

## Tool-Specific Implementation

### Figma
- Use Smart Animate for automatic transitions
- Define interaction trigger points
- Adjust timing in interaction panel
- Preview animations with prototype view

### InVision
- Add interactions from object panel
- Choose animation type and duration
- Layer animations for complex effects

### Adobe XD
- Use Auto-Animate for element transitions
- Adjust timing and easing curves
- Add conditions for state-based animations

---

## When NOT to Animate

❌ Every single interaction
❌ Animations longer than 1 second (unless necessary)
❌ Distracting animations during tasks
❌ Animations that repeat automatically
❌ Purely decorative animations on CTAs

---

## Performance Considerations

- Animate properties that don't trigger layout: opacity, transform
- Avoid animating width/height (causes reflow)
- Use GPU acceleration (transform, opacity)
- Test on actual devices for smoothness
- Aim for 60fps animations

---

## Testing Animations

1. **Solo Testing:** Watch each animation in isolation
2. **Flow Testing:** Experience animations in context
3. **Device Testing:** Check on various devices
4. **User Testing:** Observe if animations help or distract users
5. **Performance Testing:** Monitor CPU/GPU usage

---

**Remember: Animation serves the user experience, not vice versa. When in doubt, keep it simple.**
