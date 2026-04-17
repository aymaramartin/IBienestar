/* ========================================================================
   IBienestar · main.js
   ======================================================================== */

(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- Current year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Blog rendering ----------
  const blogGrid = document.getElementById('blog-grid');
  const modal = document.getElementById('post-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDate = document.getElementById('modal-date');
  const modalBody = document.getElementById('modal-body');

  // SVG icons for post cards
  const icons = {
    butterfly: '<svg viewBox="0 0 100 100"><path d="M50 45 Q30 15, 15 25 Q10 40, 25 50 Q10 60, 18 75 Q35 80, 50 55 Q65 80, 82 75 Q90 60, 75 50 Q90 40, 85 25 Q70 15, 50 45 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="45" x2="50" y2="75" stroke="currentColor" stroke-width="1.5"/><circle cx="50" cy="42" r="2" fill="currentColor"/></svg>',
    moon: '<svg viewBox="0 0 100 100"><path d="M65 20 A 35 35 0 1 0 65 80 A 28 28 0 1 1 65 20 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="38" cy="35" r="1.5" fill="currentColor"/><circle cx="30" cy="55" r="1" fill="currentColor"/><circle cx="42" cy="65" r="1.2" fill="currentColor"/></svg>',
    sun: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="50" y1="15" x2="50" y2="25"/><line x1="50" y1="75" x2="50" y2="85"/><line x1="15" y1="50" x2="25" y2="50"/><line x1="75" y1="50" x2="85" y2="50"/><line x1="25" y1="25" x2="32" y2="32"/><line x1="68" y1="68" x2="75" y2="75"/><line x1="75" y1="25" x2="68" y2="32"/><line x1="32" y1="68" x2="25" y2="75"/></g></svg>',
    lotus: '<svg viewBox="0 0 100 100"><path d="M50 70 Q35 60, 30 45 Q40 48, 45 55 Q42 40, 50 28 Q58 40, 55 55 Q60 48, 70 45 Q65 60, 50 70 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M50 70 Q30 68, 20 60 Q30 72, 50 75 Q70 72, 80 60 Q70 68, 50 70 Z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    heart: '<svg viewBox="0 0 100 100"><path d="M50 75 Q30 60, 25 45 Q22 30, 35 25 Q45 25, 50 35 Q55 25, 65 25 Q78 30, 75 45 Q70 60, 50 75 Z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>'
  };

  function renderPosts() {
    if (!blogGrid || typeof posts === 'undefined') return;

    blogGrid.innerHTML = posts.map((post, idx) => `
      <article class="blog-card reveal" data-id="${post.id}" style="transition-delay: ${idx * 0.1}s">
        <div class="blog-card-image">
          ${icons[post.icon] || icons.butterfly}
        </div>
        <div class="blog-card-body">
          <p class="blog-card-date">${post.date}</p>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <span class="blog-card-read">Leer más</span>
        </div>
      </article>
    `).join('');

    // Attach click handlers
    blogGrid.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id, 10);
        const post = posts.find(p => p.id === id);
        if (post) openModal(post);
      });
    });

    // Re-observe newly added cards
    blogGrid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function openModal(post) {
    modalDate.textContent = post.date;
    modalTitle.textContent = post.title;
    modalBody.innerHTML = post.content;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ---------- Scroll reveal ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // Mark sections for reveal
  document.querySelectorAll('.section-head, .therapy-card, .about-content, .about-visual, .agenda-content, .agenda-art, .contact-grid > *').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // ---------- Render blog on load ----------
  renderPosts();

  // ---------- Smooth header on scroll ----------
  let lastScroll = 0;
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    if (current > 80) {
      header.style.boxShadow = '0 4px 20px -10px rgba(44, 27, 58, 0.15)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = current;
  }, { passive: true });

})();
