import {Cloudinary, CloudinaryVideo} from "@cloudinary/url-gen";
import {CloudinaryImage} from "@cloudinary/url-gen/assets/CloudinaryImage";
import {ICompassGravity} from "@cloudinary/url-gen/qualifiers/gravity/compassGravity/CompassGravity";
import {
    FlzEditableImageData,
    FlzEditableVideoData,
    GalleryImage,
    GalleryVideo,
    PercentPosition,
    UploadUrlResponseV1
} from "../../../designer/IDesignerTypes";
import {sendXhrRequest} from '../helpers';
import {CloudinaryUrlBuilder} from "./CloudinaryUrlBuilder";

const supportedVideoFormats = ["mov", "mp4", "webm"];

export class CloudinaryHelper {
    private static flzImagesDomain: string = "images.folloze.com";
    private static cloudinaryImagesDomain: string = "res.cloudinary.com/folloze";
    private static cloudinaryUrlRegex: RegExp = new RegExp(
        `(?:((http|https):)?)//(${this.flzImagesDomain}|${this.cloudinaryImagesDomain})/(image|video).(fetch|upload)/`,
    );
    private static cloudinaryFetchUrlRegex: RegExp = new RegExp(
        `(?:((http|https):)?)//(${CloudinaryHelper.flzImagesDomain}|${CloudinaryHelper.cloudinaryImagesDomain})/(image|video).(fetch)/`,
    );
    private static cloudinary: Cloudinary = new Cloudinary({
        cloud: {
            cloudName: "folloze",
        },
        url: {
            secureDistribution: CloudinaryHelper.flzImagesDomain,
            cname: CloudinaryHelper.flzImagesDomain,
            secure: true,
            privateCdn: true,
            analytics: false,
        },
    });
    public static videoPlayerScriptUrl = "https://cdn.folloze.com/flz/vendors/cld-video-player.light.1.9.0.min.js";

    static getImage(image: FlzEditableImageData | GalleryImage): CloudinaryImage {
        const cldImageId = CloudinaryHelper.getPublicId(image.url);
        return this.cloudinary.image(cldImageId);
    }

    static getVideo(video: FlzEditableVideoData | GalleryVideo): CloudinaryVideo {
        const cldVideoId = CloudinaryHelper.getPublicId(video.url);
        return this.cloudinary.video(cldVideoId);
    }

    // PLEASE NOTE - from now on use the
    /**
     * @deprecated - please use CloudinaryUrlBuilder class instead
     * @param image
     * @param maxWidth
     * @param maxHeight
     * @param reOptimize
     */
    getTransformedUrl(
        image: FlzEditableImageData | GalleryImage,
        maxWidth?: number,
        maxHeight?: number,
        reOptimize: boolean = false,
    ): string {
        const img = new CloudinaryUrlBuilder(image);
        if (maxWidth) {
            img.maxWidth(maxWidth);
        }
        if (maxHeight) {
            img.maxHeight(maxHeight);
        }
        if (reOptimize) {
            img.optimize();
        }
        return img.toString();
    }

    public static isCloudinaryFetchUrl(url: string): boolean {
        return CloudinaryHelper.cloudinaryFetchUrlRegex.test(url);
    }

    /**
     * cloudinary url will strip params from the url this function will keep them on the new link
     * @param newUrl - the cloudinary new url generated
     * @param url - the url saved originally on the image
     */
    public static prepareCloudinaryUrl(newUrl: string, url: string): string {
        // for cases that the image is fetched from a remote url keep serving it as fetch instead of upload
        if (this.cloudinaryFetchUrlRegex.test(url)) {
            newUrl = newUrl.replace("/upload/", "/fetch/");
            let queryString = "";
            try {
                // fetch images might have a query string in the external url which is removed by cloudinary
                // needs to be added after encoding to avoid errors
                const originalUrl = url.split(this.cloudinaryFetchUrlRegex).pop();
                const urlObj = new URL(originalUrl);
                queryString = encodeURIComponent(decodeURIComponent(urlObj.search));
            } catch (e) {
                console.error(e);
            }
            newUrl = newUrl.concat(queryString);
        }
        return newUrl;
    }

    static getPublicId(url: string) {
        const publicId = url.replace(CloudinaryHelper.cloudinaryUrlRegex, "");
        // for cases that the image is fetched from a remote url and has a queryString
        return publicId.split("?")[0];
    }

    private loadVideoPlayerScript() {
        return new Promise<void>((resolve, reject) => {
            if (document.querySelector(`script[src="${CloudinaryHelper.videoPlayerScriptUrl}"]`)) {
                resolve();
            } else {
                const script = document.createElement("script");
                script.src = CloudinaryHelper.videoPlayerScriptUrl;
                script.onload = () => {
                    resolve();
                };
                script.onerror = e => {
                    reject(e);
                };
                document.head.appendChild(script);
            }
        });
    }

    // This is the basic player needed for the cloudinary player, will need to add more functionality for simulive
    private createVideoPlayer(url: string, playerElement: HTMLVideoElement, options: object, transformation: object) {
        // @ts-ignore
        const player = cloudinary.videoPlayer(playerElement, {...options, showLogo: false});

        const videoType = url.split(".").pop();
        const videoSource = supportedVideoFormats.includes(videoType) ? url : url.replace(videoType, "mp4");

        player.source(videoSource, {
            sourceTypes: supportedVideoFormats,
            transformation,
        });

        return player;
    }

    getVideoPlayer(url: string, playerElement: HTMLVideoElement, options: object = {}, transformation: object = {}) {
        return this.loadVideoPlayerScript().then(() => {
            return this.createVideoPlayer(url, playerElement, options, transformation);
        });
    }

    getOptimizedVideoUrl(url: string, _position: string): string {
        const lookupMap: Record<PercentPosition, ICompassGravity> = {
            "0% 0%": "north_west",
            "50% 0%": "north",
            "100% 0%": "north_east",
            "0% 50%": "west",
            "50% 50%": "center",
            "100% 50%": "east",
            "0% 100%": "south_west",
            "50% 100%": "south",
            "100% 100%": "south_east",
        };

        const positionAsDirection = lookupMap[_position];

        const parts = url.split("/upload/");
        const DEVICE_OPTIMIZATION = "q_auto";
        const position = `c_fill,g_${positionAsDirection},h_688,w_1432`;
        const optimizedUrl = parts[0] + `/upload/${DEVICE_OPTIMIZATION}/${position}/` + parts[1];

        return optimizedUrl;
    }

    getVideoThumbnail(url: string): string {
        return url.substr(0, url.lastIndexOf(".")) + ".jpg";
    }

    public static isCloudinaryImage(url: string) {
        return CloudinaryHelper.cloudinaryUrlRegex.test(url);
    }

    async uploadFileInChunks(
        file: File,
        uploadData: UploadUrlResponseV1,
        onSuccess: Function,
        onFail: Function,
        onProgress?: (file: File, percent: number) => void
        ){
            const chunkSize = 10 * 1024 * 1024; // 10MB
            const uniqueUploadId = Math.random().toString(36).substring(2, 15);
    
            let bytesChunked = 0;
            const uploadPromises = [];
            const uploadBytesTrace: number[] = [];
            const controller = new AbortController();
            let iteration = 0;

            while (bytesChunked < file.size && !controller.signal.aborted) {
                const chunkIndex = iteration++;

                const chunkEnd = Math.min(bytesChunked + chunkSize, file.size);
                const chunk = file.slice(bytesChunked, chunkEnd);
                const formData = new FormData();
                formData.set("file", chunk, file.name);
                
                Object.entries(uploadData.params).forEach(([key, value]) => {
                    // @ts-ignore
                    formData.set(key, value);
                });
                
                const contentRange = `bytes ${bytesChunked}-${chunkEnd-1}/${file.size}`;
                const result = sendXhrRequest({
                    url: uploadData.put_url,
                    method: "POST",
                    headers: {
                        "X-Unique-Upload-Id": uniqueUploadId,
                        "Content-Range": contentRange,
                    },
                    data: formData,
                    progressCallback: (bytesLoaded: number) => {                            
                        uploadBytesTrace[chunkIndex] = bytesLoaded;
                    },
                    signal: controller.signal
                })
                .catch((error) => {
                    console.error(error);
                    if(!controller.signal.aborted){
                        controller.abort();
                    }
                    onFail();
                });

                uploadPromises.push(result);
                    bytesChunked = chunkEnd;
                }

                const updateProgress = setInterval(() => {
                    if(!onProgress) return;

                    const sentBytes = uploadBytesTrace.reduce((a, b) => a + b??0, 0);
                        const percent = Math.min(100, Math.floor((sentBytes / file.size)*100));
                        onProgress(file, percent);
                }, 500);
    
                const allResponses = await Promise.all(uploadPromises);
                clearInterval(updateProgress);

                const finalResponse = allResponses.length === 1 
                    ? allResponses[0]
                    : allResponses.find(res => res.done);
                if(finalResponse){
                    onSuccess(finalResponse);
                } else {
                    onFail("No upload data returned");
                }
        }
}