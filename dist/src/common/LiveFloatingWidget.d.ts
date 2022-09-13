import { LiveWidget } from "./LiveWidget";
export declare abstract class LiveFloatingWidget extends LiveWidget {
    protected onClose(): void;
    protected onShow(): void;
}
