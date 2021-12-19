import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
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
        await sdk.liveboard.getCategories(1)
            .then(result => expect(result.categories_ids).toHaveLength(2));
    });

    it('checks that getUserChat mock works as expected', async() => {
        await sdk.liveboard.getUserChat(1, 1)
            .then(result => expect(result.chat_id).toBeDefined());
    });

    it('checks that createSnapshotUrl mock works as expected', async() => {
        await sdk.liveboard.createSnapshotUrl(1)
            .then(result => expect(result.link_url == '200'));
    });

    it('checks that createItemAnalysis mock works as expected', async() => {
        await sdk.liveboard.createItemAnalysis({contentItemId: 1})
            .then(result => expect(result.status == 200));
    });

    it('checks that getFileUrl mock works as expected', async() => {
        await sdk.liveboard.getFileUrl({contentItemId: 1})
            .then(result => expect(result.status == 200));
    });

    //TODO
    it('checks that getItems (all) mock works as expected', async () => {
        await sdk.liveboard.getItems()
            .then(result => expect(result.status == 201));
    });

    //TODO
    it('checks that getItems mock works as expected', async () => {
        await sdk.liveboard.getItems({itemId: 1})
            .then(result => expect(result.status == 201));
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
});
