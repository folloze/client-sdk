export declare enum ImageGalleryTypes {
    campaign = "campaign",
    imageBank = "image_bank",
    search = "search"
}
export declare enum ImageBankType {
    folloze = "folloze",
    organization = "organization"
}
export declare enum ImageBankCategory {
    banners = 1,
    mobile_banners = 2,
    thumbnails = 3,
    icons = 4,
    logos = 5
}
export declare type GalleryImage = {
    url: string;
    fit: string;
    id?: number;
    displayable_section?: string;
    transformation?: object;
    viewed?: boolean;
};
export declare type ImageGalleryParams = {
    type: ImageGalleryTypes;
    query?: string;
    organizationId?: number;
    bankCategory?: ImageBankCategory;
};
export declare type ImageBankResponseV1 = {
    icons: ImageBankType;
    logos: ImageBankType;
    banners: ImageBankType;
    thumbnails: ImageBankType;
    mobile_banners: ImageBankType;
};
export declare type UploadUrlResponseV1 = {
    file_name: string;
    method: string;
    params: {
        api_key: string;
        signature: string;
        timestamp: number;
    };
    get_url: string;
    put_url: string;
};
