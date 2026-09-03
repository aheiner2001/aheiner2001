# Aaron Heiner — Portfolio (GitHub Pages)

Static portfolio site extracted from the Lovable project. No build step required.

## Run locally

```bash
cd Portfolio/site
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy to GitHub Pages

### Option A: Publish from `/docs` (recommended for user sites)

1. Move or copy the contents of `site/` into a `docs/` folder at your repo root.
2. In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Branch: `main`, folder: `/docs`.
4. Save. Your site will be live at `https://<username>.github.io/<repo>/`.

### Option B: Dedicated `username.github.io` repo

1. Copy everything in `site/` to the root of your `username.github.io` repository.
2. Enable Pages from the `main` branch root.
3. Site URL: `https://<username>.github.io`.

## Customize

- **Resume**: `resume.pdf` (main) and `resume-linkedin.pdf` are in the site folder. Update by replacing those files from `Portfolio/resumes/`.
- **Profile photo**: Add `images/profile.jpg` (square crop works best) for the About section.
- **Reflections** (hidden for now): Files stay at `reflections.html` / `reflections.js` — re-add the nav link in `index.html` when ready to publish.
- **LinkedIn URL**: Update links in `index.html` when you have the correct profile URL.
- **Ideas**: See `RECOMMENDED-CHANGES.md` in the parent `Portfolio/` folder.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio page |
| `styles.css` | All styling |
| `script.js` | Project data and screenshot modal |
| `resume.html` | Resume page (link or embed PDF) |
| `reflections.html` | Reflections / thinking page |
| `reflections.js` | Reflection posts and backlog list |
| `images/` | Project screenshots |
