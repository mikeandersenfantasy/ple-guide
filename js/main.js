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

  // WrestleMania 42 Night 1: April 18, 2026 at 6:00 PM ET (3:00 PM PT / Vegas local)
  const target = new Date('2026-04-18T18:00:00-04:00').getTime();

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
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  // Extract page name from clean URLs (/matches/, /matches/index.html, /matches.html)
  const segments = path.split('/').filter(Boolean);
  let page = segments[segments.length - 1] || 'index';
  page = page.replace('.html', '').replace('.htm', '');
  if (page === 'index') {
    // Check if we're in a subfolder (e.g., /matches/index.html -> matches)
    page = segments.length >= 2 ? segments[segments.length - 2] : 'index';
  }

  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    // Extract link target: "../matches/" -> "matches", "./" -> "index", "matches/" -> "matches"
    const hrefClean = href.replace(/^\.\.\//, '').replace(/^\.\//, '').replace(/\/+$/, '').replace('.html', '');
    const linkPage = hrefClean === '' ? 'index' : hrefClean;

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

// ===== ROTATING HERO TAGLINE =====
function initTagline() {
  var el = document.getElementById('hero-tagline');
  if (!el) return;
  var phrases = [
    'The Showcase of the Immortals',
    '10 Years in the Making',
    'Las Vegas. April 18–19.'
  ];
  var idx = 0;
  el.textContent = phrases[0];
  el.style.opacity = '1';
  setInterval(function() {
    el.style.opacity = '0';
    setTimeout(function() {
      idx = (idx + 1) % phrases.length;
      el.textContent = phrases[idx];
      el.style.opacity = '1';
    }, 500);
  }, 4000);
}

// ===== HYPE INTRO (unique per page, plays once per session per page) =====
function initHypeIntro() {
  var path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  var segments = path.split('/').filter(Boolean);
  var page = segments[segments.length - 1] || 'home';
  if (page === 'index.html' || page === 'index') page = segments.length >= 2 ? segments[segments.length - 2] : 'home';

  var intros = {
    home:      { title: 'WrestleMania 42', sub: 'Your Family\'s Guide to the Biggest Event in Wrestling' },
    matches:   { title: 'The Match Card', sub: '13 Matches · Two Nights · Las Vegas' },
    wrestlers: { title: 'Meet the Superstars', sub: '42 Wrestlers · Finishers · Entrance Themes' },
    videos:    { title: 'Learn the Music', sub: 'Know Every Entrance Theme Before the Show' },
    picks:     { title: 'Lock It In', sub: 'Pick Your Winners · Family Prediction Game' },
    legal:     { title: 'Fan Project', sub: 'Non-Commercial · Educational · Made with Love' }
  };

  // Also check for the repo subdirectory on GitHub Pages
  if (page === 'ple-guide') page = 'home';

  var config = intros[page];
  if (!config) return;

  var storageKey = 'wm42-intro-' + page;
  if (sessionStorage.getItem(storageKey)) return;

  var intro = document.createElement('div');
  intro.id = 'hype-intro';
  intro.innerHTML = '<button class="skip-btn" id="intro-skip">Skip ›</button>' +
    '<div class="intro-title" id="intro-title">' + config.title + '</div>' +
    '<div class="intro-sub" id="intro-sub">' + config.sub + '</div>' +
    '<div class="intro-line" id="intro-line"></div>';
  document.body.appendChild(intro);

  function dismissIntro() {
    intro.style.opacity = '0';
    setTimeout(function() { intro.remove(); }, 600);
    sessionStorage.setItem(storageKey, '1');
  }

  document.getElementById('intro-skip').addEventListener('click', function() {
    intro.style.opacity = '0';
    setTimeout(function() { intro.remove(); }, 300);
    sessionStorage.setItem(storageKey, '1');
  });

  setTimeout(function() { document.getElementById('intro-title').classList.add('animate'); }, 200);
  setTimeout(function() { document.getElementById('intro-sub').classList.add('visible'); }, 1000);
  setTimeout(function() { document.getElementById('intro-line').classList.add('animate'); }, 1700);
  setTimeout(dismissIntro, 2400);
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initHypeIntro();
  initCountdown();
  initNav();
  setActiveNav();
  initExpandables();
  initPredictions();
  initScrollTop();
  initSmoothScroll();
  initTagline();
});
