---
title: Container
description: A reference page in my new Starlight docs site.
---

ボックスのコンテナーを設定するには、`data-container` 属性が便利です。`data-container` 属性を指定すると両サイドに `padding` を使ったオフセット（余白）が指定され（デフォルト： `5vw`  ）、コンテンツがセンタリングされます。

Webページ全体のセンタリングや、セクション内のコンテンツのセンタリング、固定幅を設定してコンテンツを右端揃えにするなどに活用してください。



<iframe src="/olayout-docs/demo/container/demo-1.html"></iframe>


```html
<div data-container>
  ...
</div>
```

 `data-max-width` 属性と組み合わせることで、コンテナーボックスが指定した最大幅以上にはならないように制限することができます。

<iframe src="/olayout-docs/demo/container/demo-2.html"></iframe>


```html "data-max-width="small sm:medium""
<div data-container data-max-width="small sm:medium">
  ...
</div>
```


最大幅については、[data-max-width属性のドキュメント](/olayout-docs/layout/max-width/)を参照してください。

---

## コンテナーの位置

`data-container` 属性の属性値には、 `data-max-width` 属性と組み合わせたコンテナーが最大幅となった時の位置を指定することができます。

デフォルトではセンタリングされるようになっています。

<table>
 <thead>
   <tr>
      <th>属性名</th>
      <th>属性値</th>
      <th>説明</th>
   </tr>
 </thead>
 <tbody>
<tr>
<td rowspan="3">

`data-container`
</td>
<td>

 `left`
</td>
<td>

最大幅のコンテナーを左に配置する
</td>
</tr>

<tr>
<td>

 `center`
</td>
<td>

最大幅のコンテナーをセンタリングする <small>（初期値）</small>
</td>
</tr>

<tr>
<td>

 `right`
</td>
<td>

最大幅のコンテナーを右に配置
</td>
</tr>

</tbody>
</table>


<iframe src="/olayout-docs/demo/container/demo-3.html" style="min-height: 400px"></iframe>


```html "sm:right" "sm:left"
<div data-container="sm:right" data-max-width="small sm:medium">
  ...
</div>
<div data-container="sm:left" data-max-width="small sm:medium">
  ...
</div>
```


---

## オフセット

`data-offset` 属性を使って、左右の余白量を変更することができます。
デフォルトは、`medium` が設定されています。


<table>
 <thead>
   <tr>
      <th>属性名</th>
      <th>属性値</th>
      <th>説明</th>
   </tr>
 </thead>
 <tbody>
<tr>
<td rowspan="5">

`data-offset`
</td>
<td>

 `none`
</td>
<td>

左右のオフセット値を `0` にする
</td>
</tr>

<tr>
<td>

 `small`
</td>
<td>

左右のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>

<tr>
<td>

 `medium`
</td>
<td>

左右のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `large`
</td>
<td>

左右のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `xlarge`
</td>
<td>

左右のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>
<tr>
<td rowspan="5">

`data-offset-left`
</td>
<td>

 `none`
</td>
<td>

左のオフセット値を `0` にする
</td>
</tr>

<tr>
<td>

 `small`
</td>
<td>

左のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `medium`
</td>
<td>

左のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `large`
</td>
<td>

左のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `xlarge`
</td>
<td>

左のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>
<tr>
<td rowspan="5">

`data-offset-right`
</td>
<td>

 `none`
</td>
<td>

右のオフセット値を `0` にする
</td>
</tr>

<tr>
<td>

 `small`
</td>
<td>

右のオフセット値を `small` <small>（ `2.5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `medium`
</td>
<td>

右のオフセット値を `medium` <small>（ `5vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `large`
</td>
<td>

右のオフセット値を `large` <small>（ `10vw` ）</small>にする
</td>
</tr>
<tr>
<td>

 `xlarge`
</td>
<td>

右のオフセット値を `xlarge` <small>（ `15vw` ）</small>にする
</td>
</tr>


 </tbody>
 </table>


<small>※. () 内はデフォルト値</small>

ブレイクポイントに合わせて余白のサイズを変更することもできます。

<iframe src="/olayout-docs/demo/container/demo-4.html" height="300"></iframe>



```html "data-offset="small sm:large lg:xlarge""
<div data-container data-offset="small sm:large lg:xlarge">
  ...
</div>
```

余白をなくしたり、左だけ、右だけのように、片側だけ余白を指定することもできます。

<iframe src="/olayout-docs/demo/container/demo-5.html" style="height: 600px"></iframe>



```html
<div data-container data-offset="none" data-offset-left="xxs:medium">
  ...
</div>
<div data-container data-offset="none" data-offset-right="xxs:medium">
  ...
</div>
```

オフセット値をカスタマイズする場合は、[レイアウトのカスタマイズに関するドキュメント](/olayout-docs/guides/configuration/#layout)を参照してください。

---
