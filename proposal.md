# 🌌 Mission: Ultra-Modern & Universal Portfolio Deployment Protocol

## 🎯 Objective
[GitHub Pages](https://github.com/yamariu/yamariu.github.io) 上で「自己（yamariu）」を定義せよ。圧倒的な視覚的インパクトと、UD（ユニバーサルデザイン）および WCAG 準拠の直感的な UX を備えた、訪問者が「yamariu とは何者か」を瞬時に理解できるポートフォリオサイトを構築せよ。

## 🛠️ Tech Stack (Core Arsenal)
- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite (Lightning speed)
- **Styling**: Vanilla CSS (Custom Properties / Glassmorphism / CSS Art)
- **Animation**: Framer Motion (For geometric background & transitions)
- **Deployment**: GitHub Actions (Auto-deploy to GH Pages)

## 🎨 Design System & Aesthetics (Universal & Modern)
- **Theme**: High-Contrast Modern Minimalism.
- **Visual Strategy**: 明るめのトーンを基調とし、WCAG 2.1 Level AA 以上のコントラスト比を確保。
- **Color Palette**: 
    - **Background**: `#FFFFFF` (Pure White)
    - **Primary Text**: `#000000` (Solid Black) - 重要な要素には極太（Bold/Black）のウェイトを適用。
    - **Accent**: ハイコントラストを阻害しない明瞭なアクセントカラー。
- **Typography**: 
    - **Font**: BIZ UDPGothic または Noto Sans JP 等の UD（ユニバーサルデザイン）フォントを最優先。
    - **Weight**: 視認性向上のため、可能な限り太字（Bold）を活用したタイポグラフィ構成。
- **Effects**: 
    - **Background**: 背景に淡く光る幾何学模様（Geometric Patterns）を配置。Framer Motion 等を用いて常に緩やかに変形・動的に変化させ、サイトに「生命感」を与える。
    - **Interactions**: 微細なスクロールアニメーションと、ホバー時の明快なフィードバック。

## 🏗️ Architecture (Structure)
1. **Hero Section**: 
    - 簡潔かつ強力なステートメント（yamariu のアイデンティティ）。
    - 動的な幾何学模様背景との統合。
2. **About Section (Core Focus)**:
    - 経歴、スキル、ビジョンをセマンティックに記述。
    - 「Sentinel Protocol」に基づいた技術スタックの可視化。
3. **Project/Archive**:
    - カード形式のレイアウト。高コントラストな境界線またはシャドウで視認性を確保。
4. **Contact**:
    - シンプルなメールリンクまたは SNS 統合。

## 🚀 Execution Steps (RPA Cycle)
### Phase 1: Research & Setup (✅ Done)
- [x] Vite プロジェクトの初期化 (`npm create vite@latest . -- --template react-ts`)。
- [x] 依存関係（`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge` ※ロジック用）の選定・導入。

### Phase 2: Design & Implementation (✅ Done)
- [x] `index.css` への UD 基準のデザインシステム定義（CSS変数）。
- [x] 動的幾何学模様コンポーネントの作成。
- [x] コンポーネントの開発およびページ構築（Hero, About, Project等）。

### Phase 3: Validation & Deploy (✅ Done)
- [x] アクセシビリティ・チェック（Lighthouse Accessibility 100 追求）。
- [x] レスポンシブ対応の徹底検証。
- [x] GitHub Actions のワークフロー設定 (`.github/workflows/deploy.yml`)。

## ⚠️ Constraints
- 余計なユーティリティライブラリ（Tailwind CSS 本体等）の使用を控え、CSS変数を駆使して軽量化と高制御を実現せよ。
- **WCAG / UD Principle**: 誰一人取り残さないアクセシビリティをコードの根幹に据えよ。
- **三徳（Laziness, Impatience, Hubris）**: 最短・最高効率・最高品質で実装を完了せよ。

## 📝 Section Feedback / Request (DOM 階層ごとの要望表)
現在の出力構成（App.tsx -> index.html）に基づき、各階層ごとの要望を以下に追記されたし。

### 0. 🌐 Global / Background (`<GeometricBackground />`)
<!-- サイト全体の背景アニメーション、オーバーレイ、ベースカラーなどに関する要望 -->
- ✅ 背景にうっすら幾何学模様が変動し続けるアニメーションを追加（色は薄い虹色）。
- ✅ 全体的に日本語表記に変更。
- ✅ 「Personal identity（自己紹介）」セクション（経歴・趣味・人間性）を About 配下へ追加。
- 

### 1. 🦸‍♂️ Hero Section (`<Hero />`)
<!-- ファーストビュー、「YAMARIU」タイポグラフィ、キャッチコピーに関する要望 -->
- ✅ widthをmainの分フルに使い、YAMARIUが折りたたまれないように修正（`whiteSpace: nowrap`）。
- 

### 2. 🎯 About / Mission Section (`<About />`)
<!-- Sentinel Protocol や Tech Arsenal などのスキル・ビジョン記述に関する要望 -->
- 

### 3. 🗂️ Projects Section (`<Projects />`)
<!-- アーカイブ（実績カード）、外部リンク、ホバー時の挙動などに関する要望 -->
- 

### 4. 🦶 Footer (`<Footer />`)
<!-- 連絡先、SNSリンク、著作権表示などのフッター要素に関する要望 -->
- ✅ Osaka, Japan - Sector 01 から Sector 01 を削除。
- ✅ 地図記号をクリックで大阪の名所を Google Map 検索で開くリンクに変更。
- ✅ メール記号を削除し、[個人サイト](https://wappa88jp.sakura.ne.jp/) への Globe アイコンリンクに変更。
- ✅ X (旧Twitter: https://x.com/RyutaroYam29184) への SVG リンクを追加。
- 