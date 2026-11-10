# Amit Ranjan Sahu — personal website

A single-page static site. No build step, no dependencies.

```
index.html                 the whole site (HTML, CSS and JavaScript)
assets/amit-portrait.jpg   portrait on the red background
docs/                      resume and PCIM India 2026 slides (thesis and paper held until the patent is filed)
```

## Run it locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Put it on GitHub Pages
1. On github.com, create a public repository named `amitran4812.github.io`.
2. Upload everything in this folder (keep the `assets` and `docs` folders).
3. In the repository, go to Settings → Pages, set Source to "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute the site is live at https://amitran4812.github.io

## Edit content
- Projects and their documents: the `PROJECTS` list near the bottom of `index.html`.
- GitHub repositories shown: the `REPOS` list just above it.
- To add a document, drop the PDF into `docs/` and add `['Name', 'docs/file.pdf', 'pages']` to a project's `docs`.
