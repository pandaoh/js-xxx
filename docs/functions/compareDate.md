[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / compareDate

# Function: compareDate()

> **compareDate**(`dateA`, `dateB`?): `-1` \| `1` \| `0`

时间大小比较
-1(A<B), 1(A>B), 0(A=B)

## Parameters

• **dateA**: `any`

时间 A

• **dateB?**: `any`

时间 B

## Returns

`-1` \| `1` \| `0`

## Example

```ts
compareDate('2023-1-1'); /// 1
compareDate('2023-1-1 12:00:00', '2023-1-2 12:00:00'); /// -1
```
