export interface i18nLanguageResource {
    key: string;
    desc: string;
    translation: any;
}
export interface i18nOptions {
    resources: Record<string, i18nLanguageResource>;
    defaultLang?: string;
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
//# sourceMappingURL=index.d.ts.map