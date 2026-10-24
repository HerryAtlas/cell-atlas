# Security

## Official site

The only official live deployment is:

**https://herryatlas.github.io/cell-atlas/**

Canonical repository:

**https://github.com/HerryAtlas/cell-atlas**

Any page at `herryatlas.github.io` or `github.com/HerryAtlas` is **not controlled by this project** and must be treated as untrusted. The account was renamed; the old GitHub username may be reclaimed. Do not enter credentials or download files from the old addresses.

## Threat model

This is a static, client-side educational site:

- no login, account system or user data collection;
- no cookies used by the application;
- no backend or database;
- no third-party scripts, ads or analytics;
- no file uploads or form submissions;
- no network requests after assets load.

The relevant risks are therefore limited to content spoofing at an abandoned URL and to browser-side code execution in the static frontend itself.

## GitHub Pages headers

GitHub Pages controls response headers and does not allow a repository to set arbitrary headers such as `Content-Security-Policy`, `X-Frame-Options` or `Permissions-Policy`. The pages include a restrictive `<meta http-equiv="Content-Security-Policy">` and a referrer policy as partial mitigations. Header-level controls require a reverse proxy or a host with configurable headers.

## Reporting

For a non-sensitive issue, open a GitHub issue on the canonical repository. Do not include credentials, personal data or an unpatched exploit in a public issue. For a sensitive report, contact the repository owner through GitHub.

## Scope

Reports about the abandoned `HerryAtlas` username are welcome as a **domain/identity integrity** issue, but the project cannot technically prevent a third party from registering an available GitHub username. The durable mitigation is to use a controlled custom domain and to keep all official references pointed at the canonical URL above.
