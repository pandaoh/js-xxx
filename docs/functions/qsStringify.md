[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / qsStringify

# Function: qsStringify()

> **qsStringify**(`obj`, `options`?): `string`

对象转 queryString 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。

## Parameters

• **obj**: `any`

源数据

• **options?**

• **options.arr2str?**: `boolean`

• **options.hasBrackets?**: `boolean`

• **options.hasIndex?**: `boolean`

• **options.urlEncode?**: `boolean`

## Returns

`string`

## Example

```ts
qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }); /// 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'
qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }); /// 'start=0&count=20&obj[a]=1&arr=1,2,3'
qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }); /// 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'
```
