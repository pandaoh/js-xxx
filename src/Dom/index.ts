/*
 * @Author: HxB
 * @Date: 2022-04-26 15:37:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-03-03 16:29:00
 * @Description: 利用 dom 的一些方法
 * @FilePath: \js-xxx\src\Dom\index.ts
 */

import { setEventListener } from '@/Tools';

/**
 * 字符串转实体字符
 * Example: `str2html('<>&"') => '&lt;&gt;&amp;&quot;'`
 * @param str 字符串
 * @returns
 */
export function str2html(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  const specialChars: string = div.innerHTML;
  return specialChars;
}

/**
 * 实体字符转字符串
 * Example: `html2str('&lt;&gt;&amp;&quot;') => '<>&"'`
 * @param value 实体字符串
 * @returns
 */
export function html2str(value: string): string | null {
  const div = document.createElement('div');
  div.innerHTML = value;
  const str: string | null = div.textContent;
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
  const parent: any = targetElement.parentNode;
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
  const e = event || window.event;
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
 * @returns
 */
export function copyContent(targetDom: any, addMsg: any = null) {
  const Msg = !targetDom.innerText ? targetDom.value : targetDom.innerText;
  const tempDom = document.createElement('input');
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
 * @returns
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
 * @returns
 */
export function scrollToBottom(elementSelector: string) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
}

/**
 * Y 轴滚动到指定位置
 * Example:
 *  `scrollYTo(0) => 滚动到顶部`
 *  `scrollYTo('start', null, document.documentElement) => 滚动到顶部`
 *  `scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')) => 滚动到底部`
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 */
export function scrollYTo(targetVal: 'start' | 'end' | number, callback: any, dom: any = document.documentElement) {
  const customVal: any = {
    start: 0,
    end: dom.scrollHeight - dom.clientHeight,
  };
  targetVal = customVal[targetVal] ?? targetVal;
  if (callback && targetVal != dom.scrollTop) {
    let timer: any;
    const cancel = setEventListener(
      'scroll',
      () => {
        clearTimeout(timer);
        callback(getScrollPercent('Y', dom));
        timer = setTimeout(cancel, 100);
      },
      window
    );
    // 防止位置已经到极限了，没触发 scroll 事件。
    timer = setTimeout(cancel, 100);
  }
  window.scroll({ top: customVal[targetVal] ?? targetVal, behavior: 'smooth' });
  /* 新版 demo */
  // // back2top
  // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  // // back2bottom
  // document.documentElement.scroll({ top: document.documentElement.scrollHeight, left: 0, behavior: 'smooth' });
  // window.scroll({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
  /* 新版 demo */
  /* 旧版方法 */
  // clearInterval(dom.timer);
  // dom.timer = setInterval(function () {
  //   var step = (targetVal - dom.scrollY) / 10;
  //   step = step > 0 ? Math.ceil(step) : Math.floor(step);
  //   if (dom.scrollY == targetVal) {
  //     clearInterval(dom.timer);
  //     callback && callback();
  //   }
  //   window.scroll(0, dom.scrollY + step);
  // }, 15);
  // // scrollTo();
  // // scrollTo(window, document.documentElement.scrollHeight - document.body.clientHeight, () => console.log('finish'));
  // function _customScrollEvent() {
  //   // @ts-ignore
  //   const div = this.document.getElementById('back2top');
  //   if (window.scrollY > 150) {
  //     div.style.display = 'block';
  //     div.style.opacity = 0.5;
  //   } else {
  //     div.style.display = 'none';
  //   }
  // }
  /* 旧版方法 */
}

/**
 * X 轴滚动到指定位置
 * Example:
 *  `scrollXTo(0) => 滚动到左侧`
 *  `scrollXTo('start', null, document.documentElement) => 滚动到左侧`
 *  `scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')) => 滚动到右侧`
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 */
export function scrollXTo(targetVal: 'start' | 'end' | number, callback: any, dom: any = document.documentElement) {
  const customVal: any = {
    start: 0,
    end: dom.scrollWidth - dom.clientWidth,
  };
  targetVal = customVal[targetVal] ?? targetVal;
  if (callback && targetVal != dom.scrollLeft) {
    let timer: any;
    const cancel = setEventListener(
      'scroll',
      () => {
        clearTimeout(timer);
        callback(getScrollPercent('X', dom));
        timer = setTimeout(cancel, 100);
      },
      window
    );
    // 防止位置已经到极限了，没触发 scroll 事件。
    timer = setTimeout(cancel, 100);
  }
  window.scroll({ left: customVal[targetVal] ?? targetVal, behavior: 'smooth' });
}

/**
 * 获取滚动条百分比
 * Example: `getScrollPercent(document.documentElement, 'Y') => 0.581134549876`
 * @param direction X/Y 轴的进度条
 * @param dom 元素
 * @returns
 */
export function getScrollPercent(direction: 'X' | 'Y' = 'Y', dom: any = document.documentElement): number {
  let percent: number;
  try {
    if (direction === 'X') {
      percent = Number(dom.scrollLeft.toFixed(2)) == 0 ? 0 : dom.scrollLeft / (dom.scrollWidth - dom.clientWidth);
    } else {
      percent = Number(dom.scrollTop.toFixed(2)) == 0 ? 0 : dom.scrollTop / (dom.scrollHeight - dom.clientHeight);
    }
  } catch (e) {
    console.log('js-xxx:getScrollPercentError', e);
    percent = -1;
  }
  return percent;
  // // scroll percent
  // window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
}

/**
 * 找元素的第 n 级父元素
 * Example: `findParents(document.getElementById('test'), 3) => #test 的第三个父元素`
 * @param element 指定元素
 * @param n 第几个
 * @returns
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
  const children: any[] = element.childNodes,
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
      h: window.innerHeight,
    };
  } else {
    // ie8 及其以下
    if (document.compatMode === 'BackCompat') {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
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
export function appendLink(linkUrl: string, rel = 'stylesheet'): HTMLLinkElement {
  const link = document.createElement('link');
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
export function appendScript(scriptUrl: string, async = false, defer = false): HTMLScriptElement {
  const script = document.createElement('script');
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
  const eleLink = document.createElement('a');
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
 * @param name 文件名称(需带后缀)，默认 txt 。
 * @param content 内容 BlobPart | any
 * @returns
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
  } catch (e) {
    console.log('js-xxx:downloadContentError', e);
  }
}

/**
 * 给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
 * 一般来说设置两层，滚动的区间就是父元素的大小。
 * 若 #demo 高度小于 container，除非 loopType 设置 infinite，否则不会有动画。
 * `<div class="demo-container"><div id="#demo">...span.items...</div></div>`
 * Example:
 * `marquee('#demo') => 默认横向正常滚动(loopType=normal)`
 * `marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}) => Y 轴无限无缝滚动，speed > 0 越小速度越快。`
 * `marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}) => X 轴无限来回滚动`
 * @param selector
 * @param options
 * @returns
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
    const noAnimation =
      options?.loopType != 'infinite' && $marqueeDom?.clientHeight < $marqueeDom?.parentElement?.offsetHeight;
    $marqueeDom?.setAttribute(
      'style',
      `overflow:visible;animation-name:marquee-${tempId};animation-timing-function:linear;animation-iteration-count:infinite;animation-duration:${
        ((options?.direction === 'Y' ? $marqueeDom.clientHeight : $marqueeDom.clientWidth) / 200) *
          (options?.speed ?? 3) ?? 5
      }s;${noAnimation ? 'animation-duration:0s;' : ''}${options?.style ?? ''}`
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
