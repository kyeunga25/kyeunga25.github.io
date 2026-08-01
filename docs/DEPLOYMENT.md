# GitHub Pages 發布與回滾 / Deployment and rollback

最後核對 / Last reviewed: **2026-08-02**

## 現行發布架構

- repository：`kyeunga25/kyeunga25.github.io`；
- production branch：`main`；
- GitHub Pages source：`main` 的 `/(root)`；
- custom domain：`k-y.cc`，由根目錄 `CNAME` 保存；
- `.nojekyll` 保持純靜態檔案路徑；
- 沒有 GitHub Actions deployment workflow、Cloudflare Worker backend 或 build output。

GitHub 官方文件指出，不需要自訂 build process 時可直接從指定 branch 的根目錄
發布；branch-based custom domain 會由 source 根目錄的 `CNAME` 保存。GitHub Pages
設定仍是 production truth，repository 文件不能取代即時設定核對。

## 發布前

```bash
git status --short --branch
npm ci
npm run check
npm run check:links
npm run preview
```

另外完成：

- desktop、large desktop 及 390 px mobile browser QA；
- `#projects` 導覽、keyboard focus、reduced motion、console、network 及無水平溢出；
- staged／unstaged diff 及每個 untracked file 的範圍核對，只 stage 本次發布檔案；
- 對 source、metadata、媒體、文件、commit 及 PR 文字進行 secret 與私人資料檢查；
- project status、release、live URL、redirect、TLS 及 access boundary 重新驗證。

## 發布

1. 從最新 `main` 建立用途清楚的 topic branch；
2. 明確列出要 stage 的檔案，使用中性 `(action): (content)` commit；
3. push branch，建立 draft PR；
4. 核對 PR diff、checks 及固定 reviewed head SHA；
5. 只在所有 gate 通過後把 PR 標示 ready 並以固定 SHA merge；
6. 等待 GitHub Pages latest build 對應 merge commit 且狀態為 `built`。

## Production 證明

```bash
gh api repos/kyeunga25/kyeunga25.github.io/pages
gh api repos/kyeunga25/kyeunga25.github.io/pages/builds/latest
curl -fsSL --max-time 30 'https://k-y.cc/?deployment=<merge-sha>'
```

最終另需核對：

- local `main`、`origin/main`、GitHub default branch 及 Pages build commit 一致；
- cache-busted live HTML 與合併版本內容一致；
- `/`, `/robots.txt`, `/sitemap.xml`, `/404.html` 及未知 route 行為；
- canonical、Open Graph、Twitter、JSON-LD、assets、security-relevant response headers；
- desktop／390 px production browser 截圖、console、主要導覽及全部外部連結。

## 回滾

不要改寫公開 `main` history。從目前 `main` 建立回滾 branch，使用 `git revert`
撤銷有問題的 merge commit，經相同檢查及 PR 流程合併。GitHub Pages build 完成後，
再以 cache-busted route、Pages build commit 與 browser QA 證明回滾版本已生效。

## 官方參考

- [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## English summary

Production is the root of `main` on GitHub Pages with `CNAME` and `.nojekyll`.
Publish only through a reviewed PR, prove the Pages build against the merged
SHA, then perform independent cache-busted and browser checks. Roll back with a
reviewed revert PR instead of rewriting `main`.
