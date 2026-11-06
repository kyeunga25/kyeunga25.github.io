# 公開項目狀態 / Public project status

本頁記錄作品集的公開入口及工作區狀態。Anisonary、Personal Space 和 Wallpect
提供網站及原始碼連結。RigStage、AisleStage 和 StudyMix AI 提供公開產品介紹。

## 狀態定義

- **Public repo**：GitHub repository 可供未登入訪客讀取；不代表工作區公開開放。
- **Live**：公開網站可開啟，主要公開功能與目前文案相符。
- **Closed beta / Invite-only**：公開介紹可讀取；工作區只供受邀身份使用，或正式功能仍停用。
- **Source**：預設分支已合併的程式與文件；不以本機改動或未合併 PR 作為已發布能力。
- **Release**：GitHub 正式 Release；source version、release tag 及 production 各自核對。
- CI、preview 或 release tag 均不能單獨證明 production 已更新。

## 已核對項目

| 項目           | 展示方式     | 網站／成熟度            | 公開入口                                                                              |
| -------------- | ------------ | ----------------------- | ------------------------------------------------------------------------------------- |
| Anisonary      | 網站與原始碼 | Live；已審閱靜態目錄    | [網站](https://anisonary.k-y.cc/) · [GitHub](https://github.com/kyeunga25/anisonary)  |
| Personal Space | 網站與原始碼 | Live；Studio 僅限擁有者 | [網站](https://space.k-y.cc/) · [GitHub](https://github.com/kyeunga25/personal-space) |
| RigStage       | 產品介紹     | 邀請制工作區            | [產品介紹](https://rigstage.k-y.cc/)                                                  |
| AisleStage     | 產品介紹     | 邀請制封閉測試          | [產品介紹](https://aislestage.k-y.cc/)                                                |
| StudyMix AI    | 產品介紹     | 封閉測試；Early MVP     | [產品介紹](https://studymix.k-y.cc/)                                                  |
| Wallpect       | 網站與原始碼 | Live；瀏覽器本機工具    | [網站](https://wallpect.k-y.cc/) · [GitHub](https://github.com/kyeunga25/wallpect)    |

## 主要項目與近期進展

### Anisonary｜動畫歌典

具來源記錄的動畫 OP／ED 目錄，提供季度瀏覽、作品與歌曲頁、本機搜尋、逐曲 credits
及同源靜態 API。目前的收錄範圍以自動統計為準。

[目錄統計](https://github.com/kyeunga25/anisonary/blob/main/docs/CATALOG_STATS.md) ·
[GitHub Releases](https://github.com/kyeunga25/anisonary/releases) ·
[資料來源](https://github.com/kyeunga25/anisonary/blob/main/docs/DATA_SOURCES.md)

### Personal Space

雙語內容發佈系統，提供公開 Notes、Articles、人工審閱 Editions、搜尋、標籤、
月份封存及 RSS。草稿、修訂、來源和發佈操作由擁有者專用 Studio 管理。

Source 與 GitHub Release 均為 v0.8.0；本次公開健康檢查亦回報 v0.8.0。
近期已合併工作完善自部署與多語文件、更新依賴安全修正，並把依賴檢查納入 CI。

[目前 Source](https://github.com/kyeunga25/personal-space/blob/main/README.md) ·
[v0.8.0 Release](https://github.com/kyeunga25/personal-space/releases/tag/v0.8.0) ·
[公開健康檢查](https://space.k-y.cc/api/health) ·
[自部署指南](https://github.com/kyeunga25/personal-space/blob/main/docs/SELF_HOSTING.md)

### RigStage

邀請制電腦產品目錄及 3D 組裝工作台，提供組裝示範與可解釋的相容性檢查。
私人工作區需要身份與成員資格驗證。

[產品介紹](https://rigstage.k-y.cc/)

## 其他項目

- **AisleStage：** 邀請制電商素材工作台，把獲授權的商品素材與已核實的資料整理成
  Campaign Pack，並由人員審閱和批准。
  [產品介紹](https://aislestage.k-y.cc/)。
- **StudyMix AI：** 封閉測試中的音訊風格重塑原型，提供本機音訊預覽。
  正式音訊上載及外部生成仍停用。
  [產品介紹](https://studymix.k-y.cc/)。
- **Wallpect：** 已發布的瀏覽器本機桌布預覽、構圖及精確尺寸匯出工具。v0.4.0
  提供 47 種顯示設定、涵蓋 191 個已列名 Apple 型號，所選圖片不會上載。
  [v0.4.0 Release](https://github.com/kyeunga25/wallpect/releases/tag/v0.4.0) ·
  [使用與功能文件](https://github.com/kyeunga25/wallpect/blob/main/README.md)。

## 更新規則

更新作品集前，核對公開網站或產品介紹的網址、內容與存取狀態。若作品提供公開原始碼，
再核對 repository、預設分支和 Release。網站與 GitHub Profile 使用相同的項目順序和公開入口。

## English summary

Anisonary, Personal Space and Wallpect link to their live sites and public
repositories. RigStage, AisleStage and StudyMix AI link to their public product
overviews. Their workspaces are available by invitation or through a closed beta.
