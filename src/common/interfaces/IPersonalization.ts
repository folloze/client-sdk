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

export interface IPersonalizationConfig {
    rules: Record<ruleId, IPersonalizationRule>;
    rulesBatches: Record<string, ruleId[]>;
}

export interface IPersonalizationRule {
    key: ruleId;
    mergeTagId: string;
    mergeTagValues: string[];
    _appliedOn?: string[]; // widget / ribbon / floating ids
    // index?: number;
}
