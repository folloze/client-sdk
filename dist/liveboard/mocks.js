export const rules = (mock) => {
    mock.onGet("items", { itemId: 1 })
        .reply(200, { items: [{ itemId: 1, title: "some title" }] });
};
//# sourceMappingURL=mocks.js.map