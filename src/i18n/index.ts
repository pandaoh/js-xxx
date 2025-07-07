/*
 * @Author: HxB
 * @Date: 2024-05-13 15:08:38
 * @LastEditors: DoubleAm
 * @LastEditTime: 2025-07-07 15:10:27
 * @Description: i18n 国际化支持
 * @FilePath: /js-xxx/src/i18n/index.ts
 */

import { getCookie } from '@/Cookies';
import { localStorageGet } from '@/Storage';
import { loadStr } from '@/String';

const I18N_KEY = 'js-xxx-lang';

/**
 * 语言资源接口选项
 * @category i18n-多语言(国际化)
 */
export interface i18nLanguageResource {
  key: string; // 语言的唯一标识符
  desc: string; // 语言描述
  translation: any; // 语言的翻译内容
}

/**
 * i18n 类的选项
 * @category i18n-多语言(国际化)
 */
export interface i18nOptions {
  resources: Record<string, i18nLanguageResource>; // 语言资源
  defaultLang?: string; // 默认语言
}

/**
 * i18n 国际化支持类
 * 若需切换语言后更新页面内容，可以在切换语言的时候同步更新全局状态 lang，并将全局状态 lang 设置为 `t$` 的参数即可。
 * `具体可参考 web_base 或 vue-admin 案例`
 * [web_base](https://github.com/biugle/web_base)
 * [vue-admin](https://github.com/biugle/vue-admin)
 * @example
 * import { zh_CN, en_US } from './locales.data'
 * export const i18nCustom = new i18n({
 *    resources: {
 *     zh_CN: {
 *      key: 'zh_CN',
 *     desc: '简体中文',
 *      translation: zh_CN,
 *    },
 *     en_US: {
 *      key: 'en_US',
 *      desc: 'English',
 *     translation: en_US,
 *     },
 *   },
 *   defaultLang: 'zh_CN',
 * });
 * @returns
 * @category i18n-多语言(国际化)
 */
export class i18n {
  // export function i18n
  private langList: Record<string, { key: string; desc: string }>; // 支持的语言列表
  private translations: any; // 所有语言的翻译内容
  private lang: string; // 当前语言

  constructor(options: i18nOptions) {
    this.langList = {};
    this.translations = {};

    if (options.resources) {
      this.loadResources(options.resources);
    }

    // 从 localStorage 获取先前选择的语言
    this.lang = getCookie(I18N_KEY) || localStorageGet(I18N_KEY) || options.defaultLang || getBrowserLang() || 'zh-CN';
  }

  // 加载语言资源
  private loadResources(resources: Record<string, i18nLanguageResource>): this {
    Object.keys(resources).forEach((lang) => {
      const { key, desc, translation } = resources[lang];
      this.langList[lang] = { key, desc };
      this.translations[lang] = translation;
    });

    return this; // 支持方法链式调用
  }

  // 设置当前语言
  public setLang(language: string, callback?: (language: string) => void): this {
    this.lang = language;
    // 将当前语言保存到 localStorage
    localStorage.setItem(I18N_KEY, language);
    callback?.(language);
    return this; // 支持方法链式调用
  }

  // 获取当前语言
  public getLang(): string {
    return this.lang;
  }

  // 获取支持的语言列表
  public getLangList(): { key: string; desc: string }[] {
    return Object.values(this.langList);
  }

  // 获取特定键和语言的翻译内容
  private getTranslation(key: string, language: string = this.lang): string | null {
    const translations = this.translations[language];
    if (!translations) {
      return null;
    }
    return translations[key] || null;
  }

  // 获取特定语言的所有翻译内容
  public getTranslations(language: string = this.lang): Record<string, string> | null {
    return this.translations[language] || null;
  }

  // 从支持的语言中移除一种语言
  public removeLang(language: string): this {
    delete this.langList[language];
    delete this.translations[language];
    return this; // 支持方法链式调用
  }

  // 添加一种新的语言到支持的语言列表中
  public addLang(language: string, langData: i18nLanguageResource): this {
    this.langList[language] = langData;
    this.translations[language] = langData.translation;
    return this; // 支持方法链式调用
  }

  // 将键翻译为当前语言-后续考虑优先级为当前语言、默认语言、[key]
  public t$(key: string, obj?: any, language?: string): string {
    const translation = this.getTranslation(key, language);
    if (!translation) {
      return `[${key}]`;
    }
    return loadStr(translation, obj);
  }
}

/**
 * 获取浏览器语言。
 * 返回的是中划线格式，如：zh-CN 。
 * @example
 * // 如果浏览器语言为中文（简体）
 * getBrowserLang(); // 'zh-CN'
 * // 如果浏览器语言为英文
 * getBrowserLang(); // 'en-US'
 * // 限制返回语言为支持的语言之一
 * getBrowserLang({ supportLangs: ['zh-CN', 'en-US'] }); // 'zh-CN' 或 'en-US'
 * // 限制返回语言为不支持的语言之一
 * getBrowserLang({ supportLangs: ['es-ES', 'fr-FR'] }); // 'en-US'
 * @param opts 可选配置项。
 * @param opts.supportLangs 可支持的语言，传入时，会用此数组来限制返回的语言值，防止返回的 navigator.language 和系统定义的语言值不匹配。
 * @returns
 * @category i18n-多语言(国际化)
 */
export function getBrowserLang(opts?: { supportLangs?: string[] }): string {
  // 默认语言
  let browserLang = 'en-US';

  // 确保 navigator 对象存在且语言属性有效
  const isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';

  if (isNavigatorLanguageValid) {
    // 获取浏览器语言
    browserLang = navigator.language.split('-').join('-');
  }

  // 语言映射表
  const langMap = new Map<RegExp, string>([
    [/^en/i, 'en-US'], // 英语 - 美国
    [/^zh/i, 'zh-CN'], // 中文 - 中国
    [/^fr/i, 'fr-FR'], // 法语 - 法国
    [/^ru/i, 'ru-RU'], // 俄语 - 俄罗斯
    [/^de/i, 'de-DE'], // 德语 - 德国
    [/^ja/i, 'ja-JP'], // 日语 - 日本
    [/^ko/i, 'ko-KR'], // 韩语 - 韩国
    [/^pt/i, 'pt-BR'], // 葡萄牙语 - 巴西
    [/^es/i, 'es-MX'], // 西班牙语 - 墨西哥
    [/^it/i, 'it-IT'], // 意大利语 - 意大利
    [/^ar/i, 'ar-SA'], // 阿拉伯语 - 沙特阿拉伯
    [/^nl/i, 'nl-NL'], // 荷兰语 - 荷兰
    [/^sv/i, 'sv-SE'], // 瑞典语 - 瑞典
    [/^da/i, 'da-DK'], // 丹麦语 - 丹麦
    [/^fi/i, 'fi-FI'], // 芬兰语 - 芬兰
    [/^no/i, 'no-NO'], // 挪威语 - 挪威
    [/^pl/i, 'pl-PL'], // 波兰语 - 波兰
    [/^tr/i, 'tr-TR'], // 土耳其语 - 土耳其
    [/^he/i, 'he-IL'], // 希伯来语 - 以色列
    [/^cs/i, 'cs-CZ'], // 捷克语 - 捷克
    [/^hu/i, 'hu-HU'], // 匈牙利语 - 匈牙利
    [/^el/i, 'el-GR'], // 希腊语 - 希腊
    [/^th/i, 'th-TH'], // 泰语 - 泰国
    [/^vi/i, 'vi-VN'], // 越南语 - 越南
    [/^id/i, 'id-ID'], // 印度尼西亚语 - 印度尼西亚
    [/^ms/i, 'ms-MY'], // 马来语 - 马来西亚
    [/^hi/i, 'hi-IN'], // 印地语 - 印度
    [/^bn/i, 'bn-BD'], // 孟加拉语 - 孟加拉
    [/^uk/i, 'uk-UA'], // 乌克兰语 - 乌克兰
  ]);

  // 匹配并设置语言
  for (const [regex, lang] of langMap.entries()) {
    if (regex.test(browserLang)) {
      browserLang = lang;
      break;
    }
  }

  // 过滤不支持的语言
  const supportLangs = opts?.supportLangs;
  if (supportLangs && !supportLangs.includes(browserLang)) {
    browserLang = 'en-US';
  }

  return browserLang;
}

/**
 * 获取默认语言。
 * 返回的是中划线格式，如：zh-CN 。
 * 从 Cookie 获取语言，如果不存在则获取 local 存储中的语言，都不存在则使用浏览器语言。
 * @example
 * getDefaultLang({ supportLangs: ['zh-CN', 'en-US'] }); // 'zh-CN' 或 'en-US'
 * // 指定一个自定义 key
 * getDefaultLang({ supportLangs: ['fr-FR', 'es-ES'], key: 'USER_LANG' }); // 'fr-FR' 或 'es-ES'
 * // 如果语言不在支持的语言列表中，则返回默认语言 'en-US'。
 * getDefaultLang({ supportLangs: ['es-ES'], key: 'USER_LANG' }); // 'en-US' (假设获取的语言为 'fr_FR')
 * @param opts 可选配置项。
 * @param opts.supportLangs 支持的语言列表。如果返回的语言不在此列表中，将返回默认语言 'en-US'。
 * @param opts.key 用于获取语言的 key 默认为 'js-xxx-lang'
 * @returns
 * @category i18n-多语言(国际化)
 */
export function getDefaultLang(opts?: { supportLangs: string[]; key?: string }): string {
  const key = opts?.key || I18N_KEY;
  const supportLangs = opts?.supportLangs || [];

  // 从 Cookie 获取语言，如果不存在则获取 local 存储中的语言，都不存在则使用浏览器语言。
  let lang = getCookie(key) || localStorageGet(key) || getBrowserLang({ supportLangs });
  lang = lang.replace('_', '-');

  // 检查语言是否在支持的语言列表中
  if (supportLangs.length && !supportLangs.includes(lang)) {
    return 'en-US';
  } else {
    return lang;
  }
}

/**
 * 用于插件扫描自定义多语言 key，方便 excel 或者 json 生成。
 * @example
 * $t('aaa'); /// 'aaa'
 * @param s
 * @returns
 * @category i18n-多语言(国际化)
 */
export function $t(s: any): string {
  return `${s}`;
}
