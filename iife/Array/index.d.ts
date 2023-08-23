/**
 * 数组对象转对象，按照指定的 key 分组。
 * @example
 * data2Obj([{a: 1, b: 2}, {a: 3}, {b: 1}, {c: 1}], 'a'); /// {1: {a: 1, b: 2}, 3: {a: 3}, undefined: {c: 1}}
 * data2Obj([{a: 1, b: 'b1'}, {a: 3}, {a: 2, b: 'b2'}], 'a', 'b'); /// { '1': 'b1', '2': 'b2', '3': undefined }
 * @param sourceData 源数据
 * @param key 分组的 key
 * @param vKey 值的 key，默认为整个值。
 * @returns
 */
export declare function data2Obj(sourceData: {
    [key: string]: any;
}[], key: string, vKey?: string): {
    [key: string]: any;
};
/**
 * 数组对象转数组值
 * @example
 * data2Arr([{a: 1, b: 2}, {a: 3}, {b: 1}], 'a'); /// [1, 3]
 * @param sourceData 源数据
 * @param key 取值的 key
 * @returns
 */
export declare function data2Arr(sourceData: {
    [key: string]: any;
}[], key: string): any[];
/**
 * 数组对象转换为对象数组，需确保源数据已经去重哦，否则会暴力去重，最后一条数据有效。
 * 一般图表类插件需要此类转换
 * @example
 * const data = [{ id: 1, name: '张三', score: 98, remark: '语文成绩' }, { id: 3, name: '王五', score: 98 }, { id: 3, name: '王五', score: 99, remark: '最后一条有效成绩' }, { id: 2, name: '李四', score: 100 }];
 * arrObj2objArr(data, 'id'); /// {"id": [1, 2, 3], "name": ["张三", "李四", "王五"], "score": [98, 100, 99], "remark": ["语文成绩", null, "最后一条有效成绩"]}
 * @param data 源数据
 * @param key 用于转换的 key
 * @returns
 */
export declare function arrObj2objArr(data: {
    [key: string]: any;
}[], key: string): {
    [key: string]: any[];
};
/**
 * 数组去重
 * @example
 * arraySet([1, 2, 3, 1, 2, 3]); /// [1, 2, 3]
 * @param arr 数组
 * @returns
 */
export declare function arraySet(arr: string | Iterable<any> | null | undefined): string | Iterable<any> | null | undefined;
/**
 * 数组去重
 * @example
 * unique([1, 2, 3, 1, 2, 3]); /// [1, 2, 3]
 * unique([{id: 1, value: 'hello'}, {id: 2, value: 'world'}, {id: 2, value: 'world', others: true}], (a, b) => a.id === b.id); /// [id1, id2 带 true]
 * @param arr 数组
 * @param filter 过滤逻辑
 * @returns
 */
export declare function unique(arr: any[], filter: any): any[];
/**
 * 返回排序回调函数(支持中文，不支持一级数据与混合类型。)
 * @example
 * sortCallBack('createDt', true); /// 按照 createDt 升序排列
 * const arr = [{name: '666'}, {name: '333'}]
 * arr.sort(sortCallBack('name')); /// [{name: '333'}, {name: '666'}]
 * arr.sort(sortCallBack('name', false)); /// [{name: '666'}, {name: '333'}]
 * @param key 排序的字段
 * @param isAscend 是否升序
 * @returns
 */
export declare function sortCallBack(key: string, isAscend?: boolean): any;
/**
 * 数组乱序
 * @example
 * shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); /// [5, 9, 1, 10, 2, 6, 4, 8, 3, 7]
 * @param arr 数组
 * @returns
 */
export declare function shuffleArray(arr: any[]): any[];
/**
 * 数组排序(支持多条件排序+中文)
 * @example
 * arraySort(["a", "3", 1, 2, "b"]); /// [1, 2, '3', 'a', 'b']
 * arraySort(["a", "3", 1, 2, "b"], 'asc'); /// [1, 2, '3', 'a', 'b']
 * arraySort(["a", "3", 1, 2, "b"], false); /// ['b', 'a', '3', 2, 1]
 * arraySort(["a", "3", 1, 2, "b"], 'desc'); /// ['b', 'a', '3', 2, 1]
 * let arr1 = [{ a: 'a', b: 'b', c: '张三', d: 1 }, { a: 'c', b: 'd', c: '李四', d: 2 }, { a: 'e', b: 'f', c: '王五', d: 3 }];
 * arraySort(arr1, false, 'a'); /// e - c - a
 * arraySort(arr1, false, ['d', 'c']); /// 3 - 2 - 1
 * arraySort(arr1, 'DESC', ['c']); /// 张三 - 王五 - 李四
 * @param arr 数组
 * @param type 类型
 * @param keys 关键字/集合
 * @returns
 */
export declare function arraySort(arr: any[], type?: 'desc' | 'asc' | 'ASC' | 'DESC' | boolean, keys?: string | string[]): any[];
/**
 * 返回排序回调函数(也支持中文、多个字段、混合类型)
 * @example
 * ['a', '3', 1, 2, 'b'].sort(sortBy('', false)); /// ['b', 'a', '3', 2, 1]
 * ['a', '3', 1, 2, 'b'].sort(sortBy()); /// [1, 2, '3', 'a', 'b']
 * sortBy('createDt'); /// 按照 createDt 升序排列
 * sortBy(['name', 'age'], false); /// 按照 name + age 降序排列
 * @param keys 排序的字段/集合
 * @param isAscend 是否升序
 * @returns
 */
export declare function sortBy(keys?: string | string[], isAscend?: boolean): any;
/**
 * 填充数组空值，取前后值得中间数。
 * @example
 * fillArrVar([1, undefined, 3, undefined, 4]); /// [1, 2, 3, 3.5, 4]
 * fillArrVar([1, undefined, 3, undefined, 4], 0); ///  [1, 2, 3, 4, 4]
 * fillArrVar([1, undefined, 3, undefined, 10.55], 2); /// [1, 2, 3, 6.78, 10.55]
 * @param arr 数组
 * @param length 保留小数位
 * @returns
 */
export declare function fillArrVar(arr: any[], length?: number): number[];
//# sourceMappingURL=index.d.ts.map