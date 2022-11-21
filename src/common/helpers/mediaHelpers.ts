import {FlzEditableImageData, GalleryImage} from "../../designer/IDesignerTypes";
import {crop, limitFill, fit} from "@cloudinary/url-gen/actions/resize";
import {Cloudinary} from "@cloudinary/url-gen";
import {max} from "@cloudinary/url-gen/actions/roundCorners";
import {mode} from "@cloudinary/url-gen/actions/rotate";
import {horizontalFlip, verticalFlip} from "@cloudinary/url-gen/qualifiers/rotationMode";
import {artisticFilter, colorize} from "@cloudinary/url-gen/actions/effect";
import { IFloatingElement } from "../common";

const supportedVideoFormats = ['mov', 'mp4', 'webm'];

export class CloudinaryHelper {
    private cloudinary: Cloudinary;
    private flzImagesDomain: string = "images.folloze.com";
    private cloudinaryImagesDomain: string = "res.cloudinary.com/folloze";
    private cloudinaryUrlRegex: RegExp = new RegExp(
        `(?:((http|https):)?)//(${this.flzImagesDomain}|${this.cloudinaryImagesDomain})/(image|video).(fetch|upload)/`
    );
    private cloudinaryFetchUrlRegex: RegExp = new RegExp(
        `(?:((http|https):)?)//(${this.flzImagesDomain}|${this.cloudinaryImagesDomain})/(image|video).(fetch)/`
    );

    public videoPlayerScriptUrl = "https://unpkg.com/cloudinary-video-player@1.9.0/dist/cld-video-player.light.min.js";

    constructor() {
        this.cloudinary = new Cloudinary({
            cloud: {
                cloudName: "folloze",
            },
            url: {
                secureDistribution: this.flzImagesDomain,
                cname: this.flzImagesDomain,
                secure: true,
                privateCdn: true,
                analytics: false
            }
        });
    }

    getImage(image: FlzEditableImageData | GalleryImage) {
        const cldImageId = this.getPublicId(image.url);
        return this.cloudinary.image(cldImageId);
    }

    getTransformedUrl(
        image: FlzEditableImageData | GalleryImage,
        maxWidth?: number,
        maxHeight?: number,
        reOptimize: boolean = false,
    ): string {
        if (typeof image === "string") {
            image = {
                bankCategory: "banners",
                url: image,
            };
        }

        if (image.optimized_url && !reOptimize) {
            return image.optimized_url;
        }

        if (!this.isCloudinaryImage(image.url)) {
            return image.url;
        }

        const cldImage = this.getImage(image);
        const isSvg = cldImage.toURL().endsWith(".svg");

        if (image.transformation?.flipY) {
            cldImage.rotate(mode(verticalFlip()));
        }
        if (image.transformation?.flipX) {
            cldImage.rotate(mode(horizontalFlip()));
        }

        if (image.transformation?.crop) {
            const {x, y, width, height, aspect, radius} = image.transformation.crop;
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
                maxWidth && fitTransformation.width(maxWidth);
                maxHeight && fitTransformation.height(maxHeight);
                cldImage.resize(fitTransformation);
                cldImage.format("auto").quality("auto");
            }
        }
        if (maxWidth || maxHeight) {
            const sizeTransformation = limitFill();
            maxWidth && sizeTransformation.width(maxWidth);
            maxHeight && sizeTransformation.height(maxHeight);
            cldImage.resize(sizeTransformation);
        }
        if (image.transformation?.artisticFilter) {
            cldImage.effect(artisticFilter(image.transformation.artisticFilter));
        }
        if (image.transformation?.tint?.color) {
            const colorHex = "#" + image.transformation.tint.color.substring(1);
            cldImage.effect(colorize(image.transformation.tint.alpha).color(colorHex));
        }

        // do not add f_auto & q_auto on SVG images unless needed (when cropped - handled above)
        if (!isSvg) {
            cldImage.format("auto").quality("auto");
        }

        let imageUrl = cldImage.toURL();

        // for cases that the image is fetched from a remote url keep serving it as fetch instead of upload
        if (this.cloudinaryFetchUrlRegex.test(image.url)) {
            imageUrl = imageUrl.replace("/upload/", "/fetch/");
            let queryString = "";
            try {
                // fetch images might have a query string in the external url which is removed by cloudinary
                // needs to be added after encoding to avoid errors
                const originalUrl = image.url.split(this.cloudinaryFetchUrlRegex).pop();
                const urlObj = new URL(originalUrl);
                queryString = encodeURIComponent(decodeURIComponent(urlObj.search));
            } catch (e) {
                console.error(e);
            }
            imageUrl = imageUrl.concat(queryString);
        }
        return imageUrl;
    }

    getPublicId(url: string) {
        const publicId = url.replace(this.cloudinaryUrlRegex, "");
        // for cases that the image is fetched from a remote url and has a queryString
        return publicId.split('?')[0];
    }

    private loadVideoPlayerScript() {
        return new Promise<void>((resolve, reject) => {
            if(document.querySelector(`script[src="${this.videoPlayerScriptUrl}"]`)) {
                resolve();
            } else {
                const script = document.createElement("script");
                script.src = this.videoPlayerScriptUrl;
                script.onload = () => {resolve();};
                script.onerror = (e) => {reject(e);};
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
            transformation
        });

        return player;
    }

    getVideoPlayer(url: string, playerElement: HTMLVideoElement, options: object = {}, transformation: object = {}) {
        return this.loadVideoPlayerScript()
            .then(() => {return this.createVideoPlayer(url, playerElement, options, transformation);});
    }

    private isCloudinaryImage(url: string) {
        return this.cloudinaryUrlRegex.test(url);
    }

    isUnsplashImage(image: FlzEditableImageData | GalleryImage) {
        return !!image.gallery_service && image.gallery_service == "unsplash";
    }
}
