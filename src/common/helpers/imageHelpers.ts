import {FlzEditableImageData, GalleryImage} from "../../designer/IDesignerTypes";
import {crop, fill, scale} from "@cloudinary/url-gen/actions/resize";
import {Cloudinary} from "@cloudinary/url-gen";
import {max} from "@cloudinary/url-gen/actions/roundCorners";
import {mode} from "@cloudinary/url-gen/actions/rotate";
import {horizontalFlip, verticalFlip} from "@cloudinary/url-gen/qualifiers/rotationMode";
import {artisticFilter} from "@cloudinary/url-gen/actions/effect";
import {tint} from "@cloudinary/url-gen/actions/adjust";

export class CloudinaryHelper {
    private cloudinary: Cloudinary;
    private flzImagesDomain: string = "images.folloze.com";
    private cloudinaryImagesDomain: string = "res.cloudinary.com/folloze";
    private cloudinaryUrlRegex: RegExp;
    private cloudinaryFetchUrlRegex: RegExp;

    constructor() {
        this.cloudinaryUrlRegex = new RegExp(
            `(?:((http|https):)?)//(${this.flzImagesDomain}|${this.cloudinaryImagesDomain})/(image|video).(fetch|upload)/`
        );
        this.cloudinaryFetchUrlRegex = new RegExp(
            `(?:((http|https):)?)//(${this.flzImagesDomain}|${this.cloudinaryImagesDomain})/(image|video).(fetch)/`
        );
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

        const isFetch = this.cloudinaryFetchUrlRegex.test(image.url);
        if (isFetch) {
            try {
                // fetch images have an external url which needs to be encoded to avoid errors
                const urlParts = image.url.split(this.cloudinaryFetchUrlRegex);
                const originalUrl = urlParts[urlParts.length - 1];
                const urlObj = new URL(originalUrl);
                // Cloudinary will remove the search part of the query so we need to encode it
                // decode before encoding for cases when it's already encoded
                const encodedUrl = originalUrl.replace(urlObj.search, encodeURIComponent(decodeURIComponent(urlObj.search)));
                // image.url = image.url.replace(originalUrl, encodedUrl);
            } catch (e) {
                console.error(e);
            }
        }

        const cldImage = this.getImage(image);
        console.log("DIFFERENCE", image.url, cldImage.toURL());
        if (image.transformation?.crop) {
            const {x, y, width, height, aspect, radius} = image.transformation.crop;
            const cropTransformation = crop();
            width && cropTransformation.width(width);
            height && cropTransformation.height(height);
            x && cropTransformation.x(x);
            y && cropTransformation.y(y);
            aspect && cropTransformation.aspectRatio(aspect);
            cldImage.resize(cropTransformation);
            // @ts-ignore
            radius == "max" && cldImage.roundCorners(max());
        }
        if (maxWidth || maxHeight) {
            const sizeTransformation = fill();
            maxWidth && sizeTransformation.width(maxWidth);
            maxHeight && sizeTransformation.height(maxHeight);
            cldImage.resize(sizeTransformation);
        }
        if (image.transformation?.flipY) {
            cldImage.rotate(mode(verticalFlip()));
        }
        if (image.transformation?.flipX) {
            cldImage.rotate(mode(horizontalFlip()));
        }
        if (image.transformation?.artisticFilter) {
            cldImage.effect(artisticFilter(image.transformation.artisticFilter));
        }
        if (image.transformation?.tint?.color) {
            const tintTransformation = `${image.transformation.tint.alpha}:${image.transformation.tint.color.substring(
                1,
            )}`;
            cldImage.effect(tint(tintTransformation));
        }
        cldImage.format("auto").quality("auto");
        let imageUrl = cldImage.toURL();
        // for cases that the image is fetched from a remote url keep serving it as fetch instead of upload
        if (isFetch) {
            imageUrl = imageUrl.replace("/upload/", "/fetch/");
        }
        return imageUrl;
    }

    getPublicId(url: string) {
        const publicId = url.replace(this.cloudinaryUrlRegex, "");
        // for cases that the image is fetched from a remote url and has a queryString
        return publicId.split('?')[0];
    }

    private isCloudinaryImage(url: string) {
        return url.startsWith(`https://${this.flzImagesDomain}`);
    }
}
