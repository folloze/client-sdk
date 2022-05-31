import { CSSResultGroup, LitElement } from "lit";
import { LiveWidgetEdit, LiveWidgetComponentEdit } from "../index";
export declare class FloatEditor extends LitElement {
    static styles: CSSResultGroup;
    body: HTMLElement;
    private isLoading;
    private readonly childEl;
    private editorTitle;
    private addPadding;
    private x;
    private y;
    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit);
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    close(e?: Event): void;
    setStartPos(x: number, y: number): void;
    setEditorTitle(editorTitle: string): void;
    setAddPadding(addPadding: boolean): void;
    moveToPos(): void;
    highlight(): void;
    removeHighlight(): void;
    getEditorTitle(): string;
    render(): import("lit-html").TemplateResult<1>;
}
