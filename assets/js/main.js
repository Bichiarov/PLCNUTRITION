const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const searchModal = document.querySelector('.search-modal');
const openSearch = document.querySelector('[data-open-search]');
const closeSearch = document.querySelector('[data-close-search]');

menuToggle?.addEventListener('click', () => {
  const open = header.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

openSearch?.addEventListener('click', () => {
  searchModal.hidden = false;
  document.querySelector('#searchInput')?.focus();
});

closeSearch?.addEventListener('click', () => { searchModal.hidden = true; });
searchModal?.addEventListener('click', (event) => {
  if (event.target === searchModal) searchModal.hidden = true;
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && searchModal && !searchModal.hidden) searchModal.hidden = true;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
