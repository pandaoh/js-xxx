[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / curryIt

# Function: curryIt()

> **curryIt**(`fn`): (...`args`) => `any`

-函数柯里化-
是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。

## Parameters

• **fn**: `any`

函数

## Returns

`Function`

### Parameters

• ...**args**: `any`[]

### Returns

`any`

## Example

```ts
curryIt(function (a, b, c) {return a + b + c})(1)(2)(3); /// 6
```
