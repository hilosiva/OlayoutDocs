---
title: grid
description: A reference page in my new Starlight docs site.
---

Gridを用いたレイアウト用 class。

```html
<div class="ol-grid">
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
</div>
```

## Columns
`data-cols`属性で、列数の設定ができます。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-cols` | `ブレイクポイント名:列数（12まで）` | 列数を設定 |



### 例
```html [上下と左右のmargin]
<div class="ol-grid" data-cols="min:1 md:2 lg:3 xl:4">
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
</div>
```

## Rows
`data-rows`属性で、行数の設定ができます。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-rows` | `ブレイクポイント名:列数（6まで）` | 行数を設定 |



### 例
```html [上下と左右のmargin]
<div class="ol-grid" data-rows="min:4 md:2">
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
</div>
```


## Gap

`data-gap`属性で、フレックスアイテムの間隔を設定できます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-gap` | `ブレイクポイント名:倍数` | 各アイテムの上下左右の間隔を設定 |
| `data-gap-y` | `ブレイクポイント名:倍数` | 各アイテムの上下の間隔を設定 |
| `data-gap-x` | `ブレイクポイント名:倍数` | 各アイテムの左右の間隔を設定 |



### 例
```html [上下と左右のmargin]
<div class="ol-grid" data-gap="min:4 md:6 lg:8">
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
</div>
```


## Offset

`data-offset` 属性を使って、左右の余白量を設定することができます。



| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-offset` | `ブレイクポイント名:small` | 左右のオフセット値を `small` にする |
| `data-offset` | `ブレイクポイント名:medium` | 左右のオフセット値 `medium` にする|
| `data-offset` | `ブレイクポイント名:large` | 左右のオフセット値 `large` にする|
| `data-offset` | `ブレイクポイント名:xlarge` | 左右のオフセット値 `xlarge` にする|
| `data-offset` | `ブレイクポイント名:none` | 左右のオフセット値を `0` にする|

```html
<div class="ol-grid" data-offset="min:small lg:large">
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
  <div class="ol-grid__item">...</div>
</div>
```
