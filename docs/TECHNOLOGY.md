# 技術、AI 與來源說明 / Technology, AI, and sources

最後核對 / Last reviewed: **2026-08-17**

## 技術選擇

| 類別     | 使用內容                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------- |
| Frontend | HTML5、CSS3、responsive layout、accessibility、SEO metadata、Open Graph、Twitter Card、JSON-LD            |
| Hosting  | GitHub Pages，從 `main` branch 的 `/(root)` 直接發布，使用 `CNAME` custom domain 及 HTTPS                 |
| Tooling  | Node.js、npm、html-validate、Prettier、自訂 Node.js checks                                                |
| CI       | GitHub Actions 做 validation；沒有 application build step                                                 |
| Runtime  | 純靜態檔案；沒有 JavaScript application、backend、API、database、analytics、form、payment 或 AI inference |

確切套件版本以 `package-lock.json` 為準，Node.js 支援範圍以 `package.json` `engines`
為準。

## 部署流程

1. 維護者更新並驗證 HTML、CSS、圖片及文件；
2. GitHub Actions 對 PR／`main` 執行 source checks；
3. reviewed commit 合併到 `main`；
4. GitHub Pages 從 repository root 發布靜態檔案；
5. 以 Pages build commit、live URL 及 browser QA 獨立證明 production。

這是公開需要的高層說明；repository 不記錄 credential、account identifier、受控 log
或不必要的內部操作細節。

## 資料來源

Portfolio 文案只可來自公開 GitHub repository、release／tag、CI、production route
及 access 狀態。CI、PR、preview 或本機資料不能單獨證明 production。完整規則見
[PROJECT_STATUS.md](PROJECT_STATUS.md)。本項目不使用私人 dataset、使用者／應用
record、database export、analytics event 或付款資料。

## AI model disclosure

| 範圍                   | 聲明                                                                           |
| ---------------------- | ------------------------------------------------------------------------------ |
| Production runtime     | 沒有 AI model，不呼叫模型 provider，也不需要 AI API key。                      |
| Development assistance | OpenAI Codex（GPT-5 系列）曾協助文件及 validation；output 只作待審建議。       |
| Repository retention   | 不保存 prompt、聊天、reasoning、session log、私人輸入或模型 response archive。 |
| Media                  | 每個 asset 的來源、授權及 metadata 必須個別核對，不自動推斷其生成方式。        |

## License 與 attribution

- 可重用網站程式、樣式、驗證工具及相關技術文件按
  [Licensing Scope](../LICENSING.md) 的範圍依根目錄 [MIT License](../LICENSE)
  提供；
- MIT License 不包含作品集文案／編排、`assets/**`、第三方圖片、logo、品牌或
  引用內容；
- 依賴、媒體及平台邊界見 [Third-Party Notices](../THIRD_PARTY_NOTICES.md)；
- 外部 project 名稱及連結只作 portfolio reference，不代表 endorsement；
- 若不能安全公開素材來源／權利，應更換或移除素材，而不是公開私人證明文件。

## 官方參考

- [GitHub Pages](https://docs.github.com/pages)
- [Publishing source](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Custom domains](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions](https://docs.github.com/actions)
- [MDN HTML](https://developer.mozilla.org/docs/Web/HTML)
- [MDN CSS](https://developer.mozilla.org/docs/Web/CSS)
- [Schema.org ProfilePage](https://schema.org/ProfilePage)
- [Open Graph protocol](https://ogp.me/)
- [html-validate](https://html-validate.org/)
- [Prettier](https://prettier.io/docs/)

## English summary

This is a framework-free HTML/CSS site published directly from the root of
`main` through GitHub Pages. GitHub Actions validates the source; there is no
application build, backend, database, tracking, or runtime AI. OpenAI Codex from
the GPT-5 family assisted documentation and validation, but prompts, chats,
private inputs, and model-output archives are not stored in the repository.
