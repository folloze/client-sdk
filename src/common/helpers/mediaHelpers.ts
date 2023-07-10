import {
    BackgroundString,
    FlzEditableImageData,
    FlzEditableVideoData,
    GalleryImage,
    GalleryVideo,
    PercentPosition,
} from "../../designer/IDesignerTypes";
import {crop, limitFill, fit} from "@cloudinary/url-gen/actions/resize";
import {Cloudinary, CloudinaryVideo} from "@cloudinary/url-gen";
import {max} from "@cloudinary/url-gen/actions/roundCorners";
import {mode} from "@cloudinary/url-gen/actions/rotate";
import {sharpen} from "@cloudinary/url-gen/actions/adjust";
import {horizontalFlip, verticalFlip} from "@cloudinary/url-gen/qualifiers/rotationMode";
import {artisticFilter, colorize} from "@cloudinary/url-gen/actions/effect";
import {CloudinaryImage} from "@cloudinary/url-gen/assets/CloudinaryImage";
import {BackgroundImage, BackgroundVideo} from "../interfaces/ISection";
import {ICompassGravity} from "@cloudinary/url-gen/qualifiers/gravity/compassGravity/CompassGravity";

const supportedVideoFormats = ["mov", "mp4", "webm"];

export class CloudinaryUrlBuilder {
    private image: FlzEditableImageData | GalleryImage;
    private isOptimized: boolean;
    private _maxWidth: number;
    private _maxHeight: number;
    private sharp: boolean;

    constructor(image: FlzEditableImageData | GalleryImage) {
        this.image = image;
    }

    optimize(): CloudinaryUrlBuilder {
        this.isOptimized = true;
        return this;
    }

    sharpen(): CloudinaryUrlBuilder {
        this.sharp = true;
        return this;
    }

    maxWidth(width: number | undefined): CloudinaryUrlBuilder {
        this._maxWidth = width;
        return this;
    }

    maxHeight(height: number | undefined): CloudinaryUrlBuilder {
        this._maxHeight = height;
        return this;
    }

    toString(): string {
        // todo: this should be removed? why string ?
        if (typeof this.image === "string") {
            this.image = {
                bankCategory: "banners",
                url: this.image,
            };
        }

        if (this.image.optimized_url && !this.isOptimized) {
            return this.image.optimized_url;
        }

        if (!CloudinaryHelper.isCloudinaryImage(this.image.url)) {
            return this.image.url;
        }

        const cldImage = CloudinaryHelper.getImage(this.image);
        const isSvg = cldImage.toURL().endsWith(".svg");

        if (this.image.transformation?.flipY) {
            cldImage.rotate(mode(verticalFlip()));
        }
        if (this.image.transformation?.flipX) {
            cldImage.rotate(mode(horizontalFlip()));
        }

        if (this.image.transformation?.crop) {
            const {x, y, width, height, aspect, radius} = this.image.transformation.crop;
            const cropTransformation = crop();
            width && cropTransformation.width(width);
            height && cropTransformation.height(height);
            x && cropTransformation.x(x);
            y && cropTransformation.y(y);
            aspect && cropTransformation.aspectRatio(aspect);
            cldImage.resize(cropTransformation);
            radius == "max" && cldImage.roundCorners(max());

            // In order to allow SVG cropping and resizing to the needed dimensions
            if (isSvg && (width || height)) {
                const fitTransformation = fit();
                this._maxWidth && fitTransformation.width(this._maxWidth);
                this._maxHeight && fitTransformation.height(this._maxHeight);
                cldImage.resize(fitTransformation);
                cldImage.format("auto").quality("auto");
            }
        }
        if (this._maxWidth || this._maxHeight) {
            const sizeTransformation = limitFill();
            this._maxWidth && sizeTransformation.width(this._maxWidth);
            this._maxHeight && sizeTransformation.height(this._maxHeight);
            cldImage.resize(sizeTransformation);
        }
        if (this.image.transformation?.artisticFilter) {
            cldImage.effect(artisticFilter(this.image.transformation.artisticFilter));
        }
        if (this.image.transformation?.tint?.color) {
            const colorHex = "#" + this.image.transformation.tint.color.substring(1);
            cldImage.effect(colorize(this.image.transformation.tint.alpha).color(colorHex));
        }

        // do not add f_auto & q_auto on SVG images unless needed (when cropped - handled above)
        if (!isSvg) {
            cldImage.format("auto").quality("auto");
        }

        if (this.sharp) {
            cldImage.adjust(sharpen());
        }

        let imageUrl = cldImage.toURL();
        imageUrl = CloudinaryHelper.prepareCloudinaryUrl(imageUrl, this.image.url);

        return imageUrl;
    }
}

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

    // public static videoPlayerScriptUrl = "https://cdn.folloze.com/flz/vendors/cld-video-player.light.1.9.0.min.js";
    public static videoPlayerScriptUrl = "https://engage.folloze.com/3rd-party/cld-video-player-1.5.1.min.js";

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

        console.log("player", player);
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
}

export class MediaBackgroundHelper {
    public static isBackgroundString(background: any): background is BackgroundString {
        return !!(background && typeof background === "string");
    }

    public static isBackgroundImage(background: any): background is BackgroundImage {
        return !!(background && typeof background === "object" && background?.image);
    }

    public static isBackgroundVideo(background: any): background is BackgroundVideo {
        return !!(background && typeof background === "object" && background?.video);
    }
}
