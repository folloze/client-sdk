import MockAdapter from "axios-mock-adapter";

export const rules = (mock: MockAdapter) => {
    mock.onPost("/url-for-saving-live-board")
        .reply(200);
};
