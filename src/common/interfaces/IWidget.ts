import {ruleId} from "./IPersonalization";
import {FloatPos, GridPos} from "./IPositions";

export type closable = {close: () => void};

export interface LiveConfig {
    id: string;
    data: any;
    personalization?: {
        rulesBatchId: string;
        rulesData: Record<ruleId, {data: any}>;
    };
}

export interface GridConfig extends LiveConfig {
    sectionId: string;
    position: GridPos;
}

export interface LoadableConfig extends LiveConfig {
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string; // url to the widget CDN | lib
    _widgetScripts?: string; // temporary dynamically calculated field to use with the designer to load the edit scripts for the widget
}

export interface WidgetConfig extends LiveConfig, GridConfig, LoadableConfig {}

export interface RibbonConfig extends LiveConfig, GridConfig, LoadableConfig {}

export interface FloatingWidgetConfig extends LiveConfig, LoadableConfig {
    floatPos?: FloatPos;

    // whether or not to show an opacity overlay behind the widget
    hasOverlay?: boolean;

    // todo: we dont necessarily need both options for temporary use
    // option 1
    triggers: Array<{page: string; on: any}>;

    // option 2
    pages: string[];
    trigger:
        | undefined
        | {name: "ByWidgetTrigger"; persist?: TriggerPersistence}
        | {name: "TimerTrigger"; options: {repeat: number; time: number}; persist?: TriggerPersistence}
        | {name: "OnEventTrigger"; options: {repeat: number; eventName: string}; persist?: TriggerPersistence}
        | {name: "LeaveTrigger"; persist?: TriggerPersistence};
}

export type TriggerPersistence = {
    expiration: "never" | string;
    counts: {
        [key: string]: number;
        triggered?: number; // automatic field
        closed?: number; // automatic field
    };
    allowTriggerConditions?: {
        rules: TriggerPersistenceRule[];
        satisfy: "ALL" | "ANY";
        log?: Function; // console.log
        transformValueFn?: Function; // ex: (val) => ref[val],
        previousValueFn?: Function;
    };
};

export type TriggerPersistenceRule = {
    property: string;
    op:
        | "eq"
        | "ne"
        | "neq"
        | "gt"
        | "gte"
        | "lt"
        | "lte"
        | "startsWith"
        | "endsWith"
        | "contains"
        | "present"
        | "empty"
        | "absent"
        | "all"
        | "some"
        | "none"
        | "crosses";
    value: number | boolean | string;
    required?: boolean;
};
