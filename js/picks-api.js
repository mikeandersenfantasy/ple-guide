/**
 * Shared multi-event picks client.
 *
 * Usage on any event picks page:
 *
 *   <script src="../path/to/js/picks-api.js"></script>
 *   <script>
 *     var api = createPicksApi('backlash2026'); // unique event key
 *     api.savePicks({ name: 'Mike', saved: '2026-05-01...', picks: {...} }, cb);
 *     api.saveResults({ results: {...} }, cb);
 *     api.load(function(data) { data.pickers; data.results; });
 *   </script>
 *
 * Every event uses the same Apps Script Web App URL. The "event" key
 * decides which sheet tab is read/written, and tabs are auto-created
 * on first save. Picks and results are stored as JSON blobs so any
 * payload shape works (simple match->winner maps, RR's nested entrant
 * order + superlatives, etc.).
 */
(function(global) {
  var API_URL = 'https://script.google.com/macros/s/AKfycbyuaTPvpsYHObAOmYSWwmr-o-QiqZenJeaF7IoCFDXcpybzM38KCClYiUoXchvQ3ZedCw/exec';
  global.PICKS_API_URL = API_URL;

  global.createPicksApi = function(eventKey, opts) {
    opts = opts || {};
    var format = opts.format || 'json'; // 'json' for new events. WM42 leaves this off and stays flat.
    var ev = encodeURIComponent(eventKey);

    function save(payload, callback) {
      payload = payload || {};
      payload.event = eventKey;
      if (format) payload.format = format;
      var encoded = encodeURIComponent(JSON.stringify(payload));
      var img = new Image();
      img.onload = img.onerror = function() { if (callback) callback({ ok: true }); };
      img.src = API_URL + '?action=save&event=' + ev + '&data=' + encoded + '&t=' + Date.now();
    }

    function load(callback) {
      var script = document.createElement('script');
      var cbName = '_pa_' + eventKey.replace(/[^a-z0-9]/gi, '') + '_' + Date.now();
      var done = false;
      global[cbName] = function(data) {
        if (done) return; done = true;
        callback(data || { pickers: [], results: {} });
        try { delete global[cbName]; } catch (e) { global[cbName] = null; }
        if (script.parentNode) script.parentNode.removeChild(script);
      };
      script.onerror = function() {
        if (done) return; done = true;
        if (script.parentNode) script.parentNode.removeChild(script);
        callback({ pickers: [], results: {}, error: 'network' });
      };
      setTimeout(function() {
        if (done) return;
        done = true;
        global[cbName] = function() {};
        callback({ pickers: [], results: {}, error: 'timeout' });
      }, 8000);
      script.src = API_URL + '?action=load&event=' + ev + '&callback=' + cbName + '&t=' + Date.now();
      document.head.appendChild(script);
    }

    return {
      eventKey: eventKey,
      apiUrl: API_URL,
      savePicks: function(data, cb) {
        data = data || {};
        data.type = 'picks';
        save(data, cb);
      },
      saveResults: function(data, cb) {
        data = data || {};
        data.type = 'results';
        save(data, cb);
      },
      load: load
    };
  };
})(window);
