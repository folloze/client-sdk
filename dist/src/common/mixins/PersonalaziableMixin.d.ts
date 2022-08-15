import { LiveElement } from "../interfaces/IBoard";
declare type Constructor<T> = abstract new (...args: any[]) => T;
export declare class IPersonalizable {
    isConfigSet(): boolean;
}
export declare const Personalizable: <T extends Constructor<LiveElement>>(superClass: T) => Constructor<IPersonalizable> & T;
export {};
