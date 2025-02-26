import { CloudinaryVideo } from "@cloudinary/url-gen";
import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { FlzEditableImageData, FlzEditableVideoData, GalleryImage, GalleryVideo, UploadUrlResponseV1 } from "../../../designer/IDesignerTypes";
export declare class CloudinaryHelper {
    private static flzImagesDomain;
    private static cloudinaryImagesDomain;
    private static cloudinaryUrlRegex;
    private static cloudinaryFetchUrlRegex;
    private static cloudinary;
    static videoPlayerScriptUrl: string;
    static getImage(image: FlzEditableImageData | GalleryImage): CloudinaryImage;
    static getVideo(video: FlzEditableVideoData | GalleryVideo): CloudinaryVideo;
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
    uploadFileInChunks(file: File, uploadData: UploadUrlResponseV1, onSuccess?: CallableFunction, onFail?: CallableFunction, onProgress?: (file: File, percent: number) => void): Promise<void>;
}
