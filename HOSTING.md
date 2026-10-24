# Hosting

The site is a static build in `docs/`. It can be deployed without a build step.

**Live:** https://gregarious-cat-8f3216.netlify.app/

Security headers were verified on the live Netlify deployment. The GitHub repository is linked to Netlify: a push to `main` triggers an automatic production deploy.

## Recommended: Netlify Drop

1. Sign up at **https://app.netlify.com/signup** with GitHub (free, no card).
2. Open **https://app.netlify.com/drop**.
3. Drag the **`docs` folder** onto the drop area. Do not drag the repository root.
4. Wait for the deploy, then open the generated `*.netlify.app` URL.
5. Site configuration → Change site name: for example `herry-cell-atlas`.
6. Send me the final URL so I can update canonical links and README.

The `docs/_headers` file is included and gives Netlify the full security-header set:
CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy,
COOP, CORP, COEP and HSTS.

Verify after deploy:

```bash
curl -I https://<your-site>.netlify.app/
```

You should see `content-security-policy`, `x-frame-options`, `x-content-type-options`,
`referrer-policy`, `permissions-policy`, `cross-origin-opener-policy`,
`cross-origin-resource-policy` and `cross-origin-embedder-policy`.

## Alternative: Cloudflare Pages

1. Sign up at **https://dash.cloudflare.com/sign-up**.
2. Workers & Pages → Create → Pages → Upload assets.
3. Upload the contents of `docs/` (with `_headers` at the root).
4. The generated `*.pages.dev` URL is the site.

Cloudflare Pages also reads `_headers`.

## Alternative: Vercel

Vercel needs a `vercel.json` header configuration rather than `_headers`. Use Netlify
or Cloudflare for the simplest static deployment.

## Custom domain

A custom domain is optional. If you own one, add it in the hosting dashboard and
follow the DNS instructions. After that, update the canonical URL in:

- `demo/index.html`, `demo/textbook.html`, `demo/models.html`
- `README.md`
- `SECURITY.md`
- `package.json`

Then rebuild with `node build-demo.mjs`.
