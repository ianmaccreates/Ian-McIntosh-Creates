Short note about project images

This folder contains individual project subfolders. Each project may have an `images/`
directory for local development, but large image files are intentionally not tracked
in the repository to avoid bloating the Git history.

- Where to put images locally:
  - Add images to `src/Projects/<ProjectName>/images/` on your machine for development.
  - Each `images/` folder should contain a `.gitkeep` file so the empty folder remains in
    the repository. The `.gitkeep` files are tracked; the image files are ignored by
    the repo's `.gitignore` rules.

- Why images are ignored:
  - Large binaries increase repository size and slow pushes/clones. Images are kept
    locally or served from an external asset host for production builds.

- Working with thumbnails (development):
  - There is a helper script to generate thumbnails: `node scripts/generate-thumbs.js`.
    Run it from the repository root when you want to generate or update thumbnails.

- If you need to include images in the repository temporarily:
  - Remove or update the `.gitignore` entry, add the files, and commit — but be aware
    this will increase repository size. For long-term hosting, prefer an external
    storage solution (CDN, cloud storage, or a separate assets repo).

If you'd like, I can add guidance for deploying images to a CDN or add a sample script
to upload images to an S3-compatible bucket.
