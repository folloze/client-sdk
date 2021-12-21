import "./chunk.5KE7N75L.js";

// src/designer/IDesignerTypes.ts
var ImageBankCategory = /* @__PURE__ */ ((ImageBankCategory2) => {
  ImageBankCategory2["folloze"] = "folloze";
  ImageBankCategory2["organization"] = "organization";
  return ImageBankCategory2;
})(ImageBankCategory || {});

// src/designer/mocks.ts
var rules = (mock) => {
  mock.onPost("/api/imagegallery").reply(200, [{ url: "abc.com", fit: "contain" }]);
  mock.onGet("/api/v1/organizations/1/settings/image_bank").reply(200, {
    icons: ImageBankCategory.folloze,
    logos: ImageBankCategory.folloze,
    banners: ImageBankCategory.folloze,
    thumbnails: ImageBankCategory.folloze,
    mobile_banners: ImageBankCategory.folloze
  });
  mock.onPut("/api/v1/organizations/1/settings/image_bank").reply(200, {
    icons: ImageBankCategory.folloze,
    logos: ImageBankCategory.folloze,
    banners: ImageBankCategory.folloze,
    thumbnails: ImageBankCategory.folloze,
    mobile_banners: ImageBankCategory.folloze
  });
  mock.onPost("/url-for-saving-live-board").reply(200);
};
export {
  rules
};
