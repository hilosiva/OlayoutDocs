---
title: text
description: A reference page in my new Starlight docs site.
---

`text` や `font` 関連の設定するclass。


```html
<div data-text>
  ...
</div>
```

## 位置揃え

`data-text` 属性を使って、テキストの位置揃えができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-text` | `left` | 左揃え |
| `data-text` | `center` | 中央揃え |
| `data-text` | `right` | 右揃え |
| `data-text` | `justify` | 両端揃え |


```html
<p data-text="center">...</p>
```

## Case


| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-text` | `uppertext` | 全て大文字 |
| `data-text` | `normal` | 記述通り |



```html
<p data-text="uppercase">...</p>
```

## Word Break

`data-text` 属性を使って、改行の設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-text` | `keep` | 「、」「。」などで改行する |
| `data-text` | `break-nomal` | 自動 |



```html
<p data-text="keep">
  日本語でも、変な位置では<wbr>改行しない。
</p>
```

## White Space

`data-text` 属性を使って、空白の設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-text` | `nowrap` | 改行しない |
| `data-text` | `wrap` | 改行 |
| `data-text` | `pre` | 記述通り |
| `data-text` | `preWrap` | `pre-wrap` |



```html
<p data-text="nowrap">...</p>
```

## Line Height

`data-leading` 属性を使って、行の高さの設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-leading` | `-2` | `0.5` |
| `data-leading` | `-1` | `0.75` |
| `data-leading` | `1` | `1` |
| `data-leading` | `+1` | `1.25` |
| `data-leading` | `+1` | `1.25` |
| `data-leading` | `+2` | `1.5` |
| `data-leading` | `+3` | `1.75` |
| `data-leading` | `+4` | `2` |
| `data-leading` | `+5` | `2.25` |
| `data-leading` | `+6` | `2.5` |



```html
<p class="ol-text" data-line="min:+4">...</p>
```

## Tracking

`data-tracking` 属性を使って、トラッキングの設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-tracking` | `ブレイクポイント名:-2` | `-0.05em` |
| `data-tracking` | `ブレイクポイント名:-1` | `-0.025em` |
| `data-tracking` | `ブレイクポイント名:0` | `0` |
| `data-tracking` | `ブレイクポイント名:+1` | `0.025em` |
| `data-tracking` | `ブレイクポイント名:+2` | `0.05em` |
| `data-tracking` | `ブレイクポイント名:+3` | `0.1em` |
| `data-tracking` | `ブレイクポイント名:+4` | `0.125em` |
| `data-tracking` | `ブレイクポイント名:+5` | `0.15em` |
| `data-tracking` | `ブレイクポイント名:+6` | `0.175em` |
| `data-tracking` | `ブレイクポイント名:+7` | `0.2em` |





```html
<p class="ol-text" data-tracking="min:+2">...</p>
```

## Kerning

`data-kerning` 属性を使って、プロポーショナルメトリクスの設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-kerning` | `ブレイクポイント名:normal` | `normal` |
| `data-kerning` | `ブレイクポイント名:palt` | `palt` |
| `data-kerning` | `ブレイクポイント名:pkna` | `pkna` |





```html
<h2 class="ol-text" data-kerning="min:palt">...</h2>
```
