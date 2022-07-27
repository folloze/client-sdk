import { LitElement, ReactiveController } from "lit";
import { IFloatingElement } from "../mixins/FloatableMixin";
export declare class FloatChildrenContainer implements ReactiveController {
    private readonly host;
    private childFloaters;
    constructor(host: LitElement);
    hostDisconnected(): void;
    add(floater: IFloatingElement): void;
    remove(floater: IFloatingElement): void;
    removeAndClose(floater: IFloatingElement): void;
    closeAllChildFloaters(): void;
}
