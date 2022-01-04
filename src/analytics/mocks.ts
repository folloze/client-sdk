import MockAdapter from "axios-mock-adapter";

export const rules = (mock: MockAdapter) => {

    mock.onPost("/live_board/v2/boards/1/lead_views")
        .reply<void>(200);

    mock.onPost("/live_board/v2/items/1/lead_views")
        .reply<void>(200);

    mock.onPost("/url-for-custom-analytic-event")
        .reply(config => {
            const data = JSON.parse(config.data);
            console.debug("sending analytic data to server", data);
            return [201, "analytic saved!"];
        });


    mock.onPost("/url-for-ping")
        .reply(config => {
            const data = JSON.parse(config.data);
            console.debug("sending ping to analytic", data);
            return [200, "ping sent!"];
        });
};
