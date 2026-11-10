# Amit Ranjan Sahu — personal website

A single-page static site. No build step, no dependencies.

```
index.html                 the whole site (HTML, CSS and JavaScript)
assets/amit-portrait.jpg   portrait on the red background
docs/                      resume and PCIM India 2026 paper (thesis held until the patent is filed)
```

## Project layout
```
index.html          the whole site (HTML, CSS and JavaScript)
assets/             photos
docs/               resume and PCIM India 2026 paper
package.json        npm scripts: dev, build, preview, start
vite.config.js      Vite build (copies assets/ and docs/ into dist/)
server.js           dependency-free Node static server used by `npm start`
metadata.json       app name and description for Google AI Studio
```

## Run it locally
Open `index.html` in a browser. Or, with Node 18+:
```
npm install
npm run dev        # live preview
npm run build      # production files in dist/
npm start          # serve dist/ on $PORT (default 8080)
```

## Put it on GitHub Pages
1. GitHub Pages is free only for public repositories. If this repository is private, go to Settings → General → Danger Zone → Change visibility and make it public.
2. Go to Settings → Pages, set Source to "Deploy from a branch", pick `main` and `/ (root)`, and save.
3. After a minute or two the site is live at https://amitran4812.github.io/Personal-Website/

## Publish from Google AI Studio
1. Open Google AI Studio → Build (aistudio.google.com/apps).
2. In the prompt box, open the + (Add files) menu and choose **Import from GitHub**, then pick `amitran4812/Personal-Website`.
3. Check the preview, then click **Publish** (top right) → **Publish app**. AI Studio deploys it to Cloud Run.
   The free Starter tier needs no billing, but it isn't available for Google Workspace accounts or accounts that have had paid Google Cloud billing; otherwise link a Google Cloud project with billing.

## Edit content
- Industry Contribution tiles (names only): the `INDUSTRY` list near the bottom of `index.html`. Add a line like `['Project name', 'Sandisk · 2027'],` and a new tile appears.
- Projects and their documents: the `PROJECTS` list near the bottom of `index.html`.
- GitHub repositories shown: the `REPOS` list just above it.
- To add a document, drop the PDF into `docs/` and add `['Name', 'docs/file.pdf', 'pages']` to a project's `docs`.

- Sections are boxed panels with sideways-scrolling tiles: My Full Story, My Academic Journey So Far, My Skill Universe, My Novelty. Each tile is an `<article class="tile c-red">` in `index.html`; colour classes are `c-red`, `c-light`, `c-dark`, `c-wine`, `c-rose`, `c-ink`. Copy a tile to add one (certificates, skills, patents).

## Credits

The cursor flocking motion is adapted from [Swarm Rebuild](https://github.com/JoelBastoneLopez/swarm-rebuild) (MIT License, Copyright (c) 2026 Dhvanil Patel, Copyright (c) 2026 Joel Bastone Lopez).
