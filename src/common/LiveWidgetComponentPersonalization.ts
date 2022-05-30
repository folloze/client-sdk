import {LiveWidgetComponentEdit} from "./LiveWidgetComponentEdit";
import { ILiveBoard } from './interfaces/IBoard'

export abstract class LiveWidgetComponentPersonalization extends LiveWidgetComponentEdit {

    protected _propPath: string;
    protected _editTag: string;
    protected _viewTag: string;
    protected _board: ILiveBoard;

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

    set board(board: ILiveBoard) {
        this._board = board;
    }

    get board(): ILiveBoard {
        return this._board;
    }
}
