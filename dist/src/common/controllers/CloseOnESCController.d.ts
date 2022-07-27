import { LitElement, ReactiveController } from "lit";
import { closable } from "../interfaces/IWidget";
export declare class CloseOnESCController implements ReactiveController {
    private readonly host;
    _onKeyUp: (e: KeyboardEvent) => void;
    constructor(host: LitElement & closable);
    hostConnected(): void;
    hostDisconnected(): void;
}
