import { LiveWidgetComponentEdit } from "./LiveWidgetComponentEdit";
import { ILiveBoard } from './interfaces/IBoard';
export declare abstract class LiveWidgetComponentPersonalization extends LiveWidgetComponentEdit {
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
