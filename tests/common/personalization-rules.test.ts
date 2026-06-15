import {describe, expect, it} from "@jest/globals";
import {
    conditionsToRuleFields,
    getRuleConditions,
    getRuleSignature,
    isMultiConditionRule,
    sameConditionSet,
} from "../../src/common/helpers/personalizationRules";
import {IPersonalizationRule} from "../../src/common/interfaces/IPersonalization";

const legacyRule: IPersonalizationRule = {
    key: "ru_legacy",
    mergeTagId: "12",
    mergeTagValues: ["VP of Marketing", "CMO"],
};

const andRule: IPersonalizationRule = {
    key: "ru_and",
    mergeTagId: "12",
    mergeTagValues: ["VP of Marketing"],
    compareOperator: "is",
    andConditions: [{mergeTagId: "47", mergeTagValues: ["United States"], compareOperator: "contains"}],
};

describe("personalizationRules helpers", () => {
    it("getRuleConditions normalizes a legacy rule to one condition with defaulted operator", () => {
        const conditions = getRuleConditions(legacyRule);
        expect(conditions).toHaveLength(1);
        expect(conditions[0]).toEqual({
            mergeTagId: "12",
            mergeTagValues: ["VP of Marketing", "CMO"],
            compareOperator: "is",
        });
    });

    it("getRuleConditions returns the primary condition followed by andConditions", () => {
        const conditions = getRuleConditions(andRule);
        expect(conditions).toHaveLength(2);
        expect(conditions[1]).toEqual({
            mergeTagId: "47",
            mergeTagValues: ["United States"],
            compareOperator: "contains",
        });
    });

    it("conditionsToRuleFields omits andConditions for a single condition", () => {
        const fields = conditionsToRuleFields(getRuleConditions(legacyRule));
        expect("andConditions" in fields).toBe(false);
        expect(fields.mergeTagId).toBe("12");
        expect(fields.mergeTagValues).toEqual(["VP of Marketing", "CMO"]);
        expect(fields.mergeTagValues).not.toBe(legacyRule.mergeTagValues); // copied
    });

    it("conditionsToRuleFields round-trips an AND rule", () => {
        const fields = conditionsToRuleFields(getRuleConditions(andRule));
        expect(fields.andConditions).toHaveLength(1);
        expect(fields.andConditions![0].mergeTagValues).toEqual(["United States"]);
        expect(fields.andConditions![0].mergeTagValues).not.toBe(andRule.andConditions![0].mergeTagValues);
    });

    it("isMultiConditionRule distinguishes legacy and AND rules", () => {
        expect(isMultiConditionRule(legacyRule)).toBe(false);
        expect(isMultiConditionRule(andRule)).toBe(true);
        expect(isMultiConditionRule({...legacyRule, andConditions: []})).toBe(false);
    });

    it("getRuleSignature of a legacy rule equals its mergeTagId", () => {
        expect(getRuleSignature(legacyRule)).toBe("12");
    });

    it("getRuleSignature sorts numerically and joins with &", () => {
        expect(getRuleSignature(andRule)).toBe("12&47");
        const reversed: IPersonalizationRule = {
            key: "ru_x",
            mergeTagId: "47",
            mergeTagValues: ["a"],
            andConditions: [{mergeTagId: "9", mergeTagValues: ["b"]}],
        };
        expect(getRuleSignature(reversed)).toBe("9&47");
    });

    it("sameConditionSet is order-insensitive across conditions and values", () => {
        const a = getRuleConditions(andRule);
        const b = [
            {mergeTagId: "47", mergeTagValues: ["United States"], compareOperator: "contains" as const},
            {mergeTagId: "12", mergeTagValues: ["VP of Marketing"]},
        ];
        expect(sameConditionSet(a, b)).toBe(true);
    });

    it("sameConditionSet rejects operator and value differences", () => {
        const a = getRuleConditions(andRule);
        expect(
            sameConditionSet(a, [
                {mergeTagId: "12", mergeTagValues: ["VP of Marketing"]},
                {mergeTagId: "47", mergeTagValues: ["United States"], compareOperator: "is"},
            ]),
        ).toBe(false);
        expect(
            sameConditionSet(a, [
                {mergeTagId: "12", mergeTagValues: ["CMO"]},
                {mergeTagId: "47", mergeTagValues: ["United States"], compareOperator: "contains"},
            ]),
        ).toBe(false);
    });

    it("sameConditionSet rejects subsets", () => {
        expect(sameConditionSet(getRuleConditions(andRule), getRuleConditions(legacyRule))).toBe(false);
    });
});
