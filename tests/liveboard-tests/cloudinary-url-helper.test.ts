import {describe, beforeAll, expect} from "@jest/globals";
import {CloudinaryHelper, CloudinaryUrlBuilder} from "../../src/common/helpers/mediaHelpers";

let cloudinaryHelper: CloudinaryHelper;

describe("cloudinary helpers tests", () => {
    beforeAll(async () => {
        cloudinaryHelper = new CloudinaryHelper();
    });

    it("checks getTransformedUrl for image without transformation", async () => {
        expect(cloudinaryHelper.getTransformedUrl(testData1.img, testData1.params.maxWidth)).toEqual(testData1.result);
    });

    it("checks buildTransform for image without transformation", async () => {
        expect(new CloudinaryUrlBuilder(testData1.img).maxWidth(testData1.params.maxWidth).toString()).toEqual(
            testData1.result,
        );
    });
});

type TestData = {
    result: string;
    params: {
        maxWidth?: number;
        maxHeight?: number;
        optimize?: boolean;
        sharpen?: boolean;
    };
    img: any; //FlzEditableImageData | GalleryImage;
};

const testData1: TestData = {
    result: "https://images.folloze.com/image/upload/c_lfill,w_210/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        maxWidth: 210,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "banners",
        optimized_url: null,
    },
};
