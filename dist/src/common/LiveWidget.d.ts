import { LiveDraggable } from "./LiveDraggable";
import { WidgetConfig } from "./interfaces/IWidget";
import { PropertyValues } from "lit";
export declare abstract class LiveWidget extends LiveDraggable {
    abstract readonly customEditWidgets: string[];
    abstract readonly editComponents: string[];
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
    private emit;
    abstract render(): any;
}
