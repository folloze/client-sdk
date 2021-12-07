export const rules = (mock) => {
    mock.onGet("/url-getting-items", { itemId: 1 })
        .reply(200, { items: [{ itemId: 1, title: "some title" }] });
    // getting all items
    mock.onGet("/url-getting-items")
        .reply(200, {
        items: [
            { itemId: 1, title: "some title" },
            { itemId: 1, title: "some title 2" }
        ]
    });
};
//# sourceMappingURL=mocks.js.map