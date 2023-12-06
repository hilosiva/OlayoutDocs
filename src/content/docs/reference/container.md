---
title: container
description: A reference page in my new Starlight docs site.
---

ボックスのコンテナーを設定することができる属性です。


```html
<div data-container>
  ...
</div>
```


## Offset

`data-offset` 属性を使って、左右の余白量を変更することができます。
デフォルトは、`medium` が設定されています。


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-offset` | `small` | 左右のオフセット値を `small` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset` | `medium` <small>（初期値 ）</small> | 左右のオフセット値 `medium` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset` | `large` | 左右のオフセット値 `large` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset` | `xlarge` | 左右のオフセット値 `xlarge` にする<br><small>（デフォルト： `2.5vw` ）</small> |
| `data-offset` | `none` | 左右のオフセット値を `0` にする<br><small>（デフォルト： `2.5vw` ）</small> |
| `data-offset-left` | `small` | 左のオフセット値 `small` にする<br><small>（デフォルト： `2.5vw` ）</small> |
| `data-offset-left` | `medium` | 左のオフセット値 `medium` にする<br><small>（デフォルト： `2.5vw` ）</small> |
| `data-offset-left` | `large` | 左のオフセット値 `large` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset-left` | `xlarge` | 左のオフセット値 `xlarge` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset-left` | `none` | 左のオフセット値 `0` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset-right` | `small` | 右のオフセット値 `small` にする<br><small>（デフォルト： `2.5vw` ）</small> |
| `data-offset-right` | `medium` | 右のオフセット値 `medium` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset-right` | `large` | 右のオフセット値 `large` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset-right` | `xlarge` | 右のオフセット値 `xlarge` にする<br><small>（デフォルト： `2.5vw` ）</small>|
| `data-offset-right` | `none` | 右のオフセット値 `0` にする<br><small>（デフォルト： `2.5vw` ）</small>|


```html
<div data-container data-offset="small lg:large">
  ...
</div>
```


## Max

`data-max` 属性を使って、コンテナーの最大幅を変更することができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-max` | `small` | 最大幅を `small` にする |
| `data-offset` | `medium` | 最大幅 `medium` にする|
| `data-offset` | `large` | 最大幅 `large` にする|
| `data-offset` | `xlarge` | 最大幅 `xlarge` にする|
| `data-offset` | `xxlarge` | 最大幅 `xlarge` にする|
| `data-offset` | `none` | 最大幅を設定しない|


```html
<div data-container data-max="large">
  ...
</div>
```

## Align

`data-container` 属性を使って、コンテナーの位置揃えができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-container` | `left` | 左揃え |
| `data-container` | `center` | 中央揃え |
| `data-container` | `right` | 右揃え |

```html
<div data-container="center lg:right" data-max="large">
  ...
</div>
```

## Over

`data-over` 属性を使って、コンテナーを超えて要素を配置することが出来ます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-over` | `left` | 左側のコンテナーを超える |
| `data-over` | `right` | 右側のコンテナーを超える |
| `data-over` | `both` | 両側のコンテナーを超える |
| `data-over` | `clearLeft` | 超えた左側のコンテナーを戻す |
| `data-over` | `clearRight` | 超えた右側のコンテナーを戻す |
| `data-over` | `clearBoth` | 超えた両側のコンテナーを戻す |

```html
<div data-container data-over="left">
  ...
</div>
```
