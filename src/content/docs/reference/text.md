---
title: text
description: A reference page in my new Starlight docs site.
---

`text` や `font` 関連の設定するclass。


```html
<div class="ol-text">
  ...
</div>
```

## Align

`data-align` 属性を使って、テキストの位置揃えができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-align` | `ブレイクポイント名:left` | 左揃え |
| `data-align` | `ブレイクポイント名:center` | 中央揃え |
| `data-align` | `ブレイクポイント名:right` | 右揃え |
| `data-align` | `ブレイクポイント名:justify` | 両端揃え |


```html
<p class="ol-text" data-align="min:center">...</p>
```

## Case

`data-case` 属性を使って、英文字の大文字/小文字の設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-case` | `ブレイクポイント名:uppercase` | 全て大文字 |
| `data-case` | `ブレイクポイント名:normal` | 記述通り |



```html
<p class="ol-text" data-case="min:uppercase">...</p>
```

## Word Break

`data-word` 属性を使って、改行の設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-word` | `ブレイクポイント名:keep` | 「、」「。」などで改行する |
| `data-word` | `ブレイクポイント名:auto` | 自動 |



```html
<p class="ol-text" data-word="min:keep">
  日本語でも、変な位置では<wbr>改行しない。
</p>
```

## White Space

`data-space` 属性を使って、空白の設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-space` | `ブレイクポイント名:nowrap` | 改行しない |
| `data-space` | `ブレイクポイント名:wrap` | 改行 |
| `data-space` | `ブレイクポイント名:pre` | 記述通り |
| `data-space` | `ブレイクポイント名:preWrap` | `pre-wrap` |



```html
<p class="ol-text" data-space="min:nowrap">...</p>
```

## Line Height

`data-line` 属性を使って、行の高さの設定ができます。

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-line` | `ブレイクポイント名:-2` | `0.5` |
| `data-line` | `ブレイクポイント名:-1` | `0.75` |
| `data-line` | `ブレイクポイント名:1` | `1` |
| `data-line` | `ブレイクポイント名:+1` | `1.25` |
| `data-line` | `ブレイクポイント名:+1` | `1.25` |
| `data-line` | `ブレイクポイント名:+2` | `1.5` |
| `data-line` | `ブレイクポイント名:+3` | `1.75` |
| `data-line` | `ブレイクポイント名:+4` | `2` |
| `data-line` | `ブレイクポイント名:+5` | `2.25` |
| `data-line` | `ブレイクポイント名:+6` | `2.5` |



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
