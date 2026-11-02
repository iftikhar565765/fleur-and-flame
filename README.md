# Fleur & Flame — a candlelit garden wedding invitation

A one-page wedding invitation suite: a wax-sealed card opening onto pressed
botanicals, ten scenes (invitation, story, save-the-date, details, palette,
the day, venue, RSVP, countdown, closing), a working reply form, and a
seven-step visual editor ("Invitation Atelier") at `/customize` that
publishes the finished invitation to a shareable link.

Built as a **static site + tiny API** on **Cloudflare Workers**:

- Static assets (HTML/CSS/JS/art) served from the edge with content-hash cache busting
- `POST /api/publish` — stores the invitation config in D1, returns a guest link + edit token
- `GET  /api/publish` — loads a published invitation (`?action=load|version`)
- `POST /api/rsvp` — collects guest replies into D1 (honeypot + length checks)
- Guest replies are visible in the editor and at `/replies.html`

No user-uploaded images anywhere: every decorative asset is a shipped,
background-removed PNG in `assets/art/`, so the site is fully CDN-cacheable
and nothing depends on third-party object storage.

---

## The sample invitation

Ships with a tasteful sample couple (Margaux & Theodore, June 2027, a walled
garden in Gloucestershire). All sample copy lives in `js/config.js` — the
editor can change every string without touching code.

| Piece | Where |
| --- | --- |
| Couple, date, venue, copy, palette, moments | `js/config.js` |
| The page structure | `index.html` |
| Theme presets (olive / rose / burgundy / midnight) | `js/main.js` → `themePresets` |
| Type pairings shown in the editor | `js/customizer.js` → `TYPE_PAIRINGS` |

## Local development

```bash
npm install
npm run dev            # build + local D1 migration + wrangler dev on :8788
```

Open `http://localhost:8788` for the invitation and
`http://localhost:8788/customize` for the editor. Without any environment
variables the reply form runs in its honest demonstration mode (validates,
previews, sends nothing).

## Go-live checklist (new Cloudflare project)

A full click-by-click walkthrough — dashboard+Git path and CLI path —
lives in **[DEPLOY.md](DEPLOY.md)**. The short CLI version:

1. `npm install`
2. Create the database:
   `npx wrangler d1 create fleur-invitations`
3. Paste the returned `database_id` into `wrangler.jsonc`
   (replace `REPLACE_WITH_YOUR_NEW_D1_DATABASE_ID`).
4. Apply the schema:
   `npm run db:migrate:remote`
5. Deploy:
   `npm run deploy`
6. Optional environment secrets (`wrangler secret put …` or the dashboard):
   - `ACCESS_CODE` — when set, first publish requires this code
   - `RESEND_API_KEY` + `RSVP_FROM` — reply-notification email via resend.com
     (without them replies are still stored and shown in the editor)
7. After the first deploy, update the two `og:image` URLs in `index.html`
   to your real `*.workers.dev` (or custom-domain) address so shared
   links get the correct preview card.

## Editing an invitation you already published

The publish step returns a guest link and keeps an edit token in this
browser's local storage. Reopen `/customize`, make changes, publish again —
the guest link stays the same. You can also save/load a JSON copy of the
invitation from the editor's ⋯ menu.

## Accessibility & honesty

- The opening is escapable three ways (the card, the Open button, Escape)
  and collapses instantly under `prefers-reduced-motion`
- The sample invitation always says, plainly, that replies are not collected
- No tracking, no cookies, no external requests beyond Google Fonts and the
  GSAP CDN (both optional — the site works without them)
