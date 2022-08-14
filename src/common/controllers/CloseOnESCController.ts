import {LitElement, ReactiveController} from "lit";
import {closable} from "../interfaces/IWidget";

export class CloseOnESCController implements ReactiveController {
    private readonly host: LitElement & closable;

    _onKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            this.host.close();
        }
    };

    constructor(host: LitElement & closable) {
        this.host = host;
        host.addController(this);
    }

    hostConnected() {
        setTimeout(() => {
            window.addEventListener("keyup", this._onKeyUp, true);
        });
    }

    hostDisconnected() {
        window.removeEventListener("keyup", this._onKeyUp, true);
    }
}
