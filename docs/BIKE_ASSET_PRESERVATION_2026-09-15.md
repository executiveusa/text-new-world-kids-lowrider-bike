# Bike asset preservation audit - 2026-09-15

Vercel project supplied by the owner: `prj_uCjAUcoQqdbrqZyree0RydI7t9Z7`.

## Recovered

All 15 distinct Vercel Blob image URLs referenced across every current remote Git branch were reachable and downloaded at original resolution into `public/assets/bike/originals/`. See the machine-readable manifest for exact sources and hashes.

GitHub's public deployments endpoint exposed 25 historical Vercel deployment records for this repository. The current production URL returned HTTP 200 and serves the same 15 Blob photo set referenced by the repo.

## Access boundary

The Vercel project/deployment API requires an authenticated Vercel token. The current task environment's Vercel CLI is logged out, and both saved browser profiles were previously proven logged out of Vercel. Therefore private project deployment enumeration by project ID was not available here. The 25 GitHub-recorded deployment objects are the verified public deployment history available without that account access.

## Exploded-view work

The exploded-view hero was a procedural R3F model, not an image-backed scene. Its source existed only as the local branch/patch supplied in the earlier task and was never pushed to GitHub. The anonymous temporary Vercel review deployment expired after roughly one hour. Its screenshots were task artifacts, not tied to the Vercel project and are not recoverable from this rebuilt task workspace. Treat those screenshot files as lost unless the parent retained the earlier attachments. The code patch may still exist in the parent attachment store.

## Next use

Replace remote Blob URLs in a separate atomic change after visual parity checks. This preservation commit deliberately adds the originals only; it does not change production rendering or create a new deploy.
