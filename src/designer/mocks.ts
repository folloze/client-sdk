import MockAdapter from "axios-mock-adapter";
import {ImageBankResponseV1, ImageBankType, GalleryImage, UploadUrlResponseV1} from "./IDesignerTypes";

export const rules = (mock: MockAdapter) => {
    const providerUrl = "https://api.cloudinary.com/v1_1/folloze/image/upload"

    mock.onPost("/api/imagegallery")
        .reply<GalleryImage[]>(200, [{url: "abc.com", fit: "contain"}]);
    
    mock.onGet("/api/v1/organizations/1/settings/image_bank")
        .reply<ImageBankResponseV1>(200, {
            icons: ImageBankType.folloze,
            logos: ImageBankType.folloze,
            banners: ImageBankType.folloze,
            thumbnails: ImageBankType.folloze,
            mobile_banners: ImageBankType.folloze
        });

    mock.onPut("/api/v1/organizations/1/settings/image_bank")
        .reply<ImageBankResponseV1>(200, {
            icons: ImageBankType.folloze,
            logos: ImageBankType.folloze,
            banners: ImageBankType.folloze,
            thumbnails: ImageBankType.folloze,
            mobile_banners: ImageBankType.folloze
        });

    mock.onPost("/api/v1/upload_urls")
        .reply<UploadUrlResponseV1>(200, {
            file_name: "file_name",
            method: "post",
            params: {
                api_key: "abcabcabc",
                signature: "asdasdasd",
                timestamp: 1640527164
            },
            get_url: "//images.folloze.com/image/upload/",
            put_url: providerUrl
        })
    
    mock.onPost(providerUrl)
        .reply(200, {secure_url: 'https://uploaded_url.com'})

    mock.onPost("/url-for-saving-live-board")
        .reply(200);
};
