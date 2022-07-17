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

            .close {
                cursor: pointer;
                color: var(--edit-fz-color-neutral-0);
                border: none;
                background: none;
                display: flex;
                align-items: center;

                &:hover {
                    color: black;
                }
            }

            .save {
                position: absolute;
                right: 60px;
                font-size: 14px;
                cursor: pointer;
                color: var(--sys-color-neutral-500);
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
                background-color: var(--sys-color-neutral-0);
                border-radius: 0 0 var(--edit-fz-border-radius-small) var(--edit-fz-border-radius-small);

                // some editors need to open other popups that overflow outside of the editor
                // this is breaking them.
                //max-height: 540px;
                //overflow: auto;
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
                color: var(--sys-color-neutral-500);
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

    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit) {
        super();
        this.childEl = el;
    }

    disconnectedCallback() {
        this.removeHighlight();
        super.disconnectedCallback();
    }

    protected firstUpdated(_changedProperties) {
        this.isLoading = false;
        this.body.appendChild(this.childEl);
        makeDragElement(this.shadowRoot, this, "#handle");
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

    render() {
        return html`
            ${this.isLoading ? html`<div class="loading"></div>` : ""}
            <div
                id="handle"
                style="${this.childEl._handleStyle}"
                @mouseover="${this.highlight}"
                @mouseleave="${this.removeHighlight}">
                <span class="conf-name"> ${this.childEl.widget?.widgetTitle || ""} </span>
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
            <div id="body"></div>
        `;
    }
}
