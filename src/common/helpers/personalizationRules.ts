import {
    IPersonalizationRule,
    IPersonalizationRuleCondition,
    PERSONALIZATION_COMPARE_OPERATORS,
} from "../interfaces/IPersonalization";

/**
 * Normalizes a rule into its list of conditions: the legacy inline fields
 * (mergeTagId/mergeTagValues/compareOperator) are the first condition, followed
 * by any andConditions. Operators are defaulted to "is".
 * All rule logic should go through this helper instead of reading
 * rule.mergeTagId directly, so legacy single-condition rules and AND rules are
 * handled uniformly.
 */
export function getRuleConditions(
    rule: IPersonalizationRule | IPersonalizationRuleCondition,
): IPersonalizationRuleCondition[] {
    const first: IPersonalizationRuleCondition = {
        mergeTagId: rule.mergeTagId,
        mergeTagValues: rule.mergeTagValues,
        compareOperator: rule.compareOperator || PERSONALIZATION_COMPARE_OPERATORS.is,
    };
    const rest = ((rule as IPersonalizationRule).andConditions ?? []).map(condition => ({
        ...condition,
        compareOperator: condition.compareOperator || PERSONALIZATION_COMPARE_OPERATORS.is,
    }));
    return [first, ...rest];
}

/**
 * Inverse of getRuleConditions: maps a conditions list back to persisted rule
 * fields. Omits andConditions entirely for single-condition rules so legacy
 * rules keep serializing exactly as before.
 */
export function conditionsToRuleFields(
    conditions: IPersonalizationRuleCondition[],
): Pick<IPersonalizationRule, "mergeTagId" | "mergeTagValues" | "compareOperator" | "andConditions"> {
    const [first, ...rest] = conditions;
    return {
        mergeTagId: first.mergeTagId,
        mergeTagValues: [...first.mergeTagValues],
        compareOperator: first.compareOperator || PERSONALIZATION_COMPARE_OPERATORS.is,
        ...(rest.length
            ? {andConditions: rest.map(c => ({...c, mergeTagValues: [...c.mergeTagValues]}))}
            : {}),
    };
}

export function isMultiConditionRule(rule: IPersonalizationRule): boolean {
    return !!rule.andConditions?.length;
}

/**
 * Canonical block signature for grouping rules in the rule builder: the rule's
 * unique mergeTagIds, numeric-aware sorted and "&"-joined (e.g. "12&47").
 * A legacy single-condition rule's signature equals its mergeTagId, so old
 * boards group into exactly the same blocks as before.
 */
export function getRuleSignature(rule: IPersonalizationRule | IPersonalizationRuleCondition[]): string {
    const conditions = Array.isArray(rule) ? rule : getRuleConditions(rule);
    return [...new Set(conditions.map(c => c.mergeTagId))]
        .sort((a, b) => Number(a) - Number(b) || a.localeCompare(b))
        .join("&");
}

/**
 * Condition-set equality: order-insensitive across conditions, value-SET
 * equality per condition, operators compared with the "is" default applied.
 * Assumes each mergeTagId appears at most once per set (rule invariant).
 */
export function sameConditionSet(
    a: IPersonalizationRuleCondition[],
    b: IPersonalizationRuleCondition[],
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    return a.every(conditionA => {
        const conditionB = b.find(c => c.mergeTagId === conditionA.mergeTagId);
        return (
            !!conditionB &&
            (conditionA.compareOperator || PERSONALIZATION_COMPARE_OPERATORS.is) ===
                (conditionB.compareOperator || PERSONALIZATION_COMPARE_OPERATORS.is) &&
            conditionA.mergeTagValues.length === conditionB.mergeTagValues.length &&
            conditionA.mergeTagValues.every(value => conditionB.mergeTagValues.includes(value))
        );
    });
}
