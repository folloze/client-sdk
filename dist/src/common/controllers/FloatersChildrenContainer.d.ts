import { LitElement, ReactiveController } from "lit";
import { IFloatingElement } from "../mixins/FloatableMixin";
export interface hasFloatingChildren {
    floatChildrenContainer: FloatChildrenContainer;
}
export declare class FloatChildrenContainer implements ReactiveController {
    private readonly host;
    private childFloaters;
    _addFloatChild: (e: CustomEvent) => void;
    constructor(host: LitElement);
    hostConnected(): void;
    hostDisconnected(): void;
    add(floater: IFloatingElement): void;
    remove(floater: IFloatingElement): void;
    removeAndClose(floater: IFloatingElement): void;
    all(): IFloatingElement[];
    closeAllChildFloaters(): void;
}
