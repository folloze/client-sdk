import {customElement} from "lit/decorators.js";
import {LiveWidgetEdit} from "./LiveWidgetEdit";
import _ from "lodash";

@customElement("live-widget-comp-edit")
export abstract class LiveWidgetComponentEdit extends LiveWidgetEdit {

    protected _propPath: string;

    set propertyPath(path: string) {
        this._propPath = path;
    }

    get propertyPath(): string {
        return this._propPath;
    }

    protected firstUpdated() {
        this.data = _.get(this.widget.data, this.propertyPath);
    }
}
