import {LiveWidget} from "./LiveWidget";

export abstract class LiveFloatingWidget extends LiveWidget {
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
