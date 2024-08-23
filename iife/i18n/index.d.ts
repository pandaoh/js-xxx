/**
 * 语言资源接口
 * @category i18n-多语言(国际化)
 */
export interface i18nLanguageResource {
    key: string;
    desc: string;
    translation: any;
}
/**
 * i18n 类的选项
 * @category i18n-多语言(国际化)
 */
export interface i18nOptions {
    resources: Record<string, i18nLanguageResource>;
    defaultLang?: string;
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
export declare class i18n {
    private langList;
    private translations;
    private lang;
    constructor(options: i18nOptions);
    private loadResources;
    setLang(language: string, callback?: (language: string) => void): this;
    getLang(): string;
    getLangList(): {
        key: string;
        desc: string;
    }[];
    private getTranslation;
    getTranslations(language?: string): Record<string, string> | null;
    removeLang(language: string): this;
    addLang(language: string, langData: i18nLanguageResource): this;
    t$(key: string, obj?: any, language?: string): string;
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
export declare function getBrowserLang(opts?: {
    supportLangs?: string[];
}): string;
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
export declare function getDefaultLang(opts?: {
    supportLangs: string[];
    key?: string;
}): string;
//# sourceMappingURL=index.d.ts.map