import {LiveDraggable} from "./LiveDraggable";
import {WidgetConfig} from "./interfaces/IWidget";
import {v4 as uuid_v4} from "uuid";
import {PropertyValues} from "lit";
import {FlzEvent} from "./FlzEvent";
import {widgetEmit} from "./helpers/eventHelpers";
import {LiveWidget} from "./LiveWidget";

export abstract class LiveFloatingWidget extends LiveWidget {}
