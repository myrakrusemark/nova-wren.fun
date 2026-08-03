// Tell the click-counter Worker which game got opened, so the KPI board at
// home.myrakrusemark.com can rank them. Cloudflare Web Analytics counts
// pageloads and nothing else, and every game lives on its own subdomain, so a
// card click has nowhere else to go.
//
// Only the event name travels. No identifiers, nothing about who clicked.

const COUNTER_URL = 'https://click-counter.myrakrusemark.workers.dev/e'
const SITE = 'nova-wren.fun'

export function count(event) {
  // Dev runs would otherwise pollute the real numbers.
  if (!import.meta.env.PROD) return

  // keepalive lets the request outlive the page, which matters because the
  // click navigates straight off to the game. sendBeacon looks like the right
  // tool but returns true and then aborts, so it is not used. no-cors keeps
  // the default text/plain content type, which is CORS-safelisted and skips
  // the preflight; the Worker parses the body as JSON either way.
  fetch(COUNTER_URL, {
    method: 'POST',
    body: JSON.stringify({ site: SITE, event }),
    keepalive: true,
    mode: 'no-cors'
  }).catch(() => {
    // Losing a count is fine. Getting in the way of opening the game is not.
  })
}
