import {LiveConfig} from "./IWidget";
import {LiveElement} from "./IBoard";

export type PersonalizationElement = {
    id: string;
    type: "widget" | "ribbon" | "floating";
    config: LiveConfig;
    element: LiveElement;
    _display?: string;
};
