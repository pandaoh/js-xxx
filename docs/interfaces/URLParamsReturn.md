[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / URLParamsReturn

# Interface: URLParamsReturn

## Properties

### controlledKeys

> **controlledKeys**: `string`[]

***

### deleteParams()

> **deleteParams**: (`key`?) => `URLSearchParams`

#### Parameters

• **key?**: `string`

#### Returns

`URLSearchParams`

***

### getParams()

> **getParams**: (`key`?) => `any`

#### Parameters

• **key?**: `string`

#### Returns

`any`

***

### resetParams()

> **resetParams**: (`scope`?) => `URLSearchParams`

#### Parameters

• **scope?**: `"all"` \| `"controlled"`

#### Returns

`URLSearchParams`

***

### searchParams

> **searchParams**: `URLSearchParams`

***

### setArrayParams()

> **setArrayParams**: (`key`, `values`) => `URLSearchParams`

#### Parameters

• **key**: `string`

• **values**: `any`[]

#### Returns

`URLSearchParams`

***

### setParams()

> **setParams**: (`key`, `value`?) => `URLSearchParams`

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

• **value?**: `any`

#### Returns

`URLSearchParams`

***

### subscribe()

> **subscribe**: (`callback`) => () => `void`

#### Parameters

• **callback**

#### Returns

`Function`

##### Returns

`void`
