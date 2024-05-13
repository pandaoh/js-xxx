export interface LanguageResource {
    key: string;
    desc: string;
    translation: Record<string, string>;
}
export interface i18nOptions {
    resources?: Record<string, LanguageResource>;
    defaultLang?: string;
}
export interface LanguageData {
    key: string;
    desc: string;
}
export interface Translations {
    [language: string]: Record<string, string>;
}
/**
 * i18n 国际化支持类，若需切换语言后更新页面内容，可以在切换语言的时候同步更新全局状态 lang，并将 lang 设置为组件顶级 key 即可。
 */
export declare class i18n {
    private langList;
    private translations;
    private lang;
    constructor(options: i18nOptions);
    private loadResources;
    setLang(language: string, callback?: (language: string) => void): this;
    getLang(): string;
    getLangList(): LanguageData[];
    private getTranslation;
    getTranslations(language?: string): Record<string, string> | null;
    removeLang(language: string): this;
    addLang(language: string, langData: LanguageData): this;
    t$(key: string, obj?: any, language?: string): string;
}
//# sourceMappingURL=index.d.ts.map