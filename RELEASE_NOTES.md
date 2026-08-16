# IntelliSTAR Emulator v1.0.0

Release notes

- Initial public release: Intellistar-style web emulator UI
- Features:
  - City switching (DES MOINES, INDIANAPOLIS, ORLANDO)
  - Offline standalone index.html (root index.html)
  - Demo prototype in `demo/` (demo/index.html, demo/styles.css, demo/app.js)
  - Basic service worker (`sw.js`) for caching index.html and enabling offline usage on HTTPS/localhost

Included files (already in the repository)

- `index.html` (standalone offline single-file emulator)
- `sw.js` (basic service worker)
- `demo/index.html`, `demo/styles.css`, `demo/app.js` (prototype files)

How to publish the release and attach the demo assets

Because the repository's release creation and asset upload must be performed via the GitHub Releases API (or the web UI), here are two ways to publish the release and attach the demo and index.html assets:

Option A — Use GitHub web UI (recommended if you prefer a quick, manual publish):
1. Go to: https://github.com/chrisbaxley423-cpu/intellistar-emulator/releases
2. Click "Draft a new release".
3. Tag version: `v1.0.0` (create new tag or pick an existing commit). Set the release target to the branch `release/v1.0.0` or `main` as you prefer.
4. Title: `IntelliSTAR Emulator v1.0.0`
5. Paste these release notes (or edit as you like).
6. Attach assets: drag-and-drop the files you want included (download `demo/` folder as a zip and `index.html`). If you prefer, attach the repository files directly.
7. Save as Draft or Publish.

Option B — Use GitHub CLI (fast, scriptable):
1. Install GitHub CLI (gh) and authenticate: `gh auth login`
2. From the repo root, create a zip of the demo folder and the standalone index.html:
   - `zip -r release-v1.0.0-demo.zip demo/ index.html`
3. Create a release draft and upload the zip:
   - `gh release create v1.0.0 --title "IntelliSTAR Emulator v1.0.0" --notes-file RELEASE_NOTES.md --target release/v1.0.0 --draft`
   - `gh release upload v1.0.0 release-v1.0.0-demo.zip`
4. Publish the release via the web UI or `gh release edit v1.0.0 --prerelease false --draft=false`.

If you want, I can:
- Create the ZIP artifact and push it into the repository under `releases/` (so it's available as an asset) — tell me if you'd like me to add `releases/release-v1.0.0-demo.zip` to the repo and I'll create it.
- Or, if you authorize, I can create the GitHub Release and upload assets for you (I currently don't have a direct tool to call the Releases API in this session). If you'd like me to prepare the ZIP here in the repo, reply "prepare zip" and I'll add it under `releases/`.

