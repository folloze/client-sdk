import { FlzEditableImageData, GalleryImage } from "../../../designer/IDesignerTypes";
export declare class CloudinaryUrlBuilder {
    private image;
    private isOptimized;
    private _maxWidth;
    private _maxHeight;
    private sharp;
    constructor(image: FlzEditableImageData | GalleryImage);
    optimize(): CloudinaryUrlBuilder;
    sharpen(): CloudinaryUrlBuilder;
    maxWidth(width: number | undefined): CloudinaryUrlBuilder;
    maxHeight(height: number | undefined): CloudinaryUrlBuilder;
    toString(): string;
}
