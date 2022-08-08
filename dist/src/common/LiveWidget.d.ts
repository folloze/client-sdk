import { LiveDraggable } from "./LiveDraggable";
import { WidgetConfig } from "./interfaces/IWidget";
import { PropertyValues } from "lit";
import { FlzEvent } from "./FlzEvent";
export declare abstract class LiveWidget extends LiveDraggable {
    abstract readonly customEditWidgets: string[];
    abstract readonly editComponents: string[];
    abstract readonly widgetTitle: string;
    setConfigOnlyOnce: boolean;
    protected _data: any;
    private _widgetId;
    private _config;
    protected constructor();
    connectedCallback(): void;
    willUpdate(_changedProperties: PropertyValues): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    updated(_changedProperties: PropertyValues): void;
    set config(data: WidgetConfig);
    get config(): WidgetConfig;
    set data(x: any);
    get data(): any;
    get widgetId(): string;
    /**
     * called when the widget enters the viewport 50%
     * the percentage can be changed in the future
     *
     * you can override this method for yourself
     */
    onEnterViewport(entry: IntersectionObserverEntry): void;
    /**
     * called when the widget exits the viewport 50%
     * the percentage can be changed in the future
     *
     * you can override this method for yourself
     */
    onLeaveViewport(entry: IntersectionObserverEntry): void;
    /**
     * you should override this method to use incoming events
     */
    incomingEvents(e: FlzEvent): void;
    /**
     * you should override this method to listen to state changes
     */
    stateChanged(state: any): void;
    abstract render(): any;
}
