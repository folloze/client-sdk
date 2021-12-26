export enum ImageGalleryTypes {
    campaign = "campaign",
    imageBank = "image_bank",
    search = "search"
}

export enum ImageBankType {
    folloze = "folloze",
    organization = "organization"
}

export enum ImageBankCategory {
    banners = 1,
    mobile_banners,
    thumbnails,
    icons,
    logos
}

export type GalleryImage = {
    url: string,
    fit: string,
    id?: number,
    displayable_section?: string,
    transformation?: object, //TODO
    viewed?: boolean
}

export type ImageGalleryParams = {
    type: ImageGalleryTypes,
    query?: string, // search
    organizationId?: number, // imageBank This is for cross org users in image bank (agencies, super admins, etc)
    bankCategory?: ImageBankCategory, // imageBank
}

export type ImageBankResponseV1 = {
    icons: ImageBankType,
    logos: ImageBankType,
    banners: ImageBankType,
    thumbnails: ImageBankType,
    mobile_banners: ImageBankType
}
