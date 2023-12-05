---
title: spacer
description: A reference page in my new Starlight docs site.
---

余白を設定するための属性です。

## margin

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-my` | `ブレイクポイント名:倍数` | 上下の `margin` |
| `data-mx` | `ブレイクポイント名:倍数` | 左右の `margin` |
| `data-mt` | `ブレイクポイント名:倍数` | 上の `margin` |
| `data-mr` | `ブレイクポイント名:倍数` | 右の `margin` |
| `data-mb` | `ブレイクポイント名:倍数` | 下の `margin` |
| `data-ml` | `ブレイクポイント名:倍数` | 左の `margin` |

### 例
```html [上下と左右のmargin]
<div data-my="min:4 md:8 lg:16" data-mx="min:4 md:6"> ... </div>
```

## padding

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-py` | `ブレイクポイント名:倍数` | 上下の `padding` |
| `data-px` | `ブレイクポイント名:倍数` | 左右の `padding` |
| `data-pt` | `ブレイクポイント名:倍数` | 上の `padding` |
| `data-pr` | `ブレイクポイント名:倍数` | 右の `padding` |
| `data-pb` | `ブレイクポイント名:倍数` | 下の `padding` |
| `data-pl` | `ブレイクポイント名:倍数` | 左の `padding` |


### 例
```html
<div data-py="min:4 md:8 lg:16" data-px="min:4 md:6"> ... </div>
```
