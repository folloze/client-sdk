import {describe, expect, beforeAll} from "@jest/globals";
import { DesignerEventTypes, EventSources, LiveBoardEventTypes } from "../src/analytics/Analytics";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

describe("testing analytics module", () => {
    beforeAll(async () => {
        sdk = await ClientSDK.create({useMock: true, pingEndpoint: "url-for-ping"});
    });

    it('checks that trackLeadBoardView mock works as expected', async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.trackLeadBoardView(1)
            .then(result => expect(result).toBeNull);
        expect(spy).toHaveBeenCalled();
    });


    it('checks that trackLeadItemView mock works as expected', async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.trackLeadItemView(1, 'abc')
            .then(result => expect(result).toBeNull);
        expect(spy).toHaveBeenCalled();
    });

    it('checks that trackEvent mock works as expected for liveboard', async () => {
        await sdk.analytics.trackEvent(LiveBoardEventTypes.changed_category, {}, EventSources.liveboard)
            .then(result => expect(result).toBeNull);
    });

    it('checks that trackEvent mock works as expected for designer', async () => {
        await sdk.analytics.trackEvent(DesignerEventTypes.clicked_on_search_image, {}, EventSources.designer)
            .then(result => expect(result).toBeNull);
    });

    it('checks that sendPing mock data works', async () => {
        await sdk.analytics.sendPing({
            boardId: 0,
            guid: "",
            leadId: 0
        }).then(result => {
            expect(result.status).toEqual(200);
        });
    });

});

describe("testing analytics module in preview", () => {
    beforeAll(async () => {
        sdk = await ClientSDK.create({useMock: true, pingEndpoint: "url-for-ping", isPreview: true});
    });

    it("checks that trackLeadBoardView isn't triggering an api call", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.trackLeadBoardView(1)
            .then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that trackLeadItemView isn't triggering an api call", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.trackLeadItemView(1, 'abc')
            .then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });
});