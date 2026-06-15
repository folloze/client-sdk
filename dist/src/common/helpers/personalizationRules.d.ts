import { IPersonalizationRule, IPersonalizationRuleCondition } from "../interfaces/IPersonalization";
/**
 * Normalizes a rule into its list of conditions: the legacy inline fields
 * (mergeTagId/mergeTagValues/compareOperator) are the first condition, followed
 * by any andConditions. Operators are defaulted to "is".
 * All rule logic should go through this helper instead of reading
 * rule.mergeTagId directly, so legacy single-condition rules and AND rules are
 * handled uniformly.
 */
export declare function getRuleConditions(rule: IPersonalizationRule | IPersonalizationRuleCondition): IPersonalizationRuleCondition[];
/**
 * Inverse of getRuleConditions: maps a conditions list back to persisted rule
 * fields. Omits andConditions entirely for single-condition rules so legacy
 * rules keep serializing exactly as before.
 */
export declare function conditionsToRuleFields(conditions: IPersonalizationRuleCondition[]): Pick<IPersonalizationRule, "mergeTagId" | "mergeTagValues" | "compareOperator" | "andConditions">;
export declare function isMultiConditionRule(rule: IPersonalizationRule): boolean;
/**
 * Canonical block signature for grouping rules in the rule builder: the rule's
 * unique mergeTagIds, numeric-aware sorted and "&"-joined (e.g. "12&47").
 * A legacy single-condition rule's signature equals its mergeTagId, so old
 * boards group into exactly the same blocks as before.
 */
export declare function getRuleSignature(rule: IPersonalizationRule | IPersonalizationRuleCondition[]): string;
/**
 * Condition-set equality: order-insensitive across conditions, value-SET
 * equality per condition, operators compared with the "is" default applied.
 * Assumes each mergeTagId appears at most once per set (rule invariant).
 */
export declare function sameConditionSet(a: IPersonalizationRuleCondition[], b: IPersonalizationRuleCondition[]): boolean;
