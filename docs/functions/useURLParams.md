[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / useURLParams

# Function: useURLParams()

> **useURLParams**(`options`): [`URLParamsReturn`](../interfaces/URLParamsReturn.md)

URL 参数管理

## Parameters

• **options**: [`URLParamsOptions`](../interfaces/URLParamsOptions.md) = `{}`

配置选项

## Returns

[`URLParamsReturn`](../interfaces/URLParamsReturn.md)

## Example

```ts
const { resetParams, setParams, getParams, deleteParams, setArrayParams, subscribe, searchParams, controlledKeys } = useURLParams({
  defaultParams: { a: '1', b: '2' },
  location: window.location,
});
// 设置参数
setParams('a', '3'); // 设置单个参数
setParams({ b: '4', c: '5' }); // 设置多个参数
// 获取参数
console.log(searchParams.toString()); // 获取当前查询参数字符串
const a = getParams('a'); // 获取单个参数
const allParams = getParams(); // 获取所有参数
// 删除参数
deleteParams('all'); // 删除所有参数
deleteParams(); // 删除所有受控参数
deleteParams('b'); // 删除单个参数
// 设置数组参数
setArrayParams('tags', ['tag1', 'tag2', 'tag3']); // 设置数组参数
// 订阅参数变化
const unsubscribe = subscribe((params, url) => {
  console.log('参数变化:', params.toString(), '新 URL:', url);
});
// 重置参数
resetParams('all'); // 重置为默认参数，包括非受控参数
resetParams(); // 重置为默认参数
// 获取受控参数键名集合
console.log(controlledKeys); // 获取受控参数键名集合
```
