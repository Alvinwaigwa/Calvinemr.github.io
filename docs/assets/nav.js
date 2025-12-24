document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when clicking a link (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      const t = document.querySelector('.nav-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    }
  });

  // Mark active link based on current path
  const links = document.querySelectorAll('.nav-link');
  const currentPath = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  links.forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    // handle root or index variations
    if (href === currentPath || (href === 'index.html' && (currentPath === '' || currentPath === 'index.html')) || location.pathname.endsWith(href)) {
      a.classList.add('active');
    }
  });
});
