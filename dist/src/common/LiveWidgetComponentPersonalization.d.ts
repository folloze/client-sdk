import { ILiveBoard } from "./interfaces/IBoard";
import { LitElement } from "lit";
import { PersonalizationElement } from "./interfaces/IPersonalization";
export declare abstract class LiveWidgetComponentPersonalization extends LitElement {
    webComponents: Map<string, PersonalizationElement>;
    protected _propPath: string;
    protected _editTag: string;
    protected _viewTag: string;
    protected _viewTagDataProperty: string;
    protected _board: ILiveBoard;
    protected _onCancel: Function;
    set editTag(tag: string);
    get editTag(): string;
    set viewTag(tag: string);
    get viewTag(): string;
    set viewTagDataProperty(tagProp: string);
    get viewTagDataProperty(): string;
    set board(board: ILiveBoard);
    get board(): ILiveBoard;
    set onCancel(onCancel: Function);
    get onCancel(): Function;
}
