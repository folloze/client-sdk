import MockAdapter from "axios-mock-adapter";
import {ImageBankResponseV1, ImageBankType, GalleryImage} from "./IDesignerTypes";

export const rules = (mock: MockAdapter) => {

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

    mock.onPost("/url-for-saving-live-board")
        .reply(200);
};
