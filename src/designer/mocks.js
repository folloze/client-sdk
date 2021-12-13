export const rules = (mock) => {
    mock.onPost("/url-for-saving-live-board")
        .reply(200);
};
