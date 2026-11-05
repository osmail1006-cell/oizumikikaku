# 大泉企画HPをClaude Codeへ引き継ぐ

2026-11-05作成。公開HPを引っ越す必要はありません。Cloudflare PagesとGitHubを使い続け、運用するAIをClaude Codeに切り替えます。

## 現在の切り替え状況
- ChatGPT側の「大泉企画のブログ更新」は移管に伴い停止済み。
- Claude側のログイン・GitHub連携状況は、この作業では未確認。週次タスク登録・初回実行テストは今回実施していない。
- ファイルをGitHubに追加しただけではClaudeの自動更新は起動していません。
- 最新確認時の記事データは1本。自動更新で記事が増えたという実績は確認できていません。

## Claude Codeへ最初に貼る文章

    https://github.com/osmail1006-cell/oizumikikaku のHPとブログ運用を引き継いでください。
    必要なら空の新規フォルダへcloneし、最新mainのCLAUDE.mdとCLAUDE_HANDOFF.mdを読んでください。
    prompts/claude-setup.mdに従い、毎週月曜8:00（Asia/Tokyo）のクラウド定期タスクを設定してください。
    prompts/weekly-blog.mdを実行指示とし、記事作成からmainへの通常push、Cloudflare本番の公開確認まで行ってください。
    まず1回テストし、登録済み・実行済み・公開済みを分けて報告してください。
    追加の課金契約や従量課金は有効にしないでください。

既にそのリポジトリをClaude Codeで開いている場合は、cloneは不要です。
ログインやGitHubの権限許可を求められたら、その画面で所有者が操作してください。トークンやパスワードを文書やGitへ貼らないでください。

## 登録する内容
- 名前：大泉企画のブログ更新
- 対象：osmail1006-cell/oizumikikaku の最新main
- 日時：毎週月曜日8:00・Asia/Tokyo
- 実行指示：prompts/weekly-blog.md
- 公開先：https://oizumikikaku.pages.dev/blog/
- 成功条件：記事のコミットだけでなく、本番に新しい本文が表示されること

利用できるCLIでは /schedule、ブラウザでは https://claude.ai/code/routines から設定します。
クラウド定期タスクはPC停止中にも動きます。利用できるプラン・使用枠・機能はClaudeアカウントで確認してください。
CLI内の /loop は長期運用の代用にしません。
Claudeのクラウド作業がclaude/ブランチへのpushで終わらず、許可されたmainへ反映できることをテストしてください。
権限やブランチ保護が妨げる場合は回避せず、その必要な設定を所有者へ具体的に案内します。

## 詳細
- CLAUDE.md：毎回のプロジェクト指示
- CLAUDE_HANDOFF.md：目的、決定事項、画像、フォーム、未完了タスク
- BLOG_WORKFLOW.md：記事のデータと公開手順
- prompts/weekly-blog.md：週次実行プロンプト
- prompts/claude-setup.md：初回設定の指示全文

## 根拠
- サイト構成・記事：同じリポジトリの最新コード
- Claudeの定期実行：https://code.claude.com/docs/en/routines
- Claudeのプロジェクト指示：https://code.claude.com/docs/en/memory
