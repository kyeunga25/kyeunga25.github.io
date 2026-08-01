# 公開項目狀態 / Public project status

最後核對 / Last reviewed: **2026-08-02**

本頁是 portfolio 公開文案的證據索引，只記錄可由公開 repository、release、CI
及 production route 支持的狀態，不記錄私人部署設定、使用者資料或內部計劃。

## 狀態定義

- **Live**：production route 可公開讀取，且 repository／release 與目前文案一致。
- **Closed beta / Private beta / Invite-only**：產品或公開介紹可核對，但 workspace
  只供受邀身份使用，或 production 功能仍明確停用。
- **Preview / draft / local**：只屬開發證據，不可標示為 production 或 Live。
- CI、PR 或 release tag 只證明 repository 狀態；必須另行核對 live route。

## 已核對項目

| 項目           | Portfolio 狀態 | 公開版本                                                                    | 公開入口與證據                                                                                       | 可支持的公開描述                                                                                                                                            |
| -------------- | -------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wallpect       | Live           | [v0.2.2](https://github.com/kyeunga25/wallpect/releases/tag/v0.2.2)         | [Live](https://wallpect.k-y.cc/) · [Source](https://github.com/kyeunga25/wallpect)                   | Browser-only wallpaper preview, fitting and exact-size export for 74 reviewed Apple-device profiles.                                                        |
| Anisonary      | Live           | [v1.1.0](https://github.com/kyeunga25/anisonary/releases/tag/v1.1.0)        | [Live](https://anisonary.k-y.cc/) · [Source](https://github.com/kyeunga25/anisonary)                 | Four reviewed seasonal snapshots with 280 titles and 615 known OP／ED records.                                                                              |
| StudyMix AI    | Private beta   | No public release tag                                                       | [Source](https://github.com/kyeunga25/studymix-ai)                                                   | Invite-oriented audio-restyling workspace; production audio upload and real generation remain disabled. No public live URL was verified on the review date. |
| AisleStage     | Closed beta    | [v0.5.1](https://github.com/kyeunga25/aislestage/releases/tag/v0.5.1)       | [Public landing](https://aislestage.k-y.cc/) · [Source](https://github.com/kyeunga25/aislestage)     | Public product explanation with an invite-only workspace for approved bilingual, three-format Campaign Packs.                                               |
| Personal Space | Live           | [v0.6.0](https://github.com/kyeunga25/personal-space/releases/tag/v0.6.0)   | [Live](https://space.k-y.cc/) · [Source](https://github.com/kyeunga25/personal-space)                | Public Notes, Articles, search, archives and reviewed Editions with an Access-protected owner Studio.                                                       |
| RigStage       | Invite-only    | [v1.0.1](https://github.com/kyeunga25/pc-ai-3d-builder/releases/tag/v1.0.1) | [Public landing](https://rigstage.k-y.cc/) · [Source](https://github.com/kyeunga25/pc-ai-3d-builder) | Public product explanation with an Access-protected PC catalogue, asset-review and 3D assembly workspace.                                                   |

## 更新規則

每次修改 homepage 前，逐項重新核對：

1. GitHub repository 名稱、visibility、default branch、最新 release 及 main CI；
2. live URL 的 DNS、TLS、redirect、HTTP status、頁面身份及 access boundary；
3. production 是否與 repository 中已發布版本一致；
4. 數量、版本、語言、功能及成熟度是否仍由公開證據支持；
5. 是否出現舊 preview、404、過度陳述、私人資料或未發布能力。

不確定的狀態一律保守標示或暫不展示，不以本機 README、draft PR、preview、mock
資料或 CI 通過取代 production 證明。

## English summary

This page is the public evidence index for portfolio copy. A repository, CI
run, preview, or release tag is not production proof by itself. Re-check each
project's repository identity, release, live route, access boundary, and public
claims before editing the homepage; omit or downgrade anything uncertain.
