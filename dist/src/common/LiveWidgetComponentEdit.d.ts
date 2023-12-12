import { LiveWidgetEdit } from "./LiveWidgetEdit";
export declare abstract class LiveWidgetComponentEdit extends LiveWidgetEdit {
    protected _propPath: string;
    protected _editableComponent?: HTMLElement;
    set propertyPath(path: string);
    get propertyPath(): string;
    set editableComponent(value: HTMLElement);
    get editableComponent(): HTMLElement;
    protected firstUpdated(): void;
}
