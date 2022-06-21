import { LitElement } from "lit";
import { LiveWidget } from "./LiveWidget";
export declare abstract class LiveWidgetEdit extends LitElement {
    protected _widget: LiveWidget;
    protected _data: any;
    protected _propPath: string;
    readonly _handleStyle: string | undefined;
    set widget(w: LiveWidget);
    get widget(): LiveWidget;
    set propertyPath(path: string);
    get propertyPath(): string;
    get widgetId(): string;
    updateWidget(): void;
    set data(x: any);
    get data(): any;
    abstract render(): any;
}
