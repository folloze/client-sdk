import { FloatChildrenContainer } from "./controllers/FloatersChildrenContainer";
declare type DocOrShadowRoot = Document | DocumentFragment | DocumentOrShadowRoot | null;
export declare function makeDragElement(dom: DocOrShadowRoot, el: HTMLElement, handleEl: string, containEl?: HTMLElement, childrenContainer?: FloatChildrenContainer): void;
export {};
