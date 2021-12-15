import { LiveDraggable } from "./LiveDraggable";
export declare abstract class LiveWidget extends LiveDraggable {
    abstract readonly editScripts: string[];
    protected _data: any;
    private _widgetId;
    private _config;
    protected constructor();
    set config(data: any);
    get config(): any;
    set data(x: any);
    get data(): any;
    get widgetId(): string;
    abstract render(): any;
}
