import MockAdapter from "axios-mock-adapter";
import {ImageBankResponseV1} from "./IDesignerTypes";

export const rules = (mock: MockAdapter) => {
    
    mock.onGet("/api/v1/organizations/1/settings/image_bank")
        .reply<ImageBankResponseV1>(200, {
            icons: "folloze",
            logos: "folloze",
            banners: "folloze",
            thumbnails: "folloze",
            mobile_banners: "folloze"
        });

    mock.onPut("/api/v1/organizations/1/settings/image_bank")
        .reply<ImageBankResponseV1>(200, {
            icons: "folloze",
            logos: "folloze",
            banners: "folloze",
            thumbnails: "folloze",
            mobile_banners: "folloze"
        });

    mock.onPost("/url-for-saving-live-board")
        .reply(200);
};
