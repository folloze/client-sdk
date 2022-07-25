import {LiveWidgetComponentEdit} from "./LiveWidgetComponentEdit";
import {ILiveBoard} from "./interfaces/IBoard";
import {LitElement} from "lit";
import {PersonalizationElement} from "./interfaces/IPersonalization";

export abstract class LiveWidgetComponentPersonalization extends LitElement {
    public liveElementsMap: Map<string, PersonalizationElement>;
    protected _propPath: string;
    protected _editTag: string;
    protected _viewTag: string;
    protected _viewTagDataProperty: string;
    protected _board: ILiveBoard;
    protected _onCancel: Function;

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

    set viewTagDataProperty(tagProp: string) {
        this._viewTagDataProperty = tagProp;
    }

    get viewTagDataProperty(): string {
        return this._viewTagDataProperty;
    }

    set board(board: ILiveBoard) {
        this._board = board;
    }

    get board(): ILiveBoard {
        return this._board;
    }

    set onCancel(onCancel: Function) {
        this._onCancel = onCancel;
    }

    get onCancel(): Function {
        return this._onCancel;
    }
}
