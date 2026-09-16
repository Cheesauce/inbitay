/**
 * RSVP collector for the Kristine & Ejay invitation.
 *
 * Setup
 *  1. Create a Google Sheet, then Extensions -> Apps Script, and paste this in.
 *  2. Change ADMIN_PASSWORD below to something only you two know.
 *  3. Deploy -> New deployment -> type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone     <- must be "Anyone", NOT "Anyone with Google account"
 *  4. Copy the /exec URL it gives you into .env.local as NEXT_PUBLIC_RSVP_ENDPOINT.
 *
 * After editing this file you must republish for the change to take effect:
 * Deploy -> Manage deployments -> pencil -> Version: New version -> Deploy.
 *
 * "Anyone" access is required for the site to post without a login. Names can be
 * added by anyone holding the URL, but reading the list requires the password.
 */

const ADMIN_PASSWORD = "change-me";
const SHEET_NAME = "RSVPs";
const MAX_GUESTS = 100;
const HEADERS = ["Replied at", "First name", "M.I.", "Last name"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    // two guests replying at once could otherwise both pass the count check
    // and push the sheet to 101
    lock.waitLock(10000);

    const body = JSON.parse(e.postData.contents);
    const raw = body.guest || {};
    const guest = {
      first: String(raw.first || "").trim(),
      middle: String(raw.middle || "")
        .trim()
        .replace(/[^A-Za-z]/g, "")
        .slice(0, 1)
        .toUpperCase(),
      last: String(raw.last || "").trim(),
    };

    if (!guest.first || !guest.last) {
      return json({ ok: false, error: "No names given" });
    }

    const sheet = getSheet();
    const taken = Math.max(0, sheet.getLastRow() - 1); // less the header row

    if (taken >= MAX_GUESTS) {
      return json({ ok: false, code: "full", error: "Guest list is full" });
    }

    sheet.appendRow([new Date(), guest.first, guest.middle, guest.last]);

    return json({ ok: true, seatsLeft: MAX_GUESTS - (taken + 1) });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  if ((e.parameter.key || "") !== ADMIN_PASSWORD) {
    return json({ ok: false, error: "Wrong password" });
  }

  const rows = getSheet().getDataRange().getValues().slice(1);
  const guests = rows
    .filter(function (row) {
      return row[1] || row[3];
    })
    .map(function (row) {
      return {
        at: row[0] ? new Date(row[0]).toISOString() : "",
        first: String(row[1] || ""),
        middle: String(row[2] || ""),
        last: String(row[3] || ""),
      };
    });

  return json({
    ok: true,
    guests: guests,
    max: MAX_GUESTS,
    seatsLeft: Math.max(0, MAX_GUESTS - guests.length),
  });
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    return sheet;
  }

  // an earlier version wrote a single "Full name" column; relabel in place so
  // the headers match what is being written now, leaving existing rows alone
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  } else if (sheet.getRange(1, 4).getValue() !== HEADERS[3]) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }

  return sheet;
}

function json(payload) {
  return ContentService.createTextOutput(
    JSON.stringify(payload),
  ).setMimeType(ContentService.MimeType.JSON);
}
