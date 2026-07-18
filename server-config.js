// ============================================================================
// SERVER-CONFIG.JS
// ============================================================================
// This is the ONLY file you need to touch to add or change backend servers.
//
// STRUCTURE (matches how you actually deploy):
//   • Heroku  → you deploy the bot many times, each deploy = 1 new URL =
//               1 new server slot here. 50 slots are pre-built
//               (Heroku 1-50) — one for each deployment.
//   • Railway → 2 slots.
//   • Render  → 2 slots.
//   • Panel   → 1 slot (your own VPS/panel), limit "1+50" meaning 1 owner
//               session + 50 regular users = 51 total capacity.
//
// EVERY slot is a separate bot deployment with its OWN url. Do NOT paste the
// same URL into multiple slots — each slot must point at a different
// deployment, otherwise they'll all hit the same bot and share its limit
// instead of adding capacity.
//
// ----------------------------------------------------------------------
// HOW TO ADD A SERVER (do this every time you deploy a new bot):
// ----------------------------------------------------------------------
//   1. Deploy your bot on Heroku/Railway/Render (or point Panel at your VPS).
//   2. Copy the URL that platform gives you after deploy.
//   3. Find the matching empty slot below (e.g. "heroku3") and paste the URL
//      into its "url" field.
//   4. Save this file and push it to your repo — Vercel redeploys
//      automatically in under a minute.
//   5. Refresh the site — that server now shows up and works for everyone.
//
// To ADD MORE Heroku slots beyond the 50 pre-built ones, copy one of the
// heroku blocks below, change its id/name (e.g. "heroku51" / "Heroku 51"),
// and paste in the new URL.
//
// URL FORMAT EXAMPLES:
//   Heroku  : https://your-app-name.herokuapp.com
//   Railway : https://your-app.up.railway.app
//   Render  : https://your-app.onrender.com
//   Panel   : http://51.75.118.5:20221   (your VPS IP:port)
// ============================================================================

const SERVERS = [

    // ------------------------------------------------------------------
    // HEROKU — one slot per deployment. Fill in URLs as you deploy.
    // ------------------------------------------------------------------
    {
        id: "heroku1",
        name: "Heroku 1",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-1-URL-HERE",
        limit: 50,
        disabled: true,   // remove this line once the url above is real
    },
    {
        id: "heroku2",
        name: "Heroku 2",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-2-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku3",
        name: "Heroku 3",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-3-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku4",
        name: "Heroku 4",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-4-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku5",
        name: "Heroku 5",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-5-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku6",
        name: "Heroku 6",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-6-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku7",
        name: "Heroku 7",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-7-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku8",
        name: "Heroku 8",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-8-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku9",
        name: "Heroku 9",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-9-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku10",
        name: "Heroku 10",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-10-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku11",
        name: "Heroku 11",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-11-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku12",
        name: "Heroku 12",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-12-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku13",
        name: "Heroku 13",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-13-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku14",
        name: "Heroku 14",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-14-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku15",
        name: "Heroku 15",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-15-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku16",
        name: "Heroku 16",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-16-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku17",
        name: "Heroku 17",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-17-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku18",
        name: "Heroku 18",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-18-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku19",
        name: "Heroku 19",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-19-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku20",
        name: "Heroku 20",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-20-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku21",
        name: "Heroku 21",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-21-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku22",
        name: "Heroku 22",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-22-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku23",
        name: "Heroku 23",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-23-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku24",
        name: "Heroku 24",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-24-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku25",
        name: "Heroku 25",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-25-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku26",
        name: "Heroku 26",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-26-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku27",
        name: "Heroku 27",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-27-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku28",
        name: "Heroku 28",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-28-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku29",
        name: "Heroku 29",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-29-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku30",
        name: "Heroku 30",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-30-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku31",
        name: "Heroku 31",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-31-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku32",
        name: "Heroku 32",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-32-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku33",
        name: "Heroku 33",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-33-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku34",
        name: "Heroku 34",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-34-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku35",
        name: "Heroku 35",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-35-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku36",
        name: "Heroku 36",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-36-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku37",
        name: "Heroku 37",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-37-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku38",
        name: "Heroku 38",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-38-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku39",
        name: "Heroku 39",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-39-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku40",
        name: "Heroku 40",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-40-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku41",
        name: "Heroku 41",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-41-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku42",
        name: "Heroku 42",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-42-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku43",
        name: "Heroku 43",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-43-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku44",
        name: "Heroku 44",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-44-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku45",
        name: "Heroku 45",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-45-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku46",
        name: "Heroku 46",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-46-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku47",
        name: "Heroku 47",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-47-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku48",
        name: "Heroku 48",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-48-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku49",
        name: "Heroku 49",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-49-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "heroku50",
        name: "Heroku 50",
        group: "heroku",
        url: "https://PASTE-YOUR-HEROKU-50-URL-HERE",
        limit: 50,
        disabled: true,
    },

    // ------------------------------------------------------------------
    // RAILWAY — 2 slots
    // ------------------------------------------------------------------
    {
        id: "railway1",
        name: "Railway 1",
        group: "railway",
        url: "https://PASTE-YOUR-RAILWAY-1-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "railway2",
        name: "Railway 2",
        group: "railway",
        url: "https://PASTE-YOUR-RAILWAY-2-URL-HERE",
        limit: 50,
        disabled: true,
    },

    // ------------------------------------------------------------------
    // RENDER — 2 slots
    // ------------------------------------------------------------------
    {
        id: "render1",
        name: "Render 1",
        group: "render",
        url: "https://PASTE-YOUR-RENDER-1-URL-HERE",
        limit: 50,
        disabled: true,
    },
    {
        id: "render2",
        name: "Render 2",
        group: "render",
        url: "https://PASTE-YOUR-RENDER-2-URL-HERE",
        limit: 50,
        disabled: true,
    },

    // ------------------------------------------------------------------
    // PANEL — 1 slot, your own VPS/panel. Limit "1+50" = 1 owner session
    // + 50 regular users = 51 total. Already pointed at your VPS below.
    // ------------------------------------------------------------------
    {
        id: "panel1",
        name: "Panel 1",
        group: "panel",
        url: "http://51.75.118.5:20221",
        limit: 51,          // 1 (owner) + 50 (users)
        limitLabel: "1+50", // shown on the site instead of the raw number
    },

];

module.exports = { SERVERS };
