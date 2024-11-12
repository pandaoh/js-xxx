/**
 * 获取文件类型（扩展名）的小写格式。
 * - 支持处理带有查询参数的路径。
 * - 若无扩展名，返回 `unknown`。
 * @example
 * getFileType('https://example.com/path/to/file.pdf'); // 'pdf'
 * getFileType('file.JPG'); // 'jpg'
 * getFileType('document'); // 'unknown'
 * @param str 字符串（URL 、路径或文件名）。
 * @returns
 * @category File-文件相关
 */
export declare function getFileType(str: string): string;
/**
 * 根据字符串获取文件名（支持 URL 或其他路径字符串）。
 * - 支持处理带有查询参数的路径。
 * - 若无扩展名且 `keepExt` 为 `true`，默认使用 `.unknown`。
 * - 对于根路径或无文件名的情况，使用当前时间戳作为文件名。
 * @example
 * getFileNameFromStr('https://example.com/path/to/file.jpg'); // 'file'
 * getFileNameFromStr('https://example.com/path/to/file.jpg', true); // 'file.jpg'
 * getFileNameFromStr('https://example.com/path/to/file'); // 'file'
 * getFileNameFromStr('https://example.com/path/to/file', true); // 'file.unknown'
 * getFileNameFromStr('/path/to/file.jpg'); // 'file'
 * getFileNameFromStr('simple-file.png'); // 'simple-file'
 * getFileNameFromStr('https://example.com/'); // '1691830390281' (假设当前时间为 1691830390281)
 * @param str 字符串（URL 、路径或文件名）。
 * @param keepExt 可选。如果为 true，则返回包含文件扩展名的完整文件名，若无扩展名则使用 `.unknown`。
 * @returns
 * @category File-文件相关
 */
export declare function getFileNameFromStr(str: string, keepExt?: boolean): string;
/**
 * 检查是否为 file.ext string 文件扩展名
 * @example
 * checkFileExt(['png', 'jpg'], 'test.jpg'); /// true
 * checkFileExt(['png', 'jpg'], 'test.JPG'); /// true
 * checkFileExt(['png', 'jpg'], 'test.jpg.txt'); /// false
 * @param value 字符串值
 * @returns
 * @category File-文件相关
 */
export declare function checkFileExt(arr: string[], value: string): boolean;
/**
 * 在浏览器中打开文件选择框
 * @example
 * openFileSelect({ multiple: true }).then(fileList => console.log(fileList));
 * openFileSelect({ multiple: true, accept: 'image/*', resultType: 'blob' }).then(fileBlobList => console.log(fileBlobList));
 * openFileSelect({ multiple: true, accept: '.txt', resultType: 'base64' }).then(fileDataUrlList => console.log(fileDataUrlList));
 * @param options 打开配置
 * @returns
 * @category File-文件相关
 */
export declare function openFileSelect(options?: {
    accept?: string;
    multiple?: boolean;
    resultType?: 'blob' | 'base64';
}): Promise<any>;
/**
 * 将 Blob 对象保存为文件并下载。
 * @example
 * const blob = new Blob(['Hello, World!'], { type: 'text/plain' });
 * saveAs(blob, 'hello.txt'); // 下载文件名为 'hello.txt'
 * const jsonBlob = new Blob([JSON.stringify({ a: 1, b: 2 }, null, 2)], { type: 'application/json' });
 * saveAs(jsonBlob, 'data.json'); // 下载文件名为 'data.json'
 * @param blob 要保存的 Blob 对象。
 * @param filename 可选。保存的文件名。
 * @returns
 * @category File-文件相关
 */
export declare function saveAs(blob: Blob, filename?: string): void;
/**
 * 根据 Blob 下载图片。
 * @example
 * // 下载远程图片，并保存为 'image.jpg'
 * downloadImgByBlob('https://example.com/path/to/image.jpg', 'image.jpg');
 * // 下载远程图片，并保存为默认文件名（通常是图片的原始文件名）
 * downloadImgByBlob('https://example.com/path/to/image.jpg');
 * // 尝试下载一个无效的 URL，不会进行下载操作
 * downloadImgByBlob('invalid-url');
 * // 下载一张跨域图片（需要支持跨域下载）
 * downloadImgByBlob('https://a.example.com/path/to/cross-origin-image.jpg', 'cross-origin-image.jpg');
 * @param url 图片的 URL 地址。
 * @param fileName 可选。下载的文件名。
 * @returns
 * @category File-文件相关
 */
export declare function downloadImg(url: string, fileName?: string): void;
/**
 * 下载文件
 * @example
 * // 下载并保存为 'xxx'
 * downloadFile('https://example.com/path/to/file.jpg', 'xxx'); // 将文件保存为 'xxx.jpg'
 * // 下载并保存为链接中的文件名
 * downloadFile('https://example.com/path/to/file.jpg'); // 将文件保存为 'file.jpg'
 * // 下载并保存为指定的文件名（没有扩展名）
 * downloadFile('https://example.com/path/to/file.jpg', 'customFileName'); // 将文件保存为 'customFileName.jpg'
 * // 下载并保存为带有扩展名的自定义文件名
 * downloadFile('https://example.com/path/to/file.jpg', 'customFileName.png'); // 将文件保存为 'customFileName.png'
 * @param url 文件的 URL 地址。
 * @param fileName 可选。下载的文件名，默认为 URL 中的文件名。
 * @returns
 * @category File-文件相关
 */
export declare function downloadFile(url: string, fileName?: string): void;
/**
 * 新开页面预览文件。
 * @example
 * // 预览 Word 文档
 * openPreviewFile('https://example.com/path/to/document.docx');
 * // 预览 Excel 表格
 * openPreviewFile('https://example.com/path/to/spreadsheet.xlsx');
 * // 预览 PDF 文件
 * openPreviewFile('https://example.com/path/to/document.pdf');
 * // 预览图片
 * openPreviewFile('https://example.com/path/to/image.png');
 * // 预览其他文件或未匹配的文件类型
 * openPreviewFile('https://example.com/path/to/otherfile.zip'); // 将直接打开链接
 * @param url 要预览的 URL 地址。
 * @returns
 * @category File-文件相关
 */
export declare function openPreviewFile(url: string, serviceUrl: string): void;
/**
 * 文件流或内容转 Base64
 * @example
 * transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })); /// result object
 * transferFileToBase64('test', 'text/plain', (res) => console.log({ res })); /// result object
 * @param content BlobPart | any 内容
 * @param contentType 内容类型
 * @param callBack 回调函数
 * @returns
 * @category File-文件相关
 */
export declare function transferFileToBase64(content: any, contentType: string, callBack: any): void;
/**
 * 下载一个链接文档
 * @example
 * download('https://xxx.com/xxx', 'xxx'); /// 下载后端返回的流
 * @param link 链接
 * @param name 文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)
 * @returns
 * @category File-文件相关
 */
export declare function download(link: string, name: string): void;
/**
 * 在浏览器中自定义下载一些内容，与 download 不同的是，downloadContent 采用 Blob 可能会有长度限制。
 * @example
 * downloadContent('test.txt', 'test txt content'); /// 下载返回的流
 * downloadContent('test.json', JSON.stringify({content: 'test json'})); /// 下载返回的流
 * @param name 文件名称(需带后缀)，默认 txt 。
 * @param content 内容 BlobPart | any
 * @returns
 * @category File-文件相关
 */
export declare function downloadContent(name: string, content: any): void;
/**
 * 转换 data 为可导出的 csv 数据
 * @example
 * transferCSVData([{ prop: 'name' }, { prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * transferCSVData([{ label: '姓名', prop: 'name' }, { label: '年龄', prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * @param fields 导出的栏位
 * @param data 数据
 * @returns
 * @category File-文件相关
 */
export declare function transferCSVData(fields: {
    label?: string;
    prop: string;
}[], data: any[]): string;
/**
 * 导出数据为文件
 * @example
 * exportFile(data); /// 导出 txt 文件
 * exportFile(data, 'csv-导出文件测试', 'csv'); /// 导出 csv 文件
 * exportFile(document.getElementById('table_to_xls').outerHTML, 'excelWithStyle', 'xls'); /// 导出表格为带样式的 excel xls 文件
 * exportFile('http://a.biugle.cn/img/cdn/dev/avatar/1.png', 'test', 'png'); /// 导出 png 文件
 * @param data 数据
 * @param fileName 文件名
 * @param fileType 文件类型
 * @returns
 * @category File-文件相关
 */
export declare function exportFile(data: string, fileName?: string, fileType?: string): void;
/**
 * 文件大小格式化
 * @example
 * formatBytes(1024); /// '1.00 KB'
 * @param bytes 文件大小 bytes
 * @param precision 精度
 * @returns
 * @category File-文件相关
 */
export declare function formatBytes(bytes: number, precision?: number): string;
//# sourceMappingURL=index.d.ts.map