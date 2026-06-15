import { LiveConfig } from "./IWidget";
import { LiveElement } from "./IBoard";
export type PersonalizationElement = {
    id: string;
    type: "widget" | "ribbon" | "floating";
    config: LiveConfig;
    element: LiveElement;
    _display?: string;
};
export type ruleId = string;
export declare const PERSONALIZATION_COMPARE_OPERATORS: {
    readonly is: "is";
    readonly contains: "contains";
};
export type PersonalizationCompareOperator = (typeof PERSONALIZATION_COMPARE_OPERATORS)[keyof typeof PERSONALIZATION_COMPARE_OPERATORS];
export interface IPersonalizationConfig {
    rules: Record<ruleId, IPersonalizationRule>;
    rulesBatches: Record<string, ruleId[]>;
    boardRules?: ruleId[];
}
export interface IPersonalizationRuleCondition {
    mergeTagId: string;
    mergeTagValues: string[];
    /**
     * Per-condition comparison operator. Defaults to "is" (legacy behavior driven by the
     * merge tag's own compare_operator) when omitted.
     */
    compareOperator?: PersonalizationCompareOperator;
}
export interface IPersonalizationRule extends IPersonalizationRuleCondition {
    key: ruleId;
    /**
     * Extra conditions ANDed with the primary condition (the inherited
     * mergeTagId/mergeTagValues/compareOperator fields). Absent or empty for
     * legacy single-condition rules. Each mergeTagId appears at most once per
     * rule, including the primary condition.
     */
    andConditions?: IPersonalizationRuleCondition[];
    /** Optional display name (matrix editor group rows). */
    name?: string;
    _appliedOn?: string[];
}
