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
    private imagesDomain: string;
    private cloudinaryUrlRegex: RegExp;

    constructor() {
        this.imagesDomain = "images.folloze.com";
        this.cloudinaryUrlRegex = new RegExp(
            `(?:((http|https):)?)//(${this.imagesDomain}|res.cloudinary.com/folloze)/(image|video).(fetch|upload)/`,
        );
        this.cloudinary = new Cloudinary({
            cloud: {
                cloudName: "folloze",
            },
            url: {
                secureDistribution: this.imagesDomain,
                cname: this.imagesDomain,
                secure: true,
                privateCdn: true,
            },
        });
    }

    getImage(image: FlzEditableImageData | GalleryImage) {
        const cldImageId = this.getPublicId(image.url);
        return this.cloudinary.image(cldImageId);
    }

    getTransformedUrl(image: FlzEditableImageData | GalleryImage, maxWidth?: number, maxHeight?: number, reOptimize: boolean = false): string {
        if (image.optimized_url && !reOptimize) {
            return image.optimized_url;
        }

        if (!this.isCloudinaryImage(image.url)) {
            return image.url;
        }

        const cldImage = this.getImage(image);
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
            const tintTransformation = `${image.transformation.tint.alpha}:${image.transformation.tint.color.substring(1)}`;
            cldImage.effect(tint(tintTransformation));
        }
        cldImage.format("auto").quality("auto");
        return cldImage.toURL();
    }

    getPublicId(url: string) {
        return url.replace(this.cloudinaryUrlRegex, "");
    }

    private isCloudinaryImage(url: string) {
        return url.startsWith(`https://${this.imagesDomain}`);
    }
}