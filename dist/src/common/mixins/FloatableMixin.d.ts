import { LitElement } from "lit";
type Constructor<T> = new (...args: any[]) => T;
export declare class IFloatingElement extends LitElement {
    setStartPos(x: number, y: number): void;
    setLayer(layer: number): void;
    getLayer(): number;
    close(e?: Event): any;
}
export declare const Floatable: <T extends Constructor<LitElement>>(superClass: T) => Constructor<IFloatingElement> & T;
export {};
