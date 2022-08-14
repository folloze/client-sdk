import {LiveElement} from "../interfaces/IBoard";

type Constructor<T> = abstract new (...args: any[]) => T;

export declare class IPersonalizable {
    isConfigSet(): boolean;
}

export const Personalizable = <T extends Constructor<LiveElement>>(superClass: T) => {
    abstract class PersonalizableClass extends superClass implements IPersonalizable {
        protected _isConfigSet: boolean = false;

        set config(x: any) {
            super.config = x;
            this._isConfigSet = true;
        }

        get config() {
            return super.config;
        }

        public isConfigSet(): boolean {
            return this._isConfigSet;
        }

        shouldUpdate(changedProperties: Map<string, any>): boolean {
            if (this._isConfigSet) {
                return super.shouldUpdate(changedProperties);
            } else {
                return false;
            }
        }
    }
    return PersonalizableClass as Constructor<IPersonalizable> & T;
};
