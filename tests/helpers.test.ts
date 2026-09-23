import {describe, expect, it} from "@jest/globals";
import {formCtaKeysToSnakeCase, keysToSnakeCase} from "../src/common/helpers/helpers";

describe("formCtaKeysToSnakeCase", () => {
    const payload = {
        form_id: 604,
        email: "test@slb.com",
        firstName: "Test",
        lastName: "Lead",
        countryCode: "US",
        topicNames: "Artificial Intelligence",
        optin: "y",
        form_fields: ["email", "firstName", "lastName", "countryCode", "topicNames", "optin"],
    };

    it("snake_cases form_fields so it still matches the snake_cased payload keys", () => {
        const result = formCtaKeysToSnakeCase(payload);
        const keys = Object.keys(result);

        result.form_fields.forEach(field => expect(keys).toContain(field));
    });

    it("keeps the keys identical to keysToSnakeCase", () => {
        expect(Object.keys(formCtaKeysToSnakeCase(payload))).toEqual(Object.keys(keysToSnakeCase(payload)));
    });

    it("leaves a payload without form_fields untouched", () => {
        expect(formCtaKeysToSnakeCase({firstName: "Test"})).toEqual({first_name: "Test"});
    });
});
