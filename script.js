// Simple enhancements: mobile menu + current year
const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');
if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    const open = siteNav.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

// current year
document.getElementById('year').textContent = new Date().getFullYear();
