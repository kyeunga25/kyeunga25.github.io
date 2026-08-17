# 自部署到 GitHub Pages / Self-hosting

最後核對 / Last reviewed: **2026-08-17**

本指南讓你把自己的 fork 部署成獨立的 GitHub Pages 靜態網站。請改用自己的公開
內容、repository、domain 及帳戶；不要複製原站的私人資料或受控部署資訊。

## 先決條件

- GitHub account；
- Git；
- 符合 `package.json` `engines` 的 Node.js 及 npm；
- 如使用 custom domain，你必須有權管理該 domain 及 DNS。

## 1. Fork、clone 與安裝

```bash
git clone <YOUR_FORK_URL>
cd <YOUR_PROJECT_FOLDER>
npm ci
```

建議把 repository 建成 `<YOUR_GITHUB_USERNAME>.github.io` 的 account site，這樣目前
使用的 root-relative assets 可直接工作。若使用一般 project site，URL 通常帶有
repository 子路徑，你需要同步調整 root-relative links、canonical、robots 及 sitemap。

## 2. 改成自己的公開內容

至少核對：

- `index.html` 的姓名、介紹、links、canonical、Open Graph、Twitter Card 及 JSON-LD；
- `robots.txt` 與 `sitemap.xml` 的 hostname；
- `404.html` 的 home link；
- `assets/` 內每個圖片的來源、授權、metadata 及內容；
- `docs/PROJECT_STATUS.md` 是否仍需要保留，以及所有 project claims 是否有公開證據。

不要把真實使用者／應用資料、secret、private URL、database material、內部架構、
聊天內容或本機路徑當成 sample 放入 fork。

## 3. 設定 custom domain 或 GitHub URL

### 不使用 custom domain

移除根目錄這一個明確檔案：`CNAME`。然後把 canonical、robots、sitemap 及 metadata
改成 GitHub Pages URL。

### 使用自己的 custom domain

把 `CNAME` 內容改成你擁有的 hostname，只保留一行，不包含 protocol 或 path。之後
在 GitHub repository **Settings → Pages** 設定相同 domain，並按 GitHub 官方文件
加入 DNS records 及啟用 HTTPS。

不要複製 `k-y.cc`、他人的 DNS 值、驗證資訊或帳戶截圖。

## 4. 本機驗證

```bash
npm run check
npm run check:links
npm run preview
```

開啟 <http://localhost:4173/>，檢查 desktop 及 mobile：

- 首頁、圖片、CSS 及主要連結；
- `#projects` navigation、keyboard focus 及 reduced motion；
- console error、404 page 及水平溢出；
- canonical、robots、sitemap 與預定 live URL 一致。

## 5. 啟用 GitHub Pages

1. Push reviewed source 到自己的 GitHub repository；
2. 開啟 **Settings → Pages**；
3. 在 **Build and deployment** 選擇 **Deploy from a branch**；
4. branch 選擇 `main`，folder 選擇 `/(root)`；
5. 儲存後等待 Pages deployment 完成；
6. 使用 GitHub 顯示的 live URL 完成 production QA。

本項目沒有 build step。`.github/workflows/validate.yml` 只負責 source validation；
GitHub Pages 會直接發布 branch root 的靜態檔案。

## 6. Production 驗收

- Pages deployment 對應你剛 push／merge 的 commit；
- `/`、`/robots.txt`、`/sitemap.xml` 及未知 route 正常；
- custom domain 的 DNS、TLS、redirect 及 HTTPS 正常；
- live HTML、CSS、圖片及 metadata 與 reviewed source 一致；
- desktop／390 px mobile 沒有 console error 或水平溢出；
- repository 及 Pages URL 沒有不應公開的檔案或資料。

## 7. 更新與回滾

更新前重新執行本機 validation 及 privacy review，再以 reviewed PR／commit 合併到
`main`。若新版本有問題，建立回滾 branch，以 `git revert` 撤銷有問題的 commit／
merge，經相同檢查後合併。不要改寫 public history，也不要刪除整個 repository 或
Pages site 作為一般回滾。

## 官方參考

- [Creating a GitHub Pages site](https://docs.github.com/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Managing a custom domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Securing a GitHub Pages site with HTTPS](https://docs.github.com/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## English summary

Fork the repository, replace all identity and URL metadata with your own public
information, run the validation, then configure GitHub Pages to deploy from
`main` and `/(root)`. Remove the single `CNAME` file when you do not use a custom
domain, or replace it with a hostname you control. Verify the Pages deployment,
live routes, HTTPS, metadata, and responsive layout before calling it live.
