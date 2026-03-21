/* ========================================
   WrestleMania 42 Family Fan Guide
   Shared JavaScript
   ======================================== */

// ===== COUNTDOWN TIMER =====
function initCountdown() {
  const els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs'),
  };
  if (!els.days) return;

  // WrestleMania 42 Night 1: April 18, 2026 at 7:00 PM ET (4:00 PM PT / Vegas local)
  const target = new Date('2026-04-18T19:00:00-04:00').getTime();

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      const container = document.getElementById('countdown');
      if (container) container.innerHTML = '<div style="font-size:1.8rem;font-weight:900;color:var(--wm-gold)">IT\'S WRESTLEMANIA TIME!</div>';
      return;
    }
    els.days.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    els.hours.textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    els.mins.textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    els.secs.textContent = Math.floor((diff % (1000 * 60)) / 1000);
  }
  update();
  setInterval(update, 1000);
}

// ===== MOBILE NAV TOGGLE =====
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) {
      navLinks.classList.remove('open');
    }
  });
}

// ===== ACTIVE NAV LINK =====
function setActiveNav() {
  const path = window.location.pathname.toLowerCase();
  // Handle both /matches.html and /matches and local file paths
  let page = path.split('/').pop().replace('.html', '').replace('.htm', '') || 'index';
  if (page === '' || page === '/' ) page = 'index';

  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace('.html', '').toLowerCase();
    const linkPage = href === '' ? 'index' : href;

    // Match current page to nav link
    if (linkPage === page) {
      a.classList.add('active');
      a.style.color = '#FFD700';
      a.style.borderBottom = '2px solid #FFD700';
      a.style.background = 'rgba(255,215,0,0.12)';
    }
  });
}

// ===== EXPANDABLE CARDS =====
function initExpandables() {
  document.querySelectorAll('[data-toggle="expand"]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('[data-expandable]');
      if (card) card.classList.toggle('open');
    });
  });
}

// ===== MATCH PREDICTIONS =====
function initPredictions() {
  const predictions = JSON.parse(localStorage.getItem('wm42-predictions') || '{}');

  // Restore saved predictions
  document.querySelectorAll('.prediction-btn').forEach(btn => {
    const matchId = btn.dataset.match;
    const wrestler = btn.dataset.wrestler;
    if (predictions[matchId] === wrestler) {
      btn.classList.add('selected');
    }
  });

  // Handle clicks
  document.querySelectorAll('.prediction-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const matchId = btn.dataset.match;
      const wrestler = btn.dataset.wrestler;

      // Remove selected from siblings
      document.querySelectorAll(`.prediction-btn[data-match="${matchId}"]`).forEach(b => {
        b.classList.remove('selected');
      });

      // Select this one
      btn.classList.add('selected');

      // Save
      predictions[matchId] = wrestler;
      localStorage.setItem('wm42-predictions', JSON.stringify(predictions));
    });
  });
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initNav();
  setActiveNav();
  initExpandables();
  initPredictions();
  initScrollTop();
  initSmoothScroll();
});
