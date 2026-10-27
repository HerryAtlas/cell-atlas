# Hosting

The site is a static build in `docs/`. It needs no server, database, build step,
or paid plan.

## Current public deployment: GitHub Pages

**Live:** https://herryatlas.github.io/cell-atlas/

The repository publishes `docs/` from `main` through GitHub Pages, which is free
for public repositories. A push to `main` updates the site automatically.

No Netlify upgrade is required. The old Netlify URL remains online while the
team is on operating credits, but its production deploys are paused until the
next billing cycle or a plan change.

## Security headers

GitHub Pages cannot set arbitrary response headers. The built pages therefore
carry a strict CSP and `Referrer-Policy` in `<meta>` tags. Netlify and Cloudflare
Pages can additionally apply `docs/_headers` as real response headers.

## Alternative: Cloudflare Pages

1. Sign up at **https://dash.cloudflare.com/sign-up**.
2. Workers & Pages → Create → Pages → Upload assets.
3. Upload the contents of `docs/` (with `_headers` at the root).
4. The generated `*.pages.dev` URL is the site.

Cloudflare Pages reads `_headers` and has a free tier.

## Alternative: Netlify Drop

Netlify can host the same static folder, but production deployment or agent
runners may require a paid plan when operating credits are exhausted.

1. Open **https://app.netlify.com/drop**.
2. Drag the **`docs` folder** onto the drop area. Do not drag the repository root.
3. Rename the site if needed.

`docs/_headers` gives Netlify the full response-header set when the plan allows
production deployment.

## Verify after deploy

Open the four public pages and check:

```text
/
/textbook.html
/models.html
/models.html?model=transport&learn=1
/guide.html
```

Also check that the browser reports no console errors and that the mobile
viewport remains usable.
