# Privacy

Cell Atlas is a static, client-side educational project. It does not create accounts and does not collect, transmit or sell personal data.

## What the application stores

- The standalone site does not use application cookies or analytics.
- There are no form submissions and no file uploads.
- The DSH plugin stores **one preference** in the host browser's `localStorage`:
  - key: `cell-atlas.brightness`
  - value: a numeric display-brightness preference.
- Learning records, favourites, mistakes and backup export are **not implemented yet** in this version. If they are added later, they should remain local by default and be documented here before release.

## Hosting

The official site is hosted on Netlify. Netlify's free plan injects its own same-origin HUD/badge script; the site CSP blocks its inline bootstrap, so the badge does not render. That host script is not application telemetry. See `SECURITY.md` for the exact exception.

## Repository content

The public repository contains the project code, documentation and public GitHub identity (`HerryAtlas`). It does **not** contain:

- API keys, tokens or SSH private keys;
- student names, student IDs, phone numbers or school records;
- competition submission folders, signed consent forms or personal contact details;
- local browser profiles or deployment credentials.

The maintainer's local submission and credential directories are intentionally outside the repository and covered by `.gitignore` patterns.

## Reporting privacy concerns

Open a GitHub issue only for non-sensitive matters. Do not paste personal data, credentials or unredacted student information into an issue. For a sensitive concern, contact the repository owner through GitHub.
