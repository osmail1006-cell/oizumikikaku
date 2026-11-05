# 大泉企画：Claude Codeの作業指示

## 目的と正本
- 空室清掃・原状回復の公開HPを保守し、管理会社・賃貸オーナーに役立つ記事を週1本更新する。
- 本番：https://oizumikikaku.pages.dev/
- 正本：osmail1006-cell/oizumikikaku の最新 main。古いSites版・古いZIPをmainへ上書きしない。
- 引き継ぎの詳細は CLAUDE_HANDOFF.md。記事運用は BLOG_WORKFLOW.md。
- 毎回の実行指示は prompts/weekly-blog.md。移行時だけ prompts/claude-setup.md を読む。
- 不明点を創作せず「未確認」とする。日本語で簡潔に、検証できた事実と未確認事項を分けて報告する。

## 確定した事業情報
- 屋号：大泉企画。代表者名：大泉 峻平。読み仮名・英字表記は未確認。
- 事業：空室清掃・原状回復。主な相手は管理会社・賃貸オーナー。
- 対応：埼玉県・東京都。その他関東圏は要相談。「神奈川だけ要相談」に戻さない。
- メール：oizumi.kikaku@gmail.com。表示名は「メールアドレス」「メールで相談」。
- 事業者の電話相談カードと番号表示は削除済み。復活させない。
- お客様が入力するフォームの「電話番号（任意）」は保持する。事業者の番号表示と取り違えない。
- 料金・所在地・営業時間・資格・保険・実績・口コミを未確認のまま掲載しない。

## 現在の構成
- 静的HTML/CSS/ブラウザJavaScript。PHP・WordPress・DBは使っていない。
- Node.jsのビルドのみ。依存パッケージのインストールは不要。
- Cloudflare Pages：main、Framework None、build=node scripts/build-cloudflare.mjs、output=public。
- フォームはHP内のHTMLフォーム＋FormSubmit。古いGoogleフォームへの切替えをしない。
- 送信先：FormSubmit経由で上記メール。所有者は有効化・送信テスト完了を報告済み。
- 今回の引き継ぎで新たなフォーム送信・メール受信の確認はしていない。
- public/ は生成物・Git管理対象外。Gitにコミットしない。

## 画像とデザイン
- 白ベース＋深緑 #234f43。スマホの使いやすさを保つ。
- 説明画像の表示ラベルは「イメージ図」。実際の施工実績として扱わない。
- 比較はシンク・室内・浴室の3組。各前後パネルは独立画像を使う。
- 最終適用：kitchen-before-v5 / kitchen-after-v4、room-before-v4 / room-after-v4、bath-before-mild-mold-v6 / bath-after-v4（すべてassets/のPNG）。
- 不自然な模様、隣の画像の混入、極端な汚れ、新品のような仕上がりを再導入しない。
- ブログ更新に無関係なフォーム・連絡先・デザイン・画像を変更しない。

## 記事の編集と公開
1. 作業前に最新mainと blog/posts.json を読む。他人の未コミット変更がある作業場所を使わない。
2. 日本時間の当週（月曜始まり）に新規記事があれば追加しない。公開確認だけ行い、二重投稿を防ぐ。
3. 既存記事と重複しない1課題。結論→具体的な確認事項→注意点→FAQ→問い合わせ導線。
4. 実施していない施工・料金・資格・保険・口コミ・日数や本人の監修を捏造しない。
5. 必要な事実は公式一次資料で確認し、本文にリンクを付ける。危険なDIYや薬剤混合を勧めない。
6. blog/posts.json に slug/title/description/date/body を追加。bodyはHTML、日付は日本時間 YYYY-MM-DD。
7. node scripts/build-blog.mjs と node scripts/build-cloudflare.mjs を実行。
8. JSON、記事、一覧、sitemap.xml、feed.xmlの整合を確認。既存記事の日付だけを更新しない。
9. 対象ファイルだけをコミットし main へ通常pushする。force push、無関係な変更の同梱、保護ルールの回避をしない。
10. mainが変わっていたら最新を読み直して統合。公開URL・一覧・問い合わせリンク・robots/sitemapを確認する。
11. ブランチやPR作成だけ、HTTP 200だけで「公開済み」にしない。新記事の本文が本番に出たことを確認する。
12. 公開不可なら理由・原稿・コミット/PRの有無を報告する。成功と偽らない。

ブログ運用に必要な通常のコミット・mainへの公開は所有者から依頼されている。GitHub/Claude側の認証や権限不足は、所有者に必要な操作だけを具体的に伝える。新しい課金契約や従量課金を勝手に有効化しない。

## 継続運用
- 目標は毎週月曜8:00（Asia/Tokyo）に1本。時刻の厳密な実行保証はしない。
- CLAUDE.mdを置くだけでは定期実行は作られない。Claudeアカウント側で登録・実行テストが必要。
- 1回の更新成功で週次タスクを終了・停止しない。
- 移管時は旧ChatGPTタスクとの重複を避ける。切替状態は CLAUDE_HANDOFF.md を参照。
