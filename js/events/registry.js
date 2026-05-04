/* ========================================
   Event registry — single source of truth for which events the season
   leaderboard, homepage recap, and picks router pull from.

   When a new PLE ships:
     1. Append a new entry below (eventKey + meta + matches data file).
     2. Update NEXT_EVENT in js/main.js to point at it.
     3. The season leaderboard, picks router, and homepage recap pick
        it up automatically.

   format:
     'json'  — picks-api stores per-picker JSON blobs (default for new events)
     ''      — legacy column-per-match storage (only WM42)

   scoringStyle:
     'matchPicks' — simple { matchId: winnerId } map, score = correct picks
     'rumble'     — Royal Rumble nested structure (entrants + superlatives).
                    Excluded from season totals for now.
   ======================================== */
(function(global) {
  global.EVENT_REGISTRY = [
    {
      key: 'wm42',
      name: 'WrestleMania 42',
      shortName: 'WM42',
      date: '2026-04-19T19:00:00-07:00',
      location: 'Las Vegas, NV',
      eventUrl: 'events/wrestlemania/wm42/',
      picksUrl: 'events/wrestlemania/wm42/#picks',
      format: '',
      scoringStyle: 'matchPicks',
      pointsPerCorrect: 10,
      status: 'complete'
    },
    {
      key: 'backlash2026',
      name: 'Backlash 2026',
      shortName: 'Backlash',
      date: '2026-05-09T18:00:00-04:00',
      location: 'Tampa, FL',
      eventUrl: 'events/backlash/backlash-2026/',
      picksUrl: 'events/backlash/backlash-2026/picks/',
      format: 'json',
      scoringStyle: 'matchPicks',
      pointsPerCorrect: 10,
      status: 'upcoming'
    }
    // Future events: append here. Reserve { key: 'rr2027', scoringStyle: 'rumble' } when RR has data.
  ];

  // Helpers used by the season leaderboard & homepage recap
  global.getEventByKey = function(key) {
    for (var i = 0; i < global.EVENT_REGISTRY.length; i++) {
      if (global.EVENT_REGISTRY[i].key === key) return global.EVENT_REGISTRY[i];
    }
    return null;
  };

  global.getCompletedEvents = function() {
    return global.EVENT_REGISTRY.filter(function(e) {
      return e.status === 'complete' || (e.date && Date.now() > new Date(e.date).getTime() + 6 * 3600000);
    });
  };

  global.getMostRecentCompletedEvent = function() {
    var done = global.getCompletedEvents();
    if (!done.length) return null;
    done.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
    return done[0];
  };
})(window);
