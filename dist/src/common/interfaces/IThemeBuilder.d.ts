export type ThemeStruct = Map<string, ThemeCategory>;
export type ThemeCategory = {
    key: string;
    subCategories: Map<string, ThemeSubCategory>;
};
export type ThemeSubCategory = {
    key: string;
    clearPart: string;
    order: number;
    text: string;
    rules: Map<string, ThemeRule>;
};
export type ThemeRule = {
    name: string;
    valueDefault: string;
    valueOrg: string;
    valueOverride: string;
    value: string;
    isEditable: boolean;
    comment?: string;
    _fullCategory?: string;
};
export type ThemeRuleUI = ThemeRule & {
    prettyName: string;
    section: string;
};
export type ThemeOverride = Record<string, string>;
export type ThemeOverrideRules = {
    activated: boolean;
    activatedSubCategories: Record<string, boolean>;
    rules: Record<string, ThemeRule>;
};
