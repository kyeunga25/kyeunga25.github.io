# Ken Yeung — Personal Dashboard

A small static homepage for [k-y.cc](https://k-y.cc). It keeps the public profile intentionally simple with a short introduction, current interests, and a responsive project showcase for Wallpect, Anisonary, StudyMix AI, and AislePack. The page also includes canonical, Open Graph, Twitter Card, and structured profile metadata.

## Local preview

No build step is required. Serve the repository root with any static server, for example:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deployment

The site is designed for GitHub Pages. `CNAME` sets the custom domain to `k-y.cc`, while `.nojekyll` keeps the site on the plain static-file path.
