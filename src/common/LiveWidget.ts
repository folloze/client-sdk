import { LiveDraggable } from "./LiveDraggable";
import {WidgetConfig} from "./interfaces/IWidget";
import { v4 as uuid_v4 } from "uuid";
import {PropertyValues} from "lit";
import {FlzEvent} from "./interfaces/IWidgetCommunication";


export abstract class LiveWidget extends LiveDraggable {

    public abstract readonly customEditWidgets: string[];
    public abstract readonly editComponents: string[];
    protected _data: any;
    private _widgetId: string;
    private _config: WidgetConfig;

    protected constructor() {
        super();
        this._widgetId = uuid_v4();
    }

    willUpdate(_changedProperties: PropertyValues) {
        super.willUpdate(_changedProperties);
        this.dispatchEvent(new CustomEvent("widget-update", {detail: {
            widgetEl: this,
        }, bubbles: true, composed: true}));
    }

    set config(data: WidgetConfig) {
        this._widgetId = data.id;
        this._config = data;
        this._data = data?.data;
        this.requestUpdate();
    }

    public get config(): WidgetConfig {
        return this._config;
    }

    public set data(x: any) {
        this._data = x;
        this.requestUpdate();
    }

    public get data() {
        return this._data;
    }

    public get widgetId() {
        return this._widgetId;
    }

    public emit(type: string, payload: any): void {
        this.dispatchEvent(new FlzEvent(this, type, payload));
    }

    abstract render();
}
