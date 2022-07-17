import { LitElement } from "lit";
declare type Constructor<T> = new (...args: any[]) => T;
export declare class IFloatingElement {
    setStartPos(x: number, y: number): void;
    close(e?: Event): any;
}
export declare const Floatable: <T extends Constructor<LitElement>>(superClass: T) => Constructor<IFloatingElement> & T;
export {};
