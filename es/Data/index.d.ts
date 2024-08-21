/**
 * @enum
 * Http Methods
 * @category 常量
 */
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE",
    options = "OPTIONS"
}
/**
 * @category 常量
 * @property
 * 常用返回状态码 code message
 */
export declare const CODE_MSG: {
    [status: number]: string;
};
/**
 * @category 常量
 * @property
 * content types
 */
export declare const CONTENT_TYPES: {
    [propName: string]: string;
};
/**
 * @category 常量
 * @property
 * 根据年份求生肖数据，年 % 12 。
 */
export declare const ANIMALS: string[];
/**
 * @category 常量
 * @property
 * 星座数据
 */
export declare const CONSTELLATION: any;
/**
 * @category 常量
 * @property
 * 星期数据
 */
export declare const WEEKS: {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
}[];
/**
 * @category 常量
 * @property
 * 月份数据
 */
export declare const MONTHS: {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
}[];
/**
 * @category 常量
 * @property
 * 常用键盘控制键
 */
export declare const KEYBOARD_CODE: {
    BACK_SPACE: number;
    TAB: number;
    ENTER: number;
    ENTER_S: number;
    SHIFT: number;
    CTRL: number;
    ALT: number;
    CAPS_LOCK: number;
    ESC: number;
    SPACE: number;
    END: number;
    HOME: number;
    INSERT: number;
    DELETE: number;
    PAGE_UP: number;
    PAGE_DOWN: number;
    CONTEXT_MENU: number;
    DOT: number;
    ADD: number;
    SUB: number;
    MULTIPLY: number;
    DIVIDE: number;
    UP: number;
    DOWN: number;
    LEFT: number;
    RIGHT: number;
    F1: number;
    F2: number;
    F3: number;
    F4: number;
    F5: number;
    F6: number;
    F7: number;
    F8: number;
    F9: number;
    F10: number;
    F11: number;
    F12: number;
};
/**
 * @category 常量
 * @property
 * 性别常量女(0)
 */
export declare const WOMAN = 0;
/**
 * @category 常量
 * @property
 * 性别常量男(1)
 */
export declare const MAN = 1;
/**
 * @category 常量
 * @property
 * 血型
 */
export declare const BLOOD_GROUP: {
    A: string;
    B: string;
    O: string;
    AB: string;
};
/**
 * @category 常量
 * @property
 * 血型基础信息
 */
export declare const BLOOD_GROUP_INFO: {
    [key: string]: {
        value: string;
        label: string;
        color: string;
        lower: string;
        upper: string;
    };
};
/**
 * @category 常量
 * @property
 * 角色管理对象
 */
export declare const ROLES: {
    guest: string;
    viewer: string;
    user: string;
    manager: string;
    admin: string;
};
/**
 * @category 常量
 * @property
 * 身份证省份
 */
export declare const ID_CARD_PROVINCE: {
    [prop: string]: string;
};
/**
 * @category 常量
 * @property
 * 数字基础数据
 */
export declare const BASE_NUMBER = "0123456789";
/**
 * @category 常量
 * @property
 * 小写字母基础数据
 */
export declare const BASE_CHAR_LOW = "abcdefghijklmnopqrstuvwxyz";
/**
 * @category 常量
 * @property
 * 大写字母基础数据
 */
export declare const BASE_CHAR_UP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * @category 常量
 * @property
 * 进制转换基础数据
 */
export declare const TRANSFER_STR: string;
/**
 * @category 常量
 * @property
 * 颜色数据
 */
export declare const BS_COLORS: {
    dark: string;
    black: string;
    light: string;
    white: string;
    info: string;
    cyan: string;
    success: string;
    green: string;
    warning: string;
    yellow: string;
    danger: string;
    red: string;
    primary: string;
    blue: string;
    secondary: string;
    default: string;
    grey: string;
};
/**
 * @category 常量
 * @property
 * ICONS 通用小图标
 */
export declare const ICONS: any;
/**
 * @category 常量
 * @property
 * 拼音转换数据
 */
export declare const PY_MAPS: any;
//# sourceMappingURL=index.d.ts.map