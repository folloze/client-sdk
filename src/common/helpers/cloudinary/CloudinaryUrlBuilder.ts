import {crop, limitFill, fit, limitFit} from "@cloudinary/url-gen/actions/resize";
import {max} from "@cloudinary/url-gen/actions/roundCorners";
import {mode} from "@cloudinary/url-gen/actions/rotate";
import {sharpen} from "@cloudinary/url-gen/actions/adjust";
import {horizontalFlip, verticalFlip} from "@cloudinary/url-gen/qualifiers/rotationMode";
import {artisticFilter, colorize} from "@cloudinary/url-gen/actions/effect";
import {FlzEditableImageData, GalleryImage} from "../../../designer/IDesignerTypes";
import {CloudinaryHelper} from "./CloudinaryHelper";


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
                bankCategory: "images",
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
            cropTransformation.x(x || 0);
            cropTransformation.y(y || 0);
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

        // Add limit transformation to scale down large images (larger than 1800px)
        // do not add f_auto & q_auto on SVG images unless needed (when cropped - handled above)
        if (!isSvg) {
            const limitTransformation = limitFit(1800, 1800);
            cldImage.resize(limitTransformation);
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