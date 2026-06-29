# To-Do List Application

## Quick Start

1. Open `index.html` in your browser
2. Type a task and press Enter or click "Add Task"
3. Tasks are automatically saved to your browser's local storage
4. Your tasks will persist even after closing the browser

## Features

✨ **Core Features**
- Add, complete, edit, and delete tasks
- Automatic local storage persistence
- Real-time task statistics
- Filter tasks (All, Active, Completed)
- Dark mode toggle
- Responsive mobile design

🎨 **UI/UX**
- Beautiful gradient design
- Smooth animations and transitions
- Keyboard support (Enter to add)
- Confirmation modals for destructive actions
- Toast notifications for user feedback
- Accessibility features (ARIA labels, keyboard navigation)

💾 **Local Storage**
- Tasks stored in browser's local storage
- Automatic save on every change
- Data persists across sessions
- Typical storage limit: 5-10MB

## File Structure

```
├── index.html      # Main HTML
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Local Storage Format

Tasks are stored as JSON:
```json
[
  {
    "id": 1,
    "text": "Buy groceries",
    "completed": false,
    "createdAt": "2026-06-29T10:30:00Z"
  }
]
```

## Browser Support

✅ All modern browsers:
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge 12+
- iOS Safari
- Chrome Mobile

## Keyboard Shortcuts

- **Enter** - Add new task
- **Tab** - Navigate between elements
- **Escape** - Cancel modal

## Tips

1. **Export Data**: Open DevTools Console and run:
   ```javascript
   copy(JSON.parse(localStorage.getItem('todos_app_data')))
   ```

2. **Clear Everything**: DevTools Console:
   ```javascript
   localStorage.clear()
   ```

3. **Backup Tasks**: Save the JSON output to a file

## Troubleshooting

**Tasks not saving?**
- Check if localStorage is enabled
- Not in private/incognito mode?
- Check browser storage limit

**Want to clear data?**
- Click "Clear All" in the app, or
- Use DevTools: `localStorage.clear()`

## Future Enhancements

- [ ] Export/Import tasks
- [ ] Categories/tags
- [ ] Due dates
- [ ] Recurring tasks
- [ ] Syncing across devices
- [ ] PWA support

---

**Happy organizing! 📝✨**