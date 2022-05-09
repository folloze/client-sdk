import { FlzEditableImageData, GalleryImage } from "../../designer/IDesignerTypes";
export declare class CloudinaryHelper {
    private cloudinary;
    private imagesDomain;
    private cloudinaryUrlRegex;
    constructor();
    getImage(image: FlzEditableImageData | GalleryImage): import("@cloudinary/url-gen/assets/CloudinaryImage").CloudinaryImage;
    getTransformedUrl(image: FlzEditableImageData | GalleryImage, maxWidth?: number, maxHeight?: number, reOptimize?: boolean): string;
    getPublicId(url: string): string;
    private isCloudinaryImage;
}
