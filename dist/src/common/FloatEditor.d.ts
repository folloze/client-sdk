import { CSSResultGroup, LitElement } from "lit";
import { LiveWidgetEdit, LiveWidgetComponentEdit } from "../index";
export declare class FloatEditor extends LitElement {
    static styles: CSSResultGroup;
    body: HTMLElement;
    private isLoading;
    private readonly childEl;
    private x;
    private y;
    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit);
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    close(e?: Event): void;
    setStartPos(x: number, y: number): void;
    checkIfYOverflow(y: number, height: number): boolean;
    getY(): number;
    getYWithOverflow(height: number): number;
    moveToPos(): void;
    handleResize(): void;
    highlight(): void;
    removeHighlight(): void;
    render(): import("lit-html").TemplateResult<1>;
}
