import {
    BackgroundString,
    FlzEditableImageData,
    FlzEditableVideoData,
    GalleryImage,
    GalleryVideo,
    PercentPosition,
    UploadUrlResponseV1
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
import {sendXhrRequest} from './helpers';

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
