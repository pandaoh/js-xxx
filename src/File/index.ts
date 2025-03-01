/* eslint-disable indent */
/*
 * @Author: HxB
 * @Date: 2024-11-01 11:52:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2025-03-01 10:19:17
 * @Description: 文件常用函数
 * @FilePath: /js-xxx/src/File/index.ts
 */

import { formatDate } from '@/Date';
import { forceToStr } from '@/Others';
import { getContentType, safeDecodeURI, safeEncodeURI } from '@/Request';
import { isUrl } from '@/String';

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
export function getFileType(str: string): string {
  return str.match(/[^\/]*\.(\w+)(?:\?.*)?$/i)?.[1]?.toLowerCase() || 'unknown';
}

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
export function getFileNameFromStr(str: string, keepExt = false): string {
  const ext = getFileType(str);
  const filenameOfStr = str.match(/([^/]*?)\.\w+(\?.*?)?$/)?.[1];
  const filename = filenameOfStr ? decodeURIComponent(filenameOfStr) : String(Date.now());
  return keepExt ? `${filename}${ext ? `.${ext}` : '.unknown'}` : filename;
}

// eslint-disable-next-line spellcheck/spell-checker
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
export function checkFileExt(arr: string[], value: string): boolean {
  const regFileExt = arr.map((name) => `.${name}`).join('|');
  return new RegExp(`(${regFileExt})$`, 'i').test(value);
}

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
export function openFileSelect(options?: {
  accept?: string;
  multiple?: boolean;
  resultType?: 'blob' | 'base64';
}): Promise<any> {
  return new Promise((resolve, reject) => {
    const $input = document.createElement('input');

    $input.style.position = 'fixed';
    $input.style.bottom = '0';
    $input.style.left = '0';
    $input.style.visibility = 'hidden';
    $input.setAttribute('type', 'file');
    if (options?.accept) {
      // accept = '*/*' 'image/*' 'audio/*' 'video/*' '.txt,.png,.pdf' 'image/png,.jpg'
      $input.setAttribute('accept', options.accept);
    }
    if (options?.multiple) {
      $input.setAttribute('multiple', 'true');
    }

    document.body.appendChild($input);

    // 判断用户是否点击取消，原生没有提供专门事件，用 hack 的方法实现。
    $input.addEventListener('click', () => {
      $input.value = '';
      document.body.addEventListener(
        'focus',
        () => {
          setTimeout(() => {
            if (!$input.value) {
              resolve(null);
            }
          }, 500);
        },
        // { once: true },
      );
    });

    $input.addEventListener('change', async (e) => {
      document.body.removeChild($input);

      if (!options?.resultType) {
        resolve($input.files);
        return;
      }

      // @since20240811 新增
      const files = ((e.target as HTMLInputElement).files || []) as any[];
      try {
        const results = await Promise.all(
          [...files].map(
            async (file) =>
              new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = function () {
                  resolve({
                    filename: file.name,
                    ext: file.name.split('.').pop()?.toLowerCase(),
                    type: file.type,
                    result:
                      this.result && options.resultType === 'blob'
                        ? new Blob([new Uint8Array(this.result as ArrayBuffer)], {
                            type: file.type,
                          })
                        : this.result,
                    length:
                      options.resultType === 'blob'
                        ? (this.result as ArrayBuffer)?.byteLength
                        : (this.result as string)?.length,
                  });
                };
                reader.onerror = (err) => {
                  reject(err);
                };
                switch (options.resultType) {
                  case 'blob': {
                    reader.readAsArrayBuffer(file);
                    break;
                  }
                  case 'base64': {
                    reader.readAsDataURL(file);
                    break;
                  }
                  default: {
                    reader.readAsArrayBuffer(file);
                  }
                }
              }),
          ),
        );
        resolve(results);
      } catch (err) {
        reject(err);
      }
    });

    $input.click();
  });
}

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
export function saveAs(blob: Blob, filename?: string) {
  const url = window.URL || window.webkitURL;
  const link = document.createElement('a');
  link.download = filename || '';
  link.href = url.createObjectURL(blob);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  url.revokeObjectURL(link.href);
}

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
export function downloadImg(url: string, fileName?: string) {
  if (!url || !url.startsWith('http')) {
    console.warn('Invalid URL provided:', url);
    return;
  }

  const img = new Image();

  img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = fileName || 'download';
        a.click();
        window.URL.revokeObjectURL(blobUrl);
      } else {
        console.warn('Failed to create Blob from canvas');
      }
    }, 'image/png'); // 默认保存为 PNG 格式
  };

  img.onerror = function () {
    console.error('Failed to load image from URL:', url);
  };

  img.setAttribute('crossOrigin', 'Anonymous');
  img.src = url;
}

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
export function downloadFile(url: string, fileName?: string) {
  const ext = fileName?.match(/[^\/]*\.(\w+)(?:\?.*)?$/)?.[1] || url.match(/[^\/]*\.(\w+)(?:\?.*)?$/)?.[1] || 'txt';

  const finalFileName = safeDecodeURI(fileName || url.match(/([^/]*?)\.\w+(\?.*?)?$/)?.[1] || String(Date.now()));

  const oReq = new XMLHttpRequest();
  oReq.open('GET', url, true);
  oReq.responseType = 'blob';
  oReq.onload = () => {
    const type = getContentType(ext) || 'application/octet-stream';
    const file = new Blob([oReq.response], { type });
    saveAs(file, /\.\w+$/.test(finalFileName) ? finalFileName : `${finalFileName}.${ext}`);
  };
  oReq.send();
}

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
export function openPreviewFile(url: string, serviceUrl: string): void {
  const urlMap = new Map<RegExp, (url: string) => void>()
    .set(/\.(docx|doc|xls|xlsx)(\?.*)?$/, (url) =>
      window.open(`${serviceUrl}?url=` + encodeURIComponent(window.btoa(url))),
    )
    .set(/\.pdf(\?.*)?$/, (url) =>
      window!
        .open('')!
        .document.write(
          `<!DOCTYPE html><html><head><style>body{margin:0;}embed{height:100vh;}</style></head><body><embed src="${url}" width="100%" height="100%"/></body></html>`,
        ),
    )
    .set(/\.(png|jpg|jpeg|gif)(\?.*)?$/, (url) =>
      window!
        .open('')!
        .document.write(
          `<!DOCTYPE html><html><head><style>body{margin:0;}img{width:unset;height:unset;max-width:100%;}</style></head><body><img src="${url}" /></body></html>`,
        ),
    );

  const regex = [...urlMap.keys()].find((regex) => regex.test(url));
  const previewFunction = regex ? urlMap.get(regex) : undefined;

  if (previewFunction) {
    previewFunction(url);
  } else {
    window.open(url);
  }
}

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
export function transferFileToBase64(content: any, contentType: string, callBack: any): void {
  const blob = new Blob([content], {
    type: contentType, // ;charset=utf-8
  });
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.addEventListener('loadend', () => {
    callBack?.({
      result: reader?.result,
      // // @ts-ignore
      // baseCode: Buffer?.from(reader?.result?.split('base64,')[1], 'base64')
    });
  });
}

/**
 * 下载一个链接文档
 * @example
 * download('https://xxx.com/xxx', 'xxx'); /// 下载后端返回的流
 * @param link 链接
 * @param name 文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)
 * @returns
 * @category File-文件相关
 */
export function download(link: string, name: string) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1);
  }
  const eleLink = document.createElement('a');
  eleLink.download = name;
  eleLink.style.display = 'none';
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

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
export function downloadContent(name: string, content: any) {
  if (!name) {
    name = 'unknown';
  }
  try {
    if (!(content instanceof Blob)) {
      content = new Blob([content]);
    }
    const link = URL.createObjectURL(content);
    download(link, name);
    setTimeout(() => {
      URL.revokeObjectURL(link);
    }, 0);
  } catch (e) {
    console.log('js-xxx:downloadContentError--->', e);
  }
}

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
export function transferCSVData(fields: { label?: string; prop: string }[], data: any[]): string {
  const keys = fields.map((field) => field.prop);
  let result = `${fields.map((field) => forceToStr(field.label ?? field.prop ?? 'unknown')).join(',')}\n`;
  for (let i = 0; i < data.length; i++) {
    const item = data[i] ?? {};
    result += keys.map((key) => forceToStr(item[key])).join(',') + '\n';
  }
  return result;
}

// eslint-disable-next-line spellcheck/spell-checker
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
export function exportFile(data: string, fileName?: string, fileType = 'txt'): void {
  if (isUrl(data)) {
    // eslint-disable-next-line spellcheck/spell-checker
    download(data, `${fileName ?? formatDate(new Date(), 'yyyy-mm-dd-hhiiss')}.${fileType}`);
    return;
  }
  // 加入特殊字符确保 utf-8
  // eslint-disable-next-line spellcheck/spell-checker
  const uri = `data:${getContentType(fileType)};charset=utf-8,\ufeff${safeEncodeURI(data)}`;
  // U+FEFF 是一个零宽度非断字符（Zero Width No-Break Space），也称为"字节顺序标记（Byte Order Mark，BOM）"。
  // eslint-disable-next-line spellcheck/spell-checker
  download(uri, `${fileName ?? formatDate(new Date(), 'yyyy-mm-dd-hhiiss')}.${fileType}`);
  // downloadContent 可以兼容落后浏览器的情况
}
/**
 * 文件大小格式化
 * @example
 * formatBytes(1024); /// '1.00 KB'
 * @param bytes 文件大小 bytes
 * @param precision 精度
 * @returns
 * @category File-文件相关
 */
export function formatBytes(bytes: number, precision = 2): string {
  const units: string[] = ['B', 'KB', 'MB', 'GB', 'TB'];
  let pow = Math.floor((bytes ? Math.log(bytes) : 0) / Math.log(1024));
  pow = Math.min(pow, units.length - 1);
  bytes /= 1 << (10 * pow);
  const unit = units?.[pow] ?? units[0];
  return bytes.toFixed(precision) + ' ' + unit;
}

/**
 * 解析或者读取文件内容
 * @example
 * readFileContent('test.txt', 'text').then(res => console.log(res)); /// 读取文件内容
 * readFileContent('test.txt').then(res => console.log(res)); /// 读取文件内容
 * readFileContent('test.csv').then(res => console.log(res)); /// 读取文件内容
 * readFileContent('test.txt', 'base64').then(res => console.log(res)); /// 读取文件内容为 base64
 * readFileContent('test.txt', 'blob').then(res => console.log(res)); /// 读取文件内容为 blob
 * readFileContent('test.txt', 'arrayBuffer').then(res => console.log(res)); /// 读取文件内容为 arrayBuffer
 * @param file 文件
 * @param type 类型
 * @returns
 * @category File-文件相关
 */
export function readFileContent(file: any, type?: 'text' | 'base64' | 'blob' | 'arrayBuffer'): Promise<any> {
  type = type ?? 'text';
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        // 优先使用 reader.result，如果不存在则使用 e.target.result
        const result = reader.result ?? (e.target as FileReader).result;
        if (type === 'blob' && result instanceof ArrayBuffer) {
          // 如果是 blob 类型，将 ArrayBuffer 转换为 Blob
          resolve(new Blob([result], { type: file.type }));
        } else {
          resolve(result);
        }
      };
      reader.onerror = reject;

      switch (type) {
        case 'text':
          reader.readAsText(file);
          break;
        case 'base64':
          reader.readAsDataURL(file);
          break;
        case 'blob':
        case 'arrayBuffer':
          reader.readAsArrayBuffer(file);
          break;
        default:
          reader.readAsText(file);
          break;
      }
    } catch (e) {
      reject(e);
    }
  });
}
