import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(async () => {
    sdk = await ClientSDK.create({useMock: true});
});

describe("test liveboard mocks module", () => {
    const ctaParams = {
        cta: {area: "banner", label: null},
        email: "email@company.com",
        formId: 1,
        message: "hey",
        type: "message",
    };

    it('checks that getBoard mock works as expected', async () => {
        await sdk.liveboard.getBoard('board_slug')
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that getSellerInformation mock works as expected', async() => {
        await sdk.liveboard.getSellerInformation(1, 'abcd')
            .then(result => expect(result.email).toContain('@'));
    });

    it('checks that getCategory mock works as expected', async() => {
        await sdk.liveboard.getCategory(1, 1, false)
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that getCategories mock works as expected', async() => {
        await sdk.liveboard.getCategories(3)
            .then(result => {
                expect(result.data["1"].board_id).toEqual(3);
                expect(result.categories_ids).toHaveLength(2);
            });
    });

    it('checks that getUserChat mock works as expected', async() => {
        await sdk.liveboard.getUserChat(1, 1)
            .then(result => expect(result.chat_id).toBeDefined());
    });

    it('checks that getItem mock works as expected', async() => {
        await sdk.liveboard.getItem(1, 1, false)
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that getItems mock works as expected', async() => {
        await sdk.liveboard.getItems({boardId: 1, categoryId: 1, search: ""})
            .then(result => expect(result.item_ids).toHaveLength(1));
    });

    it('checks that getHasItems mock works as expected', async() => {
        await sdk.liveboard.getHasItems(1)
            .then(result => expect(result.has_items).toBeTruthy);
    });

    it('checks that likeItem mock works as expected', async () => {
        await sdk.liveboard.likeItem(1)
            .then(result => expect(result).toBeNull);
    });

    it('checks that getJourneyItems mock works as expected', async () => {
        await sdk.liveboard.getJourneyItems(1, {categoryId: null, boardId: null, query: null})
            .then(result => expect(result.items_count).toBeGreaterThan(3));
    });

    it('checks that getItemDownloadUrl mock works as expected for success', async () => {
        await sdk.liveboard.getItemDownloadUrl(1)
            .then(result => expect(result).toHaveProperty('download_url'));
    });

    it('checks that getItemDownloadUrl mock works as expected for failure', async () => {
        await sdk.liveboard.getItemDownloadUrl(0)
            .catch(error => expect(error.response.data).toHaveProperty('text'));
    });

    it('checks that createSnapshotUrl mock works as expected', async() => {
        await sdk.liveboard.createSnapshotUrl(1)
            .then(result => expect(result.link_url).toEqual("abc.website.com"));
    });

    it('checks that createItemAnalysis mock works as expected', async() => {
        await sdk.liveboard.createItemAnalysis(1)
            .then(result => expect(result.secured).toBeTruthy);
    });

    it('checks that getFileUrl mock works as expected', async() => {
        await sdk.liveboard.getFileMetadata(1)
            .then(result => expect(result.preview_metadata).toHaveProperty('url'));
    });

    it('checks that setCookiesConsent mock works as expected', async () => {
        await sdk.liveboard.setCookiesConsent(1, {leadId: 1, constentOrigin: 'CallToAction', isoCode: 'IL'})
            .then(result => expect(result).toBeNull);
    });

    it('checks that saveMessageCta mock works as expected', async () => {
        await sdk.liveboard.saveMessageCta(1, ctaParams)
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that saveContactCta mock works as expected', async () => {
        await sdk.liveboard.saveContactCta(1, ctaParams)
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that saveFormCta mock works as expected', async () => {
        await sdk.liveboard.saveFormCta(1, ctaParams)
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that saveLinkCta mock works as expected', async () => {
        await sdk.liveboard.saveLinkCta(1, ctaParams)
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that saveShareCta mock works as expected', async () => {
        await sdk.liveboard.saveShareCta(1, ctaParams)
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that saveShareByEmailCta mock works as expected', async () => {
        await sdk.liveboard.saveShareByEmailCta(1, 'email@company.com', 1234)
            .then(result => expect(result).toBeNull);
    });

    it('checks that updateEnrichment mock works as expected', async () => {
        await sdk.liveboard.updateEnrichment("dnb", {"name": "company"})
            .then(result => expect(result).toBeNull);
    });

    it('checks that getGeoLocation mock works as expected', async () => {
        await sdk.liveboard.getGeoLocation()
            .then(result => expect(result.country).toEqual("israel"));
    });

    it('checks that updateInvitationUsed mock works as expected', async () => {
        await sdk.liveboard.updateInvitationUsed("1")
            .then(result => expect(result).toBeNull);
    });

    it('checks that getCurrentLead mock works as expected', async () => {
        await sdk.liveboard.getCurrentLead()
            .then(result => expect(result.anon_guest).toBeFalsy);
    });

    it('checks that validateLead mock works as expected', async () => {
        await sdk.liveboard.validateLead(1)
            .then(result => expect(result).toBeNull);
    });

    it('checks that stopTrackingForSession mock works as expected', async () => {
        await sdk.liveboard.stopTrackingForSession()
            .then(result => expect(result.anon_guest).toBeTruthy);
    });

    it('checks that getLiveEventUrls mock works as expected', async () => {
        await sdk.liveboard.getLiveEventUrls(1)
            .then(result => expect(result.meeting_url).toMatch('https://'));
    });

    it('checks that getOrganizationSettings mock works as expected', async () => {
        await sdk.liveboard.getOrganizationSettings(1)
            .then(result => expect(result.privacy.privacy_warning_provider).toEqual("app"));
    });

    it('checks that createSession mock works as expected', async () => {
        await sdk.liveboard.createSession()
            .then(result => expect(result.guid).toBeTruthy);
    });

    it('checks that validateSession mock works as expected', async () => {
        await sdk.liveboard.validateSession()
            .then(result => expect(result).toHaveProperty('guid'));
    });

    it('checks that setSessionCookie mock works as expected', async () => {
        await sdk.liveboard.setSessionCookie(1)
            .then(result => expect(result).toEqual(1));
    });
});
