export const RSVP_ENDPOINT = process.env.NEXT_PUBLIC_RSVP_ENDPOINT ?? "";

export type GuestName = { first: string; middle: string; last: string };
export type Guest = GuestName & { at: string };

export function formatName({ first, middle, last }: GuestName) {
  return [first, middle ? `${middle}.` : "", last].filter(Boolean).join(" ");
}

/** Without this, an empty endpoint fetches a relative URL, gets the page's own
 *  HTML back, and surfaces as a baffling "Unexpected token '<'" JSON error. */
function requireEndpoint() {
  if (!RSVP_ENDPOINT) {
    throw new Error(
      "No RSVP endpoint configured — set NEXT_PUBLIC_RSVP_ENDPOINT and restart.",
    );
  }
}

/**
 * text/plain keeps this a CORS "simple request". Apps Script cannot answer a
 * preflight OPTIONS, so an application/json body would be blocked outright.
 */
export class GuestListFullError extends Error {}

export async function submitRsvp(guest: GuestName) {
  requireEndpoint();
  const res = await fetch(RSVP_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ guest }),
  });
  if (!res.ok) throw new Error(`Submit failed (${res.status})`);
  const data = await res.json();
  if (!data.ok) {
    if (data.code === "full") throw new GuestListFullError();
    throw new Error(data.error || "Submit failed");
  }
  return data.seatsLeft as number;
}

export async function fetchGuests(
  key: string,
): Promise<{ guests: Guest[]; max: number; seatsLeft: number }> {
  requireEndpoint();
  const res = await fetch(`${RSVP_ENDPOINT}?key=${encodeURIComponent(key)}`);
  if (!res.ok) throw new Error(`Could not reach the guest list (${res.status})`);
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || "Wrong password");
  return {
    guests: data.guests as Guest[],
    max: data.max ?? 100,
    seatsLeft: data.seatsLeft ?? 0,
  };
}
