# Bike photo archive

Durable repository copies of every original bike photo referenced by any current Git branch on September 15, 2026. The sources were Vercel Blob URLs and were still downloadable at preservation time.

- 15 original-resolution JPEGs.
- `manifest.json` records the source URL, byte count, content type and SHA-256 for each copy.
- EXIF metadata was stripped from these web/repository copies to avoid carrying camera metadata into future deploys. The original source URLs remain in the manifest for provenance.
- These files are the canonical durable originals for the site. Do not optimize them in place. Generate derivatives into a separate directory.

The exploded-view hero is procedural React Three Fiber code and did not use image assets. Its temporary preview screenshots were local QA evidence, not deployed project assets.
