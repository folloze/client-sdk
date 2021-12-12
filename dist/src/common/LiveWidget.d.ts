import { LiveDraggable } from "./LiveDraggable";
export declare abstract class LiveWidget extends LiveDraggable {
    protected _data: any;
    private _widgetId;
    private _config;
    constructor();
    set config(data: any);
    get config(): any;
    set data(x: any);
    get data(): any;
    get widgetId(): string;
    render(): import("lit-html").TemplateResult<1>;
}
