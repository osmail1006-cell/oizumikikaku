# 大泉企画 ホームページ

空室清掃・原状回復。埼玉県・東京都、その他関東圏は要相談。
屋号：大泉企画。代表者：大泉 峻平。

## 公開先
- 正式HP：https://oizumikikaku.pages.dev/
- フォーム：https://oizumikikaku.pages.dev/#inquiry
- コラム：https://oizumikikaku.pages.dev/blog/
- メール：oizumi.kikaku@gmail.com

GitHub mainがソース、Cloudflare Pagesが本番公開先です。独自ドメインは必須ではありません。
旧GitHub Pagesの停止・転送は未確認です。

## Claude Codeで引き継ぐ
CLAUDE.md、CLAUDE_HANDOFF.md、prompts/claude-setup.mdを読んでください。
ブログの実行指示はprompts/weekly-blog.md。週次登録はClaudeアカウント側で別途必要です。ファイルを置くだけでは自動実行されません。

## ビルド

    node scripts/build-cloudflare.mjs

追加パッケージは不要。公開ディレクトリはpublic/です。public/はGit管理対象外。
設定の詳細はCLOUDFLARE_PAGES.md、記事編集はBLOG_WORKFLOW.mdを参照。

## 問い合わせ
HP内のHTMLフォームからFormSubmit経由で上記メールへ送信します。
所有者は初回有効化・送信テストの完了を報告済みです。今回新たな送信・受信確認はしていません。
reCAPTCHA既定動作とハニーポットあり。送信後の戻り先はapp.jsで現在のホストから設定します。
必須：氏名、メール、相談区分、物件エリア、相談内容、個人情報の取り扱いへの同意。
任意：会社名、お客様の電話番号、所在地・物件名、間取り・広さ、希望日。
入力内容を公開GitHubやHPへ保存する仕組みにはしていません。
事業者の電話相談表示は削除済みです。お客様用の任意電話入力とは区別してください。

## 掲載画像
掲載画像は説明用のイメージ図です。実際の施工記録として扱わないでください。
最終適用画像と文章の経緯はCLAUDE_HANDOFF.mdに記載しています。

## 送信仕様の資料
https://formsubmit.co/documentation
https://formsubmit.co/help
