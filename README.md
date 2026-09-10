# Personal Website

A simple, static personal website (plain HTML/CSS/JS, no build step) deployed to GitHub Pages via GitHub Actions.

## Editing

- `index.html` — content: name, tagline, about, projects, skills, contact links
- `styles.css` — styling and theme (light/dark) tokens
- `script.js` — footer year and dark-mode toggle

Everything currently in `index.html` is placeholder content — swap in your real name, bio, project links, and social links.

## Local preview

Open `index.html` directly in a browser, or serve it:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deployment

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the site via GitHub Pages. In the repo settings, under **Pages**, source should be set to **GitHub Actions** (the workflow will prompt this on first run if it isn't already).
