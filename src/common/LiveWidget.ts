import {Personalizable} from "./mixins/PersonalaziableMixin";
import {LiveWidgetElement} from "./LiveWidgetElement";

export abstract class LiveWidget extends Personalizable(LiveWidgetElement) {}
