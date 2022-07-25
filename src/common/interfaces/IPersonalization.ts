import {LiveConfig} from "./IWidget";
import {LiveElement} from "./IBoard";

export type PersonalizationElement = {
    id: string;
    config: LiveConfig;
    element: LiveElement;
};
