# Cloudflare Pagesへの移行

## 準備済み

- コード：osmail1006-cell/oizumikikaku の main ブランチ。
- ビルド：scripts/build-cloudflare.mjs が公開用ファイルだけを public/ に用意します。
- 対象：index.html、styles.css、app.js、thanks.html、assets/。
- フォーム送信先：oizumi.kikaku@gmail.com（FormSubmit経由）。
- 送信後の戻り先：閲覧中の公開URLから自動設定するため、Cloudflareでも thanks.html に戻れます。
- GitHub Pages固定のcanonical指定は解除済み。Cloudflareの正式URLが確定したらcanonicalを設定してください。

## Cloudflareで必要な操作

1. https://dash.cloudflare.com/ にログインします。
2. Workers & Pages → Create application → Pages → Import an existing Git repository を選びます。
3. GitHubを連携し、対象リポジトリ osmail1006-cell/oizumikikaku を選択します。
4. 以下の設定でデプロイします。

| 項目 | 値 |
|---|---|
| Framework preset | None |
| Production branch | main |
| Root directory | 未指定（リポジトリのルート） |
| Build command | node scripts/build-cloudflare.mjs |
| Build output directory | public |
| Environment variables | 追加不要 |

無料のPagesプロジェクトとして作成します。独自ドメインは不要です。

## デプロイ後の確認

Cloudflareが表示する実際の *.pages.dev URLを開き、トップページ、画像、問い合わせフォーム、thanks.html を確認してください。
FormSubmitは公開先が変わると再確認が求められる場合があります。必要な認証を所有者が完了し、テスト送信とメール受信を確認してください。
Cloudflare公開とフォームの確認が済むまでは、既存のGitHub Pagesを停止しないでください。正式URL確定後、canonicalと旧URLからの案内を整えます。

## 現在の状態

Cloudflareへのログイン・GitHub連携・Pagesプロジェクト作成は未実施です。Cloudflareアカウントの接続および操作できるブラウザがないため、エージェントは公開URLを発行していません。

公式資料：
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/get-started/git-integration/
