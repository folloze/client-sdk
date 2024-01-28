import { LitElement } from "lit";
import { LiveWidget } from "./LiveWidget";
import { FloatChildrenContainer, hasFloatingChildren } from "./controllers/FloatersChildrenContainer";
export declare abstract class LiveWidgetEdit extends LitElement implements hasFloatingChildren {
    protected _widget: LiveWidget;
    protected _data: any;
    protected _propPath: string;
    readonly _handleStyle: string | undefined;
    floatChildrenContainer: FloatChildrenContainer;
    constructor();
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
