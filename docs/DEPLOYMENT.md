# GitHub Pages 發布與回滾 / Deployment and rollback

最後核對 / Last reviewed: **2026-08-17**

本文件是維護者 runbook；一般 fork 的部署方式見
[SELF_HOSTING.md](SELF_HOSTING.md)。

## 現行部署環境

- production source：GitHub repository 的 `main` branch；
- publish directory：`/(root)`；
- hosting：GitHub Pages branch-based deployment；
- custom domain：`k-y.cc`，由根目錄 `CNAME` 保存；
- `.nojekyll`：停用 Jekyll processing；
- build：沒有 frontend build step，直接發布 repository 內的靜態檔案；
- CI：`.github/workflows/validate.yml` 只做 validation，GitHub Pages deployment
  由 GitHub 的 Pages workflow／service 完成；
- application runtime：沒有 backend、API、database、analytics、form 或 runtime AI。

Repository 文件、CI 成功或本機 preview 都不能單獨證明 production 已更新；GitHub
Pages deployment、live URL 及 reviewed commit 必須另外核對。

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
- 對 source、metadata、圖片、文件、branch、commit 及 PR 文字做 privacy review；
- project status、release、live URL、redirect、TLS 及 access boundary 重新驗證；
- canonical、Open Graph、Twitter Card、JSON-LD、robots 及 sitemap 保持一致；
- 確認沒有 secret、私人資料、真實應用資料、database material、內部架構、聊天／
  prompt 或本機絕對路徑。

完整 checklist 見 [SECURITY_AND_PRIVACY.md](SECURITY_AND_PRIVACY.md)。

## 發布

1. 從最新 `main` 建立用途清楚、無私人含義的 topic branch；
2. 明確列出要 stage 的檔案，使用中性 `(action): (content)` commit；
3. push branch，建立 draft PR；
4. 核對 PR diff、required checks 及固定 reviewed head SHA；
5. 只在所有 gate 通過後把 PR 標示 ready，並以固定 SHA merge；
6. 等待 GitHub Pages deployment 對應 merge commit 且狀態成功；
7. 最後用 cache-busted live URL 及 browser QA 核對 production。

## Production 證明

有 repository 權限時可核對 Pages 設定及 latest build：

```bash
gh api repos/<OWNER>/<REPOSITORY>/pages
gh api repos/<OWNER>/<REPOSITORY>/pages/builds/latest
curl -fsSL --max-time 30 'https://<LIVE_DOMAIN>/?deployment=<MERGE_SHA>'
```

最終另需核對：

- local `main`、`origin/main`、GitHub default branch 及 Pages build commit 一致；
- cache-busted live HTML 與合併版本內容一致；
- `/`、`/robots.txt`、`/sitemap.xml`、`/404.html` 及未知 route；
- canonical、Open Graph、Twitter、JSON-LD、圖片及 security-relevant headers；
- desktop／390 px production browser、console、主要導覽及全部外部連結；
- GitHub Pages custom domain 及 HTTPS 設定仍與公開 URL 相符。

不要把帳戶頁面、credential、request identifier、完整 log／header dump 或其他受控
操作資料貼入 public repository。

## 回滾

不要改寫公開 `main` history。從目前 `main` 建立回滾 branch，以 `git revert` 撤銷
有問題的 merge commit，經相同 validation、PR 及固定 SHA review 後合併。等待新的
GitHub Pages deployment 完成，再以 cache-busted live route、Pages build commit
及 browser QA 證明回滾已生效。

不要以刪除 repository、branch、Pages site、custom domain 或整批檔案作為一般回滾。

## 官方參考

- [Configuring a publishing source for GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Managing a custom domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)
- [GitHub Pages deployments](https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## English summary

Production is published directly from the root of `main` through GitHub Pages,
with `CNAME` and `.nojekyll`; there is no application build or backend. Publish
only a reviewed commit, prove the Pages deployment against the merged SHA, then
perform independent cache-busted and browser checks. Roll back with a reviewed
revert PR instead of rewriting history or deleting resources.
