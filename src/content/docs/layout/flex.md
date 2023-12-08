---
title: flex
description: A reference page in my new Starlight docs site.
---

Flexboxを用いたレイアウト用属性。
`data-flex` を使うか、`data-display="flex"` を使ってフレックスボックスを利用できます。


```html
<div data-flex>
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
  <div data-flex-item>...</div>
</div>
```


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-flex` | - | フレックスボックスにする |

※. `data-flex` 属性はブレイクポイントによっての切り替えは出来ません。ブレイクポイントを利用して、flexを有無を切り替える場合は、`data-display="flex"` 属性を利用してください。


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
