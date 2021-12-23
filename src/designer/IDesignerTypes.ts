export enum ImageGalleryTypes {
    webpage = "webpage",
    document = "document",
    board = "board",
    campaign = "campaign",
    promotion = "promotion",
    imageBank = "image_bank",
    webpageImageBank = "webpage_image_bank"
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
    url?: string // webpage/webpageImageBank - for link type items, the url of the item
    organizationId?: number, // imageBank This is for cross org users in image bank (agencies, super admins, etc)
    bankCategory?: ImageBankCategory, // imageBank
    fileName?: string, // document - gets the file name to search the web for images that might be related
    images?: GalleryImage[] // document/webpage -  keeps the current thumbnail of the item
}

export type ImageBankResponseV1 = {
    icons: ImageBankType,
    logos: ImageBankType,
    banners: ImageBankType,
    thumbnails: ImageBankType,
    mobile_banners: ImageBankType
}
