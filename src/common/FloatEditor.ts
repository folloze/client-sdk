import {css, CSSResultGroup, html, LitElement} from "lit";
import {property, query} from "lit/decorators.js";
import {LiveWidgetEdit, LiveWidgetComponentEdit, makeDragElement} from "../index";

export class FloatEditor extends LitElement {
    static styles = [
        css`
            :host {
                --floatBoxShadow: 0.1px 1.1px 1.9px -13px rgba(0, 0, 0, 0.045),
                    0.3px 2.5px 4.7px -13px rgba(0, 0, 0, 0.065), 0.5px 4.8px 8.8px -13px rgba(0, 0, 0, 0.08),
                    0.9px 8.5px 15.6px -13px rgba(0, 0, 0, 0.095), 1.7px 15.9px 29.2px -13px rgba(0, 0, 0, 0.115),
                    4px 38px 70px -13px rgba(0, 0, 0, 0.16);

                --floatBoxBorder: thin solid rgb(103 103 103 / 78%);
                --outlineShadow: 1px 1px 3px #ccc;

                resize: both;
                pointer-events: all;

                opacity: 0;
                transition: opacity 500ms ease-in;
                position: absolute;
                top: 100px;
                left: 150px;
                z-index: 110;
                box-shadow: var(--floatBoxShadow);

                //overflow: hidden;
                min-width: 300px;
                min-height: 40px;

                overflow: visible;
                max-width: 300px;

                border-radius: var(--edit-fz-border-radius-small);
                font-family: Open Sans, serif;
            }

            .close {
                font-size: 15px;
                font-family: "Roboto", serif;
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
            }

            #body {
                padding: var(--edit-fz-spacing-small);
                background-color: var(--sys-color-neutral-0);
                border-radius: 0 0 var(--edit-fz-border-radius-small) var(--edit-fz-border-radius-small);
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
    private x: number;
    private y: number;

    constructor(el: LiveWidgetEdit | LiveWidgetComponentEdit) {
        super();
        this.childEl = el;
    }

    disconnectedCallback() {
        this.removeHighlight();
        super.disconnectedCallback();
    }

    protected firstUpdated() {
        this.isLoading = false;
        this.body.appendChild(this.childEl);
        makeDragElement(this.shadowRoot, this, "#handle");
        setTimeout(() => {
            this.moveToPos();
            this.style.opacity = "1";
        });
    }

    close(e: Event) {
        e.stopPropagation();
        this.remove();
    }

    setStartPos(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    moveToPos() {
        if (!this.x || !this.y) {
            return;
        }

        const rect = this.getBoundingClientRect();
        const width = rect.width;
        const viewPortWidth = document.body.getBoundingClientRect().width;

        // calculate new X position
        let newX = this.x - width / 2;
        if (newX < 5) {
            newX = 5;
        } else if (newX + width > viewPortWidth - 5) {
            newX = viewPortWidth - width - 5;
        }

        this.style.top = `${this.y + 30 + window.scrollY}px`;
        this.style.left = `${newX}px`;
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
                        height="14px"
                        viewBox="0 0 14 14"
                        width="14px"
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
