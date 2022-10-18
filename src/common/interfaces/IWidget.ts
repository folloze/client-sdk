import {ruleId} from "./IPersonalization";
import {FloatPos, GridPos} from "./IPositions";
import {DotNestedKeys} from "../helpers/helpers";

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

type TriggerPersistenceFields = {
    [key: string]: number | string | boolean;
    showed?: number; // automatic field
    closed?: number; // automatic field
};

export type TriggerPersistence = {
    expiration: "never" | number; // number of milliseconds until it expires
    // fields to be persisted under persisted.fields
    fields: TriggerPersistenceFields;
    showConditions?: {
        rules: TriggerPersistenceRule[];
        satisfy: "ALL" | "ANY";
        transformValueFn?: Function; // ex: (val) => ref[val],
        previousValueFn?: Function;
        log?: Function; // console.log
    };
};

export type TriggerPersistenceData = {
    updated: string; // should be a datetime last updated string
    fields: TriggerPersistenceFields;
};

export type TriggerPersistenceRule = {
    property: DotNestedKeys<{persisted: TriggerPersistenceData} & Omit<FloatingWidgetConfig, "trigger">>;
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
