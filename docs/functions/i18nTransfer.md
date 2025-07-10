[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / i18nTransfer

# Function: i18nTransfer()

> **i18nTransfer**(`listOrMap`, `i18nTransferFunc`): `any` \| `any`[]

用于将列表或对象转换为国际化文本
如果传入的是数组，则返回一个对象数组，每个对象包含 label 和 value
如果传入的是对象，则递归转换每个值

## Parameters

• **listOrMap**: `any`

列表或对象

• **i18nTransferFunc**: `any`

国际化转换函数

## Returns

`any` \| `any`[]

## Example

```ts
/// 如果传入的是数组，则返回一个对象数组，每个对象包含 label 和 value
const list = [
  { label: 'Hello', value: 1 },
  { label: 'World', value: 2 },
];
const i18nTransferFunc = (text) => `Translated: ${text}`;
const result = i18nTransfer(list, i18nTransferFunc);
console.log(result);
// 输出: [
//   { label: 'Translated: Hello', value: 1 },
//   { label: 'Translated: World', value: 2 },
// ]
/// 如果传入的是对象，则递归转换每个值
const obj = {
  key1: { label: 'Hello', value: 1 },
  key2: { label: 'World', value: 2 },
  key3: list,
};
const resultObj = i18nTransfer(obj, i18nTransferFunc);
console.log(resultObj);
// 输出: {
//   key1: { label: 'Translated: Hello', value: 1 },
//   key2: { label: 'Translated: World', value: 2 },
//   key3: [
//     { label: 'Translated: Hello', value: 1 },
//     { label: 'Translated: World', value: 2 },
//   ],
// }
/// 如果传入的是 null 或 undefined，则返回原值
const nullValue = i18nTransfer(null, i18nTransferFunc);
console.log(nullValue); // 输出: null
/// 如果传入的是单个对象且有 label 属性，直接转换
const singleObj = { label: 'Hello', value: 1 };
const resultSingle = i18nTransfer(singleObj, i18nTransferFunc);
console.log(resultSingle); // 输出: { label: 'Translated: Hello', value: 1 }
```
