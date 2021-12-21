export declare enum ImageGalleryTypes {
    webpage = "webpage",
    document = "document",
    board = "board",
    campaign = "campaign",
    promotion = "promotion",
    imageBank = "image_bank",
    webpageImageBank = "webpage_image_bank"
}
export declare enum ImageBankCategory {
    folloze = "folloze",
    organization = "organization"
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
    organizationId?: number;
    url?: string;
    edit?: boolean;
    bankCategory?: ImageBankCategory;
    fileName?: string;
    images?: GalleryImage[];
};
export declare type ImageBankResponseV1 = {
    icons: ImageBankCategory;
    logos: ImageBankCategory;
    banners: ImageBankCategory;
    thumbnails: ImageBankCategory;
    mobile_banners: ImageBankCategory;
};
