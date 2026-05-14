import {LiveConfig} from "./IWidget";
import {LiveElement} from "./IBoard";

export type PersonalizationElement = {
    id: string;
    type: "widget" | "ribbon" | "floating";
    config: LiveConfig;
    element: LiveElement;
    _display?: string;
};

export type ruleId = string; // ru_string

export const PERSONALIZATION_COMPARE_OPERATORS = {
    is: "is",
    contains: "contains",
} as const;

export type PersonalizationCompareOperator =
    (typeof PERSONALIZATION_COMPARE_OPERATORS)[keyof typeof PERSONALIZATION_COMPARE_OPERATORS];

export interface IPersonalizationConfig {
    rules: Record<ruleId, IPersonalizationRule>;
    rulesBatches: Record<string, ruleId[]>;
    boardRules?: ruleId[];
}

export interface IPersonalizationRule {
    key: ruleId;
    mergeTagId: string;
    mergeTagValues: string[];
    /**
     * Per-rule comparison operator. Defaults to "is" (legacy behavior driven by the
     * merge tag's own compare_operator) when omitted.
     */
    compareOperator?: PersonalizationCompareOperator;  
    _appliedOn?: string[]; // widget / ribbon / floating ids
    // index?: number;
}
