import {LitElement, ReactiveController} from "lit";
import {IFloatingElement} from "../mixins/FloatableMixin";

export interface hasFloatingChildren {
    floatChildrenContainer: FloatChildrenContainer;
}

export class FloatChildrenContainer implements ReactiveController {
    private readonly host: LitElement;
    private childFloaters: IFloatingElement[] = [];

    _addFloatChild = (e: CustomEvent) => {
        if (!e.detail.child) {
            throw new Error("child is required to add to float children container");
        }
        e.stopPropagation();
        this.add(e.detail.child);
    };

    constructor(host: LitElement) {
        this.host = host;
        host.addController(this);
    }

    hostConnected() {
        this.host.addEventListener("add-float-child", this._addFloatChild);
    }

    hostDisconnected() {
        this.host.removeEventListener("add-float-child", this._addFloatChild);
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

    all() {
        return this.childFloaters;
    }

    closeAllChildFloaters() {
        this.childFloaters.forEach(f => f.close());
        this.childFloaters = [];
    }
}
