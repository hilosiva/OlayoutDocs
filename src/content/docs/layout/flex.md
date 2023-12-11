---
title: Flexbox
description: A reference page in my new Starlight docs site.
---

Flexboxを用いたレイアウトに使用します。
`data-flex` 属性か、`data-display="flex"` 属性を使うことでフレックスボックスを利用できます。

`data-flex` 属性は**ブレイクポイントごとにflexの有無を切り替えることはできない** ため、ブレイクポイントを利用して flex の有無を切り替える場合は、`data-display` 属性を利用してください。

`data-display` 属性の詳細については、[data-display属性のドキュメント](/olayout-docs/layout/display/)を参照してください。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-flex` | - | フレックスボックスにする |


---

## 基本的な使い方


`data-flex` 属性または、`data-display="flex"` 属性を使うと、子要素たちが横に並びます。

<iframe src="/olayout-docs/demo/flex/demo-1.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "data-flex"
// index.html
<div data-flex>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

### 間隔

`data-gap` 属性と組み合わせることで、各アイテム感の間隔を指定できます。


<iframe src="/olayout-docs/demo/flex/demo-2.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "data-gap="2""
// index.html
<div data-flex data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

間隔の詳細は、[data-gap属性のドキュメント](/olayout-docs/layout/gap/)を参照してください。



### 折返しと方向

`data-flow`属性で、折返しや方向の設定ができます。





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
<td rowspan="6">

`data-flow`
</td>
<td>

 `nowrap`
</td>
<td>

flexアイテムを折り返さない
</td>
</tr>

<tr>
<td>

 `wrap`
</td>
<td>

flexアイテムを折り返す <small>（`data-flex`属性では、初期値）</small>
</td>
</tr>

<tr>
<td>

 `row	`
</td>
<td>

横方向に順番に並ぶ <small>（初期値）</small>
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

縦方向に順番に並ぶ
</td>
</tr>

<tr>
<td>

 `col-reverse`
</td>
<td>

縦方向に逆順に並ぶ
</td>
</tr>

</tbody>
</table>

`data-flex` 属性を使っている場合は、フレックスアイテムがデフォルトで折り返す設定（`wrap`）になっています。
`nowrap` を指定することで、折り返さずコンテナーをはみ出すようにできます。

:::note
`data-display` 属性で `flex` を指定した場合は、デフォルトが `nowrap` です。
:::

<iframe src="/olayout-docs/demo/flex/demo-flow-1.html" style="min-height: 8rem; height: 8rem"></iframe>



```html "data-flow="nowrap""
// index.html
<div data-flex data-flow="nowrap" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

フレックスアイテムを `col` で縦方向に並べたり、`row-reverse` で逆順にすることもできます。

<iframe src="/olayout-docs/demo/flex/demo-flow-2.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "row-reverse"
// index.html
<div data-flex data-flow="row-reverse" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

折返しと方向の値は、それぞれを半角スペース区切りで組み合わせて指定できます。

<iframe src="/olayout-docs/demo/flex/demo-flow-3.html" style="min-height: 8rem; height: 8rem"></iframe>


```html "nowrap row-reverse"
// index.html
<div data-flex data-flow="nowrap row-reverse" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```


### 位置

`data-place`属性と組み合わせることで、自由にフレックスアイテムの位置を設定できます。


<iframe src="/olayout-docs/demo/flex/demo-place-1.html" style="min-height: 8rem; height: 10rem"></iframe>


```html "data-align="end middle""
// index/html
<div data-flex data-align="end middle" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

位置指定の詳細は、[data-place属性のドキュメント](/olayout-docs/layout/place/)を参照してください。


---

## レスポンシブ対応

各属性の値を指定する前に、ブレイクポイント名と:を付けることで、ブレイクポイントごとにスタイルを設定できます。

例えば、スマートフォンでは縦にアイテムを並べて、PCでは横に並べるということもあるでしょう。

そのような、ある一定のブラウザサイズからフレックスアイテムの方向が変わるような設定も簡単です。



<iframe src="/olayout-docs/demo/flex/demo-breakpoint-flow-1.html" style="min-height: 8rem; height: 10rem"></iframe>


```html "sm:row"
// index/html
<div data-flex data-flow="col sm:row" data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```
