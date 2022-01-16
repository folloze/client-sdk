import MockAdapter from "axios-mock-adapter";

export const rules = (mock: MockAdapter) => {

    mock.onPost("/live_board/v2/boards/1/lead_views")
        .reply<void>(200);

    mock.onPost("/live_board/v2/items/1/lead_views")
        .reply<void>(200);

    mock.onPost("/api/v1/tracking")
        .reply<void>(200);

    mock.onPost("/live_board/v1/tracking")
        .reply<void>(200);

    mock.onPost("/url-for-ping")
        .reply(config => {
            const data = JSON.parse(config.data);
            console.debug("sending ping to analytic", data);
            return [200, "ping sent!"];
        });
};
