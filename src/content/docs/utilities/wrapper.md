---
title: wrapper
description: A reference page in my new Starlight docs site.
---

ボックスの設定するclass。


```html
<div class="ol-wrapper">
  ...
</div>
```


## Position

`data-position` 属性を使って、`position` を設定することができます。



| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-position` | `ブレイクポイント名:static` | `position` を `static` にする |
| `data-position` | `ブレイクポイント名:relative` | `position` を `relative` にする |
| `data-position` | `ブレイクポイント名:absolute` | `position` を `absolute` にする |
| `data-position` | `ブレイクポイント名:fixed` | `position` を `fixed` にする |
| `data-position` | `ブレイクポイント名:sticky` | `position` を `sticky` にする |


```html
<div class="ol-wrapper" data-position="min:sticky">
  ...
</div>
```


## Background

`data-bg` 属性を使って背景色を設定することができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-bg` | `ブレイクポイント名:base` | 背景を `base` カラーにする |
| `data-bg` | `ブレイクポイント名:main` | 背景を `main` カラーにする |
| `data-bg` | `ブレイクポイント名:accent` | 背景を `accent` カラーにする |
| `data-bg` | `ブレイクポイント名:light` | 背景を `light` カラーにする |
| `data-bg` | `ブレイクポイント名:dark` | 背景を `dark` カラーにする |
| `data-bg` | `ブレイクポイント名:white` | 背景を `#fff` にする |
| `data-bg` | `ブレイクポイント名:black` | 背景を `#000` にする |


```html
<div class="ol-wrapper" data-bg="min:dark lg:base">
  ...
</div>
```

## Border

`data-border` 属性を使って、ボックスの上下の境界線の設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-border` | `top` | 上に境界線を設定 |
| `data-border` | `bottom` | 下に境界線を設定 |


```html
<div class="ol-wrapper" data-border="top">
  ...
</div>
```
