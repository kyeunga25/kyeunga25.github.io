# 公開項目狀態 / Public project status

最後核對 / Last reviewed: **2026-09-08**

本頁是 portfolio 公開文案的證據索引。以下六個產品的 GitHub repository 均已公開；
網站能否直接使用、工作區是否需要邀請，以及 source／release 的成熟度分開記錄。
只使用公開 repository、release、CI 及網站入口，不記錄私人資料或未公開計劃。

## 狀態定義

- **Public repo**：GitHub repository 可供未登入訪客讀取；不代表工作區公開開放。
- **Live**：公開網站可開啟，主要公開功能與目前文案相符。
- **Closed beta / Invite-only**：公開介紹可讀取；工作區只供受邀身份使用，或正式功能仍停用。
- **Source**：預設分支已合併的程式與文件；不以本機改動或未合併 PR 作為已發布能力。
- **Release**：GitHub 正式 Release；source version、release tag 及 production 各自核對。
- CI、preview 或 release tag 均不能單獨證明 production 已更新。

## 已核對項目

| 項目           | Repo   | 網站／成熟度                      | Source／最新 Release                        | 公開入口                                                                                       |
| -------------- | ------ | --------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Anisonary      | Public | Live；已審閱靜態目錄              | Source v1.31.1；Release v1.31.0             | [網站](https://anisonary.k-y.cc/) · [GitHub](https://github.com/kyeunga25/anisonary)           |
| Personal Space | Public | Live；Studio 僅限擁有者           | Source／Release v0.8.0；live health v0.8.0  | [網站](https://space.k-y.cc/) · [GitHub](https://github.com/kyeunga25/personal-space)          |
| RigStage       | Public | 公開介紹；Invite-only workspace   | Source v1.1.0；Release v1.0.1               | [產品介紹](https://rigstage.k-y.cc/) · [GitHub](https://github.com/kyeunga25/pc-ai-3d-builder) |
| AisleStage     | Public | 公開介紹；邀請制 closed beta      | Source v0.6.0；Release v0.5.1               | [產品介紹](https://aislestage.k-y.cc/) · [GitHub](https://github.com/kyeunga25/aislestage)     |
| StudyMix AI    | Public | 公開介紹；Closed beta / Early MVP | 沒有 public release；正式音訊與外部生成停用 | [產品介紹](https://studymix.k-y.cc/) · [GitHub](https://github.com/kyeunga25/studymix-ai)      |
| Wallpect       | Public | Live；瀏覽器本機工具              | Source／Release v0.4.0                      | [網站](https://wallpect.k-y.cc/) · [GitHub](https://github.com/kyeunga25/wallpect)             |

## 主要項目與近期進展

### Anisonary｜動畫歌典

具來源記錄的動畫 OP／ED 目錄，提供季度瀏覽、作品與歌曲頁、本機搜尋、逐曲 credits
及同源靜態 API。公開首頁與目前 README 均列出 **28 個已審閱季度、1,917 部作品、
4,229 筆歌曲**；資料涵蓋 2019–2026，但不代表每個季度均已完整收錄。

近期 source 擴充 2019 夏季至 42 套作品、103 筆歌曲，並顯示已核對的個別演唱者、
角色及合成歌聲 credits。2019 夏季仍在補充，2025 秋季尚未收錄。
Source v1.31.1 與最新 GitHub Release v1.31.0 分開標示。

[Source 與目前資料範圍](https://github.com/kyeunga25/anisonary/blob/main/README.md) ·
[v1.31.0 Release](https://github.com/kyeunga25/anisonary/releases/tag/v1.31.0) ·
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

邀請制電腦產品目錄、私人 3D 素材審核與 PC Builder，支援保存組裝草稿、已核實
規格及可解釋相容性結果。Repository 現已公開，可以直接閱讀原始碼及文件；
公開介紹與合成示範不會授予私人工作區存取權。

近期已合併 source 加入多模型預覽及素材審核分頁。Source 仍為 v1.1.0，最新 GitHub
Release 為 v1.0.1；這些 source 進展不作為新版正式 release 或真實 AI 已啟用的證據。
真實 AI provider 預設停用，私人工作區仍需要身份及成員資格驗證。

[公開 Source](https://github.com/kyeunga25/pc-ai-3d-builder) ·
[v1.0.1 Release](https://github.com/kyeunga25/pc-ai-3d-builder/releases/tag/v1.0.1) ·
[產品文件](https://github.com/kyeunga25/pc-ai-3d-builder/tree/main/docs)

## 其他項目

- **AisleStage：** 把獲授權商品圖、已核實繁中／英文資料及人工批准整理成
  1:1、4:5、9:16 Campaign Pack。近期 source 加入已批准 SVG 輸出的本機 PNG 匯出，
  並更新依賴安全修正。仍是 contact-first、邀請制 closed beta；Source v0.6.0
  不視為已完成正式 release 的證據。
  [v0.5.1 Release](https://github.com/kyeunga25/aislestage/releases/tag/v0.5.1) ·
  [Source 與驗證狀態](https://github.com/kyeunga25/aislestage/blob/main/docs/RELEASE_STATUS.md)。
- **StudyMix AI：** 私人音訊風格重塑 Early MVP。已合併本機音訊預覽、播放預檢及
  鍵盤操作修正；正式音訊上載及外部生成仍停用。公開 landing 可讀取，工作區維持
  closed beta，沒有 public release 或公開使用者作品頁。
  [目前 Source](https://github.com/kyeunga25/studymix-ai/blob/main/README.md) ·
  [已合併進展](https://github.com/kyeunga25/studymix-ai/commits/main/)。
- **Wallpect：** 已發布的瀏覽器本機桌布預覽、構圖及精確尺寸匯出工具。v0.4.0
  提供 47 種顯示設定、涵蓋 191 個已列名 Apple 型號，所選圖片不會上載。
  [v0.4.0 Release](https://github.com/kyeunga25/wallpect/releases/tag/v0.4.0) ·
  [使用與功能文件](https://github.com/kyeunga25/wallpect/blob/main/README.md)。

## 更新規則

每次修改 homepage 前，重新核對 repository identity、visibility、default branch、
source version、最新 release、main CI，以及公開網址的 DNS、TLS、redirect、HTTP
status、頁面身份及 access boundary。數量與功能須有公開來源；不使用舊 preview、
404 連結、本機改動或私人資料。兩個展示入口保持相同項目排序與狀態用語。

## English summary

All six project repositories are public. The portfolio prioritises Anisonary,
Personal Space and RigStage, followed by AisleStage, StudyMix AI and Wallpect.
Repository visibility, website availability, workspace access, source progress
and published releases are recorded separately. Anisonary now lists 28 reviewed
seasons, 1,917 titles and 4,229 themes; Personal Space reports v0.8.0 on its live
health endpoint. RigStage has public source and an invite-only workspace.
Only merged public work is described as source progress; preview, CI and local
changes are never treated as production proof.
