import {LiveWidget} from "./LiveWidget";
import {ContentWidgetConfig} from "./interfaces/IContentWidget";

abstract class ContentWidget extends LiveWidget {
    protected _data: ContentWidgetConfig;
}