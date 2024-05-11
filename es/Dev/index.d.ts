export declare const prettierRules: (rules?: {}) => {
    printWidth: number;
    proseWrap: string;
    semi: boolean;
    singleQuote: boolean;
    jsxSingleQuote: boolean;
    bracketSpacing: boolean;
    bracketSameLine: boolean;
    arrowParens: string;
    insertPragma: boolean;
    tabWidth: number;
    useTabs: boolean;
    endOfLine: string;
    trailingComma: string;
    htmlWhitespaceSensitivity: string;
    rangeStart: number;
    rangeEnd: number;
    quoteProps: string;
};
export declare const eslintRules: (skipWords?: never[], rules?: {}) => {
    'zob/comment': string;
    '@typescript-eslint/ban-ts-comment': string;
    'no-useless-escape': string;
    'prettier/prettier': (string | {
        usePrettierrc?: undefined;
    } | {
        usePrettierrc: boolean;
    })[];
    'no-undef': string[];
    'spaced-comment': string[];
    'space-before-blocks': string[];
    'no-multiple-empty-lines': (string | {
        max: number;
    })[];
    'no-mixed-spaces-and-tabs': (string | boolean)[];
    'comma-dangle': string[];
    indent: (string | number | {
        SwitchCase: number;
    })[];
    'linebreak-style': string[];
    quotes: string[];
    semi: string[];
    '@typescript-eslint/no-explicit-any': string[];
    'no-irregular-whitespace': (string | {
        skipStrings: boolean;
        skipComments: boolean;
        skipRegExps: boolean;
        skipTemplates: boolean;
    })[];
    'no-multi-spaces': (string | {
        ignoreEOLComments: boolean;
    })[];
    'no-trailing-spaces': (string | {
        skipBlankLines: boolean;
    })[];
    'brace-style': (string | {
        allowSingleLine: boolean;
    })[];
    'key-spacing': (string | {
        beforeColon: boolean;
        afterColon: boolean;
    })[];
    'object-curly-spacing': string[];
    'array-bracket-spacing': string[];
    'max-lines': (string | number)[];
    'max-statements': (string | number)[];
    'spellcheck/spell-checker': (string | {
        comments: boolean;
        strings: boolean;
        identifiers: boolean;
        lang: string;
        skipWords: string[];
        skipIfMatch: string[];
        skipWordIfMatch: string[];
        minLength: number;
    })[];
    'import/first': string[];
    'import/exports-last': string[];
    'import/newline-after-import': string[];
    'import/no-duplicates': string[];
    'import/order': (string | {
        'newlines-between': string;
    })[];
};
export declare const sortJSON: (obj: any) => string;
//# sourceMappingURL=index.d.ts.map