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
    all = 0,
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

export type UploadUrlResponseV1 = {
    file_name: string,
    method: string,
    params: {
        api_key: string,
        signature: string,
        timestamp: number
    },
    get_url: string,
    put_url: string
}

export declare type CloudinaryUploadResult = {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: Date;
    tags: any[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    access_mode: string;
    original_filename: string;
    original_extension: string;
    api_key: string;
}
