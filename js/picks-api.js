/**
 * Shared multi-event picks client.
 *
 * Usage on any event picks page:
 *
 *   <script src="<path>/js/picks-api.js"></script>
 *   <script>
 *     var api = createPicksApi('backlash2026'); // unique event key
 *     api.savePicks({ name, saved, picks, pin }, cb);   // pin enforces identity claim
 *     api.saveResults({ results }, cb);
 *     api.verifyPin(name, pin, function(res) { res.ok; });
 *     api.load(function(data) { data.pickers; data.results; data.hasPin; });
 *   </script>
 *
 * Every event uses the same Apps Script Web App URL. The "event" key
 * decides which sheet tab is read/written, and tabs are auto-created
 * on first save. Picks and results are stored as JSON blobs so any
 * payload shape works.
 *
 * PIN claim system:
 *   On the first save for a name, the picks page passes a 4-digit pin.
 *   The server stores a salted SHA-256 hash inside the picks blob.
 *   Future saves for that name MUST present a matching pin or the
 *   server returns { status: 'pin-mismatch' } and refuses to overwrite.
 *   load responses include data.hasPin = { '<lowercased name>': true } so
 *   the client knows which entries are claimed.
 */
(function(global) {
  var API_URL = 'https://script.google.com/macros/s/AKfycbyuaTPvpsYHObAOmYSWwmr-o-QiqZenJeaF7IoCFDXcpybzM38KCClYiUoXchvQ3ZedCw/exec';
  global.PICKS_API_URL = API_URL;

  function jsonpRequest(url, callback, timeoutMs) {
    var script = document.createElement('script');
    var cbName = '_pa_cb_' + Math.random().toString(36).slice(2) + '_' + Date.now();
    var done = false;
    global[cbName] = function(data) {
      if (done) return; done = true;
      callback(data);
      try { delete global[cbName]; } catch (e) { global[cbName] = null; }
      if (script.parentNode) script.parentNode.removeChild(script);
    };
    script.onerror = function() {
      if (done) return; done = true;
      if (script.parentNode) script.parentNode.removeChild(script);
      callback({ error: 'network' });
    };
    setTimeout(function() {
      if (done) return; done = true;
      global[cbName] = function() {};
      callback({ error: 'timeout' });
    }, timeoutMs || 8000);
    var sep = url.indexOf('?') === -1 ? '?' : '&';
    script.src = url + sep + 'callback=' + cbName + '&t=' + Date.now();
    document.head.appendChild(script);
  }

  global.createPicksApi = function(eventKey, opts) {
    opts = opts || {};
    // Pass { format: '' } or { format: null } to opt OUT of JSON storage mode
    // (e.g. for the legacy WM42 column-per-match sheet). Default is JSON mode.
    var format = ('format' in opts) ? opts.format : 'json';
    var ev = encodeURIComponent(eventKey);

    function save(payload, callback) {
      payload = payload || {};
      payload.event = eventKey;
      if (format) payload.format = format;
      var encoded = encodeURIComponent(JSON.stringify(payload));
      var url = API_URL + '?action=save&event=' + ev + '&data=' + encoded;
      jsonpRequest(url, function(data) {
        if (callback) callback(data || {});
      }, 10000);
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
      load: function(cb) {
        var url = API_URL + '?action=load&event=' + ev;
        jsonpRequest(url, function(data) {
          cb(data && !data.error ? data : { pickers: [], results: {}, hasPin: {}, error: data && data.error });
        });
      },
      verifyPin: function(name, pin, cb) {
        var url = API_URL + '?action=verify&event=' + ev + '&name=' + encodeURIComponent(name) + '&pin=' + encodeURIComponent(pin);
        jsonpRequest(url, function(data) {
          cb(data && !data.error ? data : { ok: false, error: data && data.error });
        });
      }
    };
  };
})(window);
