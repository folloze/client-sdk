import {LiveWidgetEdit} from "./LiveWidgetEdit";
import get from "lodash/get";

export abstract class LiveWidgetComponentEdit extends LiveWidgetEdit {

    protected _propPath: string;
    protected _editableComponent?: HTMLElement;

    set propertyPath(path: string) {
        this._propPath = path;
    }

    get propertyPath(): string {
        return this._propPath;
    }

    set editableComponent(value: HTMLElement) {
        this._editableComponent = value;
    }

    get editableComponent(): HTMLElement {
        return this._editableComponent;
    }


    protected firstUpdated() {
        this.data = get(this.widget.data, this.propertyPath);
    }
}
