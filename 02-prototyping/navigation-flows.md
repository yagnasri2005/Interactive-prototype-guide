# Navigation Flows Guide

Define clear, intuitive navigation flows that guide users through your prototype.

---

## Types of Navigation Flows

### 1. Linear Flows
User follows a single path from start to end.
- **Example:** Checkout process, form submission, onboarding
- **Advantage:** Simple, predictable
- **Use:** Task-oriented processes

```
Start → Step 1 → Step 2 → Step 3 → Success
```

### 2. Branching Flows
User path depends on their choices.
- **Example:** Conditional content, user preferences
- **Advantage:** Personalized experience
- **Use:** Decision-making scenarios

```
Start → Decision Point
  ├→ Path A → Result A
  └→ Path B → Result B
```

### 3. Non-Linear Flows
User can navigate freely between screens.
- **Example:** App home screen, dashboard, article browsing
- **Advantage:** Flexible exploration
- **Use:** Information discovery

```
Home ↔ Page 1
  ↔ Page 2
  ↔ Page 3
```

### 4. Hub-and-Spoke Flows
Central hub with multiple destinations.
- **Example:** Navigation menu, settings screen
- **Advantage:** Clear organization
- **Use:** Main navigation patterns

```
       ┌→ Destination 1
       ↓
Hub ←→ Destination 2
  ↓
       ↓
       └→ Destination 3
```

---

## Building Navigation Flows

### Step 1: Define User Paths
- Map all possible user journeys
- Identify main flows vs. edge cases
- Note decision points

### Step 2: Create Flow Diagrams
- Use consistent symbols
- Show all connections
- Label transitions clearly
- Include entry/exit points

### Step 3: Implement in Prototype
- Create interaction links
- Define navigation states
- Test all paths
- Verify no dead ends

### Step 4: Document Flows
- Write descriptions for complex flows
- Document alternative paths
- Explain edge case handling

---

## Navigation Patterns

### Top Navigation
- Primary navigation bar
- Works for 4-7 items
- Clear and accessible
- Best for: Web applications

### Bottom Tab Navigation
- Mobile-friendly
- Easy thumb access
- Works for 3-5 items
- Best for: Mobile apps

### Hamburger Menu
- Saves space
- Hides complexity
- Less discoverable
- Best for: Mobile with many items

### Breadcrumb Navigation
- Shows current location
- Allows going back
- For hierarchical content
- Best for: Complex information architecture

### Drawer Navigation
- Hidden by default
- Expandable side panel
- Clean interface
- Best for: Mobile and responsive apps

---

## Best Practices

✅ **Do:**
- Keep navigation consistent
- Make current location obvious
- Limit navigation items to 5-7
- Use clear, descriptive labels
- Test all paths thoroughly
- Provide back navigation
- Document complex flows

❌ **Don't:**
- Hide primary navigation
- Use unclear labels
- Create dead ends
- Make navigation confusing
- Require multiple taps to navigate
- Change navigation unexpectedly

---

## Testing Navigation

1. **Happy Path:** Can users reach main goals easily?
2. **Discovery:** Can users find all features?
3. **Recovery:** Can users undo or go back?
4. **Clarity:** Are navigation labels clear?
5. **Consistency:** Does navigation behave predictably?

---

## Common Navigation Mistakes

❌ **Too many options** in main navigation
✅ **Solution:** Group related items, use progressive disclosure

❌ **Unclear labels**
✅ **Solution:** Use familiar, action-oriented labels

❌ **Hidden back navigation**
✅ **Solution:** Always provide a way to return

❌ **Inconsistent navigation** across screens
✅ **Solution:** Standardize navigation placement and behavior

❌ **No current location indicator**
✅ **Solution:** Highlight active navigation item

---

**Document your flows before building interactions in your prototype!**
