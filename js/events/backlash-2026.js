/* ========================================
   Backlash 2026 — match card data + shared
   cinematic-card renderer.

   Loaded by:
     - events/backlash/backlash-2026/index.html  (the event page itself)
     - matches/index.html                         (the rolling "active event" page)

   Exposes:
     window.BACKLASH_2026_MATCHES   array of match objects
     window.BACKLASH_2026_META      { name, date, location, venue, slug }
     window.buildBacklashCard(m)    cinematic card HTML for one match
     window.renderBacklashMatches(containerEl)  render-all helper
   ======================================== */
(function(global) {
  global.BACKLASH_2026_META = {
    name: 'Backlash 2026',
    slug: 'backlash-2026',
    date: '2026-05-09T18:00:00-04:00',
    location: 'Tampa, Florida',
    venue: 'Benchmark International Arena',
    showtime: '6:00 PM ET',
    eventUrl: 'events/backlash/backlash-2026/',
    picksUrl: 'events/backlash/backlash-2026/picks/'
  };

  global.BACKLASH_2026_MATCHES = [
    {
      id: 'reigns-fatu-backlash',
      championship: 'World Heavyweight Championship',
      matchType: 'title',
      confirmed: true,
      hype: 5,
      wrestler1: { key: 'roman-reigns', name: 'Roman Reigns', role: 'Champion' },
      wrestler2: { key: 'jacob-fatu', name: 'Jacob Fatu', role: 'Challenger' },
      story: "After winning the World Heavyweight title at WrestleMania 42, Roman Reigns was immediately confronted by his cousin Jacob Fatu on the Raw after Mania. Fatu declared he needed the gold for the Anoa'i family. A blood vs blood showdown headlines Backlash in Tampa."
    },
    {
      id: 'zayn-williams-backlash',
      championship: 'WWE United States Championship',
      matchType: 'title',
      confirmed: true,
      hype: 4,
      wrestler1: { key: 'trick-williams', name: 'Trick Williams', role: 'Champion' },
      wrestler2: { key: 'sami-zayn', name: 'Sami Zayn', role: 'Former Champion' },
      story: 'Trick Williams dethroned Sami Zayn at WrestleMania 42 to win his first main roster title. Zayn invoked his rematch clause immediately. Reports suggest Zayn may be turning heel — making this rematch even more unpredictable.'
    },
    {
      id: 'rollins-breakker-backlash',
      championship: 'Grudge Match',
      matchType: 'grudge',
      confirmed: true,
      hype: 4,
      wrestler1: { key: 'seth-rollins', name: 'Seth Rollins', role: 'The Visionary' },
      wrestler2: { key: 'bron-breakker', name: 'Bron Breakker', role: 'The Vision (w/ Paul Heyman)', manager: 'paul-heyman' },
      story: 'Breakker returned from injury to cost Rollins his WrestleMania match. Now with Paul Heyman as his Wiseman, Bron is more dangerous than ever. On Raw after Mania, Rollins attacked the Vision before the numbers game took over. The Street Profits evened the odds. Their feud is just getting started.'
    },
    {
      id: 'iyo-asuka-backlash',
      championship: 'Singles Match',
      matchType: 'special',
      confirmed: true,
      hype: 5,
      wrestler1: { key: 'asuka', name: 'Asuka', role: 'The Empress' },
      wrestler2: { key: 'iyo-sky', name: 'IYO SKY', role: 'The Genius of the Sky' },
      story: 'Reports indicate WWE specifically held this match back from WrestleMania 42 to give it the Backlash spotlight. Former best friends now bitter rivals — with Kairi Sane caught in the middle. A technical masterpiece is expected.'
    },
    {
      id: 'danhausen-mystery-vs-miz-kit-backlash',
      championship: 'Tag Team Match',
      matchType: 'tag',
      confirmed: true,
      hype: 3,
      wrestler1: {
        key: 'team-danhausen-mystery',
        name: 'Danhausen & Mystery Partner',
        role: 'Very Nice, Very Evil',
        members: [
          { key: 'danhausen', name: 'Danhausen' },
          { key: '__mystery', name: '?', mystery: true }
        ]
      },
      wrestler2: {
        key: 'team-miz-kit',
        name: 'The Miz & Kit Wilson',
        role: 'A-List Tag Team',
        members: [
          { key: 'the-miz', name: 'The Miz' },
          { key: 'kit-wilson', name: 'Kit Wilson' }
        ]
      },
      story: "Danhausen put The Miz and Kit Wilson on his curse list after weeks of being mocked on MizTV. He's accepted their tag team challenge — and promised a mystery partner whose identity will only be revealed at Backlash. The internet is in a frenzy. The Miz is furious. Anything could happen."
    }
  ];

  // ----- Cinematic card renderer (shared between event page and /matches/) -----
  function getBadgeClass(mt) {
    if (mt === 'title') return 'badge--title';
    if (mt === 'grudge') return 'badge--grudge';
    if (mt === 'ladder') return 'badge--ladder';
    if (mt === 'tag') return 'badge--tag';
    return 'badge--special';
  }
  function getBadgeLabel(mt) {
    if (mt === 'title') return 'Title Match';
    if (mt === 'grudge') return 'Grudge Match';
    if (mt === 'ladder') return 'Ladder Match';
    if (mt === 'tag') return 'Tag Match';
    return 'Special Match';
  }
  function getWrestlerImg(key) {
    if (typeof WRESTLERS === 'undefined') return '';
    var w = WRESTLERS[key];
    return w && w.img ? w.img : '';
  }
  function buildSidePanel(side, sideClass) {
    if (side.members && side.members.length) {
      var membersHtml = side.members.map(function(m) {
        if (m.mystery) {
          return '<div class="card-tag-member card-tag-member--mystery">' +
                 '<div class="card-tag-mystery-q">?</div>' +
                 '<div class="card-tag-name">' + m.name + '</div>' +
                 '</div>';
        }
        var mImg = getWrestlerImg(m.key);
        var bgStyle = mImg ? ' style="background-image:url(\'' + mImg + '\')"' : '';
        return '<div class="card-tag-member"' + bgStyle + '>' +
               '<div class="card-tag-name">' + m.name + '</div>' +
               '</div>';
      }).join('');
      var html = '<div class="card-' + sideClass + '-panel card-' + sideClass + '-panel--tag">';
      html += membersHtml;
      if (side.role) html += '<div class="card-tag-team-role ' + sideClass + '">' + side.role + '</div>';
      html += '</div>';
      return html;
    }
    var img = getWrestlerImg(side.key);
    var bg = img ? ' style="background-image:url(\'' + img + '\')"' : '';
    var out = '<div class="card-' + sideClass + '-panel"' + bg + '>';
    out += '<div class="wrestler-label ' + sideClass + '">' + side.name + '</div>';
    if (side.role) out += '<div class="wrestler-role ' + sideClass + '">' + side.role + '</div>';
    out += '</div>';
    return out;
  }
  global.buildBacklashCard = function(match) {
    var mt = match.matchType || 'special';
    var hype = match.hype || 3;

    var html = '<div class="cinematic-card" data-match-id="' + match.id + '" data-animated="false">';
    html += '<div class="card-faceoff-area">';
    html += buildSidePanel(match.wrestler1, 'left');
    html += '<div class="card-seam"><div class="seam-line"></div><div class="seam-flash"></div><div class="shockwave"></div></div>';
    html += buildSidePanel(match.wrestler2, 'right');
    html += '<div class="card-center-stamp">';
    html += '<div class="match-badge ' + getBadgeClass(mt) + '">' + getBadgeLabel(mt) + '</div>';
    html += '<div class="championship-title">' + match.championship + '</div>';
    html += '</div>';
    var statusBadge = match.confirmed ? 'confirmed-badge' : 'unconfirmed-badge';
    var statusText = match.confirmed ? 'Confirmed' : 'Unconfirmed';
    html += '<div class="' + statusBadge + '">' + statusText + '</div>';
    html += '<div class="spark s1"></div><div class="spark s2"></div><div class="spark s3"></div><div class="spark s4"></div>';
    html += '</div>';

    html += '<div class="card-bottom-bar">';
    html += '<div class="hype-meter"><span class="hype-label">HYPE</span><div class="hype-pips">';
    for (var i = 0; i < 5; i++) {
      html += '<div class="pip' + (i < hype ? ' lit' : '') + '"></div>';
    }
    html += '</div></div>';
    html += '<div class="expand-hint">Tap for the story &darr;</div>';
    html += '</div>';

    html += '<div class="card-story-panel">';
    html += '<div class="story-bar"></div>';
    html += '<div class="story-section">';
    html += '<div class="story-section-title">The Story</div>';
    html += '<div class="story-text">' + match.story + '</div>';
    html += '</div>';
    html += '</div>';

    html += '</div>';
    return html;
  };

  global.renderBacklashMatches = function(container) {
    if (!container) return;
    var html = '';
    global.BACKLASH_2026_MATCHES.forEach(function(m) { html += global.buildBacklashCard(m); });
    container.innerHTML = html;

    // Wire scroll-in animations + click-to-expand
    var isMobile = window.innerWidth <= 768;
    if (isMobile) {
      container.querySelectorAll('.cinematic-card').forEach(function(card) {
        card.classList.add('panel-in');
        card.dataset.animated = 'true';
      });
    } else {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.target.dataset.animated === 'false') {
            var card = entry.target;
            card.dataset.animated = 'true';
            card.classList.add('panel-in');
            setTimeout(function() { card.classList.add('impact'); }, 420);
            setTimeout(function() { card.classList.remove('impact'); }, 800);
            observer.unobserve(card);
          }
        });
      }, { threshold: 0.2 });
      container.querySelectorAll('.cinematic-card').forEach(function(card) { observer.observe(card); });
    }

    container.addEventListener('click', function(e) {
      if (e.target.closest('.glossary-tip')) return;
      var card = e.target.closest('.cinematic-card');
      if (!card) return;
      var storyPanel = card.querySelector('.card-story-panel');
      var hint = card.querySelector('.expand-hint');
      if (!storyPanel) return;
      var isOpen = storyPanel.classList.contains('open');
      storyPanel.classList.toggle('open', !isOpen);
      if (hint) hint.innerHTML = isOpen ? 'Tap for the story &darr;' : 'Close &uarr;';
      if (!isOpen) setTimeout(function() { storyPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);
    });
  };
})(window);
