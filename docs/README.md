js-xxx - v1.1.4

# js-xxx - v1.1.4

## Table of contents

### Functions

- [add](README.md#add)
- [all](README.md#all)
- [any](README.md#any)
- [arraySet](README.md#arrayset)
- [base64Decode](README.md#base64decode)
- [base64Encode](README.md#base64encode)
- [catchPromise](README.md#catchpromise)
- [copyContent](README.md#copycontent)
- [copyToClipboard](README.md#copytoclipboard)
- [curryIt](README.md#curryit)
- [data2Arr](README.md#data2arr)
- [data2Obj](README.md#data2obj)
- [debounce](README.md#debounce)
- [deepClone](README.md#deepclone)
- [div](README.md#div)
- [empty](README.md#empty)
- [findChildren](README.md#findchildren)
- [findParents](README.md#findparents)
- [formatBytes](README.md#formatbytes)
- [formatDate](README.md#formatdate)
- [formatFormData](README.md#formatformdata)
- [formatURLSearchParams](README.md#formaturlsearchparams)
- [get1Var](README.md#get1var)
- [getBaseURL](README.md#getbaseurl)
- [getCookie](README.md#getcookie)
- [getMonthDays](README.md#getmonthdays)
- [getRandColor](README.md#getrandcolor)
- [getRandNum](README.md#getrandnum)
- [getRandStr](README.md#getrandstr)
- [getStyleByName](README.md#getstylebyname)
- [getTimeAndStr](README.md#gettimeandstr)
- [getTimeCode](README.md#gettimecode)
- [getType](README.md#gettype)
- [getUUID](README.md#getuuid)
- [getV](README.md#getv)
- [getViewportSize](README.md#getviewportsize)
- [globalError](README.md#globalerror)
- [html2str](README.md#html2str)
- [insertAfter](README.md#insertafter)
- [isAppleDevice](README.md#isappledevice)
- [isBrowser](README.md#isbrowser)
- [isDarkMode](README.md#isdarkmode)
- [isNode](README.md#isnode)
- [isValidJSON](README.md#isvalidjson)
- [isWeekday](README.md#isweekday)
- [mergeObj](README.md#mergeobj)
- [offDefaultEvent](README.md#offdefaultevent)
- [qsParse](README.md#qsparse)
- [qsStringify](README.md#qsstringify)
- [removeCookie](README.md#removecookie)
- [retry](README.md#retry)
- [round](README.md#round)
- [scrollTo](README.md#scrollto)
- [setCookie](README.md#setcookie)
- [setIcon](README.md#seticon)
- [shuffleArray](README.md#shufflearray)
- [sleep](README.md#sleep)
- [sortCallBack](README.md#sortcallback)
- [str2html](README.md#str2html)
- [str2unicode](README.md#str2unicode)
- [sub](README.md#sub)
- [throttle](README.md#throttle)
- [timeSince](README.md#timesince)
- [times](README.md#times)
- [to](README.md#to)
- [trim](README.md#trim)
- [unicode2str](README.md#unicode2str)

## Functions

### add

▸ **add**(`add1`, `add2`): `number`

加法函数
Example: `add(1, 2) => 3`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `add1` | `number` | 被加数 |
| `add2` | `number` | 加数 |

#### Returns

`number`

___

### all

▸ **all**(`promises`, `errorHandler?`): `Promise`<`any`\>

同步执行 promise，已做错误处理。
Example: `await all(...promise array) => [...result array]`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promises` | `Promise`<`any`\>[] | promises |
| `errorHandler?` | `Function` | errorHandler |

#### Returns

`Promise`<`any`\>

___

### any

▸ **any**(`promises`, `errorHandler?`): `Promise`<`any`\>

同步执行多个 promise，返回最先成功的结果，已做错误处理。
Example: `await any(...promise array) => success result`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promises` | `Promise`<`any`\>[] | promises |
| `errorHandler?` | `Function` | errorHandler |

#### Returns

`Promise`<`any`\>

___

### arraySet

▸ **arraySet**(`arr`): `string` \| `Iterable`<`any`\> \| ``null`` \| `undefined`

数组去重
Example: `arraySet([1, 2, 3, 1, 2, 3]) => [1, 2, 3]`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `undefined` \| ``null`` \| `string` \| `Iterable`<`any`\> | 数组 |

#### Returns

`string` \| `Iterable`<`any`\> \| ``null`` \| `undefined`

___

### base64Decode

▸ **base64Decode**(`str`): `string`

base64 解码
Example:
`base64Decode('5oiR5pivIGxlbw==') => '我是 leo'`
`base64Decode('5oiR5pivIGxlbw') => '我是 leo'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | base64 字符串 |

#### Returns

`string`

___

### base64Encode

▸ **base64Encode**(`str`, `replaceChar?`): `string`

base64 编码
Example: `base64Encode('我是 leo') => '5oiR5pivIGxlbw=='`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 字符串 |
| `replaceChar` | `boolean` | `false` | 是否替换结果字符串中的特殊字符 '+/=' |

#### Returns

`string`

___

### catchPromise

▸ **catchPromise**(`promiseHandler`, `errorHandler?`): `Promise`<`any`\>

New 一个自带错误处理的 Promise，适用于只处理成功情况，不关注失败的 Promise，省去写 catch 的时间与空间。
Example: `new catchPromise(resolve, reject, rejectHandler) => Promise`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseHandler` | `any` | promiseHandler |
| `errorHandler?` | `Function` | errorHandler |

#### Returns

`Promise`<`any`\>

___

### copyContent

▸ **copyContent**(`targetDom`, `addMsg?`): `any`

添加指定元素复制事件
Example: `copyContent(document.getElementById('copy')) => 复制 #copy 的内容成功`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetDom` | `any` | `undefined` | 目标内容元素 |
| `addMsg` | `any` | `null` | 复制后增加内容 |

#### Returns

`any`

___

### copyToClipboard

▸ **copyToClipboard**(`text`): `void`

复制到剪贴板
Example: `copyToClipboard('hello world')`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 内容文本 |

#### Returns

`void`

___

### curryIt

▸ **curryIt**(`fn`): (`arg`: `any`) => `any`

函数柯里化
是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
Example: `curryIt(function (a, b, c) {return a + b + c})(1)(2)(3) => 6`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`fn`

▸ (`arg`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

##### Returns

`any`

___

### data2Arr

▸ **data2Arr**(`sourceData`, `key`): `any`[]

数组对象转数组值
Example: `data2Arr([{a: 1, b: 2}, {a: 3}, {b: 1}], 'a') => [1, 3]`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceData` | { `[key: string]`: `any`;  }[] | 源数据 |
| `key` | `string` | 取值的 key |

#### Returns

`any`[]

___

### data2Obj

▸ **data2Obj**(`sourceData`, `key`, `vKey?`): `Object`

数组对象转对象，按照指定的 key 分组。
Example:
`data2Obj([{a: 1, b: 2}, {a: 3}, {b: 1}, {c: 1}], 'a') => {1: {a: 1, b: 2}, 3: {a: 3}, undefined: {c: 1}}`
`data2Obj([{a: 1, b: 'b1'}, {a: 3}, {a: 2, b: 'b2'}], 'a', 'b') => { '1': 'b1', '2': 'b2', '3': undefined }`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceData` | { `[key: string]`: `any`;  }[] | 源数据 |
| `key` | `string` | 分组的 key |
| `vKey?` | `string` | 值的 key，默认为整个值。 |

#### Returns

`Object`

___

### debounce

▸ **debounce**(`fn`, `delay?`): () => `void`

防抖函数
Example: `debounce(() => {}, 1000) => 防抖执行`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `Function` | `undefined` | 执行的方法 |
| `delay` | `number` | `1000` | 延迟时间 |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

___

### deepClone

▸ **deepClone**(`data`, `hash?`): `any`

深拷贝
https://juejin.cn/post/7075351322014253064
Example: `deepClone({a: 1, b: {c: 2}}) => 新的 {a: 1, b: {c: 2}}`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | 源数据 |
| `hash` | `WeakMap`<`object`, `any`\> | hash 存储，避免循环引用。 |

#### Returns

`any`

___

### div

▸ **div**(`div1`, `div2`): `number`

除法函数
Example: `div(1, 2) => 0.5`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `div1` | `number` | 被除数 |
| `div2` | `number` | 除数 |

#### Returns

`number`

___

### empty

▸ **empty**(`variable`): `boolean`

判断值是否为空
Example: `empty('') => true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variable` | `any` | 变量 |

#### Returns

`boolean`

___

### findChildren

▸ **findChildren**(`element`): `any`[]

找元素的所有子元素，解决浏览器兼容问题。
Example: `findChildren(document.getElementById('test')) => #test 的所有子元素数组`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `any` | 指定元素 |

#### Returns

`any`[]

___

### findParents

▸ **findParents**(`element`, `n`): `any`

找元素的第 n 级父元素
Example: `findParents(document.getElementById('test'), 3) => #test 的第三个父元素`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `any` | 指定元素 |
| `n` | `number` | 第几个 |

#### Returns

`any`

___

### formatBytes

▸ **formatBytes**(`bytes`, `precision?`): `string`

文件大小格式化
Example: `formatFileSize(1024) => '1.00 KB'`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bytes` | `number` | `undefined` | 文件大小 bytes |
| `precision` | `number` | `2` | 精度 |

#### Returns

`string`

___

### formatDate

▸ **formatDate**(`date`, `fmt?`, `weeks?`): `string`

时间格式化
Example:
`formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss Q S W', ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']) => '2022-04-26 11:33:53 2 123 星期二'`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `Date` | `undefined` | 时间 |
| `fmt` | `string` | `'yyyy-mm-dd hh:ii:ss'` | 格式化模板 'yyyy-mm-dd hh:ii:ss' |
| `weeks` | `any`[] | `undefined` | 星期对应数组 [7, 1, 2, 3, 4, 5, 6] |

#### Returns

`string`

___

### formatFormData

▸ **formatFormData**(`obj`, `hasBrackets?`, `hasIndex?`): `FormData`

对象转 FormData
Example: `formatFormData({a: 1, b: 2}) => FormData`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `any` | `undefined` | 源数据 |
| `hasBrackets` | `boolean` | `false` | 是否带括号 |
| `hasIndex` | `boolean` | `false` | 是否带 index |

#### Returns

`FormData`

___

### formatURLSearchParams

▸ **formatURLSearchParams**(`obj`, `hasBrackets?`, `hasIndex?`): `URLSearchParams`

对象转 URLSearchParams
Example: `formatURLSearchParams({a: 1, b: 2, c: [1, 2]}) => a=1&b=2&c=1&c=2`
Example: `formatURLSearchParams({a: 1, b: 2, c: [1, 2]}, true) => a=1&b=2&c[]=1&c[]=2`
Example: `formatURLSearchParams({a: 1, b: 2, c: [1, 2]}, true, true) => a=1&b=2&c[0]=1&c[1]=2`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `any` | `undefined` | 源数据 |
| `hasBrackets` | `boolean` | `false` | 是否带括号 |
| `hasIndex` | `boolean` | `false` | 是否带 index |

#### Returns

`URLSearchParams`

___

### get1Var

▸ **get1Var**(`data`): `any`

获取对象/数组第一个值
Example:
`get1Var([1, 2]) => 1`
`get1Var({a: 2,b: 1}) => 2`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | 源数据 |

#### Returns

`any`

___

### getBaseURL

▸ **getBaseURL**(`url`): `string`

获取不带任何参数或片段标识符的当前 URL
Example: `getBaseURL('https://test.com/index?name=leo&org=biugle') => 'https://test.com/index'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 当前 URL |

#### Returns

`string`

___

### getCookie

▸ **getCookie**(`key`): `any`

Get Cookie
Example: `getCookie('name') => 获取 name 对应的 Cookie 值`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Cookie key |

#### Returns

`any`

___

### getMonthDays

▸ **getMonthDays**(`date`): `number`

获取月份天数
Example: `getMonthDays(new Date()) => 30`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` \| `number` \| `Date` | 日期 |

#### Returns

`number`

___

### getRandColor

▸ **getRandColor**(): `string`

获取随机颜色
Example: `getRandColor() => '#xxxxxx'`

#### Returns

`string`

___

### getRandNum

▸ **getRandNum**(`min?`, `max?`): `number`

获取随机数字
Example: `getRandNum(1, 10) => 1~10之间的随机数，闭区间。`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `10` | 最大值 |

#### Returns

`number`

___

### getRandStr

▸ **getRandStr**(`len?`): `string`

获取随机数字字符串
Example: `getRandStr(6) => 'xxxxxx'`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `len` | `number` | `8` | 长度 |

#### Returns

`string`

___

### getStyleByName

▸ **getStyleByName**(`element`, `name`): `any`

获取任一元素的 style 任意属性

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `any` | 指定元素 |
| `name` | `any` | 属性名称 |

#### Returns

`any`

___

### getTimeAndStr

▸ **getTimeAndStr**(`len?`, `radix?`): `string`

获取简单的唯一字符串(时间戳+随机数+进制转换)
Example: `getTimeAndStr(5, 36) => 'xxxxxx'`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `len` | `number` | `5` | 随机字符的长度 |
| `radix` | `undefined` \| `number` | `36` | 结果以此进行进制转换 |

#### Returns

`string`

___

### getTimeCode

▸ **getTimeCode**(): `string`

获取 16 位可读时间戳
Example: `getTimeCode() => '2036551026042022'`

#### Returns

`string`

___

### getType

▸ **getType**(`variable`): `string`

获取变量类型
Example: `getType(1) => 'number'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variable` | `any` | 变量 |

#### Returns

`string`

___

### getUUID

▸ **getUUID**(`length`, `chars`): `string`

获取简单的 UUID
Example: `getUUID() => 'ghijklmn'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | 指定位数 |
| `chars` | `string` \| `any`[] | - |

#### Returns

`string`

___

### getV

▸ **getV**(`defaultResult`, ...`args`): `any`

获取多级对象值
Example: `getV('', {name: {children: 123}}, 'name', 'children') => 123`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultResult` | `any` | 默认值 |
| `...args` | `any` | 需要获取的多级 rest 参数 |

#### Returns

`any`

___

### getViewportSize

▸ **getViewportSize**(): `Object`

获取窗口尺寸
Example: `getViewportSize() => { width: 1280, height: 649 }`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `w` | `number` |

___

### globalError

▸ **globalError**(`fn`): `void`

全局捕获异常
Example: `globalError(() => console.log('全局捕获异常')) => '全局捕获异常'`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`void`

___

### html2str

▸ **html2str**(`value`): `string` \| ``null``

实体字符转字符串
Example: `html2str('&lt;&gt;&amp;&quot;') => '<>&"'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 实体字符串 |

#### Returns

`string` \| ``null``

___

### insertAfter

▸ **insertAfter**(`newElement`, `targetElement`): `void`

插入某元素到指定 Element 之后
Example: `insertAfter(document.getElementById('a'), document.getElementById('b'));`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newElement` | `any` | 某元素 |
| `targetElement` | `any` | 指定元素 |

#### Returns

`void`

___

### isAppleDevice

▸ **isAppleDevice**(): `boolean`

是否苹果设备
Example: `isAppleDevice() => true`

#### Returns

`boolean`

___

### isBrowser

▸ **isBrowser**(): `boolean`

判断当前运行环境是否为浏览器
Example: `isBrowser() => true`

#### Returns

`boolean`

___

### isDarkMode

▸ **isDarkMode**(): `boolean`

检测黑暗模式
Example: `isDarkMode() => true`

#### Returns

`boolean`

___

### isNode

▸ **isNode**(): `boolean`

判断当前运行环境是否为 Node.js
Example: `isNode() => true`

#### Returns

`boolean`

___

### isValidJSON

▸ **isValidJSON**(`str`): `boolean`

检查字符串是否为有效的 JSON
Example:
`isValidJSON('{"name":"leo", "age":20}'); => true`
`isValidJSON('{"name":"leo", age:"20"}'); => false`
`isValidJSON(null); => true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `any` | 字符串 |

#### Returns

`boolean`

___

### isWeekday

▸ **isWeekday**(`date`): `boolean`

检查所提供的日期是否为工作日
Example: `isWorkDay(new Date()) => true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | 日期 |

#### Returns

`boolean`

___

### mergeObj

▸ **mergeObj**(`oldObj`, `newObj`, `keys?`, `noOld?`): `Object`

合并对象
Example:
`mergeObj({name: 1, oldValue: 2}, {name: 3, value: 4}, []) => {name: 1, oldValue: 2, value: 4}`
`mergeObj({name: 1, oldValue: 2}, {name: 3, value: 4}, ['name'], true) => {name: 3, value: 4}`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `oldObj` | `Object` | `undefined` | 源对象 |
| `newObj` | `Object` | `undefined` | 要合并的对象 |
| `keys?` | `string` \| `string`[] | `undefined` | 要覆盖的属性 key，不指定时以源对象为准，指定时以新对象为准。 |
| `noOld` | `boolean` | `false` | 新对象中不存在的属性直接删除，默认不删除 false，true 删除。 |

#### Returns

`Object`

___

### offDefaultEvent

▸ **offDefaultEvent**(`event`): `boolean`

阻止冒泡事件&阻止默认行为&阻止事件捕获
Example: `offDefaultEvent(event) => 阻止冒泡事件&阻止默认行为&阻止事件捕获`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `any` | 事件 |

#### Returns

`boolean`

___

### qsParse

▸ **qsParse**(`url?`, `key?`): `any`

获取 query string 参数
Example:
`qsParse('start=0&count=20&x=1&x=2&x=3', 'x') => [1, 2, 3]`
`qsParse('start=0&count=20&x=1&x=2&x=3') => { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url?` | `string` | query string |
| `key?` | `string` | 参数名 |

#### Returns

`any`

___

### qsStringify

▸ **qsStringify**(`obj`, `options`): `string`

对象转 querystring 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
Example:
`qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }) => 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'`
`qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }) => 'start=0&count=20&obj[a]=1&arr=1,2,3'`
`qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }) => 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | 源数据 |
| `options` | `Object` | - |
| `options.arr2str?` | `boolean` | - |
| `options.hasBrackets` | `boolean` | - |
| `options.hasIndex?` | `boolean` | - |
| `options.urlEncode?` | `boolean` | - |

#### Returns

`string`

___

### removeCookie

▸ **removeCookie**(`key`): `void`

Remove Cookie
Example: `removeCookie('name') => 删除 name 对应的 Cookie`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Cookie key |

#### Returns

`void`

___

### retry

▸ **retry**(`promise`, `count?`, `delay?`): `Promise`<`unknown`\>

Promise 重试
Example: `retry(() => Promise.reject(new Error('error')), 3) => Promise.reject(new Error('error')) 执行 3 次`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `promise` | `Promise`<`any`\> | `undefined` | promise |
| `count` | `number` | `0` | 次数 |
| `delay` | `number` | `0` | 延迟时间 |

#### Returns

`Promise`<`unknown`\>

___

### round

▸ **round**(`number`, `d`): `number` \| `undefined`

四舍五入
Example: `round(1.2345, 2) => 1.23`
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `any` | 浮点数 |
| `d` | `number` | 保留小数位 |

#### Returns

`number` \| `undefined`

___

### scrollTo

▸ **scrollTo**(`element`, `to?`): `void`

滚动到顶部/底部
Example: `scrollTo(element) => 滚动到顶部`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `any` | `undefined` | 指定元素 |
| `to` | ``"start"`` \| ``"end"`` | `'start'` | - |

#### Returns

`void`

___

### setCookie

▸ **setCookie**(`key`, `value`, `expires`): `void`

Set Cookie
Example: `setCookie('name', 'value', 1) => 设置 name 对应的 Cookie 值`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Cookie key |
| `value` | `any` | Cookie value |
| `expires` | `number` | Cookie expires |

#### Returns

`void`

___

### setIcon

▸ **setIcon**(`iconLink`): `void`

设置网页 icon
Example: `setIcon('/favicon.ico')`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iconLink` | `string` | icon 链接 |

#### Returns

`void`

___

### shuffleArray

▸ **shuffleArray**(`arr`): `any`[]

数组乱序
Example: `shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [5, 9, 1, 10, 2, 6, 4, 8, 3, 7]`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any`[] | 数组 |

#### Returns

`any`[]

___

### sleep

▸ **sleep**(`milliseconds`): `Promise`<`void`\>

睡眠
Example: `await sleep(1000) => 等待 1000 毫秒再执行后面的`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `milliseconds` | `undefined` \| `number` | 睡眠时间 |

#### Returns

`Promise`<`void`\>

___

### sortCallBack

▸ **sortCallBack**(`key`, `isAscend?`): (`a`: `any`, `b`: `any`) => ``1`` \| ``-1``

排序回调函数
Example:
`sortCallBack('createDt', true) => 按照 createDt 升序排列`
`const arr = [{name: '666'}, {name: '333'}]`
`arr.sort(sortCallBack('name')) => [{name: '333'}, {name: '666'}]`
`arr.sort(sortCallBack('name', false)) => [{name: '666'}, {name: '333'}]`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` | `undefined` | 排序的字段 |
| `isAscend` | `boolean` | `true` | - |

#### Returns

`fn`

▸ (`a`, `b`): ``1`` \| ``-1``

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

``1`` \| ``-1``

___

### str2html

▸ **str2html**(`str`): `string`

字符串转实体字符
Example: `str2html('<>&"') => '&lt;&gt;&amp;&quot;'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 字符串 |

#### Returns

`string`

___

### str2unicode

▸ **str2unicode**(`value`): `string`

unicode 转字符
Example: `str2unicode("\\u6211\\u662f\\u8001a") => '我是老a'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | unicode 字符串 |

#### Returns

`string`

___

### sub

▸ **sub**(`sub1`, `sub2`): `number`

减法函数
Example: `sub(1, 2) => -1`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sub1` | `number` | 被减数 |
| `sub2` | `number` | 减数 |

#### Returns

`number`

___

### throttle

▸ **throttle**(`fn`, `delay?`): () => `void`

节流函数
Example: `throttle(() => {}, 1000) => 节流执行`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `Function` | `undefined` | 执行的方法 |
| `delay` | `number` | `2000` | 延迟时间 |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

___

### timeSince

▸ **timeSince**(`date`, `longago?`, `formater?`): `undefined` \| `string`

人性化时间
Example: `timeSince(new Date()) => '刚刚'`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `date` | `any` | `undefined` | 时间/string |
| `longago` | `boolean` | `false` | 是否显示周月甚至更久 |
| `formater` | `string` | `'yyyy-mm-dd hh:ii:ss'` | 正常显示时的时间显示格式 |

#### Returns

`undefined` \| `string`

___

### times

▸ **times**(`mul1`, `mul2`): `number`

乘法函数
Example: `times(1, 2) => 2`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mul1` | `number` | 被乘数 |
| `mul2` | `number` | 乘数 |

#### Returns

`number`

___

### to

▸ **to**(`promise`, `res?`, `rej?`): `Promise`<`any`\>

参考了 to.js，扩展 Promise 用来直接帮助执行且处理异常。
promise 报错不会阻断后面的 Promise，适用于多个 await Promise 情况。
Example: `to(Promise.resolve(1)) => Promise.resolve(1)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promise` | `Promise`<`any`\> | promise |
| `res?` | `Function` | 成功回调 |
| `rej?` | `Function` | 失败回调 |

#### Returns

`Promise`<`any`\>

___

### trim

▸ **trim**(`str`, `type?`): `string`

去除字符串空格
可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。
Example: `trim('  a  b  ', 4) => 'a b'`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 字符串 |
| `type` | `string` \| `number` | `0` | 类型，默认为 0\|ba，错误 type 会返回原字符串。 |

#### Returns

`string`

___

### unicode2str

▸ **unicode2str**(`value`): `string`

字符转 unicode
Example: `unicode2str("我是老A") => '\\u6211\\u662f\\u8001a'`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 中文字符串 |

#### Returns

`string`
