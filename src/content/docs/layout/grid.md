---
title: grid
description: A reference page in my new Starlight docs site.
---

Gridを用いたレイアウト用属性。
`data-grid` を使うか、`data-display="grid"` を使ってフレックスボックスを利用できます。

```html
<div data-grid>
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
</div>
```



| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-grid` | - | グリッドシステムを利用する |

※. `data-grid` 属性はブレイクポイントによっての切り替えは出来ません。ブレイクポイントを利用して、flexを有無を切り替える場合は、`data-display="grid"` 属性を利用してください。



## Columns
`data-cols`属性で、列数の設定ができます。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-cols` | `列数（12まで）` | 列数を設定 |




```html [上下と左右のmargin]
<div data-grid data-cols="1 md:2 lg:3 xl:4">
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
</div>
```

## Rows
`data-rows`属性で、行数の設定ができます。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-rows` | `列数（6まで）` | 行数を設定 |




```html [上下と左右のmargin]
<div data-grid data-rows="4 md:2">
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
</div>
```


## Gap

`data-gap`属性で、フレックスアイテムの間隔を設定できます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-gap` | `倍数` | 各アイテムの上下左右の間隔を設定 |
| `data-gap-y` | `倍数` | 各アイテムの上下の間隔を設定 |
| `data-gap-x` | `倍数` | 各アイテムの左右の間隔を設定 |




```html [上下と左右のmargin]
<div data-grid data-gap="4 md:6 lg:8">
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
</div>
```


## Offset

`data-grid-offset` 属性を使って、左右の余白量を設定することができます。



| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-grid-offset` | `small` | 左右のオフセット値を `small` にする |
| `data-grid-offset` | `medium` | 左右のオフセット値 `medium` にする|
| `data-grid-offset` | `large` | 左右のオフセット値 `large` にする|
| `data-grid-offset` | `xlarge` | 左右のオフセット値 `xlarge` にする|
| `data-grid-offset` | `none` | 左右のオフセット値を `0` にする|


```html
<div data-grid data-grid-offset="small lg:large">
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
  <div data-grid-item>...</div>
</div>
```
