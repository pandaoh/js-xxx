[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / formDataToObject

# Function: formDataToObject()

> **formDataToObject**(`formData`): `any`

Converts a FormData object to a plain JavaScript object.

## Parameters

• **formData**: `any`

The FormData object to convert

## Returns

`any`

## Example

```ts
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('email', 'john.doe@example.com');
formData.append('hobbies', 'reading');
formData.append('hobbies', 'coding');
const result = formDataToObject(formData);
console.log(result);
/// { name: 'John Doe', email: 'john.doe@example.com', hobbies: ['reading', 'coding'] }
```
