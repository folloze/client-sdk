import {LiveWidgetComponentEdit} from "./LiveWidgetComponentEdit";

export abstract class LiveWidgetComponentPersonalization extends LiveWidgetComponentEdit {

    protected _propPath: string;
    protected _editTag: string;
    protected _viewTag: string;

    set editTag(tag: string) {
        this._editTag = tag;
    }

    get editTag(): string {
        return this._editTag;
    }

    set viewTag(tag: string) {
      this._viewTag = tag;
    }

    get viewTag(): string {
        return this._viewTag;
    }
}
