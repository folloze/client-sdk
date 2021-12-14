import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

describe("test liveboard mocks module", () => {
    it('checks that getBoard mock works as expected', async () => {
        await sdk.liveboard.getBoard('board_slug')
            .then(result => expect(result.id).toEqual(1));
    });

    it('checks that getSellerInformation mock works as expected', async() => {
        await sdk.liveboard.getSellerInformation(1, 'abcd')
            .then(result => expect(result.email).toContain('@'));
    });

    it('checks that getCampaign mock works as expected', async() => {
        await sdk.liveboard.getCampaign({boardId: 1})
            .then(result => expect(result.status == 200));
    });

    it('checks that getCategory mock works as expected', async() => {
        await sdk.liveboard.getCategory({boardId: 1, categoryId: 1, bySlug: false})
            .then(result => expect(result.status == 200));
    });

    it('checks that getCategories mock works as expected', async() => {
        await sdk.liveboard.getCategories({boardId: 1})
            .then(result => expect(result.status == 200));
    });

    it('checks that getUserChat mock works as expected', async() => {
        await sdk.liveboard.getUserChat({boardId: 1, leadId: 1})
            .then(result => expect(result.status == 200));
    });

    it('checks that createSnapshotUrl mock works as expected', async() => {
        await sdk.liveboard.createSnapshotUrl({contentItemId: 1})
            .then(result => expect(result.status == 200));
    });

    it('checks that createItemAnalysis mock works as expected', async() => {
        await sdk.liveboard.createItemAnalysis({contentItemId: 1})
            .then(result => expect(result.status == 200));
    });

    it('checks that getFileUrl mock works as expected', async() => {
        await sdk.liveboard.getFileUrl({contentItemId: 1})
            .then(result => expect(result.status == 200));
    });

    it('checks that getItems (all) mock works as expected', async () => {
        await sdk.liveboard.getItems()
            .then(result => expect(result.status == 201));
    });

    it('checks that getItems mock works as expected', async () => {
        await sdk.liveboard.getItems({itemId: 1})
            .then(result => expect(result.status == 201));
    });
});
