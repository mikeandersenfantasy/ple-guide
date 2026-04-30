/**
 * WWE PLE Guide — Multi-event picks API
 *
 * One Google Sheet, one tab per event, one results tab per event.
 *
 * Sheet tab naming convention:
 *   "<event>"          → picks tab (e.g. "wm42", "backlash2026", "rr2027")
 *   "<event>-results"  → results tab (e.g. "wm42-results", "backlash2026-results")
 *
 * The script auto-creates a missing tab on first save, so adding a new event
 * just means pointing the picks page at ?event=<new-event> — no Apps Script
 * edit required. Tab can be pre-created/renamed manually too.
 *
 * Backwards compatible: requests without an "event" param default to "wm42".
 * That way the existing WrestleMania 42 picks page keeps working after you
 * rename "Sheet1" → "wm42" and "Results" → "wm42-results".
 */

var DEFAULT_EVENT = 'wm42';

function doGet(e) {
  var action = e.parameter.action || 'load';
  var callback = e.parameter.callback || '';
  var event = sanitizeEvent(e.parameter.event);

  if (action === 'save') {
    var dataStr = e.parameter.data || '{}';
    var payload = JSON.parse(decodeURIComponent(dataStr));
    if (!payload.event) payload.event = event;
    handleSave(payload);
    return jsonpResponse({ status: 'ok' }, callback);
  }

  // action === 'load'
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

function getOrCreateSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, 2).setValues([['Name', 'Saved']]);
  }
  return sheet;
}

function loadEvent(event) {
  var picksSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(event);
  var pickers = [];
  if (picksSheet) {
    var data = picksSheet.getDataRange().getValues();
    var headers = data[0] || [];
    for (var i = 1; i < data.length; i++) {
      if (data[i][0]) {
        var picks = {};
        for (var c = 2; c < headers.length; c++) {
          if (headers[c] && data[i][c]) picks[headers[c]] = data[i][c];
        }
        pickers.push({ name: data[i][0], saved: data[i][1], picks: picks });
      }
    }
  }

  var results = {};
  var resultsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(event + '-results');
  if (resultsSheet) {
    var rData = resultsSheet.getDataRange().getValues();
    for (var j = 1; j < rData.length; j++) {
      if (rData[j][0] && rData[j][1]) results[rData[j][0]] = rData[j][1];
    }
  }

  return { pickers: pickers, results: results, event: event };
}

function handleSave(payload) {
  var event = sanitizeEvent(payload.event);

  if (payload.type === 'picks') {
    var sheet = getOrCreateSheet(event);
    var picks = payload.picks || {};
    var matchIds = Object.keys(picks);

    var data = sheet.getDataRange().getValues();
    var headers = data[0] || [];

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
    for (var c = 2; c < headers.length; c++) {
      var matchId = headers[c];
      row.push(picks[matchId] || '');
    }

    var found = false;
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] && data[i][0].toString().toLowerCase() === payload.name.toLowerCase()) {
        sheet.getRange(i + 1, 1, 1, row.length).setValues([row]);
        found = true;
        break;
      }
    }
    if (!found) sheet.appendRow(row);
  }

  if (payload.type === 'results') {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var resultsSheet = ss.getSheetByName(event + '-results');
    if (!resultsSheet) {
      resultsSheet = ss.insertSheet(event + '-results');
      resultsSheet.getRange(1, 1, 1, 2).setValues([['MatchID', 'Winner']]);
    }
    var lastRow = resultsSheet.getLastRow();
    if (lastRow > 1) resultsSheet.getRange(2, 1, lastRow - 1, 2).clearContent();
    var rows = [];
    Object.keys(payload.results || {}).forEach(function(k) {
      rows.push([k, payload.results[k]]);
    });
    if (rows.length > 0) resultsSheet.getRange(2, 1, rows.length, 2).setValues(rows);
  }
}
