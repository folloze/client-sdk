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

    const personalization = {
        auto_assign_inviter: {},
        campaign: {
            banner: {},
            contact_card: {card: {}},
            footer: {},
            general: {},
            header: {
                logo: {
                    image: {
                        merge_tag_ids: [18],
                        rules: [{
                            attribute_id: 18,
                            attribute_values: ["any value"],
                            id: "rule_776.2880741331646",
                            index: 0,
                            result: {source_type: 2, isLoading: false}
                        }]
                    }
                }
            },
            items: {},
            promotion: {items: {0: {}}}
        },
        is_enabled: true
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

    it('checks that getForms works as expected', async () => {
        await sdk.designer.getForms(1)
            .then(result => expect(result).toMatchObject({"1": {}, "2": {}, "3": {}}));
    });

    it('checks that createForm works as expected', async () => {
        await sdk.designer.createForm(1, form)
            .then(result => expect(result.board_id).toEqual(1));
    });

    it('checks that updateForm works as expected', async () => {
        await sdk.designer.updateForm(1, form)
            .then(result => expect(result.board_id).toEqual(1));
    });

    it('checks that getFooters works as expected', async () => {
        await sdk.designer.getFooters(1)
            .then(result => expect(result.default_id).not.toBeNull());
    });

    it('checks that getPrivacyMessages works as expected', async () => {
        await sdk.designer.getPrivacyMessages(1)
            .then(result => expect(result.default_id).not.toBeNull());
    });

    it('checks that getFooters works as expected', async () => {
        await sdk.designer.getFooters(1)
            .then(result => expect(result.default_id).not.toBeNull());
    });

    it('checks that getPrivacySettings works as expected', async () => {
        await sdk.designer.getPrivacySettings(1)
            .then(result => expect(result.disable_share_button_on_board).not.toBeNull());
    });

    it('checks that getEmailTemplates works as expected', async () => {
        await sdk.designer.getEmailTemplates(1)
            .then(result => expect(result["1"].template).not.toBeNull());
    });

    it('checks that getBoardHasPersonalization works as expected', async () => {
        await sdk.designer.getBoardHasPersonalization(1, 1)
            .then(result => expect(result.personalization).not.toBeNull());
    });

    it('checks that getFeatureSettings works as expected', async () => {
        await sdk.designer.getFeatureSettings(1)
            .then(result => expect(result.personalization).not.toBeNull());
    });

    it('checks that getBoardHasItems works as expected', async () => {
        await sdk.designer.getBoardHasItems(1, 1)
            .then(result => expect(result.has_items).not.toBeNull());
    });

    it('checks that getPersonalization workd as expected', async () => {
        await sdk.designer.getPersonalization(1)
            .then(result => expect(result.campaign.header).toHaveProperty('logo.image.merge_tag_ids'));
    });

    it('checks that savePersonalization workd as expected', async () => {
        await sdk.designer.savePersonalization(1, personalization)
            .then(result => expect(result).toEqual(personalization));
    });

    it('checks that saveLiveBoard mock working as expected', async () => {
        await sdk.designer.saveLiveBoard({type: "test", data: {}})
            .then(result => expect(result.status == 200));
    });

    it('checks that searchBoardContacts works as expected', async () => {
        await sdk.designer.searchBoardContacts(1, "query")
            .then(result => expect(result.length).toEqual(2));
    });
});
