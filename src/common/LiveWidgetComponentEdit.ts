import {LiveWidgetEdit} from "./LiveWidgetEdit";
import get from "lodash/get";

export abstract class LiveWidgetComponentEdit extends LiveWidgetEdit {

    protected _propPath: string;

    set propertyPath(path: string) {
        this._propPath = path;
    }

    get propertyPath(): string {
        return this._propPath;
    }

    protected firstUpdated() {
        this.data = get(this.widget.data, this.propertyPath);
    }
}
