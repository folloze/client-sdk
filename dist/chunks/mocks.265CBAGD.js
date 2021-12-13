import "./chunk.5KE7N75L.js";

// src/liveboard/mocks.ts
var rules = (mock) => {
  mock.onGet("/url-getting-items", { itemId: 1 }).reply(200, { items: [{ itemId: 1, title: "some title" }] });
  mock.onGet("/url-getting-items").reply(200, {
    items: [
      { itemId: 1, title: "some title" },
      { itemId: 1, title: "some title 2" }
    ]
  });
};
export {
  rules
};
