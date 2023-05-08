import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";
import { EnrichmentBoardConfigV3 } from "../src";

let sdk: ClientSDK;

const ctaParams = {
    cta: {area: "banner", label: "label"},
    email: "email@company.com",
    formId: 1,
    message: "hey",
    type: "message",
};

describe("test liveboard mocks module", () => {
    beforeAll(async () => {
        sdk = await ClientSDK.create({useMock: true, organizationId: 1, analyticsServiceEndpoint: ''});
    });

    it("checks that getBoard mock works as expected", async () => {
        await sdk.liveboard.getBoard("board_slug").then(result => expect(result.id).toEqual(1));
    });

    it("checks that getSellerInformation mock works as expected", async () => {
        await sdk.liveboard.getSellerInformation(1).then(result => expect(result.email).toContain("@"));
    });

    it("checks that getCategory mock works as expected", async () => {
        await sdk.liveboard.getCategory(1, 1, false).then(result => expect(result.id).toEqual(1));
    });

    it("checks that getCategories mock works as expected", async () => {
        await sdk.liveboard.getCategories(3).then(result => {
            expect(result.data["1"].board_id).toEqual(3);
            expect(result.categories_ids).toHaveLength(2);
        });
    });

    it("checks that getUserChat mock works as expected", async () => {
        await sdk.liveboard.getUserChat(1, 1).then(result => expect(result.chat_id).toBeDefined());
    });

    it("checks that getItem mock works as expected", async () => {
        await sdk.liveboard.getItem(1, 1, false).then(result => expect(result.id).toEqual(1));
    });

    it("checks that getItems mock works as expected", async () => {
        await sdk.liveboard.getItems({boardId: 1, search: "", source: "curated"}).then(result => expect(result.item_ids).toHaveLength(1));
    });

    it("checks that getHasItems mock works as expected", async () => {
        await sdk.liveboard.getHasItems(1).then(result => expect(result.has_items).toBeTruthy);
    });

    it("checks that getJourneyItems mock works as expected", async () => {
        await sdk.liveboard
            .getJourneyItems(1, {categoryId: undefined, boardId: undefined})
            .then(result => expect(result.items_count).toBeGreaterThan(3));
    });

    it("checks that getContentDownloadUrl mock works as expected for success", async () => {
        await sdk.liveboard.getContentDownloadUrl(1).then(result => expect(result).toHaveProperty("download_url"));
    });

    it("checks that getContentDownloadUrl mock works as expected for failure", async () => {
        await sdk.liveboard.getContentDownloadUrl(1).catch(error => expect(error.response.data).toHaveProperty("text"));
    });

    it("checks that createSnapshotUrl mock works as expected", async () => {
        await sdk.liveboard.createSnapshotUrl(1).then(result => expect(result.link_url).toEqual("abc.website.com"));
    });

    it("checks that createItemAnalysis mock works as expected", async () => {
        await sdk.liveboard.createItemAnalysis(1).then(result => expect(result.secured).toBeTruthy);
    });

    it("checks that getFileUrl mock works as expected", async () => {
        await sdk.liveboard.getFileMetadata(1).then(result => expect(result.preview_metadata).toHaveProperty("url"));
    });

    it("checks that setCookiesConsent mock works as expected", async () => {
        await sdk.liveboard
            .setCookiesConsent(1, {leadId: 1, constentOrigin: "CallToAction", isoCode: "IL"})
            .then(result => expect(result).toBeNull);
    });

    it("checks that updateEnrichment mock works as expected", async () => {
        await sdk.liveboard.updateEnrichment("dnb", {name: "company"}, 100).then(result => expect(result).toBeNull);
    });

    it("checks that getGeoLocation mock works as expected", async () => {
        await sdk.liveboard.getGeoLocation().then(result => expect(result.country).toEqual("israel"));
    });

    it("checks that getCurrentLead mock works as expected", async () => {
        await sdk.liveboard.getCurrentLead().then(result => expect(result.anon_guest).toBeFalsy);
    });

    it("checks that validateLead mock works as expected", async () => {
        await sdk.liveboard.validateLead(1).then(result => expect(result).toBeNull);
    });

    it("checks that stopTrackingForSession mock works as expected", async () => {
        await sdk.liveboard.stopTrackingForSession().then(result => expect(result.anon_guest).toBeTruthy);
    });

    it("checks that getLiveEventUrls mock works as expected", async () => {
        await sdk.liveboard.getLiveEventUrls(1).then(result => expect(result.meeting_url).toMatch("https://"));
    });

    it("checks that getOrganizationSettings mock works as expected", async () => {
        await sdk.liveboard
            .getOrganizationSettings(1)
            .then(result => expect(result.privacy.privacy_warning_provider).toEqual("app"));
    });

    it("checks that setSessionCookie mock works as expected", async () => {
        await sdk.liveboard.setSessionCookie(1).then(result => expect(result).toEqual(1));
    });

    it("checks that form data mock works as expected", async () => {
        await sdk.liveboard.getFormData(1, 1, 1).then(result => expect(result.form.form_title).toEqual("form title"));
    });

    it("checks that campaign element footer mock works as expected", async () => {
        await sdk.liveboard.getFooter(1, 1).then(result => expect(result.name).toEqual("footer"));
    });

    it("checks that campaign element privacy message mock works as expected", async () => {
        await sdk.liveboard
            .getPrivacyMessage(1, 1)
            .then(result => expect(result.name).toEqual("Standard Privacy Message"));
    });

    it("checks that campaign element form privacy message mock works as expected", async () => {
        await sdk.liveboard
            .getFormPrivacyMessage(1, 1)
            .then(result => expect(result.name).toEqual("form privacy message"));
    });

    it("checks that saveMessageCta mock works as expected", async () => {
        await sdk.liveboard.saveMessageCta(1, ctaParams).then(result => expect(result.id).toEqual(1));
    });

    it("checks that saveContactCta mock works as expected", async () => {
        await sdk.liveboard.saveContactCta(1, ctaParams).then(result => expect(result.id).toEqual(1));
    });

    it("checks that saveFormCta mock works as expected", async () => {
        await sdk.liveboard.saveFormCta(1, ctaParams).then(result => expect(result.id).toEqual(1));
    });

    it("checks that saveLinkCta mock works as expected", async () => {
        await sdk.liveboard.saveLinkCta(1, ctaParams).then(result => expect(result.id).toEqual(1));
    });

    it("checks that saveShareCta mock works as expected", async () => {
        await sdk.liveboard.saveShareCta(1, ctaParams).then(result => expect(result.id).toEqual(1));
    });

    it("checks that saveShareByEmailCta mock works as expected", async () => {
        await sdk.liveboard.saveShareByEmailCta(1, "email@company.com", 1234).then(result => expect(result).toBeNull);
    });

    it("checks that enrichment partial content work as expected", async () => {
        await sdk.liveboard
            .getEnrichment(1)
            .then((result: EnrichmentBoardConfigV3) => expect(result.personalization_rules_results).toBeDefined());
    });
});

describe("testing liveboard module in preview", () => {
    beforeAll(async () => {
        sdk = await ClientSDK.create({useMock: true, organizationId: 1, isPreview: true, analyticsServiceEndpoint: ''});
    });

    it("checks that saveMessageCta mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.liveboard.saveMessageCta(1, ctaParams).then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that saveContactCta mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.liveboard.saveContactCta(1, ctaParams).then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that saveFormCta mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.liveboard.saveFormCta(1, ctaParams).then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that saveLinkCta mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.liveboard.saveLinkCta(1, ctaParams).then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that saveShareCta mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.liveboard.saveShareCta(1, ctaParams).then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that saveShareByEmailCta mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.liveboard
            .saveShareByEmailCta(1, "email@company.com", 1234)
            .then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });
});
