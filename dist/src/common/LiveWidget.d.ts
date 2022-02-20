import { LiveDraggable } from "./LiveDraggable";
import { WidgetConfig } from "./interfaces/IWidget";
import { PropertyValues } from "lit";
import { FlzEvent } from "./FlzEvent";
export declare abstract class LiveWidget extends LiveDraggable {
    abstract readonly customEditWidgets: string[];
    abstract readonly editComponents: string[];
    abstract readonly widgetTitle: string;
    protected _data: any;
    private _widgetId;
    private _config;
    protected constructor();
    willUpdate(_changedProperties: PropertyValues): void;
    set config(data: WidgetConfig);
    get config(): WidgetConfig;
    set data(x: any);
    get data(): any;
    get widgetId(): string;
    emit(action: string, payload?: any, cb?: CallableFunction): void;
    /**
     * you should override this method to use incoming events
     */
    incomingEvents(e: FlzEvent): void;
    abstract render(): any;
}
