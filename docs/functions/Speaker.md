[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / Speaker

# Function: Speaker()

> **Speaker**(`text`, `lang`, `volume`, `pitch`, `rate`): `object`

TTS 语音，可以在现代浏览器直接运行。

## Parameters

• **text**: `string`

内容

• **lang**: `string` = `'zh-CN'`

语言

• **volume**: `number` = `1`

音量 [0, 1]

• **pitch**: `number` = `1`

音高 [0, 2]

• **rate**: `number` = `1`

速度 [0.1, 10]

## Returns

`object`

### getInstance()

> **getInstance**: () => `SpeechSynthesisUtterance`

#### Returns

`SpeechSynthesisUtterance`

### getVoices()

> **getVoices**: () => `SpeechSynthesisVoice`[]

#### Returns

`SpeechSynthesisVoice`[]

### setLang()

> **setLang**: (`lang`) => `void`

#### Parameters

• **lang**: `string`

#### Returns

`void`

### setPitch()

> **setPitch**: (`pitch`) => `void`

#### Parameters

• **pitch**: `number`

#### Returns

`void`

### setRate()

> **setRate**: (`rate`) => `void`

#### Parameters

• **rate**: `number`

#### Returns

`void`

### setText()

> **setText**: (`txt`) => `void`

#### Parameters

• **txt**: `string`

#### Returns

`void`

### setVoice()

> **setVoice**: (`voice`) => `void`

#### Parameters

• **voice**: `any`

#### Returns

`void`

### setVolume()

> **setVolume**: (`volume`) => `void`

#### Parameters

• **volume**: `number`

#### Returns

`void`

### speak()

> **speak**: () => `void`

#### Returns

`void`

### stop()

> **stop**: () => `void`

#### Returns

`void`

## Example

```ts
const mySpeaker = Speaker();
mySpeaker.setText('你好，这是一条测试语音！hello');
mySpeaker.speak();
```
