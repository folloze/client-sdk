import { BackgroundString } from "../../designer/IDesignerTypes";
import { BackgroundImage, BackgroundVideo } from "../interfaces/ISection";
export declare class MediaBackgroundHelper {
    static isBackgroundString(background: any): background is BackgroundString;
    static isBackgroundImage(background: any): background is BackgroundImage;
    static isBackgroundVideo(background: any): background is BackgroundVideo;
}
