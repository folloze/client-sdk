import { FlzEditableImageData, GalleryImage } from "../../designer/IDesignerTypes";
export declare class CloudinaryHelper {
    private cloudinary;
    private flzImagesDomain;
    private cloudinaryImagesDomain;
    private cloudinaryUrlRegex;
    private cloudinaryFetchUrlRegex;
    videoPlayerScriptUrl: string;
    constructor();
    getImage(image: FlzEditableImageData | GalleryImage): import("@cloudinary/url-gen/assets/CloudinaryImage").CloudinaryImage;
    getTransformedUrl(image: FlzEditableImageData | GalleryImage, maxWidth?: number, maxHeight?: number, reOptimize?: boolean): string;
    getPublicId(url: string): string;
    private loadVideoPlayerScript;
    private createVideoPlayer;
    getVideoPlayer(url: string, playerId: string, options?: object, transformation?: object): void;
    private isCloudinaryImage;
}
