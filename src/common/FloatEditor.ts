import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { LiveWidgetEdit, LiveWidgetComponentEdit, makeDragElement } from "../index";

@customElement("float-editor")
export class FloatEditor extends LitElement {
    static styles = [
        css`
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

            :host {
                --floatBoxShadow: 0.1px 1.1px 1.9px -13px rgba(0, 0, 0, 0.045), 0.3px 2.5px 4.7px -13px rgba(0, 0, 0, 0.065),
                0.5px 4.8px 8.8px -13px rgba(0, 0, 0, 0.08), 0.9px 8.5px 15.6px -13px rgba(0, 0, 0, 0.095),
                1.7px 15.9px 29.2px -13px rgba(0, 0, 0, 0.115), 4px 38px 70px -13px rgba(0, 0, 0, 0.16);

                --floatBoxBorder: thin solid rgb(103 103 103 / 78%);
                --outlineShadow: 1px 1px 3px #ccc;

                resize: both;
                pointer-events: all;

                position: fixed;
                top: 100px;
                left: 150px;
                z-index: 100;
                box-shadow: var(--floatBoxShadow);
                background-color: rgb(var(--fz-color-neutral-0));
                overflow: hidden;
                min-width: 235px;
                min-height: 150px;
            }

            .close {
                font-size: 14px;
                cursor: pointer;
                color: rgb(var(--fz-color-neutral-500));
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
                color: rgb(var(--fz-color-neutral-500));
                border: none;
                background: none;
            }

            .save[disabled] {
                cursor: default;
                color: gray;
            }

            #handle {
                background-color: rgb(var(--fz-color-primary-100));
                height: 2em;
                display: flex;
                align-items: center;
                padding-left: 10px;
                padding-right: 10px;
                justify-content: space-between;
            }

            #body {
                padding: var(--fz-spacing-small);
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
                color: rgb(var(--fz-color-neutral-500));
                outline: none;
                padding: 0.6em;
                margin: 0.4em;
                width: 40%;
            }

            input:focus {
                outline: none;
                border: 1px thin var(--subCardSelectedColor);
                background: var(--subCardBgColor);
            }

            :host {
                overflow: visible;
                max-width: 300px;
            }
        `
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

    protected firstUpdated() {
        this.isLoading = false;
        this.body.appendChild(this.childEl);
        makeDragElement(this.shadowRoot, this, "#handle");
    }

    close(e: Event) {
        e.stopPropagation();
        this.remove();
    }

    render() {
        return html`
            ${this.isLoading ? html`<div class="loading"></div>` : ""}
            <div id="handle">
                <span class="conf-name">
                    ${this.childEl.widget.tagName.toLowerCase()} ${this.childEl.id ? `#${this.childEl.id}` : ""}
                </span>
                <flz-v-icon name="x-lg" class="close" @click=${this.close}></flz-v-icon>
            </div>
            <div id="body"></div>
        `;
    }
}
