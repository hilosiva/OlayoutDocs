---
title: display
description: A reference page in my new Starlight docs site.
---

`display` を設定するclass。


```html
<div class="ol-display">
  ...
</div>
```

`data-display` 属性を使って、`display` を変更することができます。



| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-display` | `ブレイクポイント名:none` | `display` を `none` にする |
| `data-display` | `ブレイクポイント名:inline` | `display` を `inline` にする |
| `data-display` | `ブレイクポイント名:inline-block` | `display` を `inline-block` にする |
| `data-display` | `ブレイクポイント名:block` | `display` を `block` にする |
| `data-display` | `ブレイクポイント名:flex` | `display` を `flex` にする |
| `data-display` | `ブレイクポイント名:grid` | `display` を `grid` にする |
| `data-display` | `ブレイクポイント名:unset` | `display` を `unset` にする |


```html
<div class="ol-display" data-display="min:block lg:grid">
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
