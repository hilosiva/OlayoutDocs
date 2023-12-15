---
title: Container
description: A reference page in my new Starlight docs site.
---

`data-container`属性は、Webページやセクションを包む要素に使用します。

Webページ全体のセンタリングや、セクション内のコンテンツのセンタリング、固定幅を設定してコンテンツを右端揃えにするなどに活用してください。

コンテナー内に配置した要素を、コンテナーから飛び出すこともできます。

<table>
 <thead>
   <tr>
      <th>属性値</th>
      <th>説明</th>
      <th>分類</th>
   </tr>
 </thead>
 <tbody>
<tr>
<td>

 `none`
</td>

<td>

左右のオフセット値を `0` にする
</td>
<td rowspan="15">

 オフセット
</td>
</tr>

<tr>
<td>

 `small`
</td>
<td>

左右のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>

<tr>
<td>

 `medium`
</td>
<td>

左右のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `large`
</td>
<td>

左右のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `xlarge`
</td>
<td>

左右のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>
<tr>

<td>

 `l-none`
</td>
<td>

左のオフセット値を `0` にする
</td>
</tr>

<tr>
<td>

 `l-small`
</td>
<td>

左のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `l-medium`
</td>
<td>

左のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `l-large`
</td>
<td>

左のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `l-xlarge`
</td>
<td>

左のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>
<tr>

<td>

 `r-none`
</td>
<td>

右のオフセット値を `0` にする
</td>
</tr>

<tr>
<td>

 `r-small`
</td>
<td>

右のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `r-medium`
</td>
<td>

右のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `r-large`
</td>
<td>

右のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `r-xlarge`
</td>
<td>

右のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>

<tr>
<td>

 `left`
</td>

<td>

最大幅のコンテナーを左に配置する
</td>
<td rowspan="3">

位置
</td>
</tr>

<tr>
<td>

 `center`
</td>
<td>

最大幅のコンテナーをセンタリングする <small>（初期値）</small>
</td>
</tr>

<tr>
<td>

 `right`
</td>
<td>

最大幅のコンテナーを右に配置
</td>
</tr>



</tbody>
</table>

<small>() 内はデフォルト値</small>

オフセットと位置は、半角スペース区切りで組み合わせて利用できます。

---

## 基本的な使い方

Webページやセクションを包む要素に `data-container` 属性を指定しましょう。
それだけで、両サイドに `padding` を使ったオフセット（余白）が指定され（デフォルト： `5vw`  ）、コンテンツがセンタリングされます。


<iframe src="/olayout-docs/demo/container/demo-1.html"></iframe>


```html "data-container"
// index.html
<div data-container>
  ...
</div>
```



### オフセット値

左右のオフセット値（余白量）を切り替えることができます。
デフォルトは、`medium` が設定されています。

 `none` を指定してオフセット値を無くしたり、`large` を指定してオフセット値を大きくしたりできます。

<iframe src="/olayout-docs/demo/container/demo-offset-1.html"></iframe>



```html "data-container="large""
// index.html
<div data-container="large">
  ...
</div>
```

`l-` から始まる値や、`r-` から始まる値を使えば左右で別々のオフセット値を指定することもできます。

これで写真を右端に揃えることだってできますね。


<iframe src="/olayout-docs/demo/container/demo-offset-2.html"></iframe>


```html "l-xlarge" "r-none"
// index.html
<div data-container="l-xlarge r-none">
  ...
</div>
```



### 最大幅の指定

`data-max-width` 属性と組み合わせることで、コンテナーボックスが指定した最大幅以上にはならないように制限することができます。

<iframe src="/olayout-docs/demo/container/demo-max-width-1.html"></iframe>


```html "data-max-width="medium""
// index.html
<div data-container data-max-width="medium">
  ...
</div>
```

`data-max-width` 属性は、`data-container` だけの属性ではないため、このページでの説明を割愛します。
最大幅の詳細は、[data-max-width属性のドキュメント](/olayout-docs/layout/max-width/)を参照してください。



### コンテナーの位置

`data-max-width` 属性と組み合わせたコンテナーが最大幅となった時の、コンテナーの位置を指定できます。デフォルトは `center` でセンタリングされるようになっていますが、`left` や `right` を指定することで**オフセット値をキープしながら**最大幅のコンテナーを右や左に配置できます。

<iframe src="/olayout-docs/demo/container/demo-align-1.html" style="min-height: 400px"></iframe>


```html "right" "left"
// index.html
<div data-container="right" data-max-width="medium">
  ...
</div>
<div data-container="left" data-max-width="medium">
  ...
</div>
```



### コンテナーを飛び越える


コンテナー内に配置した要素であっても、その枠を飛び越えて画面にいっぱいに広げたいこともあります。
そんな時は、コンテナー内に配した要素に `data-over` 属性を利用して、飛び越えたい方向を指定することで、コンテナーを飛び越えることができます。


基本的なコンテンツはコンテナーのオフセット値に合わせて表示したいけど、一部の要素だけコンテナーを飛び越えてウインドウの端っこまでコンテンツを表示させたい時に便利です。

<iframe src="/olayout-docs/demo/container/demo-over-1.html" style="min-height: 600px"></iframe>



```html "data-over="both"" "data-over="left"" "data-over="right""
// index.html
<div data-container>
  ...
  <div data-over="both">
    <img src="..." alt="">
  </div>

  <div data-grid="cols-2" data-gap="3">
    <div data-over="left">
      <img src="..." alt="">
    </div>
    <div>
      ...
    </div>
  </div>

  <div data-grid="cols-2" data-gap="3">
    <div data-over="right" data-order="1">
      <img src="..." alt="">
    </div>
    <div>
      ...
    </div>
  </div>
</div>
```



---

## レスポンシブ対応

各属性の値を指定する前に、ブレイクポイント名と`:`を付けることで、ブレイクポイントごとにスタイルを設定できます。

例えば、スマートフォンでは写真を画面にいっぱいに表示し、PCでは左右にオフセットを付けって表示したいことだってあるでしょう。

そのような、ある一定のブラウザサイズからオフセットが付くような設定も簡単です。

<iframe src="/olayout-docs/demo/container/demo-breakpoint-offset-1.html" style="min-height: 300px"></iframe>



```html "sm:medium"
// index.html
<div data-container="none sm:medium">
  <img src="..." alt="">
</div>
```

コンテナーの飛び越えもブレイクポイントごとに設定できるので、デザインカンプに合わせた柔軟なレイアウトが可能です。


<iframe src="/olayout-docs/demo/container/demo-breakpoint-offset-2.html" style="min-height: 600px"></iframe>


```html "sm:xlarge" "sm:clear" "sm:left" "sm:right"
// index.html
<div data-container="sm:xlarge">
  ...
  <div data-over="both sm:clear">
    <img src="..." alt="">
  </div>

  <div data-grid="cols-1 sm:cols-2" data-gap="2 sm:3">
    <div data-over="both sm:left">
      <img src="..." alt="">
    </div>
    <div>
      ...
    </div>
  </div>

  <div data-grid="cols-1 sm:cols-2" data-gap="2 sm:3">
    <div data-over="both sm:right" data-order="sm:1">
      <img src="..." alt="">
    </div>
    <div>
      ...
    </div>
  </div>
</div>
```

---

## カスタマイズ

オフセット値をカスタマイズすることができます。

### 設定ファイル

PostCSS版のOlayoutの場合は、オフセット値を "olayout.config.cjs" ファイルでカスタマイズできます。

:::caution
CDN版は "olayout.config.cjs" によるカスタマイズは利用できません。
:::

```js [olayout.config.cjs]
// olayout.config.cjs
module.exports = {
  theme: {
   layout: {
      "sm-offset": "1.5vw",
      "md-offset": "8vw",
    },
  },
}
```

### カスタムプロパティ

CDN版を利用されている場合は、`:root` で、オフセットに関するカスタムプロパティを上書きすることでカスタマイズできます。


```css
// style.css

:root {
  --ol-sm-offset: 1.5vw;
  --ol-md-offset: 8vw;
}
```


オフセット値のカスタマイズの詳細は、[レイアウトのカスタマイズに関するドキュメント](/olayout-docs/guides/configuration/#layout)を参照してください。


---

## 特定の箇所だけの値

"olayout.config.cjs" に設定するほどでもない、特定の箇所のみに利用するオフセット値や、vw以外のオフセット値を使う場合は、カスタプロパティを直接上書きすることで対応できます。

| カスタムプロパティ名 | 値  | 説明 |
| -------------------- | --- | ---- |
| `--ol-offset-left` |  px,rem,vw  |   コンテナーの左側のオフセット値   |
| `--ol-offset-right` |   px,rem,vw   |   コンテナーの右側のオフセット値   |


### 手軽に任意の値を使う

手軽な方法は、`style` 属性を使ってカスタムプロパティを上書きすることです。

<iframe src="/olayout-docs/demo/container/demo-custom-offset-1.html"></iframe>


```html "--ol-offset-left" "--ol-offset-right"
// index.html
<div data-container style="--ol-offset-left: 1.5vw; --ol-offset-right: 1.5vw">
  ...
</div>
```

こうすることで、その要素に対して自由なオフセット値を指定できます。
ただし、この方法はブレイクポイントごとにオフセット値を変更することができません。

### ブレイクポイントごとの値

ブレイクポイントごとにオフセット値を変更したい場合は、その要素に`class`属性かカスタムデータ属性を使って任意の値を指定し、そのセレクターに対してCSSファイル内でメディアクエリを利用して変更してください。


<iframe src="/olayout-docs/demo/container/demo-custom-offset-2.html"></iframe>



```html "my-offset"
// index.html
<div data-container="my-offset">
  ...
</div>
```

```css
// style.css
[data-container="my-offset"] {
  --ol-offset-left: 8vw;
  --ol-offset-right: 8vw;
}

@media (--ol-md) {
  [data-container="my-offset"] {
    --ol-offset-left: 4vw;
    --ol-offset-right: 4vw;
  }
}

@media (--ol-lg) {
  [data-container="my-offset"] {
    --ol-offset-left: 2vw;
    --ol-offset-right: 2vw;
  }
}
```
