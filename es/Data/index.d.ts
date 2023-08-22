/**
 * @enum
 * Http Methods
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
 * @const
 * 常用返回状态码 code message
 */
export declare const CODE_MSG: {
    [status: number]: string;
};
/**
 * @const
 * content types
 */
export declare const CONTENT_TYPES: {
    [propName: string]: string;
};
/**
 * @const
 * 根据年份求生肖数据，年 % 12 。
 */
export declare const ANIMALS: string[];
/**
 * @const
 * 星座数据
 */
export declare const CONSTELLATION: any;
/**
 * @const
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
 * @const
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
 * @const
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
 * @const
 * 性别常量女(0)
 */
export declare const WOMAN = 0;
/**
 * @const
 * 性别常量男(1)
 */
export declare const MAN = 1;
/**
 * @const
 * 血型
 */
export declare const BLOOD_GROUP: {
    A: string;
    B: string;
    O: string;
    AB: string;
};
/**
 * @const
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
 * @const
 * 身份证省份
 */
export declare const ID_CARD_PROVINCE: {
    [prop: string]: string;
};
/**
 * @const
 * 数字基础数据
 */
export declare const BASE_NUMBER = "0123456789";
/**
 * @const
 * 小写字母基础数据
 */
export declare const BASE_CHAR_LOW = "abcdefghijklmnopqrstuvwxyz";
/**
 * @const
 * 大写字母基础数据
 */
export declare const BASE_CHAR_UP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * @const
 * 进制转换基础数据
 */
export declare const TRANSFER_STR: string;
/**
 * @const
 * ICONS 通用小图标
 */
export declare const ICONS: any;
/**
 * @const
 * 拼音转换数据
 */
export declare const PY_MAPS: any;
//# sourceMappingURL=index.d.ts.map