/*
 * @Author: HxB
 * @Date: 2022-04-26 15:37:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:06:13
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
  var e = event || window.event;
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
  console.log(info);
  return Msg;
}

/**
 * 滚动到顶部/底部
 * Example: `scrollTo(element) => 滚动到顶部`
 * @param element 指定元素
 */
export function scrollTo(element: any, to: 'start' | 'end' = 'start') {
  element.scrollIntoView({ behavior: 'smooth', block: to });
}
