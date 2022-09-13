import { LitElement, ReactiveController } from "lit";
import { closable } from "../interfaces/IWidget";
export declare class CloseOnOutSideClickController implements ReactiveController {
    private readonly host;
    _onMouseClick: (e: MouseEvent) => void;
    constructor(host: LitElement & closable);
    hostConnected(): void;
    hostDisconnected(): void;
    addListener(): void;
    removeListener(): void;
}
