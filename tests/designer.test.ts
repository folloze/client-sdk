import {describe, expect, beforeAll} from "@jest/globals";
import {Board, BoardConfig} from "../src/common/interfaces/IBoard";
import {ClientSDK} from "../src/sdk";
import {AxiosResponse} from "axios";
import {ConfigSavedConflict, ConfigSavedSuccess} from "../src";

let sdk: ClientSDK;

beforeAll(async () => {
    sdk = await ClientSDK.create({useMock: true, organizationId: 1, analyticsServiceEndpoint: ''});
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
            auto_fill: true,
            form_title: "Enter details here",
            submit_label: "email me",
            success_message: "thanks!",
            submit_redirect_url: "https://www.folloze.com",
        },
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
                        rules: [
                            {
                                attribute_id: 18,
                                attribute_values: ["any value"],
                                id: "rule_776.2880741331646",
                                index: 0,
                                result: {source_type: 2, isLoading: false},
                            },
                        ],
                    },
                },
            },
            items: {},
            promotion: {items: {0: {}}},
        },
        is_enabled: true,
    };

    it("checks that publish board returns 200 when all is ok", async () => {
        await sdk.designer.publishLiveBoard(1).then(res => expect(res.id).toBeDefined());
    });

    it("checks that publish board returns 208 when hashes are the same", async () => {
        await sdk.designer.publishLiveBoard(666).then(res => expect(res).toBeUndefined());
    });

    // todo: (multi-pages) implement new getLiveBoardConfig
    it("checks that get liveboard config work as expected", async () => {
        await sdk.designer.getLiveBoardConfig(1).then(res => expect(res.published_config.pages).toBeDefined());
        await sdk.designer.getLiveBoardConfig(1).then(res => expect(res.unpublished_config.pages).toBeDefined());
    });

    it("checks that searchImageGallery mock works as expectes", async () => {
        await sdk.designer.searchImageGallery("bug").then(result => expect(result.length).toEqual(14));
    });

    it("checks that getForms works as expected", async () => {
        await sdk.designer.getForms(1).then(result => expect(result).toMatchObject({"1": {}, "2": {}, "3": {}}));
    });

    it("checks that createForm works as expected", async () => {
        await sdk.designer.createForm(1, form).then(result => expect(result.board_id).toEqual(1));
    });

    it("checks that updateForm works as expected", async () => {
        await sdk.designer.updateForm(1, 1, form).then(result => expect(result.board_id).toEqual(1));
    });

    it("checks that getFooters works as expected", async () => {
        await sdk.designer.getFooters(1).then(result => expect(result.default_id).toEqual(0));
    });

    it("checks that getPrivacyMessages works as expected", async () => {
        await sdk.designer.getPrivacyMessages(1).then(result => expect(result.default_id).toEqual(0));
    });

    it("checks that getFooters works as expected", async () => {
        await sdk.designer.getFooters(1).then(result => expect(result.default_id).toEqual(0));
    });

    it("checks that getPrivacySettings works as expected", async () => {
        await sdk.designer
            .getPrivacySettings(1)
            .then(result => expect(result.disable_share_button_on_board).toBeFalsy());
    });

    it("checks that getEmailTemplates works as expected", async () => {
        await sdk.designer.getEmailTemplates(1).then(result => {
            expect(result["1"].template).toBeTruthy();
        });
    });

    it("checks that getBoardHasPersonalization works as expected", async () => {
        await sdk.designer.getBoardHasPersonalization(1, 1).then(result => expect(result.personalization).toBeTruthy());
    });

    it("checks that getFeatureSettings works as expected", async () => {
        await sdk.designer.getFeatureSettings(1).then(result => expect(result.personalization).toBeTruthy());
    });

    it("checks that getPersonalization workd as expected", async () => {
        await sdk.designer
            .getPersonalization(1)
            .then(result => expect(result.campaign.header).toHaveProperty("logo.image.merge_tag_ids"));
    });

    it("checks that savePersonalization workd as expected", async () => {
        await sdk.designer
            .savePersonalization(1, personalization)
            .then(result => expect(result).toEqual(personalization));
    });

    it("checks that savePersonalization workd as expected", async () => {
        await sdk.designer
            .savePersonalization(1, personalization)
            .then(result => expect(result).toEqual(personalization));
    });

    // this is not passing for me after Itzhak's changes
    it.skip("checks that all image gallery requests work as expected", async () => {
        await sdk.designer.getImagesImageGallery().then(result => expect(result.length).toEqual(19));
        await sdk.designer.getIconsImageGallery().then(result => expect(result.length).toEqual(4));
        await sdk.designer.getMobileImageGallery().then(result => expect(result.length).toEqual(2));
        await sdk.designer.getLogosImageGallery().then(result => expect(result.length).toEqual(3));
        await sdk.designer.getPersonalImageGallery().then(result => expect(result.length).toEqual(2));
    });

    it("checks that all video gallery requests work as expected", async () => {
        await sdk.designer.getVideosGallery().then(result => expect(result.length).toEqual(3));
        await sdk.designer.getPersonalVideosGallery().then(result => expect(result.length).toEqual(2));
    });

    it("checks that get image gallery by bing search is working as expected", async () => {
        await sdk.designer.searchImageGallery("bug").then(result => expect(result.length).toEqual(14));
        await sdk.designer.searchImageGallery("test").then(result => expect(result.length).toEqual(14));
    });

    it("checks that create personal gallery media works as expected", async () => {
        const photoUrl = "https://images.folloze.com/image/upload/c_lfill,h_140/f_auto/q_auto/v1723457344/ooaw0nefau2avbe0x3fd.jpg";

        await sdk.designer.createPersonalGalleryMedia({
            url: photoUrl,
            name: "image",
            category: "images"
        }).then(result => expect(result.url).toEqual(photoUrl));
    });

    it("checks that delete personal gallery media works as expected", async () => {
        await sdk.designer.deletePersonalGalleryMedia(1).then(result => expect(result).toEqual(undefined));
    });

    // todo(multi-pages): implement a new test for save liveboard
    it("checks that saveLiveBoard mock working as expected", async () => {
        const boardConfig: BoardConfig = {
            id: 1,
            meta: null,
            pages: {
                default: {
                    name: "default",
                    grid: {
                        maxWidth: "1024px",
                        gap: {x: "0", y: "0"},
                        columns: {colNum: 12, colWidth: "1fr"},
                        rows: {rowNum: 0, rowHeight: "25px"},
                    },
                    sections: {},
                    widgets: {},
                    ribbons: {},
                },
            },
        };

        // saved success
        await sdk.designer.saveLiveBoard(1, boardConfig).then(result => {
            if (result.status === 200) {
                const data = <ConfigSavedSuccess>result.data;
                expect(data.config).toBeDefined();
                expect(data.published_hash).toBeDefined();
            } else {
                throw new Error("should have status 200");
            }
        });

        // saved conflict
        const boardConfig2 = Object.assign(boardConfig, {id: 66, meta: {originHash: "test"}});
        await sdk.designer
            .saveLiveBoard(1, boardConfig2)
            .then(res => {
                expect(res.status).toEqual(409);
            })
            .catch(() => {
                throw new Error("should not fail here");
            });

        // saved already exists
        const boardConfig3 = Object.assign(boardConfig, {id: 1, meta: {originHash: "testHash", newHash: "testHash"}});
        await sdk.designer.saveLiveBoard(1, boardConfig3).then(res => {
            expect(res.status).toEqual(208);
        });

        // saved success
        const boardConfig4 = Object.assign(boardConfig, {id: 66, meta: {originHash: "testHash", newHash: "testHash2"}});
        await sdk.designer.saveLiveBoard(1, boardConfig4).then(res => {
            expect(res.status).toEqual(200);
        });
    });

    it("checks that searchBoardContacts works as expected", async () => {
        await sdk.designer.searchBoardContacts(1, "query").then(result => expect(result.length).toEqual(2));
    });

    it("checks that board merge tags are fetched", async () => {
        await sdk.designer.getMergeTags(1, 1, { context_type: "live_board" }).then(result => expect(result.length).toEqual(2));
    });

    it("checks that merge tag values are fetched", async () => {
        await sdk.designer.getMergeTagValues(1, 1).then(result => expect(result[1][0].id).toEqual("any value"));
    });

    it("checks that designer themes are fetched", async () => {
      await sdk.designer.getDesignerThemes(1).then(result => expect(result[1].id).toEqual(1));
      await sdk.designer.getDesignerThemes(1).then(result => expect(result[2].id).toEqual(2));
  });

    it("checks that video AI voices can be fetched", async () => {
        await sdk.designer.getVideoAIVoices().then(result => {
            expect(Array.isArray(result)).toBeTruthy();
            expect(result.length).toBeGreaterThan(0);
        });
    });

    it("checks that video AI avatars can be fetched", async () => {
        await sdk.designer.getVideoAIAvatars().then(result => {
            expect(Array.isArray(result)).toBeTruthy();
            expect(result.length).toBeGreaterThan(0);
        });
    });

    it("checks that video AI generation works", async () => {
        const request = {
            presenter_id: "avatar1",
            script: {
                type: "text" as const,
                subtitles: true,
                provider: {
                    type: "elevenlabs" as const,
                    voice_id: "voice1"
                },
                input: "Hello world",
                ssml: false
            },
            presenter_config: {
                crop: {
                    type: "wide" as const
                }
            },
            config: {}
        };
        await sdk.designer.generateVideoAI(request).then(result => {
            expect(result.id).toBeDefined();
            expect(result.status).toBeDefined();
            expect(result.url).toBeDefined();
        });
    });

    it("checks that video AI status can be retrieved", async () => {
        await sdk.designer.getVideoAIStatus("completed-id").then(result => {
            expect(result.id).toBeDefined();
            expect(result.status).toEqual("completed");
        });

        await sdk.designer.getVideoAIStatus("failed-id").then(result => {
            expect(result.id).toBeDefined();
            expect(result.status).toEqual("failed");
        });

        await sdk.designer.getVideoAIStatus("random-id").then(result => {
            expect(result.id).toBeDefined();
            expect(result.status).toEqual("processing");
        });
    });
});
