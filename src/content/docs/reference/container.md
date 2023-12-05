---
title: container
description: A reference page in my new Starlight docs site.
---

ボックスのコンテナーを設定するclass。


```html
<div class="ol-container">
  ...
</div>
```


## Offset

`data-offset` 属性を使って、左右の余白量を変更することができます。
デフォルトは、`medium` が設定されています。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-offset` | `ブレイクポイント名:small` | 左右のオフセット値を `small` にする |
| `data-offset` | `ブレイクポイント名:medium` | 左右のオフセット値 `medium` にする|
| `data-offset` | `ブレイクポイント名:large` | 左右のオフセット値 `large` にする|
| `data-offset` | `ブレイクポイント名:xlarge` | 左右のオフセット値 `xlarge` にする|
| `data-offset` | `ブレイクポイント名:none` | 左右のオフセット値を `0` にする|
| `data-offset-left` | `ブレイクポイント名:small` | 左のオフセット値 `small` にする |
| `data-offset-left` | `ブレイクポイント名:medium` | 左のオフセット値 `medium` にする|
| `data-offset-left` | `ブレイクポイント名:large` | 左のオフセット値 `large` にする|
| `data-offset-left` | `ブレイクポイント名:xlarge` | 左のオフセット値 `xlarge` にする|
| `data-offset-left` | `ブレイクポイント名:none` | 左のオフセット値 `0` にする|
| `data-offset-right` | `ブレイクポイント名:small` | 右のオフセット値 `small` にする |
| `data-offset-right` | `ブレイクポイント名:medium` | 右のオフセット値 `medium` にする|
| `data-offset-right` | `ブレイクポイント名:large` | 右のオフセット値 `large` にする|
| `data-offset-right` | `ブレイクポイント名:xlarge` | 右のオフセット値 `xlarge` にする|
| `data-offset-right` | `ブレイクポイント名:none` | 右のオフセット値 `0` にする|


```html
<div class="ol-container" data-offset="min:small lg:large">
  ...
</div>
```


## Max

`data-max` 属性を使って、コンテナーの最大幅を変更することができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-max` | `ブレイクポイント名:small` | 最大幅を `small` にする |
| `data-offset` | `ブレイクポイント名:medium` | 最大幅 `medium` にする|
| `data-offset` | `ブレイクポイント名:large` | 最大幅 `large` にする|
| `data-offset` | `ブレイクポイント名:xlarge` | 最大幅 `xlarge` にする|
| `data-offset` | `ブレイクポイント名:xxlarge` | 最大幅 `xlarge` にする|
| `data-offset` | `ブレイクポイント名:none` | 最大幅を設定しない|


```html
<div class="ol-container" data-max="lg:large">
  ...
</div>
```

## Align

`data-align` 属性を使って、コンテナーの位置揃えができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-align` | `ブレイクポイント名:left` | 左揃え |
| `data-align` | `ブレイクポイント名:center` | 中央揃え |
| `data-align` | `ブレイクポイント名:right` | 右揃え |

```html
<div class="ol-container" data-max="lg:large" data-align="lg:right">
  ...
</div>
```
