import { LitElement } from "lit";
import { LiveWidget } from "./LiveWidget";
import { IFloatingElement } from "./mixins/FloatableMixin";
export declare abstract class LiveWidgetEdit extends LitElement {
    protected _widget: LiveWidget;
    protected _data: any;
    protected _propPath: string;
    readonly _handleStyle: string | undefined;
    protected childFloaters: IFloatingElement[];
    disconnectedCallback(): void;
    set widget(w: LiveWidget);
    get widget(): LiveWidget;
    set propertyPath(path: string);
    get propertyPath(): string;
    get widgetId(): string;
    updateWidget(): void;
    updateContentWidget(): void;
    updateItemViewerSettings(): void;
    set data(x: any);
    get data(): any;
    closeAllChildFloaters(): void;
    abstract render(): any;
}
