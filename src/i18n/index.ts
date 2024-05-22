/*
 * @Author: HxB
 * @Date: 2024-05-13 15:08:38
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-05-22 10:00:35
 * @Description: i18n 国际化支持-需自定义如何兼容切换语言后页面刷新
 * @FilePath: \js-xxx\src\i18n\index.ts
 */

import { loadStr } from '@/String';

// 语言资源接口
export interface i18nLanguageResource {
  key: string; // 语言的唯一标识符
  desc: string; // 语言描述
  translation: any; // 语言的翻译内容
}

// i18n 类的选项
export interface i18nOptions {
  resources: Record<string, i18nLanguageResource>; // 语言资源
  defaultLang?: string; // 默认语言
}

/**
 * i18n 国际化支持类，若需切换语言后更新页面内容，可以在切换语言的时候同步更新全局状态 lang，并将 lang 设置为组件顶级 key 即可。
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
 */
export class i18n {
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
    this.lang = localStorage.getItem('js-xxx-lang') || options.defaultLang || 'zh-CN';
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
    localStorage.setItem('js-xxx-lang', language);
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
