# Ken Yeung — Personal Dashboard

[k-y.cc](https://k-y.cc) is an English-language personal homepage, professional dashboard, and portfolio. It presents public, verifiable work across Wallpect, Anisonary, StudyMix AI, AislePack, Personal Space, and RigStage without exposing private operational details or unpublished projects.

The static site includes a responsive project showcase, clear release status, canonical metadata, Open Graph, Twitter Card, and structured profile data.

## Local preview

No build step is required. Serve the repository root with any static server, for example:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deployment

The site is designed for GitHub Pages. `CNAME` sets the custom domain to `k-y.cc`, while `.nojekyll` keeps the site on the plain static-file path.
