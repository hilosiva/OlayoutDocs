---
title: spacer
description: A reference page in my new Starlight docs site.
---

余白を設定するためのclassです。



## margin

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-my` | `倍数` | 上下の `margin` を |
| `data-my` | `0` | 上下の `margin` を `0` にする|
| `data-my` | `auto` | 上下の `margin` を `auto` にする|
| `data-mx` | `倍数` | 左右の `margin` |
| `data-mx` | `0` | 左右の `margin` を `0` にする |
| `data-mx` | `auto` | 左右の `margin` を `auto`にする  |
| `data-mt` | `倍数` | 上の `margin` |
| `data-mt` | `0` | 上の `margin`  を `0` にする|
| `data-mt` | `auto` | 上の `margin`を `auto`にする |
| `data-mr` | `倍数` | 右の `margin` |
| `data-mb` | `倍数` | 下の `margin` |
| `data-mb` | `0` | 下の `margin`を `0` にする |
| `data-mb` | `auto` | 下の `margin`を `auto` にする|
| `data-ml` | `倍数` | 左の `margin` |
| `data-ml` | `0` | 左の `margin` を `0` にする|
| `data-ml` | `auto` | 左の `margin` を `auto` にする|

### 例
```html [上下と左右のmargin]
<div data-my="4 md:8 lg:16" data-mx="4 md:6"> ... </div>
```

## padding

| 属性名    | 属性値                    | 説明 |
| --------- | ------------------------- | ---- |
| `data-py` | `倍数` | 上下の `padding` |
| `data-py` | `0` | 上下の `padding` を `0` にする |
| `data-px` | `倍数` | 左右の `padding` |
| `data-px` | `0` | 左右の `padding` を `0` にする|
| `data-pt` | `倍数` | 上の `padding` |
| `data-pt` | `0` | 上の `padding` を `0` にする |
| `data-pr` | `倍数` | 右の `padding` |
| `data-pr` | `0` | 右の `padding`を `0` にする |
| `data-pb` | `倍数` | 下の `padding` |
| `data-pb` | `0` | 下の `padding`を `0` にする |
| `data-pl` | `倍数` | 左の `padding` |
| `data-pl` | `0` | 左の `padding` を `0` にする|


### 例
```html
<div data-py="4 md:8 lg:16" data-px="4 md:6"> ... </div>
```
