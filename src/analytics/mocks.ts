import MockAdapter from "axios-mock-adapter";

export const rules = (mock: MockAdapter) => {

    mock.onPost("url-for-custom-analytic-event")
        .reply(config => {
            const data = JSON.parse(config.data);
            console.debug("sending analytic data to server", data);
            return [201, "analytic saved!"];
        });
};
