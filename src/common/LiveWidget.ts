import { css, html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { LiveDraggable } from "./LiveDraggable";
// import { v4 as uuid_v4 } from "uuid";

export abstract class LiveWidget extends LiveDraggable {
    // static styles = [css`
    //   :host {
    //
    //   }
    //   .live-widget {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     height: 100%;
    //     position: relative;
    //   }
    // `
    // ];

    protected _data: any;
    private _widgetId: string;
    private _config: any;

    constructor() {
        super();
        this.xOffset = 0;
        this.yOffset = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.initialX = 0;
        this.initialY = 0;
    }

    set config(data: any) {
        this._widgetId = data.id;
        this._config = data;
        this._data = data?.data;
        this.requestUpdate();
    }

    public get config() {
        return this._config;
    }

    public set data(x: any) {
        this._data = x;
        this.requestUpdate();
    }

    public get data() {
        return this._data;
    }

    get widgetId() {
        return this._widgetId;
    }

    render() {
        return html`
            <div class="live-widget">
                <slot></slot>
            </div>
        `;
    }
}
