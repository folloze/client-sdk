import {describe, expect, beforeAll} from "@jest/globals";
import {DesignerEventTypes, LiveBoardEventTypes} from "../../src/analytics/Analytics";
import {ClientSDK} from "../../src/sdk";
import LiveEventAnalytics from "../../src/analytics/LiveEventAnalytics";

let sdk: ClientSDK;

describe("testing analytics module", () => {
    beforeAll(async () => {
        sdk = await ClientSDK.create({useMock: true, organizationId: 1, pingEndpoint: "url-for-ping", analyticsServiceEndpoint: ''});
    });

    it("checks that trackLeadBoardView mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.trackLeadBoardView(1).then(result => expect(result).toBeNull);
        expect(spy).toHaveBeenCalled();
    });

    it("checks that trackLeadEvent mock works as expected for liveboard", async () => {
        await sdk.analytics
            .trackLeadEvent(LiveBoardEventTypes.changed_category, {})
            .then(result => expect(result).toBeNull);
    });

    it("checks that trackUserEvent mock works as expected for designer", async () => {
        await sdk.analytics
            .trackUserEvent(DesignerEventTypes.clicked_on_search_image, {})
            .then(result => expect(result).toBeNull);
    });

    it("checks that sendPing mock data works", async () => {
        await sdk.analytics
            .sendPing({
                boardId: 0,
                guid: "",
                leadId: 0,
                itemId: 0,
                contentItemId: 0,
                analyticsData: {},
            })
            .then(result => {
                expect(result.status).toEqual(200);
            });
    });

    it.skip("checks that createSession mock works as expected", async () => {
        await sdk.analytics.createSession().then(result => {
            expect(result.data.guid).toBeTruthy;
            expect(Object.keys(result.headers)).toContain("folloze-session-guid");
        });
    });

    it("checks that validateSession mock works as expected", async () => {
        await sdk.analytics.validateSession().then(result => expect(result.status).toEqual(200));
    });

    it("checks that updateInvitationUsed mock works as expected", async () => {
        await sdk.analytics.updateInvitationUsed("1").then(result => expect(result.status).toEqual(200));
    });

    describe('LiveEvent', () => {
        it("checks that analytics.liveEvent exists", () => {
            expect(sdk.analytics.liveEvent).toBeTruthy();
        });
        
        it("checks that analytics.liveEvent is a LiveEventAnalytics instance", () => {
            expect(sdk.analytics.liveEvent).toBeInstanceOf(LiveEventAnalytics);
        });
    });
});

describe("testing analytics module in preview", () => {
    beforeAll(async () => {
        sdk = await ClientSDK.create({useMock: true, organizationId: 1, pingEndpoint: "url-for-ping", isPreview: true, analyticsServiceEndpoint: ''});
    });

    it("checks that trackLeadBoardView isn't triggering an api call", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.trackLeadBoardView(1).then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that trackLeadContentView isn't triggering an api call", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.trackLeadContentView(1, "item", "abc", 1).then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it.skip("checks that createSession mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.createSession().then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that validateSession mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.validateSession().then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that updateInvitationUsed mock works as expected", async () => {
        const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
        await sdk.analytics.updateInvitationUsed("1").then(result => expect(result.status).toEqual(200));
        expect(spy).not.toHaveBeenCalled();
    });

    it("checks that trackDownloadFile mock works as expected for success", async () => {
        await sdk.analytics.trackDownloadFile('item', 1, 1).then(result => expect(result).toBeNull);
    });

    it("checks that trackLeadLikeContent mock works as expected", async () => {
        await sdk.analytics.trackLeadLikeContent('item', 1, 1).then(result => expect(result).toBeNull);
    });

    it("checks that publishLeadEvents mock works as expected", async () => {
        await sdk.analytics.publishLeadEvents(1, 1683629866446, 'item_download').then(result => expect(result).toBeNull);
    });
});
