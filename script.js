const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = document.querySelector('[data-theme-icon]');
const searchInput = document.querySelector('#site-search');
const searchCards = [...document.querySelectorAll('[data-searchable]')];
const emptyState = document.querySelector('[data-search-empty]');
const toast = document.querySelector('[data-toast]');

const storedTheme = localStorage.getItem('kimi-theme');
if (storedTheme === 'dark' || storedTheme === 'light') root.dataset.theme = storedTheme;

function updateThemeButton() {
  const isDark = root.dataset.theme === 'dark';
  themeIcon.textContent = isDark ? '☼' : '◐';
  themeToggle.setAttribute('aria-label', isDark ? 'ใช้โหมดสว่าง' : 'ใช้โหมดมืด');
}

updateThemeButton();

themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('kimi-theme', root.dataset.theme);
  updateThemeButton();
});

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  let visibleCount = 0;

  searchCards.forEach((card) => {
    const matches = !query || card.dataset.searchable.toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
});

function showToast(message = 'คัดลอกแล้ว') {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast();
  } catch {
    showToast('คัดลอกไม่สำเร็จ — เลือกข้อความเองได้เลย');
  }
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', () => copyText(button.dataset.copy));
});

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (target) copyText(target.innerText);
  });
});

const progressBar = document.querySelector('[data-progress]');
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: .12 });

document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll('[data-nav-link]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => navObserver.observe(section));
