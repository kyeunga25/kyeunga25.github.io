# 公開安全與私隱邊界 / Security and privacy

最後核對 / Last reviewed: **2026-08-17**

這是一個公開 GitHub repository，`main` 根目錄亦是 GitHub Pages source。任何 tracked
file、branch name、commit／PR 文字、CI log 及 Pages asset 都應先假設可被永久複製。

## 可以公開與禁止公開

| 類別                                                                 | 規則                                     |
| -------------------------------------------------------------------- | ---------------------------------------- |
| 已公開網站文字、repository／release／live URL、通用技術棧            | 核對準確性、需要性及授權後可提交         |
| Secret、key、credential、private key、account／deployment identifier | 禁止提交；只放受控 secret settings       |
| 真實使用者／應用資料、database schema／dump、付款／provider 資料     | 本站不需要，任何形式都禁止提交           |
| 內部架構、私人 URL、本機路徑、未發布 roadmap                         | 改成中性公開描述或省略                   |
| 聊天、prompt、session log、AI reasoning／tool output                 | 禁止提交                                 |
| 圖片、第三方文字、AI output、log／screenshot                         | 逐項核對權利、metadata、帳戶及可辨識資料 |

公開姓名、網站及 GitHub profile 只可在本來已公開且網站確實需要的地方使用，不得從
本機、帳戶或對話推導額外個人資料。

## Secret 與本機設定

- `.env` 及 `.env.*` 已被 `.gitignore` 排除；
- 不建立包含真實值的 example secret file；
- 不在 command、commit、PR、issue、screenshot 或 debug log 貼 credential；
- GitHub Actions／Pages 若日後需要 secret，只存於 repository／environment secrets；
- identity、permission 及 deployment 的完整輸出不放入公開文件。

Secret 一旦進入公開 commit，僅刪除目前檔案並不足夠。先撤銷／輪換 credential，停止
相關使用，再由 repository 管理者評估通知及 history 清理；history rewrite 是另行
批准的高風險工作。

## 自動檢查

`npm run check:public` 會檢查常見 secret／private-key 形狀、私人 home path、敏感檔案
類型及 database definition 類文字。檢查器只輸出檔案、行號與類型，不輸出命中的值。

自動檢查不能理解所有私隱、法律或架構語境，不能取代人工 diff review。

## AI 使用邊界

- Production 網站沒有 AI runtime 或模型 API key；
- AI 可協助文案、文件或 code review，但 output 必須由人核對；
- 不把 secret、真實應用／使用者資料、私人文件或未發布計劃放入公開 AI artifact；
- 不把 prompt、聊天、reasoning、session log 或 tool output commit 到 repository；
- AI 不可自行 push、merge 或 deploy，除非該具體操作已獲明確批准；
- README 只披露工具／模型類別及是否屬 runtime，不保存對話內容。

## 發布前 checklist

```bash
git status --short --branch
git diff --check
git diff
npm run check
npm run check:links
```

人工確認：

1. 所有 staged 及 untracked files 都屬本次範圍；
2. branch、commit、PR 及 release 文字中性，不含私人背景或對話；
3. 沒有 secret、身份、account／deployment ID、private URL 或本機路徑；
4. 沒有真實使用者／應用資料、database material、內部架構或未發布 roadmap；
5. 圖片及引用已核對來源、授權、metadata 及可辨識內容；
6. 狀態由最新公開 evidence 支持，沒有把 CI／preview 寫成 production；
7. push、merge 及 deploy 各自有相應批准。

## 法律與內容

- Source code／文件採 MIT License；第三方媒體不會因此自動取得相同授權；
- 新媒體需保存可審查的來源／權利證據，但不要公開含私人資料的帳戶文件；
- 引用文字及品牌應保持必要、準確及不暗示 endorsement；
- 若日後加入 analytics、form、身份、database、payment 或 AI runtime，必須先更新
  privacy、legal、security、data retention 及 consent 聲明。

## English summary

Assume every tracked file, Git reference, CI log, and Pages asset is public and
copyable. The site needs no credentials, user data, database material, private
architecture, or runtime AI. Keep those items outside the repository, run the
automated checks, and complete a human diff and rights review before publishing.
