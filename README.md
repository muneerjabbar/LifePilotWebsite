# LifePilot website

Static marketing site for **LifePilot** — ready for a separate GitHub repository and GitHub Pages.

**Domain:** https://lifepilot.ilqix.com/

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `app.html` | Android / iOS download (placeholder store links) |
| `aboutus.html` | About Gatepass Codex / LifePilot |
| `help.html` | Help centre |
| `privacy.html` | Privacy policy (store disclosure) |

No `pro-app.html` — Free and Pro are one app.

## Deploy on GitHub Pages

1. Create a new repository (for example `lifepilot-website`).
2. Copy the contents of this `website/` folder to the repo root (or push this folder as the root).
3. Enable **Settings → Pages → Deploy from branch** (`main` / root).
4. Add a DNS CNAME for `lifepilot.ilqix.com` pointing to `your-username.github.io`.
5. The included `CNAME` file sets the custom domain to `lifepilot.ilqix.com`.

## Update store links

Edit placeholders in `js/app-share.js` and the buttons in `app.html`:

- Google Play: `https://play.google.com/store/apps/details?id=com.lifepilot.app`
- App Store: replace `id0000000000` when Apple assigns a real ID; set `iosReady = true` in `app-share.js`

## Local preview

Open `index.html` in a browser, or:

```bash
npx serve .
```
