# Ken Yeung — Personal Dashboard

[k-y.cc](https://k-y.cc/) 是一個英文為主的個人 homepage、professional dashboard
及 portfolio。網站只整理可由公開 repository、release、production route 及 access
狀態核對的工作，不把 preview、草稿或本機功能描述為已發布產品。

## 架構

網站保持純靜態，沒有應用程式 backend、analytics、cookies、表單或第三方執行
script。GitHub Pages 直接發布 `main` 分支根目錄；不需要前端 build step。

| 路徑                     | 用途                                                    |
| ------------------------ | ------------------------------------------------------- |
| `index.html`             | 首頁內容、SEO、Open Graph、Twitter Card 與 JSON-LD      |
| `styles.css`             | 響應式視覺、keyboard focus、reduced motion 與高對比支援 |
| `404.html`               | GitHub Pages 自訂錯誤頁                                 |
| `assets/`                | 本站使用的靜態圖像與 favicon                            |
| `docs/PROJECT_STATUS.md` | 公開項目狀態、版本、入口及證據規則                      |
| `docs/DEPLOYMENT.md`     | GitHub Pages 發布、production 驗證及回滾流程            |
| `scripts/`               | 本機／CI 靜態結構及連結檢查                             |
| `CNAME`, `.nojekyll`     | custom domain 與純靜態發布設定                          |

## 本機預覽與檢查

需要符合 `package.json` engines 的 Node.js 版本及 npm。

```bash
npm ci
npm run check
npm run check:links
npm run preview
```

然後開啟 <http://localhost:4173/>。發布前另需以 desktop 及 390 px mobile
viewport 檢查首屏、`#projects` 導覽、外部連結、console 及水平溢出。

## 內容與私隱邊界

- 項目名稱、版本、成熟度及 live URL 必須先按公開證據重新核對；
- 網站不收集表單資料，不設定 analytics cookies，也不載入第三方執行 scripts；
- metadata 只包含已公開的姓名、網站及 GitHub profile；
- repository 不保存 secret、帳戶／部署識別資料、私人內容或未發布項目資料；
- 新增媒體前需核對來源、使用權、metadata 及展示內容。

最新公開狀態見 [Project status](docs/PROJECT_STATUS.md)，完整發布步驟見
[Deployment](docs/DEPLOYMENT.md)。

## English

[k-y.cc](https://k-y.cc/) is an English-first personal homepage, professional
dashboard, and portfolio. It is a plain HTML/CSS GitHub Pages site with no
application backend, tracking, forms, or runtime third-party scripts. Project
claims are refreshed only from public repository, release, live-route, and
access evidence. Run `npm run check` and `npm run check:links` before publishing.
