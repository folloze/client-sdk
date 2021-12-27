import {
  ImageBankType
} from "./chunk.6KNLIVF4.js";
import "./chunk.5KE7N75L.js";

// src/designer/mocks.ts
var rules = (mock) => {
  const providerUrl = "https://api.cloudinary.com/v1_1/folloze/image/upload";
  mock.onPost("/api/imagegallery", { params: { type: "campaign" } }).reply(200, [
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293464/heroimage08_cac4xn.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293367/heroimage05_fv80gz.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293483/heroimage09_hv8u2j.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293654/heroimage13_vj9xog.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293397/heroimage07_kfdzpt.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293642/heroimage12_scxoe5.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293358/heroimage04_juy5ao.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293629/heroimage11_tmy9fd.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293378/heroimage06_vnii1d.png"
    },
    {
      "fit": "cover",
      "url": "https://images.folloze.com/image/upload/v1451293493/heroimage10_jgxm62.png"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimage03_wpxdzu.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimages06_compressed_lgozdi.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimages04_compressed_z9xtqb.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimages08_compressed_s9lkse.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimages03_compressed_sycsdr.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimage02_dr1wdi.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimage14_oglfdj.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimages12_compressed_rlzfx5.jpg",
      "fit": "cover"
    },
    {
      "url": "https://images.folloze.com/image/upload/heroimages11_compressed_uztxpu.jpg",
      "fit": "cover"
    }
  ]);
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
  mock.onPost("/api/v1/upload_urls").reply(200, {
    file_name: "file_name",
    method: "post",
    params: {
      api_key: "abcabcabc",
      signature: "asdasdasd",
      timestamp: 1640527164
    },
    get_url: "//images.folloze.com/image/upload/",
    put_url: providerUrl
  });
  mock.onPost(providerUrl).reply(200, { secure_url: "https://uploaded_url.com" });
  mock.onPost("/url-for-saving-live-board").reply(200);
};
export {
  rules
};
