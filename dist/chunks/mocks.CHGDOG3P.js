import "./chunk.5KE7N75L.js";

// src/designer/mocks.ts
var rules = (mock) => {
  mock.onGet("/api/v1/organizations/1/settings/image_bank").reply(200, {
    icons: "folloze",
    logos: "folloze",
    banners: "folloze",
    thumbnails: "folloze",
    mobile_banners: "folloze"
  });
  mock.onPut("/api/v1/organizations/1/settings/image_bank").reply(200, {
    icons: "folloze",
    logos: "folloze",
    banners: "folloze",
    thumbnails: "folloze",
    mobile_banners: "folloze"
  });
  mock.onPost("/url-for-saving-live-board").reply(200);
};
export {
  rules
};
