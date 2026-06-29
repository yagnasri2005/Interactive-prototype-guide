// ============================================
// TO-DO LIST APPLICATION
// Local Storage Functionality
// ============================================

const STORAGE_KEY = 'todos_app_data';
let tasks = [];
let currentFilter = 'all';
let nextId = 1;

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const remainingTasksEl = document.getElementById('remainingTasks');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const themeToggle = document.getElementById('themeToggle');
const confirmModal = document.getElementById('confirmModal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const notificationEl = document.getElementById('notification');
const filterBtns = document.querySelectorAll('.filter-btn');

// ============================================
// INITIALIZATION
// ============================================

function init() {
    loadTasksFromStorage();
    setupEventListeners();
    loadThemePreference();
    renderTasks();
    updateStats();
}

function setupEventListeners() {
    // Add task
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    // Clear buttons
    clearCompletedBtn.addEventListener('click', () => {
        if (tasks.some(t => t.completed)) {
            showConfirmModal('Clear all completed tasks?', clearCompleted);
        }
    });

    clearAllBtn.addEventListener('click', () => {
        if (tasks.length > 0) {
            showConfirmModal('Clear entire to-do list? This cannot be undone.', clearAll);
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Modal buttons
    confirmBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', hideConfirmModal);

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.closest('.filter-btn').classList.add('active');
            currentFilter = e.target.closest('.filter-btn').dataset.filter;
            renderTasks();
        });
    });

    // Close modal on backdrop click
    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) hideConfirmModal();
    });
}

// ============================================
// LOCAL STORAGE MANAGEMENT
// ============================================

function loadTasksFromStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            tasks = JSON.parse(stored);
            // Set nextId to max id + 1
            nextId = Math.max(...tasks.map(t => t.id), 0) + 1;
        } else {
            tasks = [];
            nextId = 1;
        }
    } catch (error) {
        console.error('Error loading tasks from storage:', error);
        tasks = [];
        nextId = 1;
        showNotification('Error loading tasks', 'error');
    }
}

function saveTasksToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving tasks to storage:', error);
        showNotification('Error saving tasks', 'error');
    }
}

function clearStorage() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        tasks = [];
        nextId = 1;
    } catch (error) {
        console.error('Error clearing storage:', error);
    }
}

// ============================================
// TASK MANAGEMENT
// ============================================

function addTask() {
    const text = taskInput.value.trim();

    // Validation
    if (!text) {
        showNotification('Please enter a task', 'warning');
        taskInput.focus();
        return;
    }

    if (text.length > 100) {
        showNotification('Task text too long (max 100 characters)', 'warning');
        return;
    }

    // Check for duplicates
    if (tasks.some(t => t.text.toLowerCase() === text.toLowerCase())) {
        showNotification('This task already exists', 'warning');
        return;
    }

    // Create new task
    const newTask = {
        id: nextId++,
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.unshift(newTask); // Add to beginning
    saveTasksToStorage();
    renderTasks();
    updateStats();
    taskInput.value = '';
    taskInput.focus();
    showNotification('Task added successfully', 'success');
}

function deleteTask(id) {
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        const deletedTask = tasks[taskIndex];
        tasks.splice(taskIndex, 1);
        saveTasksToStorage();
        renderTasks();
        updateStats();
        showNotification(`Task "${deletedTask.text}" deleted`, 'success');
    }
}

function toggleTaskComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasksToStorage();
        renderTasks();
        updateStats();
    }
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        const newText = prompt('Edit task:', task.text);
        if (newText !== null && newText.trim() !== '') {
            task.text = newText.trim();
            saveTasksToStorage();
            renderTasks();
            showNotification('Task updated', 'success');
        }
    }
}

function clearCompleted() {
    const completedCount = tasks.filter(t => t.completed).length;
    tasks = tasks.filter(t => !t.completed);
    saveTasksToStorage();
    renderTasks();
    updateStats();
    showNotification(`${completedCount} completed task(s) removed`, 'success');
    hideConfirmModal();
}

function clearAll() {
    const totalCount = tasks.length;
    clearStorage();
    renderTasks();
    updateStats();
    showNotification(`All ${totalCount} task(s) cleared`, 'success');
    hideConfirmModal();
}

// ============================================
// RENDERING & UI
// ============================================

function renderTasks() {
    taskList.innerHTML = '';

    // Filter tasks
    let filteredTasks = tasks;
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }

    // Show empty state
    if (filteredTasks.length === 0) {
        emptyState.style.display = 'block';
        clearCompletedBtn.disabled = tasks.filter(t => t.completed).length === 0;
        clearAllBtn.disabled = tasks.length === 0;
        return;
    }

    emptyState.style.display = 'none';

    // Render tasks
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="task-checkbox" 
                ${task.completed ? 'checked' : ''}
                aria-label="Mark task as complete"
            >
            <span class="task-text">${escapeHtml(task.text)}</span>
            <div class="task-actions">
                <button class="task-btn edit" title="Edit task" aria-label="Edit task">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="task-btn delete" title="Delete task" aria-label="Delete task">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        // Add event listeners
        const checkbox = li.querySelector('.task-checkbox');
        const editBtn = li.querySelector('.task-btn.edit');
        const deleteBtn = li.querySelector('.task-btn.delete');

        checkbox.addEventListener('change', () => toggleTaskComplete(task.id));
        editBtn.addEventListener('click', () => editTask(task.id));
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        taskList.appendChild(li);
    });

    // Update button states
    clearCompletedBtn.disabled = tasks.filter(t => t.completed).length === 0;
    clearAllBtn.disabled = tasks.length === 0;
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;

    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    remainingTasksEl.textContent = remaining;
}

// ============================================
// THEME MANAGEMENT
// ============================================

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme_preference');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme_preference', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// ============================================
// MODAL & NOTIFICATIONS
// ============================================

let pendingAction = null;

function showConfirmModal(message, action) {
    document.getElementById('confirmMessage').textContent = message;
    pendingAction = action;
    confirmModal.style.display = 'flex';
    confirmBtn.focus();
}

function hideConfirmModal() {
    confirmModal.style.display = 'none';
    pendingAction = null;
}

function handleConfirm() {
    if (pendingAction) {
        pendingAction();
    }
    hideConfirmModal();
}

function showNotification(message, type = 'success') {
    notificationEl.textContent = message;
    notificationEl.className = `notification ${type}`;
    notificationEl.style.display = 'block';

    setTimeout(() => {
        notificationEl.style.display = 'none';
    }, 3000);
}

// ============================================
// UTILITIES
// ============================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// START APPLICATION
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}