import {LitElement, ReactiveController} from "lit";
import {closable} from "../interfaces/IWidget";

export class CloseOnOutSideClickController implements ReactiveController {
    private readonly host: LitElement & closable;

    _onMouseClick = (e: MouseEvent) => {
        if (e.target !== this.host && !e.composedPath().includes(this.host)) {
            this.host.close();
        }
    };

    constructor(host: LitElement & closable) {
        this.host = host;
        host.addController(this);
    }

    hostConnected() {
        setTimeout(() => {
            this.addListener();
        });
    }

    hostDisconnected() {
        this.removeListener();
    }

    addListener() {
        window.addEventListener("click", this._onMouseClick, true);
    }

    removeListener() {
        window.removeEventListener("click", this._onMouseClick, true);
    }
}
