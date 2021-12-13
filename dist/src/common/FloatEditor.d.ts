import { CSSResultGroup, LitElement } from "lit";
import { LiveWidgetEdit, LiveWidgetComponentEdit } from "../index";
export declare class FloatEditor extends LitElement {
    static styles: CSSResultGroup;
    body: HTMLElement;
    private isLoading;
    private readonly childEl;
    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit);
    protected firstUpdated(): void;
    close(e: Event): void;
    render(): import("lit-html").TemplateResult<1>;
}
