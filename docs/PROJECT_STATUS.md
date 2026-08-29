# 公開項目狀態 / Public project status

最後核對 / Last reviewed: **2026-08-30**

本頁是 portfolio 公開文案的證據索引，只記錄可由公開 repository、release、CI
及 production route 支持的狀態，不記錄私人部署設定、使用者資料或內部計劃。

## 狀態定義

- **Live**：production route 可公開讀取，且 repository／release 與目前文案一致。
- **Closed beta / Private beta / Invite-only**：產品或公開介紹可核對，但 workspace
  只供受邀身份使用，或 production 功能仍明確停用。
- **Preview / draft / local**：只屬開發證據，不可標示為 production 或 Live。
- CI、PR 或 release tag 只證明 repository 狀態；必須另行核對 live route。
- `main` source version、GitHub Release 與 production 是三種不同證據；如版本不同，
  必須分開列出，不以最新數字推定已正式發布。

## 已核對項目

| 項目           | Portfolio 狀態 | 版本／開發程度                                                               | 公開入口                                                                                         |
| -------------- | -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Wallpect       | Live           | [v0.4.0 release](https://github.com/kyeunga25/wallpect/releases/tag/v0.4.0)  | [Live](https://wallpect.k-y.cc/) · [Source](https://github.com/kyeunga25/wallpect)               |
| Anisonary      | Live           | [v1.3.0 release](https://github.com/kyeunga25/anisonary/releases/tag/v1.3.0) | [Live](https://anisonary.k-y.cc/) · [Source](https://github.com/kyeunga25/anisonary)             |
| StudyMix AI    | Closed beta    | `main` verified；no public release；external generation disabled             | [Public landing](https://studymix.k-y.cc/) · [Source](https://github.com/kyeunga25/studymix-ai)  |
| AisleStage     | Closed beta    | v0.5.1 released；v0.6.0 in source development                                | [Public landing](https://aislestage.k-y.cc/) · [Source](https://github.com/kyeunga25/aislestage) |
| Personal Space | Live           | v0.8.0 on `main`；latest GitHub Release tag v0.7.0                           | [Live](https://space.k-y.cc/) · [Source](https://github.com/kyeunga25/personal-space)            |
| RigStage       | Invite-only    | v1.1.0 source；latest GitHub Release tag v1.0.1                              | [Public landing](https://rigstage.k-y.cc/)                                                       |

## 核對詳情

- **Wallpect：** `main` package version 與 release 同為 v0.4.0。公開版本提供
  browser-only wallpaper preview、fitting 及 exact-size export；47 個合併 display
  profiles 覆蓋 191 個已列名 Apple models。
- **Anisonary：** `main` package version 與 release 同為 v1.3.0。四個已審閱季度快照
  共 280 個 unique titles 及 615 筆已知 OP／ED records；搜尋及目錄在 browser／static
  assets 內運作。
- **StudyMix AI：** 沒有 public release tag；
  [latest `main` CI](https://github.com/kyeunga25/studymix-ai/actions/runs/32448648234)
  已通過，但 CI 不代表 production。公開 landing 可讀取，`/app` parent 及 deep route
  均導向 Access；項目仍是私人封閉測試，沒有公開註冊或公開使用者內容，外部 AI
  adapter 預設停用。
- **AisleStage：** [v0.5.1](https://github.com/kyeunga25/aislestage/releases/tag/v0.5.1)
  是已核對 release；[v0.6.0 source development](https://github.com/kyeunga25/aislestage/blob/main/docs/RELEASE_STATUS.md)
  尚未完成正式 release／live gates。公開頁面只描述 invite-only Campaign Pack
  workspace，不把 v0.6.0 source milestone 寫成已發布版本。
- **Personal Space：** [`main` v0.8.0](https://github.com/kyeunga25/personal-space/commit/2fdd048f8855f443d7f84a6b28324f5cdd53eece)
  的 CI 與 Workers Build 已通過，公開 route 可讀取；GitHub latest Release tag 仍是
  [v0.7.0](https://github.com/kyeunga25/personal-space/releases/tag/v0.7.0)。公開網站提供
  Notes、Articles、search、archives 及 reviewed Editions，owner Studio 受身份保護。
- **RigStage：** 目前 source version 是 v1.1.0，最新 GitHub Release tag 仍是 v1.0.1；
  兩者不視為同一種證據。公開 landing 可讀取，workspace 為 invite-only，真實 AI
  provider 預設停用。私人 repository 不提供公開連結，亦不披露內部資源、資料或
  部署細節。

## 更新規則

每次修改 homepage 前，逐項重新核對：

1. GitHub repository 名稱、visibility、default branch、source version、最新 release 及
   main CI；
2. live URL 的 DNS、TLS、redirect、HTTP status、頁面身份及 access boundary；
3. production 是否與 repository 中已發布版本一致；
4. 數量、版本、語言、功能及成熟度是否仍由公開證據支持；
5. 是否出現舊 preview、404、過度陳述、私人資料或未發布能力。

不確定的狀態一律保守標示或暫不展示，不以本機 README、draft PR、preview、mock
資料或 CI 通過取代 production 證明。

## English summary

This page is the public evidence index for portfolio copy. Source versions,
releases, CI, and production are recorded separately. A repository, CI run,
preview, or release tag is not production proof by itself. Re-check each
project's repository identity, live route, access boundary, and public claims;
omit or downgrade anything uncertain, and do not link private repositories.
