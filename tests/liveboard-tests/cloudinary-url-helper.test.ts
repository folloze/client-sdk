import {describe, beforeAll, expect} from "@jest/globals";
import {CloudinaryHelper} from "../../src/common/helpers/cloudinary/CloudinaryHelper";
import {CloudinaryUrlBuilder} from "../../src/common/helpers/cloudinary/CloudinaryUrlBuilder";

let cloudinaryHelper: CloudinaryHelper;

describe("cloudinary helpers tests", () => {
    beforeAll(async () => {
        cloudinaryHelper = new CloudinaryHelper();
    });

    it("checks getTransformedUrl for image without transformation - maxWidth", async () => {
        expect(cloudinaryHelper.getTransformedUrl(testData1.img, testData1.params.maxWidth)).toEqual(testData1.result);
    });

    it("checks buildTransform for image without transformation - maxWidth", async () => {
        expect(new CloudinaryUrlBuilder(testData1.img).maxWidth(testData1.params.maxWidth).toString()).toEqual(
            testData1.result,
        );
    });

    it("checks getTransformedUrl for image without transformation - maxHeight", async () => {
        expect(cloudinaryHelper.getTransformedUrl(testData2.img, undefined, testData2.params.maxHeight)).toEqual(
            testData2.result,
        );
    });

    it("checks buildTransform for image without transformation - maxHeight", async () => {
        expect(new CloudinaryUrlBuilder(testData2.img).maxHeight(testData2.params.maxHeight).toString()).toEqual(
            testData2.result,
        );
    });

    it("checks getTransformedUrl for image without transformation - maxHeight and maxWidth", async () => {
        expect(
            cloudinaryHelper.getTransformedUrl(testData3.img, testData3.params.maxWidth, testData3.params.maxHeight),
        ).toEqual(testData3.result);
    });

    it("checks buildTransform for image without transformation - maxHeight and maxWidth", async () => {
        expect(
            new CloudinaryUrlBuilder(testData3.img)
                .maxWidth(testData3.params.maxWidth)
                .maxHeight(testData3.params.maxHeight)
                .toString(),
        ).toEqual(testData3.result);
    });

    it("checks getTransformedUrl for image with transformation and should return the optimized_url", async () => {
        expect(cloudinaryHelper.getTransformedUrl(testData4.img, undefined, undefined)).toEqual(
            testData4.img.optimized_url,
        );
    });

    it("checks buildTransform for image with transformation and should return the optimized_url", async () => {
        expect(new CloudinaryUrlBuilder(testData4.img).toString()).toEqual(testData4.img.optimized_url);
    });

    it("checks getTransformedUrl for image with transformation and SHOULDNT return the optimized_url", async () => {
        expect(cloudinaryHelper.getTransformedUrl(testData8.img, undefined, undefined, true)).toEqual(testData8.result);
    });

    it("checks buildTransform for image with transformation and SHOULDNT return the optimized_url", async () => {
        expect(new CloudinaryUrlBuilder(testData8.img).optimize().toString()).toEqual(testData8.result);
    });

    it("checks getTransformedUrl for image with transformation", async () => {
        expect(cloudinaryHelper.getTransformedUrl(testData5.img, undefined, undefined)).toEqual(testData5.result);
    });

    it("checks buildTransform for image with transformation", async () => {
        expect(new CloudinaryUrlBuilder(testData5.img).toString()).toEqual(testData5.result);
    });

    it("checks buildTransform for image with sharpen", async () => {
        expect(new CloudinaryUrlBuilder(testData6.img).sharpen().toString()).toEqual(testData6.result);
    });

    it("checks buildTransform for image with sharpen", async () => {
        expect(
            new CloudinaryUrlBuilder(testData7.img)
                .maxHeight(testData7.params.maxHeight)
                .maxWidth(testData7.params.maxWidth)
                .sharpen()
                .toString(),
        ).toEqual(testData7.result);
    });

    it("verifies that limit transformation is applied to all non-SVG images", async () => {
        const testImg = {
            url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
            fit: "cover",
            bankCategory: "images" as const,
            optimized_url: null,
        };
        const result = new CloudinaryUrlBuilder(testImg as any).toString();
        expect(result).toContain("c_limit,h_1800,w_1800");
        expect(result).toContain("f_auto/q_auto");
    });

    it("verifies that limit transformation is NOT applied to SVG images", async () => {
        const testSvgImg = {
            url: "https://images.folloze.com/image/upload/v1609744958/test-image.svg",
            fit: "cover",
            bankCategory: "images" as const,
            optimized_url: null,
        };
        const result = new CloudinaryUrlBuilder(testSvgImg as any).toString();
        expect(result).not.toContain("c_limit,h_1800,w_1800");
        expect(result).not.toContain("f_auto/q_auto");
    });
});

type TestData = {
    result: string;
    params: {
        maxWidth?: number | undefined;
        maxHeight?: number | undefined;
        optimize?: boolean;
        sharpen?: boolean;
    };
    img: any; //FlzEditableImageData | GalleryImage;
};

const testData1: TestData = {
    result: "https://images.folloze.com/image/upload/c_lfill,w_210/c_limit,h_1800,w_1800/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        maxWidth: 210,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url: null,
    },
};

const testData2: TestData = {
    result: "https://images.folloze.com/image/upload/c_lfill,h_500/c_limit,h_1800,w_1800/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        maxHeight: 500,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url: null,
    },
};

const testData3: TestData = {
    result: "https://images.folloze.com/image/upload/c_lfill,h_500,w_210/c_limit,h_1800,w_1800/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        maxHeight: 500,
        maxWidth: 210,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url: null,
    },
};

const testData4: TestData = {
    result: "https://images.folloze.com/image/upload/a_vflip/a_hflip/c_crop,h_220,w_322,x_64/c_lfill,w_1920/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        optimize: false,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url:
            "https://images.folloze.com/image/upload/a_vflip/a_hflip/c_crop,h_220,w_322,x_64/c_lfill,w_1920/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        transformation: {
            crop: {
                x: 64,
                y: 0,
                aspect: null,
                width: 322,
                height: 220,
                radius: 0,
            },
            shape: "none",
            flipY: true,
            flipX: true,
        },
    },
};

const testData5: TestData = {
    result: "https://images.folloze.com/image/upload/a_vflip/c_crop,h_258,w_387,x_0,y_0/e_art:peacock/c_limit,h_1800,w_1800/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {},
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url: null,
        transformation: {
            artisticFilter: "peacock",
            crop: {
                aspect: null,
                height: 258,
                radius: 0,
                width: 387,
                x: 0,
                y: 0,
            },
            flipX: false,
            flipY: true,
            shape: "none",
        },
    },
};

const testData6: TestData = {
    result: "https://images.folloze.com/image/upload/c_limit,h_1800,w_1800/f_auto/q_auto/e_sharpen/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        sharpen: true,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url: null,
        transformation: {},
    },
};

const testData7: TestData = {
    result: "https://images.folloze.com/image/upload/c_lfill,h_500,w_210/c_limit,h_1800,w_1800/f_auto/q_auto/e_sharpen/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        maxHeight: 500,
        maxWidth: 210,
        sharpen: true,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url: null,
        transformation: {},
    },
};

const testData8: TestData = {
    result: "https://images.folloze.com/image/upload/a_hflip/c_crop,h_258,w_387,x_0,y_0/c_limit,h_1800,w_1800/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
    params: {
        optimize: true,
    },
    img: {
        url: "https://images.folloze.com/image/upload/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        fit: "cover",
        bankCategory: "images",
        optimized_url:
            "https://images.folloze.com/image/upload/a_hflip/c_crop,h_258,w_387/c_lfill,w_1920/f_auto/q_auto/v1609744958/rcrlvper6pdobqvuggjx.jpg",
        transformation: {
            crop: {
                x: 0,
                y: 0,
                aspect: null,
                width: 387,
                height: 258,
                radius: 0,
            },
            shape: "none",
            flipY: false,
            flipX: true,
        },
    },
};
