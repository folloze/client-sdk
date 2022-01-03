import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(async () => {
    sdk = await ClientSDK.create({useMock: true});
});

describe("testing sdk designer module", () => {
    const form = {
        board_id: 1,
        form_type: 2,
        id: null,
        name: "External Form",
        organization_id: 1,
        state: null,
        data: {
            script: "<script type='text/javascript'>alert('hey!')</script>",
            auto_fill: "true",
            form_title: "Enter details here",
            submit_label: "email me",
            success_message: "thanks!",
        }
    };

    it('checks that getCampaignImageGallery mock works as expectes', async () => {
        await sdk.designer.getCampaignImageGallery()
            .then(result => expect(result.length).toBeGreaterThan(10));
    });

    it('checks that getImageBankGallery for banners mock works as expectes', async () => {
        await sdk.designer.getImageBankGallery(1, 1)
            .then(result => expect(result.length).toBeGreaterThan(1));
    });

    it('checks that getImageBankGallery for icons mock works as expectes', async () => {
        await sdk.designer.getImageBankGallery(1, 4)
            .then(result => expect(result.length).toBeGreaterThan(3));
    });

    it('checks that getQueryImageGallery mock works as expectes', async () => {
        await sdk.designer.getQueryImageGallery("bug")
            .then(result => expect(result.length).toEqual(14));
    });

    it('checks that getImageBankSettings mock works as expected', async () => {
        await sdk.designer.getImageBankSettings(1)
            .then(result => expect(result.icons).toEqual("folloze"));
    });
    
    it('checks that saveImageBankSettings mock works as expected', async () => {
        await sdk.designer.saveImageBankSettings(1, "banners", "folloze")
            .then(result => expect(result.icons).toEqual("folloze"));
    });

    it('checks that getForms works as expexted', async () => {
        await sdk.designer.getForms(1)
            .then(result => expect(result).toMatchObject({"1": {}, "2": {}, "3": {}}));
    });

    it('checks that createForm works as expexted', async () => {
        await sdk.designer.createForm(1, form)
            .then(result => expect(result.board_id).toEqual(1));
    });

    it('checks that updateForm works as expexted', async () => {
        await sdk.designer.updateForm(1, form)
            .then(result => expect(result.board_id).toEqual(1));
    });

    it('checks that getFooters works as expexted', async () => {
        await sdk.designer.getFooters(1)
            .then(result => expect(result.default_id).not.toBeNull());
    });

    it('checks that getPrivacyMessages works as expexted', async () => {
        await sdk.designer.getPrivacyMessages(1)
            .then(result => expect(result.default_id).not.toBeNull());
    });

    it('checks that getFooters works as expexted', async () => {
        await sdk.designer.getFooters(1)
            .then(result => expect(result.default_id).not.toBeNull());
    });

    it('checks that saveLiveBoard mock working as expected', async () => {
        await sdk.designer.saveLiveBoard({type: "test", data: {}})
            .then(result => expect(result.status == 200));
    });

});
