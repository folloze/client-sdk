import { LiveWidget } from "./LiveWidget";
import { FloatingWidgetConfig } from "./interfaces/IWidget";
export declare abstract class LiveFloatingWidget extends LiveWidget {
    protected _config: FloatingWidgetConfig;
    set config(data: FloatingWidgetConfig);
    get config(): FloatingWidgetConfig;
    onClose(): void;
    onShow(): void;
}
