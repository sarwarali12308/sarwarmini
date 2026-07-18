# SARWAR-MD — Pairing Site

WhatsApp pairing page with servers grouped by platform: **Heroku**,
**Railway**, **Render**, and **Panel** — matching how you actually deploy
(one deployment = one server slot = one URL).

## What was fixed in this update

1. **"SARWARXD" code overflowing its box** — the pairing-code text now
   auto-shrinks to fit any screen width and never spills outside its
   green border.
2. **Big, harsh footer text** — shrunk and restyled to match the subtle,
   small-caps look of Ahmad-MD / JawadTech / Erfan-MD.
3. **Server structure rebuilt** — instead of one shared URL pretending to
   be 50 servers, the list is now organized by real platform:
   - **Heroku** — 50 slots ready (one per deployment)
   - **Railway** — 2 slots
   - **Render** — 2 slots
   - **Panel** — 1 slot, already pointed at your VPS
     (`http://51.75.118.5:20221`), limit shown as **1+50** (1 owner +
     50 users = 51 total)

## The core idea (confirmed correct)

Every time you deploy the bot on Heroku (or Railway/Render), that
deployment gets its own unique URL. Each URL = one server slot here.
More slots filled in = more total capacity, since each deployment
handles its own users independently. This is exactly how Ahmad-MD,
JawadTech, and Erfan-MD work too — a static frontend that proxies to
many separately-deployed bot backends.

## Adding a server (every time you deploy)

1. Deploy the bot on Heroku (or Railway/Render) — you'll always need
   the bot's own source code to do this; this repo is only the
   frontend + proxy, not the bot itself.
2. Copy the URL the platform gives you after deploy.
3. Open `server-config.js`, find an empty slot (e.g. search `heroku3`),
   paste the URL into its `url` field, and delete that slot's
   `disabled: true` line.
4. Save, push — Vercel redeploys automatically.
5. Refresh the site — the new server appears under its platform's
   section and works immediately.

**Never paste the same URL into two slots.** Each slot must be a
separate deployment, or they'll share one bot's limit instead of
adding real capacity.

### Adding more than 50 Heroku slots

Copy one of the `heroku` blocks in `server-config.js`, rename its `id`
and `name` (e.g. `heroku51` / `"Heroku 51"`), and fill in the URL.

## Files

| File | What it does |
|---|---|
| `index.html` | The pairing page — includes all styling and client-side logic. |
| `server-config.js` | **The file you edit** — every server's platform, name, URL, limit. |
| `api/servers.js` | Sends the enabled server list (grouped by platform) to the browser. |
| `api/active.js` | Proxies your bot's `/active` endpoint (live user count). |
| `api/pair.js` | Proxies your bot's `/code` endpoint (generates the pairing code). |
| `vercel.json` | CORS headers for `/api` routes. |

## Troubleshooting

- **"No servers configured"** → nothing is enabled besides Panel 1 yet.
  Fill in a Heroku/Railway/Render URL and remove its `disabled: true`.
- **"Timed out"** → the backend is slow, asleep, or a firewall/port is
  blocking Vercel's outbound request.
- **"DNS lookup failed"** → typo in the URL.
- **"Connection refused"** → the port is closed or the bot isn't
  listening there.
- **"TLS/SSL error"** → try switching `http://` ↔ `https://`.
- **"Server responded but not with JSON"** → reachable, but wrong port,
  or you hit a login page instead of the bot's API.
