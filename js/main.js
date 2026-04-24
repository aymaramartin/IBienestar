/* ========================================================================
   IBienestar · main.js
   ======================================================================== */

(function () {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Mobile nav ----------
  const navToggle = $('.nav-toggle');
  const mainNav   = $('.main-nav');

  function closeNav() {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
  }
  function openNav() {
    mainNav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Cerrar menú');
  }

  navToggle?.addEventListener('click', () => {
    mainNav.classList.contains('open') ? closeNav() : openNav();
  });
  $$('.main-nav a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) closeNav();
  });

  // ---------- Footer year ----------
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Blog ----------
  const blogGrid    = $('#blog-grid');
  const modal       = $('#post-modal');
  const modalTitle  = $('#modal-title');
  const modalDate   = $('#modal-date');
  const modalBody   = $('#modal-body');
  const modalContent = $('.post-modal-content');

  // Inline icons for blog cards
  const icons = {
    butterfly: '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 45 Q30 15, 15 25 Q10 40, 25 50 Q10 60, 18 75 Q35 80, 50 55 Q65 80, 82 75 Q90 60, 75 50 Q90 40, 85 25 Q70 15, 50 45 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="45" x2="50" y2="75" stroke="currentColor" stroke-width="1.5"/><circle cx="50" cy="42" r="2" fill="currentColor"/></svg>',
    moon:      '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M65 20 A 35 35 0 1 0 65 80 A 28 28 0 1 1 65 20 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="38" cy="35" r="1.5" fill="currentColor"/><circle cx="30" cy="55" r="1" fill="currentColor"/><circle cx="42" cy="65" r="1.2" fill="currentColor"/></svg>',
    sun:       '<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="50" y1="15" x2="50" y2="25"/><line x1="50" y1="75" x2="50" y2="85"/><line x1="15" y1="50" x2="25" y2="50"/><line x1="75" y1="50" x2="85" y2="50"/><line x1="25" y1="25" x2="32" y2="32"/><line x1="68" y1="68" x2="75" y2="75"/><line x1="75" y1="25" x2="68" y2="32"/><line x1="32" y1="68" x2="25" y2="75"/></g></svg>',
    lotus:     '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 70 Q35 60, 30 45 Q40 48, 45 55 Q42 40, 50 28 Q58 40, 55 55 Q60 48, 70 45 Q65 60, 50 70 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M50 70 Q30 68, 20 60 Q30 72, 50 75 Q70 72, 80 60 Q70 68, 50 70 Z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    heart:     '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 75 Q30 60, 25 45 Q22 30, 35 25 Q45 25, 50 35 Q55 25, 65 25 Q78 30, 75 45 Q70 60, 50 75 Z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>'
  };

  // ---------- Scroll reveal (define before render) ----------
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  function markReveal(elements) {
    elements.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-i', i % 6);
      observer.observe(el);
    });
  }

  // ---------- Render blog ----------
  function renderPosts() {
    if (!blogGrid || typeof posts === 'undefined') return;

    const html = posts.map(post => `
      <article class="blog-card" data-id="${post.id}" tabindex="0" role="button" aria-label="Abrir post: ${escapeAttr(post.title)}">
        <div class="blog-card-image">${icons[post.icon] || icons.butterfly}</div>
        <div class="blog-card-body">
          <p class="blog-card-date">${post.date}</p>
          <h3 class="blog-card-title">${escapeHtml(post.title)}</h3>
          <p class="blog-card-excerpt">${escapeHtml(post.excerpt)}</p>
          <span class="blog-card-read">Leer más</span>
        </div>
      </article>
    `).join('');

    blogGrid.innerHTML = html;

    const cards = $$('.blog-card', blogGrid);
    markReveal(cards);

    cards.forEach(card => {
      const open = () => {
        const id = parseInt(card.dataset.id, 10);
        const post = posts.find(p => p.id === id);
        if (post) openModal(post);
      };
      card.addEventListener('click', open);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }

  // ---------- Modal + focus trap ----------
  let lastFocused = null;

  function openModal(post) {
    modalDate.textContent  = post.date;
    modalTitle.textContent = post.title;
    modalBody.innerHTML    = post.content; // trusted: from posts.js (author-controlled)
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lastFocused = document.activeElement;
    // Defer focus until layout settles
    requestAnimationFrame(() => modalContent?.focus());
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocused?.focus?.();
  }

  $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key !== 'Tab') return;

    // Trap focus inside modal
    const focusables = $$('button, [href], [tabindex]:not([tabindex="-1"])', modal)
      .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  // ---------- Mark base elements for reveal ----------
  markReveal($$('.section-head, .therapy-card, .about-content, .about-visual, .agenda-content, .agenda-art, .contact-card, .location-info, .map-wrap'));

  // ---------- Render blog (after observer is set) ----------
  renderPosts();

  // ---------- Header shadow on scroll ----------
  const header = $('.site-header');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('scrolled', window.scrollY > 80);
      ticking = false;
    });
  }, { passive: true });

  // ---------- Therapy card hover tracking (mouse light) ----------
  if (!prefersReduce) {
    $$('.therapy-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  }
})();
