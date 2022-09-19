import {LiveWidget} from "./LiveWidget";
import {FloatingWidgetConfig} from "./interfaces/IWidget";

export abstract class LiveFloatingWidget extends LiveWidget {
    protected _config: FloatingWidgetConfig;

    set config(data: FloatingWidgetConfig) {
        super.config = data;
    }

    public get config(): FloatingWidgetConfig {
        return super.config as FloatingWidgetConfig;
    }

    /*
        runs only on liveboard (not in designer) when the widget is hidden
     */
    public onClose() {
        //
    }

    /*
    runs only on liveboard (not in designer) when the widget is shown
     */
    public onShow() {
        //
    }
}
