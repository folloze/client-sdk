// src/designer/IDesignerTypes.ts
var ImageGalleryTypes = /* @__PURE__ */ ((ImageGalleryTypes2) => {
  ImageGalleryTypes2["campaign"] = "campaign";
  ImageGalleryTypes2["imageBank"] = "image_bank";
  ImageGalleryTypes2["search"] = "search";
  return ImageGalleryTypes2;
})(ImageGalleryTypes || {});
var ImageBankType = /* @__PURE__ */ ((ImageBankType2) => {
  ImageBankType2["folloze"] = "folloze";
  ImageBankType2["organization"] = "organization";
  return ImageBankType2;
})(ImageBankType || {});
var ImageBankCategory = /* @__PURE__ */ ((ImageBankCategory2) => {
  ImageBankCategory2[ImageBankCategory2["all"] = 0] = "all";
  ImageBankCategory2[ImageBankCategory2["banners"] = 1] = "banners";
  ImageBankCategory2[ImageBankCategory2["mobile_banners"] = 2] = "mobile_banners";
  ImageBankCategory2[ImageBankCategory2["thumbnails"] = 3] = "thumbnails";
  ImageBankCategory2[ImageBankCategory2["icons"] = 4] = "icons";
  ImageBankCategory2[ImageBankCategory2["logos"] = 5] = "logos";
  return ImageBankCategory2;
})(ImageBankCategory || {});

export {
  ImageGalleryTypes,
  ImageBankType,
  ImageBankCategory
};
