import { LiveWidgetComponentEdit } from "./LiveWidgetComponentEdit";
export declare abstract class LiveWidgetComponentPersonalization extends LiveWidgetComponentEdit {
    protected _propPath: string;
    protected _editTag: string;
    protected _viewTag: string;
    set editTag(tag: string);
    get editTag(): string;
    set viewTag(tag: string);
    get viewTag(): string;
}
