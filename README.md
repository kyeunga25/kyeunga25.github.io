# Ken Yeung — 個人主頁 / Personal Dashboard

[k-y.cc](https://k-y.cc) 是以香港繁體中文為主、英文為輔的純靜態個人主頁。內容集中展示可公開驗證的產品與目前狀態，包括 Wallpect、Anisonary、StudyMix AI、AislePack、Personal Space 及 RigStage；不包含私人營運資料或未公開項目。

The page is a bilingual static portfolio focused on public, verifiable product work and honest release status. It includes responsive project presentation, canonical metadata, Open Graph, Twitter Card, and structured profile data.

## 本地預覽 / Local preview

No build step is required. Serve the repository root with any static server, for example:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## 發佈 / Deployment

The site is designed for GitHub Pages. `CNAME` sets the custom domain to `k-y.cc`, while `.nojekyll` keeps the site on the plain static-file path.
