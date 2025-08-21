# GitHub Pages Deployment

This repository is configured to deploy a static site from the `docs/` folder to GitHub Pages.

## How it works

- Pushes to the `main` branch trigger a workflow that uploads `docs/` and publishes it to Pages.
- The entry point is `docs/index.html`. A `.nojekyll` file is included to disable Jekyll processing.

## Setup

1. In GitHub, go to Settings → Pages.
2. Ensure "Build and deployment" is set to "GitHub Actions".
3. Push to `main` to deploy. The workflow is at `.github/workflows/pages.yml`.

## Local editing

- Edit files in `docs/` (e.g., `docs/index.html`).
- Commit and push to `main` to redeploy.

## Notes

- For single-page apps, add a `docs/404.html` that redirects to `index.html`.