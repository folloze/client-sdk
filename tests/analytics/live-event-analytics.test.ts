import {ClientSDK} from "../../src/sdk";
import LiveEventAnalytics from "../../src/analytics/LiveEventAnalytics";

describe("LiveEventAnalytics", () => {
    let liveEventAnalytics: LiveEventAnalytics;
    let sdk: ClientSDK;
    let postSpy: jest.SpyInstance;
    let putSpy: jest.SpyInstance;

    describe("In Liveboard", () => {
        beforeEach(async () => {
            sdk = await ClientSDK.create({
                useMock: true,
                organizationId: 1,
                pingEndpoint: "url-for-ping",
                analyticsServiceEndpoint: "",
            });
            liveEventAnalytics = new LiveEventAnalytics(sdk.fetcher);

            postSpy = jest.spyOn(sdk.fetcher.fetcher, "post");
            putSpy = jest.spyOn(sdk.fetcher.fetcher, "put");
        });

        describe("trackAttendance", () => {
            let params;

            beforeEach(() => {
                params = {
                    boardId: 1,
                    widgetId: "abc",
                    guid: "123",
                    activityType: "attended_event",
                    eventName: "My event",
                };
            });

            it("checks that board id is incorporated in the URL", async () => {
                await liveEventAnalytics.trackAttendance("create", params);

                expect(postSpy).toHaveBeenCalledWith(
                    expect.stringContaining(`/live_board/v1/boards/${params.boardId}/attend_activities`),
                    expect.any(Object),
                );
            });

            it("checks that all parameters are passed to the payload", async () => {
                await liveEventAnalytics.trackAttendance("create", params);

                expect(postSpy).toHaveBeenCalledWith(
                    expect.any(String),
                    expect.objectContaining({
                        widget_id: params.widgetId,
                        guid: params.guid,
                        event_name: params.eventName,
                        activity_type: expect.any(Number),
                    }),
                );
            });

            it("checks that trackAttendance with create type triggers a post request", async () => {
                await liveEventAnalytics.trackAttendance("create", params);

                expect(postSpy).toHaveBeenCalled();
                expect(putSpy).not.toHaveBeenCalled();
            });

            it("checks that trackAttendance with update type triggers a put request", async () => {
                await liveEventAnalytics.trackAttendance("update", params);

                expect(putSpy).toHaveBeenCalled();
                expect(postSpy).not.toHaveBeenCalled();
            });

            it("checks that activityType attended_event translate to type 0", async () => {
                params.activityType = "attended_event";
                await liveEventAnalytics.trackAttendance("create", params);

                expect(postSpy).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({activity_type: 0}));
            });

            it("checks that activityType viewed_recording translate to type 2", async () => {
                params.activityType = "viewed_recording";
                await liveEventAnalytics.trackAttendance("create", params);

                expect(postSpy).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({activity_type: 2}));
            });
        });
    });

    describe("In preview", () => {
        beforeEach(async () => {
            sdk = await ClientSDK.create({
                useMock: true,
                organizationId: 1,
                pingEndpoint: "url-for-ping",
                isPreview: true,
                analyticsServiceEndpoint: "",
            });
            liveEventAnalytics = new LiveEventAnalytics(sdk.fetcher);

            postSpy = jest.spyOn(sdk.fetcher.fetcher, "post");
            putSpy = jest.spyOn(sdk.fetcher.fetcher, "put");
        });

        it("checks that trackLeadBoardView isn't triggering an api call", async () => {
            await liveEventAnalytics.trackAttendance("create", {
                boardId: 1,
                widgetId: "abc",
                guid: "123",
                activityType: "attended_event",
                eventName: "My event",
            });
            expect(postSpy).not.toHaveBeenCalled();
        });
    });
});
