// ============================================
// Navigation toggle (mobile menu)
// ============================================
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });
});

// ============================================
// Theme toggle (dark / light)
// ============================================
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  document.getElementById('themeToggle').textContent = light ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    light ? '#edf5f8' : '#061018'
  );
});

// ============================================
// Footer year
// ============================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================
// NOTE: The IntersectionObserver section was removed.
// It was designed for single-page sites and was removing
// the 'active' class from navigation links on every page.
// The active state is now handled directly in each HTML file.
// ============================================
