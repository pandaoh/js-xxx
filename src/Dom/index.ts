/*
 * @Author: HxB
 * @Date: 2022-04-26 15:37:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-23 18:26:10
 * @Description: 利用 dom 的一些方法
 * @FilePath: \js-xxx\src\Dom\index.ts
 */

/**
 * 字符串转实体字符
 * Example: `str2html('<>&"') => '&lt;&gt;&amp;&quot;'`
 * @param str 字符串
 * @returns
 */
export function str2html(str: string): string {
  let div = document.createElement('div');
  div.textContent = str;
  let specialChars: string = div.innerHTML;
  return specialChars;
}

/**
 * 实体字符转字符串
 * Example: `html2str('&lt;&gt;&amp;&quot;') => '<>&"'`
 * @param value 实体字符串
 * @returns
 */
export function html2str(value: string): string | null {
  let div = document.createElement('div');
  div.innerHTML = value;
  let str: string | null = div.textContent;
  return str;
}

/**
 * 插入某元素到指定 Element 之后
 * Example: `insertAfter(document.getElementById('a'), document.getElementById('b'));`
 * @param newElement 某元素
 * @param targetElement 指定元素
 * @returns
 */
export function insertAfter(newElement: any, targetElement: any) {
  let parent: any = targetElement.parentNode;
  if (parent.lastElementChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextElementSibling);
  }
}

/**
 * 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * Example: `offDefaultEvent(event) => 阻止冒泡事件&阻止默认行为&阻止事件捕获`
 * @param event 事件
 * @returns
 */
export function offDefaultEvent(event: any) {
  let e = event || window.event;
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return false;
}

/**
 * 添加指定元素复制事件
 * Example: `copyContent(document.getElementById('copy')) => 复制 #copy 的内容成功`
 * @param targetDom 目标内容元素
 * @param addMsg 复制后增加内容
 */
export function copyContent(targetDom: any, addMsg: any = null) {
  let Msg = !targetDom.innerText ? targetDom.value : targetDom.innerText;
  let tempDom = document.createElement('input');
  let info = '复制成功！';
  tempDom.style.position = 'absolute';
  tempDom.style.top = '-5201314px';
  tempDom.style.left = '-5201314px';
  tempDom.value = Msg;
  tempDom.value += addMsg === null ? '' : addMsg;
  document.body.appendChild(tempDom);
  targetDom.blur();
  tempDom.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    info = '浏览器不支持此操作，请手动复制。';
  }
  document.body.removeChild(tempDom);
  console.log('js-xxx:copyContent', info);
  return Msg;
}

/**
 * 滚动到顶部
 * 平滑滚动 css：`scroll-behavior: smooth;`
 * Example: `scrollToTop('body') => 滚动到顶部`
 * @param elementSelector 指定元素选择器
 * @param to ('start'|'end')[default: 'start']
 */
export function scrollToTop(elementSelector: string, to: 'start' | 'end' = 'start') {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: to });
  }
}

/**
 * 滚动到底部
 * 平滑滚动 css：`scroll-behavior: smooth;`
 * Example: `scrollToBottom('body') => 滚动到底部`
 * @param elementSelector 指定元素选择器
 */
export function scrollToBottom(elementSelector: string) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
}

/**
 * 找元素的第 n 级父元素
 * Example: `findParents(document.getElementById('test'), 3) => #test 的第三个父元素`
 * @param element 指定元素
 * @param n 第几个
 */
export function findParents(element: any, n: number) {
  while (element && n) {
    element = element.parentElement ? element.parentElement : element.parentNode;
    n--;
  }
  return element;
}

/**
 * 找元素的所有子元素，解决浏览器兼容问题。
 * Example: `findChildren(document.getElementById('test')) => #test 的所有子元素数组`
 * @param element 指定元素
 * @returns
 */
export function findChildren(element: any) {
  let children: any[] = element.childNodes,
    result: any[] = [],
    len = children.length;
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      result.push(children[i]);
    }
  }
  return result;
}

/**
 * 获取窗口尺寸
 * Example: `getViewportSize() => { width: 1280, height: 649 }`
 * @returns
 */
export function getViewportSize() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    };
  } else {
    // ie8 及其以下
    if (document.compatMode === 'BackCompat') {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      };
    }
  }
}

/**
 * 获取任一元素的 style 任意属性
 * Example: `getStyle(document.getElementById('test'), 'width') => #test 的 width 属性`
 * @param element 指定元素
 * @param name 属性名称
 * @returns
 */
export function getStyleByName(element: any, name: any) {
  return window.getComputedStyle ? window.getComputedStyle(element, null)[name] : element.currentStyle[name];
}

/**
 * 添加 link 标签
 * Example: `appendLink('favicon', 'favicon') => 添加一个 link 标签`
 * @param linkUrl 链接地址
 * @param rel 类型
 * @returns
 */
export function appendLink(linkUrl: string, rel: string = 'stylesheet'): HTMLLinkElement {
  var link = document.createElement('link');
  link.rel = rel;
  link.href = linkUrl;
  document.head.appendChild(link);
  return link;
}

/**
 * 添加 script 标签
 * Example: `appendScript('./test.js') => 添加一个 script 标签`
 * @param scriptUrl 脚本地址
 * @param async 是否异步
 * @param defer 是否延迟加载
 * @returns
 */
export function appendScript(scriptUrl: string, async: boolean = false, defer: boolean = false): HTMLScriptElement {
  var script = document.createElement('script');
  script.src = scriptUrl;
  script.async = async;
  script.defer = defer;
  document.head.appendChild(script);
  return script;
}

/**
 * 下载一个链接文档
 * Example: `download('https://xxx.com/xxx', 'xxx') => 下载后端返回的流`
 * @param link 链接
 * @param name 文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)
 * @returns
 */
export function download(link: string, name: string) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1);
  }
  let eleLink = document.createElement('a');
  eleLink.download = name;
  eleLink.style.display = 'none';
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

/**
 * 在浏览器中自定义下载一些内容
 * Example:
 * `downloadContent('test.txt', 'test txt content') => 下载返回的流`
 * `downloadContent('test.json', JSON.stringify({content: 'test json'})) => 下载返回的流`
 * @param name 文件名称(需带后缀)，默认 txt。
 * @param content 内容
 * @returns
 */
export function downloadContent(name: string, content: BlobPart | any) {
  if (!name) {
    name = 'unknown';
  }
  try {
    if (!(content instanceof Blob)) {
      content = new Blob([content]);
    }
    const link = URL.createObjectURL(content);
    download(link, name);
  } catch (e) {
    console.log('js-xxx:downloadContentError', e);
  }
}

/**
 * 给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
 * 一般来说设置两层，滚动的区间就是父元素的大小。
 * `<div class="demo-container"><div id="#demo">...</div></div>`
 * Example:
 * `marquee('#demo') => 默认横向正常滚动(loopType=normal)`
 * `marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}) => Y 轴无限无缝滚动，speed > 0 越小速度越快。`
 * `marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}) => X 轴无限来回滚动`
 * @param selector
 * @param options
 */
export function marquee(
  selector: string,
  options?: {
    direction?: 'X' | 'Y';
    loopType?: 'infinite' | 'normal' | 'origin';
    speed?: number;
    style?: string;
    parentStyle?: string;
  }
): void {
  try {
    const cssAnimation =
      '@keyframes marquee-ANIMATION_NAME{0%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0)}50%{transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-webkit-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-moz-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-ms-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-o-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0)}100%{transform:translate3d(X_END_VAL,Y_END_VAL,0);-webkit-transform:translate3d(X_END_VAL,Y_END_VAL,0);-moz-transform:translate3d(X_END_VAL,Y_END_VAL,0);-ms-transform:translate3d(X_END_VAL,Y_END_VAL,0);-o-transform:translate3d(X_END_VAL,Y_END_VAL,0)}}';
    const tempId = selector.replace(/[.#]/g, '');
    const styleElId = `style-${tempId}`;
    const $animationStyle = document.getElementById(styleElId) ?? document.createElement('style');
    $animationStyle.id = styleElId;
    const $marqueeDom: any = document.querySelector(selector);
    $marqueeDom?.setAttribute(
      'style',
      `overflow:visible;animation-name:marquee-${tempId};animation-timing-function:linear;animation-iteration-count:infinite;animation-duration:${
        ((options?.direction === 'Y' ? $marqueeDom.clientHeight : $marqueeDom.clientWidth) / 200) *
          (options?.speed ?? 3) ?? 5
      }s;${options?.style ?? ''}`
    );
    if (options?.direction === 'Y') {
      $animationStyle.innerHTML = cssAnimation
        .replace('ANIMATION_NAME', tempId)
        .replace(/X_TEMP_VAL/g, '0')
        .replace(
          /Y_TEMP_VAL/g,
          options.loopType === 'origin' ? `calc(-100% + ${$marqueeDom?.parentElement?.offsetHeight ?? 0}px)` : '-50%'
        )
        .replace(/X_END_VAL/g, '0')
        .replace(/Y_END_VAL/g, options.loopType === 'origin' ? '0' : '-100%');
    } else {
      $animationStyle.innerHTML = cssAnimation
        .replace('ANIMATION_NAME', tempId)
        .replace(/Y_TEMP_VAL/g, '0')
        .replace(
          /X_TEMP_VAL/g,
          options?.loopType === 'origin' ? `calc(-100% + ${$marqueeDom?.parentElement?.offsetWidth ?? 0}px)` : '-50%'
        )
        .replace(/Y_END_VAL/g, '0')
        .replace(/X_END_VAL/g, options?.loopType === 'origin' ? '0' : '-100%');
    }
    $marqueeDom?.parentElement?.setAttribute('style', `overflow:hidden;${options?.parentStyle ?? ''}`);
    if (options?.loopType === 'infinite') {
      $marqueeDom.parentElement.innerHTML = $marqueeDom.outerHTML + $marqueeDom.outerHTML;
    } else {
      // $marqueeDom.parentElement.innerHTML = $marqueeDom.outerHTML;
    }
    !document.getElementById(styleElId) && document.getElementsByTagName('head')[0].appendChild($animationStyle);
  } catch (e) {
    console.log('js-xxx:marqueeError', e);
  }
}
