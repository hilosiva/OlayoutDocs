---
title: flex
description: A reference page in my new Starlight docs site.
---

Flexboxを用いたレイアウト用 class。

```html
<div class="ol-flex">
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
</div>
```

## Wrap
`data-wrap`属性で、`flex-wrap` の設定ができます。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-wrap` | `ブレイクポイント名:nowrap` | `flex-wrap: nowrap` |
| `data-wrap` | `ブレイクポイント名:wrap` | `flex-wrap: wrap` |


### 例
```html [上下と左右のmargin]
<div class="ol-flex" data-wrap="min:wrap">
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
</div>
```

## Direction
`data-dir`属性で、フレックスアイテムの方向を設定できます。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-dir` | `ブレイクポイント名:row` | 横方向に順番に並ぶ |
| `data-dir` | `ブレイクポイント名:reverse` |  横方向に逆順で並ぶ |
| `data-dir` | `ブレイクポイント名:column` |  縦方向に順番に並ぶ |



### 例
```html [上下と左右のmargin]
<div class="ol-flex" data-dir="min:column lg:row">
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
</div>
```


## Alignment

`data-align`属性で、フレックスアイテムの位置を設定できます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-align` | `ブレイクポイント名:start` | 左揃え |
| `data-align` | `ブレイクポイント名:center` |  水平中央揃え |
| `data-align` | `ブレイクポイント名:end` |  右揃え |
| `data-align` | `ブレイクポイント名:justify` |  均等揃え |
| `data-align` | `ブレイクポイント名:top` |  上揃え |
| `data-align` | `ブレイクポイント名:middle` |  垂直中央揃え |
| `data-align` | `ブレイクポイント名:bottom` |  下揃え |


### 例
```html [上下と左右のmargin]
<div class="ol-flex" data-align="min:center min:middle lg:end">
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
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
<div class="ol-flex" data-gap="min:4 md:6 lg:8">
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
  <div class="ol-flex__item">...</div>
</div>
```
