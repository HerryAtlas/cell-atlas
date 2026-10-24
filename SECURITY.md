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
- no third-party scripts, ads or analytics;
- no file uploads or form submissions;
- no network requests after assets load.

The relevant risks are therefore limited to content spoofing at an abandoned URL and to browser-side code execution in the static frontend itself.

## Hosting headers

The official Netlify deployment supplies the full security-header set through `_headers`: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP, CORP, COEP, HSTS and X-Permitted-Cross-Domain-Policies. The GitHub Pages copy is a legacy mirror and cannot set those response headers; it is not the official deployment.

## Reporting

For a non-sensitive issue, open a GitHub issue on the canonical repository. Do not include credentials, personal data or an unpatched exploit in a public issue. For a sensitive report, contact the repository owner through GitHub.

## Scope

Reports about the abandoned former username are welcome as a **domain/identity integrity** issue, but the project cannot technically prevent a third party from registering an available GitHub username. The durable mitigation is to use a controlled custom domain and to keep all official references pointed at the canonical URL above.
