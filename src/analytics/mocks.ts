import MockAdapter from "axios-mock-adapter";
import {SessionResponseV1} from "../liveboard/ILiveboardTypes";

export const rules = (mock: MockAdapter) => {

    mock.onPost(/live_board\/v2\/boards\/(\d+)\/lead_views/)
        .reply<void>(200);

    mock.onPost(/live_board\/v2\/items\/(\d+)\/lead_views/)
        .reply<void>(200);

    mock.onPost("/api/v1/tracking")
        .reply<void>(200);

    mock.onPost("/live_board/v1/tracking")
        .reply<void>(200);

    mock.onPost("/url-for-ping/pings")
        .reply(config => {
            const data = JSON.parse(config.data);
            console.debug("sending ping to analytic", data);
            return [200, "ping sent!"];
        });

    mock.onPost("/live_board/v1/session_validations")
        .reply<void>(200);

    mock.onPost("/live_board/v1/sessions")
        .reply<SessionResponseV1>(config => {
            return [200, {guid: "foo"}, {"folloze-session-guid": "foo"}];
        });

    mock.onPut("/live_board/v2/invitation_wrappers/1")
        .reply<void>(200);

    mock.onPost("/live_board/v2/downloads", {
        source_type: 'item',
        content_item_id: 1,
        item_id: 1
    })
        .reply<void>(200);

    mock.onPost("/live_board/v2/likes", {
        source_type: 'item',
        content_item_id: 1,
        item_id: 1
    }).reply<void>(200);
};
