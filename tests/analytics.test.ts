import {describe, expect, beforeAll} from "@jest/globals";
import { DesignerEventTypes, EventSources, LiveBoardEventTypes } from "../src/analytics/Analytics";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(async () => {
    sdk = await ClientSDK.create({useMock: true});
});

describe("testing analytics module", () => {
    it('checks that sendLeadBoardView mock works as expected', async () => {
        await sdk.analytics.sendLeadBoardView(1)
            .then(result => expect(result).toBeNull);
    });

    it('checks that sendLeadItemView mock works as expected', async () => {
        await sdk.analytics.sendLeadItemView(1, 'abc')
            .then(result => expect(result).toBeNull);
    });

    it('checks that trackEvent mock works as expected for liveboard', async () => {
        await sdk.analytics.trackEvent(LiveBoardEventTypes.changed_category, {}, EventSources.liveboard)
            .then(result => expect(result).toBeNull);
    });

    it('checks that trackEvent mock works as expected for desginer', async () => {
        await sdk.analytics.trackEvent(DesignerEventTypes.clicked_on_search_image, {}, EventSources.desginer)
            .then(result => expect(result).toBeNull);
    });

    it('checks that sendPing mock data works', async () => {
        await sdk.analytics.sendPing({
            boardId: 0,
            guid: "",
            leadId: 0,
            time: ""
        }).then(result => {
            expect(result.status).toEqual(200);
        });
    });

});
