export declare function formatDate(date?: string | Date, fmt?: string, weeks?: any[]): string;
export declare function calcDate(date: string | Date, calcStrOrArr: string | string[]): Date;
export declare function getDateDifference(oldDate: string | Date, nowDate?: string | Date, type?: 'all' | 'day' | 'days' | 'hour' | 'hours' | 'minute' | 'minutes' | 'second' | 'seconds' | 'ALL' | 'DAY' | 'DAYS' | 'HOUR' | 'HOURS' | 'MINUTE' | 'MINUTES' | 'SECOND' | 'SECONDS'): number | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
export declare function getTimeCode(): string;
export declare function timeSince(date?: string | Date, longAgo?: boolean, formater?: string): string;
export declare function isWeekday(date?: string | Date): boolean;
export declare function getMonthDays(date?: string | Date): number;
export declare function getMonthDaysCount(date?: string | Date): number;
export declare function getDateTime(date?: string | Date): number;
export declare function getUTCTime(timezone?: number): Date;
export declare function compareDate(dateA: any, dateB?: any): number;
//# sourceMappingURL=index.d.ts.map