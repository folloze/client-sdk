import {
  ImageBankType
} from "./chunk.XA2JH32H.js";
import "./chunk.5KE7N75L.js";

// src/designer/mocks.ts
var rules = (mock) => {
  mock.onPost("/api/imagegallery").reply(200, [{ url: "abc.com", fit: "contain" }]);
  mock.onGet("/api/v1/organizations/1/settings/image_bank").reply(200, {
    icons: ImageBankType.folloze,
    logos: ImageBankType.folloze,
    banners: ImageBankType.folloze,
    thumbnails: ImageBankType.folloze,
    mobile_banners: ImageBankType.folloze
  });
  mock.onPut("/api/v1/organizations/1/settings/image_bank").reply(200, {
    icons: ImageBankType.folloze,
    logos: ImageBankType.folloze,
    banners: ImageBankType.folloze,
    thumbnails: ImageBankType.folloze,
    mobile_banners: ImageBankType.folloze
  });
  mock.onPost("/url-for-saving-live-board").reply(200);
};
export {
  rules
};
