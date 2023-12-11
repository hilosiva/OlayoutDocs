---
title: Container
description: A reference page in my new Starlight docs site.
---

Webページやセクションを包む要素に使用します。

Webページ全体のセンタリングや、セクション内のコンテンツのセンタリング、固定幅を設定してコンテンツを右端揃えにするなどに活用してください。

<table>
 <thead>
   <tr>
      <th>属性名</th>
      <th>属性値</th>
      <th>説明</th>
   </tr>
 </thead>
 <tbody>
<tr>
<td rowspan="3">

`data-container`
</td>
<td>

 `left`
</td>
<td>

最大幅のコンテナーを左に配置する
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

---

## 基本的な使い方

`data-container` 属性を指定すると両サイドに `padding` を使ったオフセット（余白）が指定され（デフォルト： `5vw`  ）、コンテンツがセンタリングされます。




<iframe src="/olayout-docs/demo/container/demo-1.html"></iframe>


```html "data-container"
// index.html
<div data-container>
  ...
</div>
```

### 最大幅の指定

 `data-max-width` 属性と組み合わせることで、コンテナーボックスが指定した最大幅以上にはならないように制限することができます。

<iframe src="/olayout-docs/demo/container/demo-2.html"></iframe>


```html "data-max-width="medium""
// index.html
<div data-container data-max-width="medium">
  ...
</div>
```


最大幅については、[data-max-width属性のドキュメント](/olayout-docs/layout/max-width/)を参照してください。



### コンテナーの位置

`data-max-width` 属性と組み合わせたコンテナーが最大幅となった時の、コンテナーの位置を指定するには、`data-container` 属性に位置を表す値を指定してください。デフォルトではセンタリングされるようになっていますが、これにより**オフセット値をキープしながら**最大幅のコンテナーを右や左に配置できます。

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



### オフセット

`data-offset` 属性を使って、左右のオフセット値（余白量）を切り替えることができます。
デフォルトは、`medium` が設定されています。


<table>
 <thead>
   <tr>
      <th>属性名</th>
      <th>属性値</th>
      <th>説明</th>
   </tr>
 </thead>
 <tbody>
<tr>
<td rowspan="5">

`data-offset`
</td>
<td>

 `none`
</td>
<td>

左右のオフセット値を `0` にする
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
<td rowspan="5">

`data-offset-left`
</td>
<td>

 `none`
</td>
<td>

左のオフセット値を `0` にする
</td>
</tr>

<tr>
<td>

 `small`
</td>
<td>

左のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `medium`
</td>
<td>

左のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `large`
</td>
<td>

左のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `xlarge`
</td>
<td>

左のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>
<tr>
<td rowspan="5">

`data-offset-right`
</td>
<td>

 `none`
</td>
<td>

右のオフセット値を `0` にする
</td>
</tr>

<tr>
<td>

 `small`
</td>
<td>

右のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `medium`
</td>
<td>

右のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `large`
</td>
<td>

右のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `xlarge`
</td>
<td>

右のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>


</tbody>
</table>

<small>() 内はデフォルト値</small>

オフセット値を切り替えたい時や、左右で別々のオフセット値を設定したい時に利用できます。

<iframe src="/olayout-docs/demo/container/demo-offset-1.html"></iframe>



```html "data-offset="large""
// index.html
<div data-container data-offset="large">
  ...
</div>
```

左右で別々のオフセット値を指定することもできます。

これで写真を右端に揃えることだってできますね。


<iframe src="/olayout-docs/demo/container/demo-offset-2.html"></iframe>


```html "data-offset-left="xlarge"" "data-offset-right="none""
// index.html
<div data-container data-offset-left="xlarge" data-offset-right="none">
  ...
</div>
```



### コンテナーを飛び越える


コンテナー内に配置した要素であっても、その枠を飛び越えて画面にいっぱいに広げたいこともあります。
そんな時は、`data-over` 属性を利用することで、コンテナーを飛び越えて配置することができます。


<table>
 <thead>
   <tr>
      <th>属性名</th>
      <th>属性値</th>
      <th>説明</th>
   </tr>
 </thead>
 <tbody>
<tr>
<td rowspan="4">

`data-over`
</td>
<td>

 `left`
</td>
<td>

左側のコンテナーを飛び越える
</td>
</tr>

<tr>
<td>

 `right`
</td>
<td>

右側のコンテナーを飛び越える
</td>
</tr>

<tr>
<td>

 `both`
</td>
<td>

両側のコンテナーを飛び越える
</td>
</tr>


<tr>
<td>

 `clear`
</td>
<td>

飛び越えを解除
</td>
</tr>

</tbody>
</table>

基本的なコンテンツはコンテナーのオフセット値に合わせて表示したいけど、一部の要素だけコンテナーを飛び越えてウインドウの端っこまでコンテンツを表示させたい時に便利です。

<iframe src="/olayout-docs/demo/container/demo-over-1.html" style="min-height: 600px"></iframe>



```html "data-over="both"" "data-over="left"" "data-over="right""
// index.html
<div data-container>
  ...
  <div data-over="both">
    <img src="..." alt="">
  </div>

  <div data-grid data-cols="2" data-gap="3">
    <div data-over="left">
      <img src="..." alt="">
    </div>
    <div>
      ...
    </div>
  </div>

  <div data-grid data-cols="2" data-gap="3">
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
<div data-container data-offset="none sm:medium">
  <img src="..." alt="">
</div>
```

コンテナーの飛び越えもブレイクポイントごとに設定できるので、デザインカンプに合わせた柔軟なレイアウトが可能です。


<iframe src="/olayout-docs/demo/container/demo-breakpoint-offset-2.html" style="min-height: 600px"></iframe>


```html "sm:xlarge" "sm:clear" "sm:left" "sm:right"
// index.html
<div data-container data-offset="sm:xlarge">
  ...
  <div data-over="both sm:clear">
    <img src="..." alt="">
  </div>

  <div data-grid data-cols="1 sm:2" data-gap="2 sm:3">
    <div data-over="both sm:left">
      <img src="..." alt="">
    </div>
    <div>
      ...
    </div>
  </div>

  <div data-grid data-cols="1 sm:2" data-gap="2 sm:3">
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

`data-container`属性と、`data-offset` 属性のオフセット値をカスタマイズすることができます。

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


## 特定の箇所だけの値

"olayout.config.cjs" に設定するほどでもない、特定の箇所のみに利用するオフセット値や、vw以外のオフセット値を使う場合は、カスタプロパティを直接上書きすることで対応できます。

| カスタムプロパティ名 | 値  | 説明 |
| -------------------- | --- | ---- |
| `--ol-container-left-offset` |  px,rem,vw,% など  |   コンテナーの左側のオフセット値   |
| `--ol-container-right-offset` |   px,rem,vw,% など   |   コンテナーの右側のオフセット値   |


### 手軽に任意の値を使う

手軽な方法は、`style` 属性を使ってカスタムプロパティを上書きすることです。

<iframe src="/olayout-docs/demo/container/demo-custom-offset-1.html"></iframe>


```html "--ol-container-left-offset" "--ol-container-right-offset"
// index.html
<div data-container style="--ol-container-left-offset: 1.5vw; --ol-container-right-offset: 1.5vw">
  ...
</div>
```

こうすることで、その要素に対して自由なオフセット値を指定できます。
ただし、この方法はブレイクポイントごとにオフセット値を変更することができません。

### ブレイクポイントごとの値

ブレイクポイントごとにオフセット値を変更したい場合は、その要素に`class`属性かカスタデータ属性を使って任意の値を指定し、そのセレクターに対してCSSファイル内でメディアクエリを利用して変更してください。


<iframe src="/olayout-docs/demo/container/demo-custom-offset-2.html"></iframe>



```html "data-offset="my-offset""
// index.html
<div data-container data-offset="my-offset">
  ...
</div>
```

```css
// style.css
[data-offset="my-offset"] {
  --ol-container-left-offset: 8vw;
  --ol-container-right-offset: 8vw;
}

@media (--ol-md) {
  [data-offset="my-offset"] {
    --ol-container-left-offset: 4vw;
    --ol-container-right-offset: 4vw;
  }
}

@media (--ol-lg) {
  [data-offset="my-offset"] {
    --ol-container-left-offset: 2vw;
    --ol-container-right-offset: 2vw;
  }
}
```
