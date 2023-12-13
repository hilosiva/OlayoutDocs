---
title: Flex
description: A reference page in my new Starlight docs site.
---

`data-flex` 属性を使うことでフレックスボックスを用いたレイアウトが使えます。


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

`block`
</td>
<td>

ブロックレベルのフレックスコンテナーにする <small>（初期値）</small>
</td>
<td rowspan="3">

表示
</td>
</tr>
<tr>

<td>

 `inline`
</td>
<td>

インラインレベルのフレックスコンテナーにする
</td>
</tr>



<tr>

<td>

 `unset`
</td>
<td>

フレックスコンテナーをなくす
</td>
</tr>

<tr>

<td>

 `nowrap`
</td>
<td>

フレックスアイテムを折り返さない
</td>
<td rowspan="2">

折り返し
</td>

</tr>

<tr>
<td>

 `wrap`
</td>
<td>

フレックスアイテムを折り返す <small>（初期値）</small>
</td>
</tr>

<tr>
<td>

 `row	`
</td>
<td>

横方向に順番に並ぶ <small>（初期値）</small>
</td>
<td rowspan="4">

方向
</td>
</tr>

<tr>
<td>

 `row-reverse`
</td>
<td>

横方向に逆順で並ぶ
</td>
</tr>

<tr>
<td>

 `col`
</td>
<td>

縦方向に順番で並ぶ
</td>
</tr>

<tr>
<td>

 `col-reverse`
</td>
<td>

縦方向に逆順で並ぶ
</td>
</tr>

</tbody>
</table>


「表示」、「折り返し」、「方向」は半角スペース区切りで組み合わせて利用できます。

---

## 基本的な使い方


`data-flex` 属性を指定すると、子要素たち（フレックスアイテム）が横に並びます。


<iframe src="/olayout-docs/demo/flex/demo-1.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "data-flex"
// index.html
<div data-flex>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```


### 表示
`data-flex`属性はデフォルトでブロックレベルのフレックスコンテナーになりますが、`inline` を指定してインラインレベルのフレックスコンテナーにしたり、`unset` を指定してフレックスコンテナーでなくすこともできます。


<iframe src="/olayout-docs/demo/flex/demo-display-1.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "inline"
// index.html
<div data-flex="inline">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```


### 間隔

`data-gap` 属性と組み合わせることで、各アイテム感の間隔を指定できます。


<iframe src="/olayout-docs/demo/flex/demo-gap-1.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "data-gap="2""
// index.html
<div data-flex data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

`data-gap` 属性は、フレックスコンテナーだけの属性ではないため、このページでの説明を割愛します。
間隔の詳細は、[data-gap属性のドキュメント](/olayout-docs/layout/gap/)を参照してください。

### 折り返し

`data-flex`属性を指定するとデフォルトで折り返す設定（`wrap`）になっていますが、
`nowrap` を指定することで、折り返さずコンテナーをはみ出すようにもできます。


<iframe src="/olayout-docs/demo/flex/demo-flow-1.html" style="min-height: 8rem; height: 8rem"></iframe>



```html "nowrap"
// index.html
<div data-flex="nowrap" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

### 方向
フレックスアイテムはデフォルトで横並び（ `row` ）になりますが、`col` で縦方向に並べたり、`row-reverse` で逆順にすることもできます。


<iframe src="/olayout-docs/demo/flex/demo-flow-2.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "row-reverse"
// index.html
<div data-flex="row-reverse" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```




### 位置

`data-place`属性と組み合わせることで、自由にフレックスアイテムの位置を設定できます。


<iframe src="/olayout-docs/demo/flex/demo-place-1.html" style="min-height: 8rem; height: 10rem"></iframe>


```html "data-place="end middle""
// index/html
<div data-flex data-place="end middle" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

`data-place` 属性は、フレックスコンテナーだけの属性ではないため、このページでの説明を割愛します。
順番の詳細は、[data-place属性のドキュメント](/olayout-docs/layout/place/)を参照してください。


---

## レスポンシブ対応

各属性の値を指定する前に、ブレイクポイント名と:を付けることで、ブレイクポイントごとにスタイルを設定できます。

例えば、スマートフォンでは縦にアイテムを並べて、PCでは横に並べるということもあるでしょう。

そのような、ある一定のブラウザサイズからフレックスアイテムの方向が変わるような設定も簡単です。



<iframe src="/olayout-docs/demo/flex/demo-breakpoint-flow-1.html" style="min-height: 8rem; height: 10rem"></iframe>


```html "sm:row"
// index/html
<div data-flex="col sm:row" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```
