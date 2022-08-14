import {WidgetConfig} from "./interfaces/IWidget";
import {v4 as uuid_v4} from "uuid";
import {LitElement, PropertyValues} from "lit";
import {FlzEvent} from "./FlzEvent";
import {widgetEmit} from "./helpers/eventHelpers";

export abstract class LiveWidgetElement extends LitElement {
    public abstract readonly customEditWidgets: string[];
    public abstract readonly editComponents: string[];
    public abstract readonly widgetTitle: string;
    public setConfigOnlyOnce: boolean = false;

    protected _data: any;
    private _widgetId: string;
    private _config: WidgetConfig;

    constructor() {
        super();
        this._widgetId = uuid_v4();
    }

    connectedCallback() {
        super.connectedCallback();
        widgetEmit(this, "widget-connected");
    }

    willUpdate(_changedProperties: PropertyValues) {
        super.willUpdate(_changedProperties);
        widgetEmit(this, "widget-update");
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        widgetEmit(this, "widget-first-updated");
    }

    updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        widgetEmit(this, "widget-updated");
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

    /**
     * called when the widget enters the viewport 50%
     * the percentage can be changed in the future
     *
     * you can override this method for yourself
     */
    public onEnterViewport(entry: IntersectionObserverEntry) {
        this.style.setProperty("--fz-animation-1-name", "inherit");
        this.style.setProperty("--fz-animation-1-play-state", "running");
    }

    /**
     * called when the widget exits the viewport 50%
     * the percentage can be changed in the future
     *
     * you can override this method for yourself
     */
    public onLeaveViewport(entry: IntersectionObserverEntry) {
        // uncomment bellow to have the animation repeat
        // this.style.setProperty("--fz-animation-play-state", "paused");
        // this.style.setProperty("--fz-animation-name", "none");
        return;
    }

    /**
     * you should override this method to use incoming events
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public incomingEvents(e: FlzEvent) {
        return;
    }

    /**
     * you should override this method to listen to state changes
     */
    public stateChanged(state: any) {
        return;
    }

    abstract render();
}
