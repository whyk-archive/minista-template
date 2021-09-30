# minista template
ministaを利用して開発しております。

## コマンドについて
### 開発
開発時に利用するコマンドです。ライブリロードに対応しております。
``` bash
npm run dev
```

### 出力
整った形のHTMLやCSSを出力します。
``` bash
npm run build
```

### Imageコンポーネントの型付け更新
ImageコンポーネントのPropsのpathには画像名を指定でき、それはPathという型エイリアスで補完されます。  
しかし、画像を追加削減してもPathに内包される画像名は変わらないため、以下コマンドで更新する必要があります。
``` bash
npm run gen:imagePath
```
なお、その関係で`src/components/util/imagePath.ts`は全体が書き換えられるため、このファイルに別のプログラムを書くことは不可能です。

## ディレクトリ構成
``` bash
.
├── README.md
├── dist // npm run buildの出力先（PRを出す前に追加する予定です）
│   ├── assets // CSSやJS、画像の出力先
│   └── index.html // TSXの出力後ファイル
├── package-lock.json
├── package.json
├── public
│   └── assets // 画像の格納場所
├── src
│   ├── assets // SCSSやTSの格納場所
│   ├── components
│   │   ├── atoms // 他のコンポーネントに依存がないコンポーネント
│   │   └── organisms // 他のコンポーネントに依存があるコンポーネント
│   └── pages // 各ページのTSXファイル
├── tsconfig.json
└── webpack.config.js
```
