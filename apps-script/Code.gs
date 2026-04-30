/**
 * WWE PLE Guide — Multi-event picks API
 *
 * One Google Sheet, one tab per event, one results tab per event.
 *
 * Sheet tab naming convention:
 *   "<event>"          → picks tab (e.g. "wm42", "backlash2026", "rr2027")
 *   "<event>-results"  → results tab (e.g. "wm42-results", "backlash2026-results")
 *
 * Two storage modes per tab:
 *   • Flat column-per-match (legacy WM42 mode) — used when payload has no
 *     "format" field. Picks tab columns: Name | Saved | <matchId1> | <matchId2> | ...
 *     Results tab columns: MatchID | Winner.
 *   • JSON blob mode — used when payload.format === "json" (any new event).
 *     Picks tab columns: Name | Saved | PicksJSON. Results tab: A1 = "ResultsJSON",
 *     A2 = JSON string. Works for any payload shape.
 *
 * The mode is determined per-tab by what's in the header row, so the WM42
 * tab keeps working in flat mode while every new event uses JSON mode.
 *
 * Adding a new event: point the page at ?event=<new-event>&format=json. No
 * Apps Script edits required — tabs are auto-created on first save.
 *
 * Backwards compatible: requests without "event" default to "wm42".
 */

var DEFAULT_EVENT = 'wm42';
var JSON_PICKS_HEADERS = ['Name', 'Saved', 'PicksJSON'];

function doGet(e) {
  var action = e.parameter.action || 'load';
  var callback = e.parameter.callback || '';
  var event = sanitizeEvent(e.parameter.event);

  if (action === 'save') {
    var dataStr = e.parameter.data || '{}';
    var payload = JSON.parse(decodeURIComponent(dataStr));
    if (!payload.event) payload.event = event;
    var result = handleSave(payload);
    return jsonpResponse(result || { status: 'ok' }, callback);
  }

  if (action === 'verify') {
    var name = (e.parameter.name || '').toString();
    var pin = (e.parameter.pin || '').toString();
    return jsonpResponse({ ok: verifyPin(event, name, pin) }, callback);
  }

  return jsonpResponse(loadEvent(event), callback);
}

function doPost(e) {
  var payload = JSON.parse(e.postData.contents);
  if (!payload.event) payload.event = DEFAULT_EVENT;
  handleSave(payload);
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonpResponse(obj, callback) {
  var json = JSON.stringify(obj);
  var output = callback ? callback + '(' + json + ')' : json;
  return ContentService.createTextOutput(output)
    .setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}

function sanitizeEvent(raw) {
  var v = (raw || DEFAULT_EVENT).toString().toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 32);
  return v || DEFAULT_EVENT;
}

function hashPin(event, name, pin) {
  if (!pin) return '';
  var raw = event + ':' + name.toLowerCase() + ':' + pin;
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw);
  return Utilities.base64Encode(bytes);
}

function verifyPin(event, name, pin) {
  if (!name || !pin) return false;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(event);
  if (!sheet) return false;
  var data = sheet.getDataRange().getValues();
  var headers = data[0] || [];
  if (headers[2] !== 'PicksJSON') return false;
  for (var i = 1; i < data.length; i++) {
    if (!data[i][0]) continue;
    if (data[i][0].toString().toLowerCase() === name.toLowerCase()) {
      var blob = {};
      try { blob = JSON.parse(data[i][2] || '{}'); } catch (err) { return false; }
      if (!blob.__pinHash) return true; // legacy / unset → first claim wins
      return blob.__pinHash === hashPin(event, name, pin);
    }
  }
  return false;
}

function stripInternalKeys(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  var out = {};
  Object.keys(obj).forEach(function(k) {
    if (k.indexOf('__') !== 0) out[k] = obj[k];
  });
  return out;
}

function getOrCreateSheet(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers && headers.length) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
  }
  return sheet;
}

function loadEvent(event) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var picksSheet = ss.getSheetByName(event);
  var pickers = [];
  var hasPin = {};
  if (picksSheet) {
    var data = picksSheet.getDataRange().getValues();
    var headers = data[0] || [];
    var jsonMode = headers[2] === 'PicksJSON';
    for (var i = 1; i < data.length; i++) {
      if (!data[i][0]) continue;
      if (jsonMode) {
        var raw = {};
        try { raw = JSON.parse(data[i][2] || '{}'); } catch (err) { raw = {}; }
        if (raw.__pinHash) hasPin[String(data[i][0]).toLowerCase()] = true;
        pickers.push({ name: data[i][0], saved: data[i][1], picks: stripInternalKeys(raw) });
      } else {
        var flat = {};
        for (var c = 2; c < headers.length; c++) {
          if (headers[c] && data[i][c]) flat[headers[c]] = data[i][c];
        }
        pickers.push({ name: data[i][0], saved: data[i][1], picks: flat });
      }
    }
  }

  var resultsSheet = ss.getSheetByName(event + '-results');
  var results = {};
  if (resultsSheet) {
    var rData = resultsSheet.getDataRange().getValues();
    var rHeaders = rData[0] || [];
    if (rHeaders[0] === 'ResultsJSON') {
      var raw = rData[1] && rData[1][0];
      try { results = raw ? JSON.parse(raw) : {}; } catch (err) { results = {}; }
    } else {
      for (var j = 1; j < rData.length; j++) {
        if (rData[j][0] && rData[j][1]) results[rData[j][0]] = rData[j][1];
      }
    }
  }

  return { pickers: pickers, results: results, event: event, hasPin: hasPin };
}

function handleSave(payload) {
  var event = sanitizeEvent(payload.event);
  var jsonMode = payload.format === 'json';

  if (payload.type === 'picks') {
    var sheet = getOrCreateSheet(event, jsonMode ? JSON_PICKS_HEADERS : ['Name', 'Saved']);
    var data = sheet.getDataRange().getValues();
    var headers = data[0] || [];

    if (jsonMode) {
      if (headers[0] !== 'Name' || headers[1] !== 'Saved' || headers[2] !== 'PicksJSON') {
        sheet.clear();
        sheet.getRange(1, 1, 1, JSON_PICKS_HEADERS.length).setValues([JSON_PICKS_HEADERS]);
        data = sheet.getDataRange().getValues();
      }
      // PIN claim enforcement: if a row already exists for this name with a pinHash,
      // the incoming save MUST present a matching pin. Otherwise reject.
      var existingRowIdx = -1;
      var existingBlob = null;
      for (var i = 1; i < data.length; i++) {
        if (data[i][0] && data[i][0].toString().toLowerCase() === payload.name.toLowerCase()) {
          existingRowIdx = i;
          try { existingBlob = JSON.parse(data[i][2] || '{}'); } catch (err) { existingBlob = {}; }
          break;
        }
      }
      var incomingPin = (payload.pin || '').toString();
      var newHash = incomingPin ? hashPin(event, payload.name, incomingPin) : '';
      if (existingBlob && existingBlob.__pinHash) {
        if (newHash !== existingBlob.__pinHash) {
          return { status: 'pin-mismatch' };
        }
      }
      // Build picks blob: copy any non-internal keys from payload.picks, then attach pinHash
      var picksObj = stripInternalKeys(payload.picks || {});
      if (newHash) picksObj.__pinHash = newHash;
      else if (existingBlob && existingBlob.__pinHash) picksObj.__pinHash = existingBlob.__pinHash;
      var json = JSON.stringify(picksObj);
      var jsonRow = [payload.name, payload.saved, json];
      if (existingRowIdx >= 0) {
        sheet.getRange(existingRowIdx + 1, 1, 1, jsonRow.length).setValues([jsonRow]);
      } else {
        sheet.appendRow(jsonRow);
      }
      return { status: 'ok' };
    }

    // ── Flat column-per-match mode (legacy WM42) ───────────────────
    var picks = payload.picks || {};
    var matchIds = Object.keys(picks);

    if (headers.length < 2) {
      headers = ['Name', 'Saved'];
      sheet.getRange(1, 1, 1, 2).setValues([headers]);
    }

    var allMatchIds = [];
    for (var h = 2; h < headers.length; h++) {
      if (headers[h] && allMatchIds.indexOf(headers[h]) === -1) allMatchIds.push(headers[h]);
    }
    matchIds.forEach(function(mid) {
      if (allMatchIds.indexOf(mid) === -1) allMatchIds.push(mid);
    });

    var newHeaders = ['Name', 'Saved'].concat(allMatchIds);
    if (newHeaders.length !== headers.length) {
      sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
      headers = newHeaders;
      data = sheet.getDataRange().getValues();
    } else {
      headers = newHeaders;
    }

    var row = [payload.name, payload.saved];
    for (var c2 = 2; c2 < headers.length; c2++) {
      var matchId2 = headers[c2];
      row.push(picks[matchId2] || '');
    }

    var found = false;
    for (var k = 1; k < data.length; k++) {
      if (data[k][0] && data[k][0].toString().toLowerCase() === payload.name.toLowerCase()) {
        sheet.getRange(k + 1, 1, 1, row.length).setValues([row]);
        found = true;
        break;
      }
    }
    if (!found) sheet.appendRow(row);
    return;
  }

  if (payload.type === 'results') {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var resultsSheet = ss.getSheetByName(event + '-results');
    if (!resultsSheet) {
      resultsSheet = ss.insertSheet(event + '-results');
      if (jsonMode) resultsSheet.getRange(1, 1).setValue('ResultsJSON');
      else resultsSheet.getRange(1, 1, 1, 2).setValues([['MatchID', 'Winner']]);
    }

    if (jsonMode) {
      resultsSheet.clear();
      resultsSheet.getRange(1, 1).setValue('ResultsJSON');
      resultsSheet.getRange(2, 1).setValue(JSON.stringify(payload.results || {}));
      return;
    }

    var lastRow = resultsSheet.getLastRow();
    if (lastRow > 1) resultsSheet.getRange(2, 1, lastRow - 1, 2).clearContent();
    var rrows = [];
    Object.keys(payload.results || {}).forEach(function(rk) {
      rrows.push([rk, payload.results[rk]]);
    });
    if (rrows.length > 0) resultsSheet.getRange(2, 1, rrows.length, 2).setValues(rrows);
  }
}
