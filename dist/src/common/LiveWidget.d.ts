import { LiveDraggable } from "./LiveDraggable";
import { WidgetConfig } from "./interfaces/IWidget";
export declare abstract class LiveWidget extends LiveDraggable {
    abstract readonly customEditWidgets: string[];
    abstract readonly editComponents: string[];
    protected _data: any;
    private _widgetId;
    private _config;
    protected constructor();
    set config(data: WidgetConfig);
    get config(): WidgetConfig;
    set data(x: any);
    get data(): any;
    get widgetId(): string;
    abstract render(): any;
}
