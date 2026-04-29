/* ========================================
   WWE PLE Guide
   Shared JavaScript
   ======================================== */

// ===== EVENT CONFIG =====
var NEXT_EVENT = {
  name: 'Backlash 2026',
  subtitle: 'One Night Only',
  date: '2026-05-09T18:00:00-04:00',  // 6pm ET May 9 — confirmed start time
  location: 'Tampa, Florida',
  venue: 'Benchmark International Arena',
  night: null,
  eventUrl: 'events/backlash/backlash-2026/',
  status: 'upcoming'                    // 'upcoming' | 'live' | 'complete'
};

var PAST_EVENTS = [
  {
    name: 'WrestleMania 42',
    shortName: 'WM42',
    dates: 'April 18–19, 2026',
    location: 'Las Vegas, NV',
    venue: 'Allegiant Stadium',
    nights: 2,
    matchCount: 13,
    eventUrl: 'events/wrestlemania/wm42/',
    status: 'archived'
  }
];

// ===== COUNTDOWN TIMER =====
function initCountdown() {
  var els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs')
  };
  if (!els.days) return;

  // Read target from NEXT_EVENT config (homepage). For other pages, use page-local script.
  if (typeof NEXT_EVENT === 'undefined' || !NEXT_EVENT.date) return;

  var target = new Date(NEXT_EVENT.date).getTime();
  if (isNaN(target)) return;

  function update() {
    var diff = target - Date.now();
    if (diff <= 0) {
      var container = document.getElementById('countdown');
      if (container) container.innerHTML = '<div style="font-size:1.8rem;font-weight:900;color:var(--wm-gold)">IT\'S SHOWTIME!</div>';
      return;
    }
    els.days.textContent = Math.floor(diff / 86400000);
    els.hours.textContent = Math.floor((diff % 86400000) / 3600000);
    els.mins.textContent = Math.floor((diff % 3600000) / 60000);
    els.secs.textContent = Math.floor((diff % 60000) / 1000);
  }
  update();
  setInterval(update, 1000);
}

// ===== HOMEPAGE: NEXT-EVENT HERO + PAST EVENTS RENDERING =====
function initHomepageEvents() {
  // Populate next-event hero text from NEXT_EVENT config
  var nextName = document.getElementById('next-event-name');
  var nextSub = document.getElementById('next-event-subtitle');
  var nextLoc = document.getElementById('next-event-location');
  var heroBtn = document.getElementById('next-event-btn');
  var countdown = document.getElementById('countdown');
  var heroComplete = document.getElementById('hero-event-complete');
  var statusBadge = document.getElementById('next-event-status-badge');

  if (nextName) nextName.textContent = NEXT_EVENT.name;
  if (nextSub) nextSub.textContent = NEXT_EVENT.subtitle || '';
  if (nextLoc) {
    var dateLabel = '';
    try {
      var d = new Date(NEXT_EVENT.date);
      if (!isNaN(d.getTime())) {
        dateLabel = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      }
    } catch (e) { dateLabel = ''; }
    var parts = [];
    if (dateLabel) parts.push(dateLabel);
    if (NEXT_EVENT.location) parts.push(NEXT_EVENT.location);
    if (NEXT_EVENT.venue) parts.push(NEXT_EVENT.venue);
    if (parts.length > 0) nextLoc.textContent = parts.join(' · ');
  }
  if (heroBtn) heroBtn.href = NEXT_EVENT.eventUrl;

  // Determine effective status: explicit 'complete' OR date in past
  var eventTime = new Date(NEXT_EVENT.date).getTime();
  var dateInPast = !isNaN(eventTime) && Date.now() >= eventTime;
  var isComplete = NEXT_EVENT.status === 'complete' || dateInPast;

  if (isComplete) {
    if (countdown) countdown.style.display = 'none';
    if (heroComplete) heroComplete.style.display = '';
    if (statusBadge) {
      statusBadge.textContent = 'Event Complete';
      statusBadge.style.background = 'rgba(255,255,255,0.06)';
      statusBadge.style.color = 'rgba(255,255,255,0.5)';
      statusBadge.style.borderColor = 'rgba(255,255,255,0.15)';
    }
  } else {
    if (countdown) countdown.style.display = '';
    if (heroComplete) heroComplete.style.display = 'none';
    if (statusBadge) {
      statusBadge.textContent = NEXT_EVENT.status === 'live' ? 'Live Now' : 'Upcoming';
    }
  }

  // Past events grid
  var grid = document.getElementById('past-events-grid');
  if (grid && Array.isArray(PAST_EVENTS) && PAST_EVENTS.length > 0) {
    var html = '';
    PAST_EVENTS.forEach(function(pe) {
      html += '<a href="' + pe.eventUrl + '" class="past-event-card">';
      html += '<div class="pe-name">' + pe.name + '</div>';
      html += '<div class="pe-meta">' + pe.dates + '<br>' + pe.location + ' · ' + pe.matchCount + ' Matches</div>';
      html += '<span class="status-badge status-badge--archived" style="margin-top:10px">Archived</span>';
      html += '<div class="pe-link">View Results &rarr;</div>';
      html += '</a>';
    });
    grid.innerHTML = html;
  }
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
    'Every Premium Live Event',
    'Match Cards · Picks · Storylines',
    'Backlash 2026 · Tampa, Florida',
    'Family Fan Hub'
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
    home:      { title: 'WWE PLE Guide', sub: 'Every Premium Live Event · Family Fan Hub' },
    matches:   { title: 'The Match Card', sub: 'Every Match · Every Storyline · Tap to Explore' },
    wrestlers: { title: 'Meet the Superstars', sub: 'Profiles · Finishers · Entrance Themes' },
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
  initHomepageEvents();
  initCountdown();
  initNav();
  setActiveNav();
  initExpandables();
  initPredictions();
  initScrollTop();
  initSmoothScroll();
  initTagline();
});
