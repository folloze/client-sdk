import { CSSResultGroup, LitElement } from "lit";
import { LiveWidgetEdit, LiveWidgetComponentEdit } from "../index";
declare const FloatingElement: (new (...args: any[]) => import("./mixins/FloatableMixin").IFloatingElement) & typeof LitElement;
export declare class FloatEditor extends FloatingElement {
    static styles: CSSResultGroup;
    body: HTMLElement;
    private isLoading;
    private readonly childEl;
    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit);
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: any): void;
    highlight(): void;
    removeHighlight(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
