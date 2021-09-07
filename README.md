# [Dog Gallery](https://dog-gallery-kwtuku.netlify.app/)

[Dog API](https://dog.ceo/dog-api/)から取得した犬の画像を表示するサイトです。

[Reactチュートリアル1：犬画像ギャラリーを作ろう](https://zenn.dev/likr/articles/6be53ca64f29aa035f07)で作成したものを拡張しました。

犬種の選択肢をAPIで取得、useRefを用いてselect要素の選択肢が変更されると画像を取得するAPI呼び出すこと、画像をクリックするとモーダルを表示することができるようにしました。

モーダルに表示される画像はアスペクト比によってスタイルを変更し、どんなアスペクト比の画像でもうまく画面内に収まるようになっています。

サイトのURLはこちらです。

https://dog-gallery-kwtuku.netlify.app/

# 使用技術

## 開発環境

* Windows 10 Home

* Docker

* Docker Compose

## フロントエンド

* HTML

* Bulma

* JavaScript

* Node.js 16.6.0

* React 17.0.2

## インフラストラクチャ

* Netlify
