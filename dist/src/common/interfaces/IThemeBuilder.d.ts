export declare type ThemeStruct = Map<string, ThemeCategory>;
export declare type ThemeCategory = {
    key: string;
    subCategories: Map<string, ThemeSubCategory>;
};
export declare type ThemeSubCategory = {
    key: string;
    clearPart: string;
    order: number;
    text: string;
    rules: Map<string, ThemeRule>;
};
export declare type ThemeRule = {
    name: string;
    valueDefault: string;
    valueOrg: string;
    valueOverride: string;
    value: string;
    isEditable: boolean;
    comment?: string;
    _fullCategory?: string;
};
export declare type ThemeRuleUI = ThemeRule & {
    prettyName: string;
    section: string;
};
export declare type ThemeOverride = Record<string, string>;
export declare type ThemeOverrideRules = {
    activated: boolean;
    activatedSubCategories: Record<string, boolean>;
    rules: Record<string, ThemeRule>;
};
