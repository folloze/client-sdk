import { html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { LiveDraggable } from "./LiveDraggable";
import { LiveWidget } from "./LiveWidget";

@customElement("live-widget-edit")
export abstract class LiveWidgetEdit extends LitElement {
    protected _widget: LiveWidget;
    protected _data: any;
    protected _propPath: string;

    set widget(w: LiveWidget) {
        this._widget = w;
        this.data = w.data;
    }

    get widget(): LiveWidget {
        return this._widget;
    }

    set propertyPath(path: string) {
        this._propPath = path;
    }

    get propertyPath(): string {
        return this._propPath;
    }

    get widgetId(): string {
        return this._widget.id;
    }

    updateWidget() {
        this._widget.data = this._data;
    }

    set data(x: any) {
        this._data = x;
    }

    get data() {
        return this._data;
    }

    abstract render();
}
