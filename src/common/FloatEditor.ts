import {css, CSSResultGroup, html, LitElement} from "lit";
import {property, query} from "lit/decorators.js";
import {LiveWidgetEdit, LiveWidgetComponentEdit, makeDragElement} from "../index";
import {Floatable} from "./mixins/FloatableMixin";

const FloatingElement = Floatable(LitElement);

export class FloatEditor extends FloatingElement {
    static styles = [
        FloatingElement.styles,
        css`
            :host {
            }

            .floating-editor-actions {
                display: flex;
                align-items: center;
            }

            .close, .documentation-url {
                cursor: pointer;
                color: var(--edit-fz-color-neutral-0);
                border: none;
                background: none;

                &:hover {
                    color: black;
                }
            }

            .save {
                position: absolute;
                right: 60px;
                font-size: 14px;
                cursor: pointer;
                color: var(--edit-fz-color-neutral-0);
                border: none;
                background: none;
            }

            .save[disabled] {
                cursor: default;
                color: gray;
            }

            #handle {
                background-color: var(--edit-fz-color-primary-3);
                border-radius: var(--edit-fz-border-radius-small) var(--edit-fz-border-radius-small) 0 0;
                height: 30px;
                display: flex;
                align-items: center;
                padding: var(--edit-fz-spacing-4x-small) var(--edit-fz-spacing-small);
                justify-content: space-between;

                white-space: nowrap;

                font-family: Open Sans, serif;
                font-size: 14px;
                font-style: normal;
                /*font-weight: 600;*/
                line-height: 21px;
                letter-spacing: 0;
                text-align: left;
                color: var(--edit-fz-color-neutral-0);
                cursor: grab;
            }

            #handle:active {
                cursor: grabbing;
            }

            #body {
                padding: var(--edit-fz-spacing-small);
                background-color: var(--edit-fz-color-neutral-0);
                border-radius: 0 0 var(--edit-fz-border-radius-small) var(--edit-fz-border-radius-small);
                max-height: 540px;
                overflow: auto;
            }
            .loading {
                width: 100%;
                height: calc(100% - 2em);
                background: var(--loading-bg-color, rgba(0, 0, 0, 0.4));
                /* min-height: 100px; */
                position: absolute;
                z-index: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .loading::after {
                content: "autorenew";
                font-family: "Material Icons", sans-serif;
                font-size: 40px;
                text-shadow: 0 0 14px #fff, 0 0 14px #fff, 0 0 20px #fff;
                animation: rotating 2s ease-in-out infinite;
            }
            @keyframes rotating {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            .btn {
                margin: 0 1em;
                width: 10%;
                text-align: center;
            }

            input,
            select {
                background: transparent;
                border: none;
                color: var(--edit-fz-color-neutral-0);
                outline: none;
                padding: 0.6em;
                margin: 0.4em;
                width: 40%;
            }

            input:focus {
                outline: none;
            }
        `,
    ] as CSSResultGroup;

    @query("#body")
    public body: HTMLElement;

    @property()
    private isLoading: boolean = true;
    private readonly childEl: LiveWidgetEdit | LiveWidgetComponentEdit;

    @property()
    public title: string;

    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit) {
        super();
        this.childEl = el;

        // @ts-ignore hack to get the floating editor inside the editor so it will be controlled by the editor
        this.childEl._floatingEditor = this;
    }

    disconnectedCallback() {
        this.removeHighlight();
        super.disconnectedCallback();
    }

    protected firstUpdated(_changedProperties) {
        this.isLoading = false;
        this.body.appendChild(this.childEl);
        makeDragElement(this.shadowRoot, this, "#handle", undefined, this.childEl.floatChildrenContainer);
        super.firstUpdated(_changedProperties);
    }

    public getChildEl(): LiveWidgetEdit | LiveWidgetComponentEdit {
        return this.childEl;
    }

    highlight() {
        if (this.childEl.widget) {
            this.childEl.widget.classList.add("highlight");
        }
    }

    removeHighlight() {
        if (this.childEl.widget) {
            this.childEl.widget.classList.remove("highlight");
        }
    }

    goToDocumentation() {
        window.open(this.childEl.widget.documentationUrl, "_blank");
    }

    render() {
        return html`
            ${this.isLoading ? html`<div class="loading"></div>` : ""}
            <div
                id="handle"
                style="${this.childEl._handleStyle}"
                @mouseover="${this.highlight}"
                @mouseleave="${this.removeHighlight}">
                <span class="conf-name"> ${this.title || this.childEl.widget?.widgetTitle || ""} </span>
                <div class="floating-editor-actions">
                    ${this.childEl.widget?.documentationUrl ?
                        html`
                            <div class="documentation-url" style="display: flex" @click=${this.goToDocumentation}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#ffffff">
                                <path d="M8.25 5.96118H9.75V7.46118H8.25V5.96118ZM8.25 8.96118H9.75V13.4612H8.25V8.96118ZM9 2.21118C4.86 2.21118 1.5 5.57118 1.5 9.71118C1.5 13.8512 4.86 17.2112 9 17.2112C13.14 17.2112 16.5 13.8512 16.5 9.71118C16.5 5.57118 13.14 2.21118 9 2.21118ZM9 15.7112C5.6925 15.7112 3 13.0187 3 9.71118C3 6.40368 5.6925 3.71118 9 3.71118C12.3075 3.71118 15 6.40368 15 9.71118C15 13.0187 12.3075 15.7112 9 15.7112Z"
                                    fill="#ffffff" />
                                </svg>
                            </div>` : ""
                    }
                    <div class="close" @click=${this.close}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#ffffff">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div id="body"></div>
        `;
    }
}
