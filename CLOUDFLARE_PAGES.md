# Cloudflare Pagesの公開設定

更新日：2026-11-05。
本番は https://oizumikikaku.pages.dev/ で公開済みです。未公開の準備段階ではありません。

| 項目 | 設定 |
|---|---|
| リポジトリ | osmail1006-cell/oizumikikaku |
| Production branch | main |
| Framework preset | None |
| Root directory | 未指定・リポジトリ直下 |
| Build command | node scripts/build-cloudflare.mjs |
| Build output directory | public |
| 追加の環境変数 | 現構成では不要 |

mainへの変更がCloudflareで自動ビルド・公開されます。
ビルド時にブログ、一覧、sitemap.xml、feed.xmlを生成し、公開用ファイルをpublic/へコピーします。
PHP・WordPress・DBは使っていません。Node.jsはビルド用です。public/はコミットしません。

## デプロイ後の確認
- 更新したページの本文が本番に現れていること。
- 画像、主要ナビゲーション、コラム一覧、問い合わせへのリンク。
- canonicalがCloudflareの正式URLを指すこと。
- sitemap.xml、robots.txt、必要に応じfeed.xml。
- thanks.htmlはCloudflareで/thanksへ転送されることがある。

問い合わせはFormSubmit経由です。app.jsが閲覧中のホストから戻り先を設定します。
所有者から有効化・送信テスト完了の報告があります。ブログ更新時に実送信テストは行いません。
旧GitHub Pagesの停止・転送は未確認です。別の運用AIへ移ってもCloudflareの公開先を変える必要はありません。

## 公式資料
https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
https://developers.cloudflare.com/pages/get-started/git-integration/
