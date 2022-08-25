import { LiveWidget } from "./LiveWidget";
export declare abstract class GatingFormWidget extends LiveWidget {
    isGatingForm: boolean;
    abstract show(): any;
}
