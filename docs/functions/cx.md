[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / cx

# Function: cx()

> **cx**(...`classNames`): `string`

合并类名 emotion-js

## Parameters

• ...**classNames**: `any`[]

要合并的类名、对象或空值

## Returns

`string`

## Example

```ts
cx('class1', 'class2', { 'class3': true, 'class4': false }, null, undefined); /// "class1 class2 class3"
```
