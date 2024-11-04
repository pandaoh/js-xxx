/* eslint-disable max-lines */
/*
 * @Author: HxB
 * @Date: 2022-04-26 15:37:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-27 18:16:53
 * @Description: 利用 dom 的一些函数
 * @FilePath: \js-xxx\src\Dom\index.ts
 */

import { parseJSON, textSplitCase } from '@/String';
import { setEventListener } from '@/Tools';

/**
 * 开启全屏
 * @example
 * openFullscreen(); /// 开启全屏
 * @param element 元素
 * @returns
 * @category Dom-工具方法
 */
export function openFullscreen(element: any = document.body) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

/**
 * 关闭全屏
 * @example
 * closeFullscreen(); /// 关闭全屏
 * @returns
 * @category Dom-工具方法
 */
export function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    // @ts-ignore
  } else if (document.msExitFullscreen) {
    // @ts-ignore
    document.msExitFullscreen();
    // @ts-ignore
  } else if (document.mozCancelFullScreen) {
    // @ts-ignore
    document.mozCancelFullScreen();
    // @ts-ignore
  } else if (document.webkitExitFullscreen) {
    // @ts-ignore
    document.webkitExitFullscreen();
  }
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 字符串转实体字符
 * @example
 * str2html('<>&"'); /// '&lt;&gt;&amp;&quot;'
 * @param str 字符串
 * @returns
 * @category Custom-转码
 */
export function str2html(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  const specialChars: string = div.innerHTML;
  return specialChars;
}

/**
 * 实体字符转字符串
 * @example
 * html2str('&lt;&gt;&amp;&quot;'); /// '<>&"'
 * @param value 实体字符串
 * @returns
 * @category Custom-转码
 */
export function html2str(value: string): string | null {
  const div = document.createElement('div');
  div.innerHTML = value;
  const str: string | null = div.textContent;
  return str;
}

/**
 * 插入某元素到指定 Element 之后
 * @example
 * insertAfter(document.getElementById('a'), document.getElementById('b'));
 * @param newElement 某元素
 * @param targetElement 指定元素
 * @returns
 * @category Dom-工具方法
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
 * Y 轴滚动到指定位置
 * @example
 * scrollYTo(0); /// 滚动到顶部
 * scrollYTo('start', null, document.documentElement); /// 滚动到顶部
 * scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到底部
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 * @category Scroll-滚动相关
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
      false,
      window,
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
  /* 旧版函数 */
  // clearInterval(dom.timer);
  // dom.timer = setInterval(function () {
  //   let step = (targetVal - dom.scrollY) / 10;
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
  /* 旧版函数 */
}

/**
 * X 轴滚动到指定位置
 * @example
 * scrollXTo(0); /// 滚动到左侧
 * scrollXTo('start', null, document.documentElement); /// 滚动到左侧
 * scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到右侧
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 * @category Scroll-滚动相关
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
      false,
      window,
    );
    // 防止位置已经到极限了，没触发 scroll 事件。
    timer = setTimeout(cancel, 100);
  }
  window.scroll({ left: customVal[targetVal] ?? targetVal, behavior: 'smooth' });
}

/**
 * 将元素滚动到视野范围
 * @example
 * scrollIntoView(document.querySelector('.test')); /// test 元素滚动到视野范围
 * scrollIntoView(document.querySelector('.test'), 'start'); /// test 元素滚动到视野范围顶部
 * @param dom 元素对象
 * @param targetVal 'start' | 'end' | 'center' | 'nearest'
 * @returns
 * @category Scroll-滚动相关
 */
export function scrollToView(
  dom: any = document.documentElement,
  targetVal: 'start' | 'end' | 'center' | 'nearest' = 'center',
) {
  dom.scrollIntoView({
    behavior: 'smooth',
    block: targetVal,
    inline: targetVal,
  });
  // 「 start 」「默认值」元素顶部和滚动容器顶部对齐
  // 「 center 」元素和滚动容器居中对齐
  // 「 end 」元素底部和滚动容器底部对齐
  // 「 nearest 」如果已经在视野范围内，就不滚动，否则就滚动到顶部或者底部（哪个更靠近就滚到哪里）。
}

/**
 * 获取滚动条百分比
 * @example
 * getScrollPercent(document.documentElement, 'Y'); /// 0.581134549876
 * @param direction X/Y 轴的进度条
 * @param dom 元素
 * @returns
 * @category Scroll-滚动相关
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
    console.log('js-xxx:getScrollPercentError--->', e);
    percent = -1;
  }
  return percent;
  // // scroll percent
  // window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
}

/**
 * 获取最近的可滚动父元素。
 * 支持普通 DOM 、 Shadow DOM 和 iframe 。
 * @example
 * getScrollParent(document.querySelector('.form-error')); // Form
 * getScrollParent(); /// document.documentElement
 * @param element 目标元素
 * @returns
 * @category Scroll-滚动相关
 */
export function getScrollParent(element?: HTMLElement | any): HTMLElement | Document | any {
  let parent = element?.parentElement;

  while (parent) {
    const style = window.getComputedStyle(parent);
    const isScrollableY = style.overflowY === 'auto' || style.overflowY === 'scroll';
    const isScrollableX = style.overflowX === 'auto' || style.overflowX === 'scroll';
    const canScrollY = parent.scrollHeight > parent.clientHeight;
    const canScrollX = parent.scrollWidth > parent.clientWidth;

    if ((isScrollableY && canScrollY) || (isScrollableX && canScrollX)) {
      return parent;
    }
    parent = parent.parentElement;
  }

  // 处理 Shadow DOM
  const rootNode = element?.getRootNode();
  if (rootNode instanceof ShadowRoot) {
    return rootNode.host;
  }

  // 处理 iframe
  if (element?.ownerDocument !== document) {
    return element?.ownerDocument?.documentElement;
  }

  return document.documentElement; // 如果没有找到可滚动的父元素，返回 `document.documentElement`
}

/**
 * 滚动到指定元素，并将其显示在可滚动容器的中间。
 * 适用于表单报错时定位报错元素，支持嵌套滚动容器。
 * @param options 配置对象，包含以下属性：
 *   - {string} selector - 目标元素的 CSS 选择器。
 *   - {number} [delay=0] - 滚动执行的延迟时间（毫秒）。
 *   - {boolean} [parent=false] - 是否在主应用中查找元素（适用于 Shadow DOM 情况）。
 * @example
 * // 立即滚动到指定元素
 * scrollToElement({
 *   selector: '#error-element',
 *   delay: 0,
 *   parent: true,
 * });
 * // 延迟滚动到指定元素
 * scrollToElement({
 *   selector: '.form-error',
 *   delay: 100,
 * });
 * @returns
 * @category Scroll-滚动相关
 */
export function scrollToElement(options: { selector: string; delay?: number; parent?: boolean }) {
  const { selector, delay = 0, parent = false } = options;

  const performScroll = () => {
    // 选择合适的文档上下文
    const root = parent ? document.documentElement : document;
    const element = root.querySelector(selector);

    if (!element) {
      console.warn(`Element with selector "${selector}" not found.`);
      return;
    }

    // 获取目标元素的可滚动父容器
    const scrollContainer = getScrollParent(element);
    if (!scrollContainer) {
      console.warn(`No scroll parent found for element with selector "${selector}".`);
      return;
    }

    // 计算滚动位置
    const elementRect = element.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const scrollTop =
      scrollContainer.scrollTop +
      elementRect.top -
      containerRect.top -
      containerRect.height / 2 +
      elementRect.height / 2;

    // 执行滚动操作
    scrollContainer.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    });
  };

  if (delay > 0) {
    setTimeout(performScroll, delay);
  } else {
    performScroll();
  }
}

/**
 * 找元素的第 n 级父元素
 * @example
 * findParents(document.getElementById('test'), 3); /// #test 的第三个父元素
 * @param element 指定元素
 * @param n 第几个
 * @returns
 * @category Dom-工具方法
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
 * @example
 * findChildren(document.getElementById('test')); /// #test 的所有子元素数组
 * @param element 指定元素
 * @returns
 * @category Dom-工具方法
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
 * @example
 * getViewportSize(); /// { width: 1280, height: 649 }
 * @returns
 * @category Dom-工具方法
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
 * @example
 * getStyle(document.getElementById('test'), 'width'); /// #test 的 width 属性
 * @param element 指定元素
 * @param name 属性名称
 * @returns
 * @category Dom-工具方法
 */
export function getStyleByName(element: any, name: any) {
  return window.getComputedStyle ? window.getComputedStyle(element, null)[name] : element.currentStyle[name];
}

/**
 * 添加 link 标签
 * @example
 * appendLink('favicon', 'favicon'); /// 添加一个 link 标签
 * @param linkUrl 链接地址
 * @param rel 类型
 * @returns
 * @category Dom-工具方法
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
 * @example
 * appendScript('./test.js'); /// 添加一个 script 标签
 * @param scriptUrl 脚本地址
 * @param async 是否异步
 * @param defer 是否延迟加载
 * @returns
 * @category Dom-工具方法
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
 * 给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
 * 一般来说设置两层，滚动的区间就是父元素的大小。
 * 若 #demo 高度小于 container，除非 loopType 设置 infinite，否则不会有动画。
 * <div class="demo-container"><div id="#demo">...span.items...</div></div>
 * @example
 * marquee('#demo'); /// 默认横向正常滚动(loopType=normal)
 * marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}); /// Y 轴无限无缝滚动，speed > 0 越小速度越快。
 * marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}); /// X 轴无限来回滚动
 * @param selector 选择器字符串
 * @param options 动画配置
 * @returns
 * @category BXH-自定义动画
 */
export function marquee(
  selector: string,
  options?: {
    direction?: 'X' | 'Y';
    loopType?: 'infinite' | 'normal' | 'origin';
    speed?: number;
    style?: string;
    parentStyle?: string;
  },
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
      }s;${noAnimation ? 'animation-duration:0s;' : ''}${
        options?.style ??
        `${
          options?.loopType === 'origin'
            ? options?.direction === 'Y'
              ? 'padding-bottom:12px;'
              : 'padding-right:12px;'
            : ''
        }`
      }`,
    );
    if (options?.direction === 'Y') {
      $animationStyle.innerHTML = cssAnimation
        .replace('ANIMATION_NAME', tempId)
        .replace(/X_TEMP_VAL/g, '0')
        .replace(
          /Y_TEMP_VAL/g,
          options.loopType === 'origin' ? `calc(-100% + ${$marqueeDom?.parentElement?.offsetHeight ?? 0}px)` : '-50%',
        )
        .replace(/X_END_VAL/g, '0')
        .replace(/Y_END_VAL/g, options.loopType === 'origin' ? '0' : '-100%');
    } else {
      $animationStyle.innerHTML = cssAnimation
        .replace('ANIMATION_NAME', tempId)
        .replace(/Y_TEMP_VAL/g, '0')
        .replace(
          /X_TEMP_VAL/g,
          options?.loopType === 'origin' ? `calc(-100% + ${$marqueeDom?.parentElement?.offsetWidth ?? 0}px)` : '-50%',
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
    console.log('js-xxx:marqueeError--->', e);
  }
}

/**
 * 自动堆叠
 * @example
 * stackSticky('.stack', 'top'); /// 所有 .stack 元素自动在 top 上堆叠
 * stackSticky('.stack', 'left'); /// 所有 .stack 元素自动在 left 上堆叠
 * @param selectors 选择器字符串
 * @param direction 堆叠方向
 * @returns
 * @category Dom-工具方法
 */
export function stackSticky(selectors: string, direction = 'top'): void {
  const elements = document.querySelectorAll(`${selectors}`);
  let offset = 0;
  let prevRect: any;
  elements.forEach((element: any) => {
    const rect = element.getBoundingClientRect();
    element.style.position = 'sticky';
    if (prevRect) {
      switch (direction) {
        case 'top':
          element.style.top = `${offset}px`;
          break;
        case 'bottom':
          element.style.bottom = `${offset}px`;
          break;
        case 'left':
          element.style.left = `${offset}px`;
          break;
        case 'right':
          element.style.right = `${offset}px`;
          break;
        default:
          break;
      }
    } else {
      element.style[direction] = `${offset}px`;
    }
    offset += direction === 'top' || direction === 'bottom' ? rect.height : rect.width;
    prevRect = rect;
  });
}

/**
 * 自动计算 font-size 并设置
 * @example
 * calcFontSize(); /// 按 16/9 计算并设置
 * calcFontSize(16/10, true); /// 按 16/10 计算并设置内容居中
 * calcFontSize(16/10, true, 'body'); /// 按 16/10 计算并设置 body 偏移使得内容居中
 * @param clientRatio 屏幕比例
 * @param contentCenter 内容是否居中
 * @param offsetSelector 偏移元素选择器，默认设置 html 根节点偏移。
 * @returns
 * @category Dom-工具方法
 */
export function calcFontSize(clientRatio = 16 / 9, contentCenter = false, offsetSelector: any) {
  const $doc = document.documentElement;
  function _setHtmlFontSize() {
    const screenRatio = $doc.clientWidth / $doc.clientHeight;
    const pageWidth = (screenRatio > clientRatio ? clientRatio / screenRatio : 1) * $doc.clientWidth;
    const pageHeight = pageWidth / clientRatio;
    $doc.style.fontSize = (pageWidth / 100).toFixed(3) + 'px';
    if (contentCenter) {
      try {
        (offsetSelector ? document.querySelector(offsetSelector) : $doc).style.paddingTop =
          (($doc.clientHeight - pageHeight) / 2).toFixed(3) + 'px';
      } catch (e) {
        console.log('js-xxx:calcFontSizeError--->', e);
      }
    }
  }
  _setHtmlFontSize();
  window.addEventListener('resize', _setHtmlFontSize);
  return () => {
    window.removeEventListener('resize', _setHtmlFontSize);
  };
}

/**
 * px 转 rem
 * @example
 * px2rem(30); /// 转化后的 rem
 * @param px 像素值
 * @returns
 * @category Dom-工具方法
 */
export function px2rem(px: number) {
  const htmlFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  return px / htmlFontSize;
}

/**
 * 填对应值到对应的 dom 中
 * @example
 * dataTo('.className', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class-name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class_name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class.name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('#id.name', 'xxx'); /// xxx 会填入到 id 名为 id-name 的元素中
 * @param key key 值
 * @param value value 值
 * @returns
 * @category Dom-工具方法
 */
export function dataTo(key: string, value: any): void {
  let $dom;
  try {
    key = key.toString();
    $dom = document.querySelector((['.'].includes(key.charAt(0)) ? key.charAt(0) : '') + textSplitCase(key).join('-'));
    if ($dom) {
      $dom.innerHTML = value;
      // @ts-ignore
      $dom.value = value;
    }
  } catch (e) {
    console.log('js-xxx:dataToError--->', e, { key, value, $dom });
  }
}

/**
 * 给元素添加/删除类
 * @example
 * toggleClass(myElement, 'active'); /// 给元素添加/删除 active 类
 * toggleClass(myElement, ['active', 'disabled']); /// 给元素添加/删除 active/disabled 类
 * @param element 元素
 * @param className 类
 * @returns
 * @category Dom-工具方法
 */
export function toggleClass(element: any, className: string | Array<string>) {
  if (Array.isArray(className)) {
    className.forEach((item) => {
      toggleClass(element, item);
    });
    return;
  }

  if (element.classList) {
    element.classList.toggle(className);
  } else {
    const classes = element.className.split(' ');
    const existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }
}

/**
 * 展示水滴加载动画
 * @example
 * const hideProcess = showProcess(myElement); /// 在元素中显示水滴加载动画
 * hideProcess(); /// 隐藏水滴加载动画
 * @param element 元素
 * @returns
 * @category BXH-自定义动画
 */
export function showProcess(element: any) {
  // 设置相对定位样式
  element.style.position = 'relative';

  // 检查是否已经创建了样式
  const existingStyle = document.getElementById('xxx-process-style');
  if (!existingStyle) {
    // 创建样式字符串
    const css =
      // eslint-disable-next-line spellcheck/spell-checker
      '.xxx-progress{position:absolute;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);--r1:154%;--r2:68.5%;width:60px;height:60px;border-radius:50%;background:radial-gradient(var(--r1) var(--r2) at top,#0000 79.5%,#269af2 80%) center left,radial-gradient(var(--r1) var(--r2) at bottom,#269af2 79.5%,#0000 80%) center center,radial-gradient(var(--r1) var(--r2) at top,#0000 79.5%,#269af2 80%) center right,#ccc;background-size:50.5% 220%;background-position:-100% 0%,0% 0%,100% 0%;background-repeat:no-repeat;animation:xxx-p-animation 2s infinite linear;-webkit-transform:translate(-50);-moz-transform:translate(-50);-ms-transform:translate(-50);-o-transform:translate(-50);}@keyframes xxx-p-animation{33%{background-position:0% 33%,100% 33%,200% 33%;}66%{background-position:-100% 66%,0% 66%,100% 66%;}100%{background-position:0% 100%,100% 100%,200% 100%;}}';
    // 创建 <style> 元素并设置样式内容
    const style = document.createElement('style');
    style.id = 'xxx-process-style';
    style.innerHTML = css;
    // 将 <style> 元素添加到 <head> 中
    document.head.appendChild(style);
  }

  // 创建 <div> 元素并设置类名
  const $div = document.createElement('div');
  $div.className = 'xxx-progress';

  // 将 <div> 元素添加到指定元素中央
  element.appendChild($div);
  return () => {
    $div.remove();
  };
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 单击事件转换为多击事件
 * Author: WuXingHeng
 * @example
 * dom.onclick = onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack); /// void
 * @param delay 点击间隔
 * @param events 事件多击 rest 参数
 * @returns
 * @category Tools-点击事件相关
 */
export function onClick2MoreClick(delay = 300, ...events: Array<any>): any {
  let timer: any = null;
  let lastTime = 0;
  let count = 0;
  // click 事件传递的参数 args
  return (...args: any[]) => {
    clearTimeout(timer);
    const currentTime = new Date().getTime();
    count = currentTime - lastTime < delay ? count + 1 : 0;
    lastTime = new Date().getTime();
    events.forEach((event, i) => {
      if (i === count) {
        timer = setTimeout(() => {
          count = 0;
          lastTime = 0;
          event(...args);
        }, delay);
      }
    });
  };
}

/**
 * 单独绑定多击事件
 * @example
 * dom.onclick = bindMoreClick(moreClickCallBack, 4, 500); /// 绑定 4 击事件
 * @param fn 触发方法
 * @param times 几次点击触发
 * @param delay 点击间隔
 * @returns
 * @category Tools-点击事件相关
 */
export function bindMoreClick(fn: any, times = 3, delay = 300) {
  // count 从 0 开始
  times = times - 1;
  let timer: any = null;
  let lastTime = 0;
  let count = 0;
  return (...args: any[]) => {
    clearTimeout(timer);
    const currentTime = new Date().getTime();
    count = currentTime - lastTime < delay ? count + 1 : 0;
    lastTime = new Date().getTime();
    if (count === times) {
      timer = setTimeout(() => {
        count = 0;
        lastTime = 0;
        fn(...args);
      }, delay);
    }
  };
}

/**
 * 设置长按事件-支持加入单击事件
 * @example
 * addLongPressEvent(document.querySelector('.img-btn'), (event); /// console.log('addLongPressEvent'), 3000); /// 长按会触发事件
 * @param element 需要绑定事件的元素
 * @param longPressCallback 长按事件函数
 * @param duration 长按时间
 * @param clickCallback 单击事件函数(可选)
 * @returns
 * @category Tools-点击事件相关
 */
export function addLongPressEvent(element: any, longPressCallback: any, duration = 2500, clickCallback?: any) {
  if (!element) {
    return;
  }

  let timer: any;
  let longPressTriggered = false;

  const events = [
    { name: 'mousedown', handler: handleStart },
    { name: 'mouseup', handler: handleEnd },
    { name: 'mouseout', handler: handleEnd },
    { name: 'touchstart', handler: handleStart },
    { name: 'touchend', handler: handleEnd },
    { name: 'touchcancel', handler: handleEnd },
    { name: 'click', handler: handleClick },
  ];

  function handleStart(event: any) {
    start(event);
  }

  function handleEnd() {
    end();
  }

  function handleClick(event: any) {
    if (!longPressTriggered) {
      clickCallback && clickCallback(event);
    }
  }

  function start(event: any) {
    if (timer) return;
    timer = setTimeout(() => {
      longPressTriggered = true;
      longPressCallback && longPressCallback(event);
    }, duration);
  }

  function end() {
    clearTimeout(timer);
    timer = null;
    setTimeout(() => {
      longPressTriggered = false;
    }, 0);
  }

  for (const { name, handler } of events) {
    element.addEventListener(name, handler);
  }

  element.addEventListener('contextmenu', (event: any) => {
    event.preventDefault();
  });
}

/**
 * 设置网页 icon
 * @example
 * setIcon('/favicon.ico')
 * @param iconLink icon 链接
 * @returns
 * @category Dom-工具方法
 */
export function setIcon(iconLink: string) {
  const dom: any = document.querySelector('head [rel="icon"]');
  if (dom) {
    dom.setAttribute('href', iconLink);
    dom.setAttribute('rel', 'icon');
  } else {
    const iconDom = document.createElement('link');
    iconDom.setAttribute('rel', 'icon');
    iconDom.setAttribute('href', iconLink);
    document.querySelector('head')?.appendChild(iconDom);
  }
}

/**
 * 复制到剪贴板
 * @example
 * copyToClipboard('hello world')
 * @param text 内容文本
 * @returns
 * @category Dom-工具方法
 */
export function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text);
  } else {
    let info = '复制成功！';
    const tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.top = '-5201314px';
    tempInput.style.left = '-5201314px';
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // 将焦点移动到文档或输入元素上
    tempInput.focus();

    tempInput.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      info = '浏览器不支持此操作，请手动复制。';
    }
    document.body.removeChild(tempInput);
    console.log('js-xxx:copyToClipboard--->', info);
  }
}

/**
 * 获取鼠标选中内容
 * @example
 * getSelectText()
 * @returns
 * @category Dom-工具方法
 */
export function getSelectText() {
  return window?.getSelection()?.toString();
}

/**
 * 触发某个键盘按键事件
 * @example
 * emitKeyboardEvent(108, 'keyup'); // 小键盘回车事件
 * emitKeyboardEvent('Enter'); // 回车事件
 * emitKeyboardEvent(KEYBOARD_CODE.TAB, 'keypress'); // TAB 事件
 * @param keyOrKeyCode 触发键盘 code，默认为 13 。
 * @param eventType 事件类型，默认为 'keydown' 。
 * @param element 目标元素，默认为 document.body ，支持传 document 。
 * @returns
 * @category Tools-事件相关
 */
export function emitKeyboardEvent(
  keyOrKeyCode: string | number = 13,
  eventType: 'keydown' | 'keypress' | 'keyup' = 'keydown',
  element: HTMLElement | null = document.body,
): void {
  try {
    const options: any = {
      bubbles: true,
      cancelable: true,
    };

    if (typeof keyOrKeyCode === 'string') {
      options.key = keyOrKeyCode;
    } else if (typeof keyOrKeyCode === 'number') {
      // options.key = String.fromCharCode(keyOrKeyCode);
      options.keyCode = keyOrKeyCode;
    } else {
      console.error('emitKeyboardEvent Invalid key', keyOrKeyCode);
      return;
    }

    const myEvent = new KeyboardEvent(eventType, options);
    element?.dispatchEvent(myEvent);
  } catch (e) {
    console.error('emitKeyboardEvent', e);
  }
}

/**
 * 触发元素事件
 * @example
 * emitEvent('click', null, document.getElementById('myButton')); // 触发元素点击事件
 * emitEvent('click', { logKey: 'test', params: { hello: 'world' } }); // 触发自定义元素点击事件
 * @param eventType 事件类型，默认为 'click' 。
 * @param eventDetail 事件自定义参数可以为空。不为空触发 CustomEvent 。
 * @param element 目标元素，默认为 document.body ，支持传 document 。
 * @returns
 * @category Tools-事件相关
 */
export function emitEvent(eventType = 'click', eventDetail?: any, element: HTMLElement | null = document.body): void {
  try {
    if (!eventDetail) {
      element?.dispatchEvent(
        new Event(eventType, {
          bubbles: true,
          cancelable: true,
        }),
      );
    } else {
      eventDetail = { trigger: `manual-custom-${eventType}`, ...eventDetail, customEvent: true };
      const customEvent = new CustomEvent(eventType, {
        bubbles: true,
        cancelable: true,
        detail: eventDetail,
      });
      element?.dispatchEvent(customEvent);
    }
  } catch (e) {
    console.error('emitEvent', e);
  }
}

/**
 * 禁用冲突事件，条码枪、关闭窗口快捷键等。
 * @example
 * document.addEventListener('keydown', disableConflictEvent); /// 进入页面后禁用冲突事件
 * document.removeEventListener('keydown', disableConflictEvent); /// 退出页面后关闭监听
 * @param event 触发事件
 * @returns
 * @category Tools-事件相关
 */
export function disableConflictEvent(event: any) {
  const keyCode = event.keyCode || event.which || event.charCode;
  const ctrlKey = event.ctrlKey || event.metaKey;
  const altKey = event.altKey;
  if (ctrlKey && keyCode == 74) {
    // ctrl+j 禁用条码枪触发事件
    event.preventDefault();
    emitKeyboardEvent();
  }
  if (altKey && keyCode == 115) {
    // alt+f4 关闭窗口快捷键
    event.preventDefault();
  }
  if (ctrlKey && keyCode == 115) {
    // ctrl+f4 关闭窗口快捷键
    event.preventDefault();
  }
  // true 防止此事件被进一步传播; false 允许此事件继续传播;
  return false;
}

/**
 * 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @example
 * offDefaultEvent(event); /// 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @param event 事件
 * @returns
 * @category Tools-事件相关
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
 * 在打印预览中打印指定元素，并设置样式。
 * 需在浏览器打印设置中-更多设置-开启背景与图形打印选项
 * @example
 * printElement('#print-table', {
 *   bodyStyle: {
 *     padding: '10px',
 *     backgroundColor: 'red',
 *   },
 * });
 * @param selector - 要打印的元素的 CSS 选择器。
 * @param styles - iframe 的 style 配置对象。
 *   @property {any} style - iframe 的基本样式。
 *   @property {any} bodyStyle - iframe 的 body 样式。
 *   @property {any} htmlStyle - iframe 的 html 样式。
 * @returns
 * @category Dom-工具方法
 */
export function printDom(selector: string, styles?: { iframeStyle?: any; bodyStyle?: any; htmlStyle?: any }) {
  // 获取需要打印的元素
  const element = document.querySelector(selector);
  if (!element) {
    console.error(`Element with query selector ${selector} not found.`);
    return;
  }

  // 创建打印的 iframe
  const iframe: any = document.createElement('iframe');
  // 设置 iframe 的样式
  Object.assign(iframe.style, {
    display: 'none',
    width: '100%',
    height: 'auto',
    ...(styles?.iframeStyle || {}),
  });
  document.body.appendChild(iframe);

  // 获取 iframe 的内置对象
  const iframeDoc: any = iframe.contentDocument;
  const iframeHtml = iframeDoc.documentElement;
  const iframeHead = iframeDoc.head;
  const iframeBody = iframeDoc.body;

  // 获取元素需要的样式
  const elementStyles = getComputedStyle(element);
  // 将元素需要的样式添加到 iframe
  for (let i = 0; i < elementStyles.length; i++) {
    const styleName = elementStyles[i];
    iframeBody.style[styleName] = elementStyles.getPropertyValue(styleName);
  }

  try {
    // 获取元素所在页面上的样式
    const styleSheets = Array.from(document.styleSheets).map((styleSheet) =>
      Array.from(styleSheet.cssRules)
        .map((cssRule) => cssRule.cssText)
        .join('\n'),
    );
    // 将元素所在页面的样式添加到 iframe
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styleSheets.join('\n');
    iframeHead.appendChild(styleElement);
  } catch (e) {
    console.error(e);
  }

  // // 在媒体查询中设置打印时的背景样式
  // const printStyles = `
  //   @media print {
  //     html {
  //       background-color: white;
  //     }
  //     body {
  //       padding: 10px;
  //     }
  //   }
  // `;
  // const printStyleElement = document.createElement('style');
  // printStyleElement.innerHTML = printStyles;
  // iframeHead.appendChild(printStyleElement);

  // 获取元素的内容
  const elementContent = element.outerHTML;
  // 将元素的内容添加到 iframe
  iframeBody.innerHTML = elementContent;

  // 设置 iframe.body 和 iframe.html 的样式与添加自定义的一些样式
  Object.assign(iframeBody.style, {
    width: '100%',
    height: 'auto',
    ...(styles?.bodyStyle || {}),
  });
  Object.assign(iframeHtml.style, {
    width: '100%',
    height: 'auto',
    ...(styles?.htmlStyle || {}),
  });

  // 执行打印
  iframe.contentWindow.print();

  // 打印完成后移除 iframe
  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 1000);
  return iframe;
}

/**
 * 创建全局 click 事件埋点与回调，也可使用 `emitEvent` 主动触发。
 * 若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。
 * @example
 * const clickListenerObj = createClickLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 clickListenerObj.cancel(); 。
 * <div log-click={JSON.stringify({ trigger: 'click', params: { name: '普通日志' }, logKey: 'example-key-0' })}>普通埋点元素</div> /// 普通埋点元素写法
 * <div log-click={JSON.stringify({ maxSequence: 2, sequence: 1, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 1</div> /// 固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ maxSequence: 2, sequence: 2, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 2</div> /// 固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 1', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 1</div> /// 非固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 2', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 2</div> /// 非固定顺序埋点元素写法
 * @param callback 监听 Track 回调
 * @returns
 * @category Log-日志埋点
 */
export function createClickLogListener(callback?: any): any {
  const sequenceMap: any = {};
  let orderMap: any = {};

  function handleClick(event: any) {
    const { target, detail } = event;

    let parsedLogData: any;
    if (detail?.customEvent) {
      parsedLogData = detail;
    } else {
      // 找到拥有 log-click 属性的元素为有效点击
      const logElement = target.closest('[log-click]');
      if (!logElement) {
        return;
      }

      // console.log({ target, logElement, sequenceMap, orderMap });

      // log-click 属性有可以解析值才执行后续操作
      const logData = logElement.getAttribute('log-click');
      if (!logData) {
        return;
      }
      parsedLogData = parseJSON(logData);
    }

    if (!parsedLogData) {
      return;
    }

    const { trigger, params, sequence, maxSequence, logKey, isOrder, orderKey } = parsedLogData;

    if (!logKey) {
      return;
    }

    // 如果 isOrder 是 true 则触发区域非固定顺序记录埋点分析，当一个区域 orderKey 第二次被点击时，本次顺序重来。
    if (isOrder && orderKey) {
      let clickInfo = { ...orderMap };
      if (clickInfo?.logKey !== logKey) {
        clickInfo = undefined;
      }
      if (!clickInfo) {
        clickInfo = {
          logKey,
          clickOrder: 1,
          clickList: [orderKey],
        };
      }

      if (clickInfo.clickList[clickInfo.clickList.length - 1] === orderKey) {
        clickInfo = { ...clickInfo };
      } else if (clickInfo.clickList.includes(orderKey)) {
        clickInfo = {
          logKey,
          clickOrder: 1,
          clickList: [orderKey],
        };
      } else {
        clickInfo.clickOrder++;
        clickInfo.clickList.push(orderKey);
      }

      orderMap = clickInfo;
      const newLogKey = `${logKey}-${orderKey}-${clickInfo.clickOrder}`;
      console.log(event, '区域非固定顺序记录埋点分析:', newLogKey, { trigger: trigger ?? 'click', params, logKey });
      callback && callback(event, newLogKey, { trigger: trigger ?? 'click', params, logKey });
      return;
    }

    // 无 sequence 或 maxSequence 则认为是普通埋点
    if (maxSequence === undefined) {
      console.log(event, '普通埋点分析:', logKey, { trigger: trigger ?? 'click', params, logKey });
      callback && callback(event, logKey, { trigger: trigger ?? 'click', params, logKey });
      return;
    }

    // 存在 sequence 或 maxSequence 则认为是固定顺序埋点
    if (sequence !== undefined && maxSequence !== undefined) {
      const clickSequence = sequenceMap[logKey] || 0;

      // 顺序正确，保存顺序并继续执行。
      if (clickSequence + 1 === sequence) {
        sequenceMap[logKey] = sequence;

        // 达到 maxSequence 触发埋点
        if (sequence === maxSequence) {
          console.log(event, '固定顺序埋点分析:', logKey, { trigger: trigger ?? 'click', params, logKey });
          callback && callback(event, logKey, { trigger: trigger ?? 'click', params, logKey });
          delete sequenceMap[logKey];
        }
      } else {
        // 点击相同顺序的按钮多次，不清空重来，防呆。
        if (clickSequence === sequence) {
          sequenceMap[logKey] = sequence;
        } else {
          // 点击顺序错误，重来。
          delete sequenceMap[logKey];
        }
      }
      return;
    }
  }

  // 此处注意不要重复监听，后续也可以将事件扩展支持多个。
  document.addEventListener('click', handleClick);

  return { sequenceMap, orderMap, cancel: () => document.removeEventListener('click', handleClick) };
}

/**
 * 创建全局 scroll 事件埋点与回调
 * 若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。
 * @example
 * const cancel = createScrollLogListener(document.querySelector('.demo-scroll-dom'), (event, eventKey, data) => console.log({ event, eventKey, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
 * <div log-scroll={JSON.stringify({ logKey: 'example-scroll-X' })}>{...X 滚动埋点元素...}</div> /// 滚动埋点元素
 * @param element 元素
 * @param callback 监听 Track 回调
 * @param delay 防抖延迟
 * @param threshold 触发滚动事件阈值
 * @returns
 * @category Log-日志埋点
 */
export function createScrollLogListener(element?: any, callback?: any, delay = 800, threshold = 30) {
  let timeoutRef: any = null;
  let lastScrollPos = { x: 0, y: 0 };

  function handleScroll(event: any) {
    const { target } = event;

    // 找到拥有 log-scroll 属性的输入元素
    const logElement = target.closest('[log-scroll]');
    if (!logElement) {
      return;
    }
    // log-scroll 属性有可以解析值才执行后续操作
    const logData = logElement.getAttribute('log-scroll');
    if (!logData) {
      return;
    }
    const parsedLogData = parseJSON(logData);
    if (!parsedLogData) {
      return;
    }
    const { trigger, params, logKey } = parsedLogData;

    if (!logKey) {
      return;
    }

    const currentScrollPos = {
      x: element.scrollLeft,
      y: element.scrollTop,
    };

    const scrollX = currentScrollPos.x - lastScrollPos.x;
    const scrollY = currentScrollPos.y - lastScrollPos.y;

    if (Math.abs(scrollX) > threshold || Math.abs(scrollY) > threshold) {
      console.log(event, '滚动事件埋点', logKey, {
        trigger: trigger ?? 'scroll',
        params: { ...(params ?? {}), X: scrollX, Y: scrollY },
        logKey,
      });
      callback &&
        callback(event, logKey, {
          trigger: trigger ?? 'scroll',
          params: { ...(params ?? {}), X: scrollX, Y: scrollY },
          logKey,
        });
    }

    lastScrollPos = currentScrollPos;
  }

  function handleScrollDebounce(event: any) {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    timeoutRef = setTimeout(() => {
      handleScroll(event);
    }, delay);
  }

  if (element) {
    element.addEventListener('scroll', handleScrollDebounce, { passive: true });

    return () => {
      element.removeEventListener('scroll', handleScrollDebounce);
      clearTimeout(timeoutRef);
    };
  }
}

/**
 * 创建全局 change 事件埋点与回调，也可使用 `emitEvent` 主动触发。
 * @example
 * const cancel = createChangeLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
 * <div log-change={JSON.stringify({ logKey: 'div-input-change-0' })}><input /></div> /// 父元素总监听
 * <input log-change={JSON.stringify({ logKey: 'input-change-1' })} /> /// 普通监听
 * @param callback 监听 Track 回调
 * @returns
 * @category Log-日志埋点
 */
export function createChangeLogListener(callback?: any) {
  function handleChange(event: any) {
    const { target, detail } = event;

    let parsedLogData: any;
    if (detail?.customEvent) {
      parsedLogData = detail;
    } else {
      // 找到拥有 log-change 属性的输入元素
      const logElement = target.closest('[log-change]');
      if (!logElement) {
        return;
      }
      // log-change 属性有可以解析值才执行后续操作
      const logData = logElement.getAttribute('log-change');
      if (!logData) {
        return;
      }
      parsedLogData = parseJSON(logData);
    }

    if (!parsedLogData) {
      return;
    }
    const { trigger, params, logKey } = parsedLogData;

    if (!logKey) {
      return;
    }

    const value = target?.value;

    // 在这里处理输入事件埋点
    console.log(event, 'Change 事件处理:', logKey, {
      trigger: trigger ?? 'change',
      params: { ...(params ?? {}), value },
      logKey,
    });
    callback && callback(event, logKey, { trigger: trigger ?? 'change', params: { ...(params ?? {}), value }, logKey });
  }

  document.addEventListener('change', handleChange);

  return () => {
    document.removeEventListener('change', handleChange);
  };
}

/**
 * 创建间隔时间日志
 * @param eventName 事件名称
 * @param eventParams 参数列表
 * @param callback 回调函数
 * @returns
 * @example
 * // 创建日志实例
 * const myCustomLog = createTimeLogListener('扫描时长', { menuCode: 'Login' });
 * // 开始计时，如果短时间多个实例计时，最好增加 key 参数，没有 key 默认 key 为 'undefined' 。
 * myCustomLog.start({ user: 'admin' });
 * myCustomLog.start({ user: 'admin123', key: 'custom-123' });
 * myCustomLog.start({ user: 'admin456', key: 'custom-456' });
 * // ... 执行一些操作 ...
 * // ... 中途更新一些参数 ...
 * myCustomLog.update({ userAgent: 'Chrome' });
 * myCustomLog.update({ test: 'test' });
 * myCustomLog.update({ test: 'test123', key: 'custom-123' });
 * // 结束计时并记录日志
 * myCustomLog.end({ isLogin: true });
 * myCustomLog.end({ isLogin: false, key: 'custom-123' });
 * myCustomLog.end({ isLogin: true, key: 'custom-456' });
 * // 输出到控制台和执行回调
 * // 输出格式包括：logKey, ms, s, menuCode, user, isLogin, userAgent, test
 * myCustomLog.clear(); // 清空所有缓存数据
 * // react
 * const log = useMemo(() => createTimeEventLog('扫描时长', { menuCode: 'scan' }), []);
 * @category Log-日志埋点
 */
export function createTimeLogListener(
  eventName: string,
  eventParams = {},
  callback?: (logInfo: any, logKey: string) => void,
) {
  const originEventParams = eventParams;
  let timeLogBox: any = {};

  const log = {
    clear: () => {
      timeLogBox = {};
      eventParams = originEventParams;
    },
    start(moreParams = {}) {
      // @ts-ignore
      const customKey = moreParams?.key || 'undefined';

      timeLogBox[customKey] = timeLogBox[customKey] || {
        startTime: null,
        endTime: null,
        logParams: {
          ...originEventParams,
          ...moreParams,
        },
      };

      timeLogBox[customKey].startTime = Date.now();
      timeLogBox[customKey].endTime = null; // 重置 endTime，确保每次使用都是新的计时。
    },
    update(moreParams = {}) {
      // @ts-ignore
      const customKey = moreParams?.key || 'undefined';

      if (!timeLogBox[customKey]?.startTime) {
        console.warn(`Cannot update log '${eventName}' eventParams because start was not called.`);
        return;
      }

      timeLogBox[customKey].logParams = {
        ...originEventParams,
        ...moreParams,
      };
    },
    end(moreParams = {}) {
      // @ts-ignore
      const customKey = moreParams?.key || 'undefined';

      if (!timeLogBox[customKey]?.startTime) {
        console.warn(`Cannot end log for '${eventName}' because start was not called.`);
        return;
      }

      timeLogBox[customKey].logParams = {
        ...originEventParams,
        ...moreParams,
      };

      const logKey = eventName;

      timeLogBox[customKey].endTime = Date.now();
      const durationMs = timeLogBox[customKey].endTime - timeLogBox[customKey].startTime;
      const logInfo = {
        ...timeLogBox[customKey].logParams,
        logKey,
        ms: durationMs,
        s: (durationMs / 1000).toFixed(3),
      };

      console.table(logInfo); // 以表格形式输出日志信息，包括 logKey 。
      callback && callback?.(logInfo, logKey);

      // 重置 startTime 和 endTime，以便实例可以重新使用。
      delete timeLogBox[customKey];

      eventParams = originEventParams;
    },
  };

  return log;
}

/**
 * 合并类名 emotion-js
 * @example
 * cx('class1', 'class2', { 'class3': true, 'class4': false }, null, undefined); /// "class1 class2 class3"
 * @param classNames 要合并的类名、对象或空值
 * @returns
 * @category Dom-工具方法
 */
export function cx(...classNames: any[]): string {
  const processedClassNames = [];

  for (let i = 0; i < classNames.length; i++) {
    const className = classNames[i];

    if (!className) {
      continue;
    }

    if (typeof className === 'string') {
      // 处理字符串类名
      processedClassNames.push(className);
    } else if (typeof className === 'object' && className !== null) {
      // 处理对象类名
      for (const key in className) {
        if (className[key]) {
          processedClassNames.push(key);
        }
      }
    }
  }

  return processedClassNames.join(' ');
}
