import { FlzEditableImageData, GalleryImage } from "../../designer/IDesignerTypes";
import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
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
export declare class CloudinaryHelper {
    private static flzImagesDomain;
    private static cloudinaryImagesDomain;
    private static cloudinaryUrlRegex;
    private static cloudinaryFetchUrlRegex;
    private static cloudinary;
    static videoPlayerScriptUrl: string;
    static getImage(image: FlzEditableImageData | GalleryImage): CloudinaryImage;
    /**
     * @deprecated - please use CloudinaryUrlBuilder class instead
     * @param image
     * @param maxWidth
     * @param maxHeight
     * @param reOptimize
     */
    getTransformedUrl(image: FlzEditableImageData | GalleryImage, maxWidth?: number, maxHeight?: number, reOptimize?: boolean): string;
    static isCloudinaryFetchUrl(url: string): boolean;
    /**
     * cloudinary url will strip params from the url this function will keep them on the new link
     * @param newUrl - the cloudinary new url generated
     * @param url - the url saved originally on the image
     */
    static prepareCloudinaryUrl(newUrl: string, url: string): string;
    static getPublicId(url: string): string;
    private loadVideoPlayerScript;
    private createVideoPlayer;
    getVideoPlayer(url: string, playerElement: HTMLVideoElement, options?: object, transformation?: object): Promise<any>;
    getOptimizedVideoUrl(url: string, _position: string): string;
    getVideoThumbnail(url: string): string;
    static isCloudinaryImage(url: string): boolean;
}
