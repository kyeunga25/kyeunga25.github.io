# 安全政策 / Security Policy

## 私密回報 / Private reporting

如發現可影響本站、GitHub Pages 發布或訪客安全的問題，請使用 GitHub Security
頁面的私人漏洞回報或私人 security advisory。不要在公開 issue 張貼 token、私人
資料、未公開路徑或可直接利用的重現內容。

Report security issues through GitHub's private vulnerability reporting or a
private security advisory. Do not publish credentials, personal data,
unreleased paths, or actionable exploit details in a public issue.

## 範圍 / Scope

- 安全修正以預設分支最新原始碼為準；GitHub Pages 的 live 狀態須另行驗證。
- 本站是純靜態 HTML／CSS，沒有應用程式 backend、表單、analytics 或 cookies。
- 主要風險包括供應鏈修改、連結／內容注入、第三方素材來源及錯誤的發布狀態宣稱。
- GitHub Actions 應維持最小權限並固定至已審閱的完整 commit SHA。
- Repository 不得保存 secret、私人內容或 Cloudflare／GitHub credential。

The site is static HTML and CSS with no application backend, forms, analytics,
or cookies. Relevant reports include supply-chain changes, link or content
injection, third-party asset provenance, and deployment-integrity issues.
