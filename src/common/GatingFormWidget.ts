import {LiveWidget} from "./LiveWidget";

export abstract class GatingFormWidget extends LiveWidget {
    isGatingForm: boolean = true;
    abstract show();
}