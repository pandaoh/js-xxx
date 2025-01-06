[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / splitString

# Function: splitString()

> **splitString**(`str`, `separatorIncludesSpace`): `string`[]

将输入字符串分割为字符串列表，基于换行符、回车符和可选的空格。

## Parameters

• **str**: `string`

要处理的输入字符串

• **separatorIncludesSpace**: `boolean` = `false`

默认 false，是否将空格作为分隔符之一

## Returns

`string`[]

## Example

```ts
splitString("Hello world\nThis is a test\nGood luck!");
/// 返回: ["Hello world", "This is a test", "Good luck!"]
splitString("Hello   world\nThis  is  a\ntest\nGood  luck!", true);
/// 返回: ["Hello", "world", "This", "is", "a", "test", "Good", "luck!"]
splitString("Hello\n\n\nworld\n\n", false);
/// 返回: ["Hello", "world"]
splitString("", true);
/// 返回: []
splitString("  ", false);
/// 返回: []
```
