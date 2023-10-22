import { CSSResultGroup, LitElement } from "lit";
import { type LiveWidgetEdit } from "./LiveWidgetEdit";
import { type LiveWidgetComponentEdit } from "./LiveWidgetComponentEdit";
declare const FloatingElement: (new (...args: any[]) => import("./mixins/FloatableMixin").IFloatingElement) & typeof LitElement;
export declare class FloatEditor extends FloatingElement {
    static styles: CSSResultGroup;
    body: HTMLElement;
    private isLoading;
    readonly childEl: LiveWidgetEdit | LiveWidgetComponentEdit;
    title: string;
    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit);
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: any): void;
    getChildEl(): LiveWidgetEdit | LiveWidgetComponentEdit;
    highlight(): void;
    removeHighlight(): void;
    goToDocumentation(): void;
    getDocumentationUrl(): string | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
