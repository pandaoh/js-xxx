[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / useStateData

# Function: useStateData()

> **useStateData**(`initialData`): (`value`) => `any`[]

创建用于处理数据的钩子函数

## Parameters

• **initialData**: `any`

初始数据

## Returns

(`value`) => `any`[]

## Example

```ts
const [getData, setData, resetData] = useStateData({a: 1, b: 2, c: 3});
console.log(getData()); /// {a: 1, b: 2, c: 3}
setData({ a : 10 }); /// {a: 10}
resetData(); /// {a: 1, b: 2, c: 3}
const [getData, setData, resetData] = useStateData('test');
console.log(getData()); /// 'test'
setData('test001'); /// 'test001'
resetData(); /// 'test'
```
