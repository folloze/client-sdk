import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(async () => {
    sdk = await ClientSDK.create({useMock: true});
});

describe("testing sdk designer module", () => {
    it('checks that getCampaignImageGallery mock works as expectes', async () => {
        await sdk.designer.getCampaignImageGallery(1)
            .then(result => expect(result.length).toBeGreaterThan(10));
    });

    it('checks that uploadImage works as expected', async () => {
        const image = new global.File([""], "fileName", {type: "image"});
        await sdk.designer.uploadImage(image)
            .then(result => expect(result).toEqual('https://uploaded_url.com'));
    });

    it('checks that getImageBankSettings mock works as expected', async () => {
        await sdk.designer.getImageBankSettings(1)
            .then(result => expect(result.icons).toEqual("folloze"));
    });
    
    it('checks that saveImageBankSettings mock works as expected', async () => {
        await sdk.designer.saveImageBankSettings(1, "banners", "folloze")
            .then(result => expect(result.icons).toEqual("folloze"));
    });

    it('checks that saveLiveBoard mock working as expected', async () => {
        await sdk.designer.saveLiveBoard({type: "test", data: {}})
            .then(result => expect(result.status == 200));
    });

});
