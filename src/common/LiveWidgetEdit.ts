import {LitElement} from "lit";
import {LiveWidget} from "./LiveWidget";
import {FloatChildrenContainer, hasFloatingChildren} from "./controllers/FloatersChildrenContainer";

export abstract class LiveWidgetEdit extends LitElement implements hasFloatingChildren {
    protected _widget: LiveWidget;
    protected _data: any;
    protected _propPath: string;

    readonly _handleStyle: string | undefined;
    public floatChildrenContainer = new FloatChildrenContainer(this);

    constructor() {
        super();
        console.log('lkalalalala');
        
        this.addEventListener("get-host-container", (e: CustomEvent) => {
            console.log('eventt');
            
            e.detail.hostContainer.container = this;
        });
    }

    set widget(w: LiveWidget) {
        this._widget = w;
        this.data = w.data;
    }

    get widget(): LiveWidget {
        return this._widget;
    }

    set propertyPath(path: string) {
        this._propPath = path;
    }

    get propertyPath(): string {
        return this._propPath;
    }

    get widgetId(): string {
        return this._widget.id;
    }

    updateWidget() {
        this._widget.data = this._data;
    }

    set data(x: any) {
        this._data = x;
    }

    get data() {
        return this._data;
    }

    abstract render();
}
