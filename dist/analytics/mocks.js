export const rules = (mock) => {
    mock.onPost("url-for-custom-analytic-event")
        .reply(config => {
        const data = JSON.parse(config.data);
        console.debug("sending analytic data to server", data);
        return [201, "analytic saved!"];
    });
};
//# sourceMappingURL=mocks.js.map