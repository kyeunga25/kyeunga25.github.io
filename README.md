# Ken Yeung — Personal Dashboard

[k-y.cc](https://k-y.cc/) 是一個英文為主的個人 homepage、professional dashboard
及 portfolio。網站只整理可由公開 repository、release、production route 及 access
狀態核對的工作，不把 preview、草稿或本機功能描述為已發布產品。

## 運行與部署環境

這是一個純靜態網站，使用 **HTML5** 與 **CSS3**，沒有 frontend framework、
application backend、database、analytics、cookies、表單、付款或 runtime AI。

正式網站由 **GitHub Pages** 發布：

- source：GitHub repository 的 `main` branch；
- publish directory：repository root；
- custom domain：`k-y.cc`，由 `CNAME` 設定；
- `.nojekyll`：停用 Jekyll processing，原樣發布靜態檔案；
- GitHub Actions：只做 source validation，Pages 使用 GitHub 的 branch-based
  deployment；
- build step：沒有，production 直接提供 HTML、CSS、圖片、robots、sitemap 及 404。

## 技術棧

| 類別         | 技術與用途                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------- |
| 網站         | HTML5、CSS3、responsive layout、accessibility、SEO metadata、Open Graph、Twitter Card、JSON-LD |
| Hosting      | GitHub Pages、custom domain、HTTPS                                                             |
| 開發工具     | Node.js、npm、html-validate、Prettier、自訂靜態檢查                                            |
| CI           | GitHub Actions 驗證 HTML、格式、結構與公開安全邊界                                             |
| Runtime data | 只有 repository 內的公開靜態內容；沒有 API 或 database                                         |

## Repository 結構

| 路徑                           | 用途                                                    |
| ------------------------------ | ------------------------------------------------------- |
| `index.html`                   | 首頁內容、SEO 與 structured data                        |
| `styles.css`                   | 響應式視覺、keyboard focus、reduced motion 與高對比支援 |
| `404.html`                     | GitHub Pages 自訂錯誤頁                                 |
| `assets/`                      | 已核對、可公開展示的圖片與 favicon                      |
| `robots.txt`, `sitemap.xml`    | 搜尋引擎指引                                            |
| `CNAME`, `.nojekyll`           | custom domain 及純靜態發布設定                          |
| `scripts/`                     | 本機／CI 結構、連結及公開安全檢查                       |
| `docs/PROJECT_STATUS.md`       | 公開項目狀態及證據規則                                  |
| `docs/SELF_HOSTING.md`         | 自部署到自己的 GitHub Pages 的完整步驟                  |
| `docs/DEPLOYMENT.md`           | 維護者發布、production 驗證及回滾流程                   |
| `docs/SECURITY_AND_PRIVACY.md` | 公開 repository 的私隱與安全邊界                        |
| `docs/TECHNOLOGY.md`           | 技術、AI 使用及來源說明                                 |

## 本機預覽與檢查

需要符合 `package.json` `engines` 的 Node.js 版本及 npm。

```bash
npm ci
npm run check
npm run check:links
npm run preview
```

然後開啟 <http://localhost:4173/>。發布前另需以 desktop 及 390 px mobile
viewport 檢查首屏、`#projects` 導覽、外部連結、console 及水平溢出。

## 自部署摘要

1. Fork／clone repository 並執行 `npm ci`；
2. 把頁面內容、canonical URL、robots、sitemap 及公開連結改成自己的資料；
3. 使用 custom domain 時，把 `CNAME` 改成自己的 hostname；不用 custom domain 時，
   移除這一個明確的 `CNAME` 檔案；
4. 執行 `npm run check`、`npm run check:links` 及 browser QA；
5. 在自己的 GitHub repository **Settings → Pages** 選擇 **Deploy from a branch**，
   source 設為 `main`／`/(root)`；
6. push reviewed commit，等待 GitHub Pages deployment 成功，再核對 live URL。

完整步驟、custom domain 注意事項及更新方式見
[Self-hosting](docs/SELF_HOSTING.md)。

## 私隱與公開邊界

GitHub repository 與 GitHub Pages source 都是公開範圍；任何 tracked file、branch、
commit、PR、CI log 及 Pages asset 都應先當作可被永久複製。

- 不提交 secret、key、credential、account／deployment identifier 或私人 URL；
- 不提交真實使用者／應用資料、database schema／dump、內部架構或未發布 roadmap；
- 不提交私人本機路徑、聊天／prompt／session log 或不必要的個人資料；
- 新增圖片或引用前需核對來源、授權、metadata 及可辨識內容；
- AI 產出只可作為待審內容，必須經人工核對、測試及 privacy review；
- push、merge 及 deploy 前執行 `npm run check` 並人工檢查完整 diff。

詳細規則見 [Security and privacy](docs/SECURITY_AND_PRIVACY.md)。

## English summary

[k-y.cc](https://k-y.cc/) is an English-first personal homepage, professional
dashboard, and portfolio. It is a framework-free HTML/CSS site published from
the `main` branch root with GitHub Pages and a custom domain. There is no build
framework, application backend, database, tracking, form, payment flow, or
runtime AI model. See [Self-hosting](docs/SELF_HOSTING.md),
[Deployment](docs/DEPLOYMENT.md), and
[Security and privacy](docs/SECURITY_AND_PRIVACY.md).

## 技術、AI 與參考資料 / Technology, AI, and references

- **使用技術：** HTML5、CSS3、GitHub Pages、GitHub Actions、Node.js／npm、
  html-validate 及 Prettier。
- **Runtime AI model：** 無；production 網站不會呼叫 AI provider，也不需要 AI key。
- **AI-assisted development：** 文件及驗證工作有使用 OpenAI Codex（GPT-5 系列）
  協助；AI 不是 production dependency，repository 不保存 prompt、對話、session log、
  私人輸入或模型輸出紀錄。
- **資料來源：** 只使用公開 repository、release、CI、live URL 及 access 狀態；不使用
  私人 dataset、使用者／應用資料或 database export。規則見
  [Project status](docs/PROJECT_STATUS.md)。
- **授權：** 程式及文件依 [MIT License](LICENSE) 提供；第三方媒體仍需逐項核對權利。
- **官方參考：** [GitHub Pages](https://docs.github.com/pages)、
  [Publishing source](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、
  [Custom domains](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)、
  [GitHub Actions](https://docs.github.com/actions)、
  [MDN HTML](https://developer.mozilla.org/docs/Web/HTML)、
  [MDN CSS](https://developer.mozilla.org/docs/Web/CSS)、
  [Schema.org ProfilePage](https://schema.org/ProfilePage)、
  [Open Graph protocol](https://ogp.me/)、
  [html-validate](https://html-validate.org/) 及 [Prettier](https://prettier.io/docs/)。
