---
title: Flexbox
description: A reference page in my new Starlight docs site.
---

Flexboxを用いたレイアウト用の属性です。
`data-flex` 属性か、`data-display="flex"` 属性を使うとフレックスボックスを利用できます。

`data-flex` 属性は**ブレイクポイントごとにflexの有無を切り替えることはできない** ため、ブレイクポイントを利用して flex の有無を切り替える場合は、`data-display` 属性を利用してください。

`data-display` 属性の詳細については、[data-display属性のドキュメント](/olayout-docs/layout/display/)を参照してください。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-flex` | - | フレックスボックスにする |



`data-flex` 属性または、`data-display="flex"` 属性を使うと、子要素たちが横に並びます。

<iframe src="/olayout-docs/demo/flex/demo-1.html" style="min-height: auto; height: 8rem"></iframe>


```html "data-flex"
// index.html
<div data-flex>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

`data-gap`属性と合わせることで、各アイテム感の余白を指定できます。

<iframe src="/olayout-docs/demo/flex/demo-2.html" style="min-height: auto; height: 8rem"></iframe>


```html "data-gap="2""
// index.html
<div data-flex data-gap="2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```



## 折返しと方向
`data-flow`属性で、折返しや方向の設定ができます。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-flow` | `nowrap` | flexアイテムを折り返さない |
| `data-flow` | `wrap` |  flexアイテムを折り返す |
| `data-flow` | `row` | 横方向に順番に並ぶ |
| `data-flow` | `reverse` |  横方向に逆順で並ぶ |
| `data-flow` | `column` |  縦方向に順番に並ぶ |



```html [上下と左右のmargin]
<div data-flex data-flow="wrap column lg:row">
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
</div>
```

## Alignment

`data-align`属性で、フレックスアイテムの位置を設定できます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-align` | `start` | 左揃え |
| `data-align` | `center` |  水平中央揃え |
| `data-align` | `end` |  右揃え |
| `data-align` | `justify` |  均等揃え |
| `data-align` | `top` |  上揃え |
| `data-align` | `middle` |  垂直中央揃え |
| `data-align` | `bottom` |  下揃え |


```html [上下と左右のmargin]
<div data-flex data-align="center min:middle lg:end">
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
</div>
```

## Gap

`data-gap`属性で、フレックスアイテムの間隔を設定できます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-gap` | `ブレイクポイント名:倍数` | 各アイテムの上下左右の間隔を設定 |
| `data-gap-y` | `ブレイクポイント名:倍数` | 各アイテムの上下の間隔を設定 |
| `data-gap-x` | `ブレイクポイント名:倍数` | 各アイテムの左右の間隔を設定 |



```html [上下と左右のmargin]
<div data-flex data-gap="4 min:6 lg:8">
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
</div>
```


## Glow


## shilink


## order
