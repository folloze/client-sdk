import { LiveWidgetEdit } from "./LiveWidgetEdit";
export declare abstract class LiveWidgetComponentEdit extends LiveWidgetEdit {
    protected _propPath: string;
    set propertyPath(path: string);
    get propertyPath(): string;
    protected firstUpdated(): void;
}
