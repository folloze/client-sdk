import {LitElement, ReactiveController} from "lit";
import {IFloatingElement} from "../mixins/FloatableMixin";

export class FloatChildrenContainer implements ReactiveController {
    private readonly host: LitElement;
    private childFloaters: IFloatingElement[] = [];

    constructor(host: LitElement) {
        this.host = host;
        host.addController(this);
    }

    hostDisconnected() {
        this.closeAllChildFloaters();
    }

    add(floater: IFloatingElement) {
        this.childFloaters.push(floater);
    }

    remove(floater: IFloatingElement) {
        const index = this.childFloaters.indexOf(floater);
        if (index > -1) {
            this.childFloaters.splice(index, 1);
        }
    }

    removeAndClose(floater: IFloatingElement) {
        floater.close();
        this.remove(floater);
    }

    closeAllChildFloaters() {
        this.childFloaters.forEach(f => f.close());
        this.childFloaters = [];
    }
}
