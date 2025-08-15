// =====================
// Theme toggle with persistence
// =====================
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyEl = document.body;
const savedTheme = localStorage.getItem('site-theme');

if (savedTheme === 'dark') {
  bodyEl.classList.remove('light');
  bodyEl.classList.add('dark');
  if (themeToggleBtn) themeToggleBtn.textContent = 'Light Mode';
} else {
  bodyEl.classList.remove('dark');
  bodyEl.classList.add('light');
  if (themeToggleBtn) themeToggleBtn.textContent = 'Dark Mode';
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = bodyEl.classList.toggle('dark');
    bodyEl.classList.toggle('light', !isDark);
    themeToggleBtn.textContent = isDark ? 'Light Mode' :  'Dark Mode';
    localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
  });
}

// =====================
// Font size change function
// =====================
function changeFontSize(action) {
  const body = document.body;
  let currentSize = parseFloat(window.getComputedStyle(body).fontSize);

  if (action === 'increase') {
    body.style.fontSize = (currentSize + 2) + 'px';
  } else if (action === 'decrease') {
    body.style.fontSize = (currentSize - 2) + 'px';
  } else if (action === 'reset') {
    body.style.fontSize = '16px';
  }
}

// =====================
// Modal (popup) logic for projects
// =====================
document.querySelectorAll('.open-project').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const modal = document.getElementById(targetId);
    if (modal) modal.classList.add('show');
  });
});

// close modals when clicking close button
document.querySelectorAll('.modal .modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('show');
  });
});

// close modals when clicking outside content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });
});

// escape key to close modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
  }
});