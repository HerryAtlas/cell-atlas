# Security

## Official site

The only official live deployment is:

**https://gregarious-cat-8f3216.netlify.app/**

Canonical repository:

**https://github.com/HerryAtlas/cell-atlas**

Any page at the former GitHub Pages address, or the former GitHub account, is **not controlled by this project** and must be treated as untrusted. The account was renamed; the former username may be reclaimed. Do not enter credentials or download files from the former addresses.

## Threat model

This is a static, client-side educational site:

- no login, account system or user data collection;
- no cookies used by the application;
- no backend or database;
- no third-party application scripts, ads or analytics;
- the hosting platform injects its own same-origin HUD/badge script on Netlify's free plan; its inline bootstrap is blocked by the CSP, so the badge does not render;
- no file uploads or form submissions;
- no application network requests after assets load.

The relevant risks are therefore limited to content spoofing at an abandoned URL and to browser-side code execution in the static frontend itself.

## DSH plugin

The public DSH bundle has two halves:

- `index.js` — the host half. Its `apply()` function is intentionally empty; it registers no host services, filesystem access, shell access or network tools.
- `client.js` — a client-only visual overlay. It uses React provided by the host, builds the scene with bundled Three.js, and does not call a backend.

The client bundle does not contain API keys, tokens or remote fetches. Its only persistent browser state is the `cell-atlas.brightness` preference in `localStorage`; there is no analytics, telemetry or user profile. Install the plugin from the canonical repository or a locally built copy, and review `client.js` if your threat model requires it.

## Open source and personal data

The public repository contains the project code, documentation and the public GitHub identity `HerryAtlas`. It does not contain the maintainer's student/competition materials, signed forms, contact details, local submission packages, API tokens or SSH private keys. Local private directories and key files are excluded by `.gitignore`; they are never needed to run the site.

Do not paste personal data, student records or credentials into issues, pull requests, prompt files or screenshots. The optional prompt pack contains development guidance only; it deliberately excludes private chat logs, system prompts and personal data.

See `PRIVACY.md` for the data-flow statement.

## Supply-chain and maintainer checklist

This is a static project with a small dependency set (`three` and `esbuild` at build time), but a public repository still needs account-level controls:

- enable 2FA on GitHub and Netlify;
- enable GitHub secret scanning and push protection;
- protect `main` and require review for changes;
- review Dependabot/update pull requests before merging;
- restrict the Netlify GitHub App to this repository only;
- revoke old OAuth tokens and unused deploy keys;
- keep the SSH key private and passphrase-protected;
- never put deployment tokens in repository variables, prompts or screenshots;
- rebuild and re-test `docs/` and `client.js` from source before publishing.

## Hosting headers

The official Netlify deployment supplies the full security-header set through `_headers`: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP, CORP, COEP, HSTS and X-Permitted-Cross-Domain-Policies. The GitHub Pages copy is a legacy mirror and cannot set those response headers; it is not the official deployment.

## Reporting

For a non-sensitive issue, open a GitHub issue on the canonical repository. Do not include credentials, personal data or an unpatched exploit in a public issue. For a sensitive report, contact the repository owner through GitHub.

## Scope

Reports about the abandoned former username are welcome as a **domain/identity integrity** issue, but the project cannot technically prevent a third party from registering an available GitHub username. The durable mitigation is to use a controlled custom domain and to keep all official references pointed at the canonical URL above.
