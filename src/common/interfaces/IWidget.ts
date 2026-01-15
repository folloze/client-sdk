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

    // todo: remove this field - we no longer use it
    _widgetScripts?: string; // temporary dynamically calculated field to use with the designer to load the edit scripts for the widget
}

export interface WidgetConfig extends LiveConfig, GridConfig, LoadableConfig {}

export interface RibbonConfig extends LiveConfig, GridConfig, LoadableConfig {}

// Base trigger types - live-board compatible
export type TriggerDefinition =
    | {name: "ByWidgetTrigger"; persist?: TriggerPersistence}
    | {name: "TimerTrigger"; options: {repeat: number; time: number; timeUnit?: "seconds" | "minutes"}; persist?: TriggerPersistence}
    | {name: "OnEventTrigger"; options: {repeat: number; eventName: string}; persist?: TriggerPersistence}
    | {name: "LeaveTrigger"; persist?: TriggerPersistence};

// Extended trigger types - includes all triggers for MultiTrigger conditions
export type ExtendedTriggerDefinition =
    | TriggerDefinition
    | {name: "AtExactlyTrigger"; options: {time: string}; persist?: TriggerPersistence}
    | {name: "ScrollTrigger"; options: {percentage: number}; persist?: TriggerPersistence}
    | {name: "UserClicksTrigger"; options: {target: "item" | "cta_button" | "submit_form"}; persist?: TriggerPersistence}
    | {name: "PageLoadTrigger"; persist?: TriggerPersistence}
    | {name: "FormSubmittedTrigger"; persist?: TriggerPersistence}
    | {name: "AfterItemsTrigger"; options: {itemCount: number}; persist?: TriggerPersistence}
    | {name: "TabSwitchedTrigger"; persist?: TriggerPersistence}
    | {name: "EventAttendedTrigger"; persist?: TriggerPersistence}
    | {name: "ViewedRecordingTrigger"; persist?: TriggerPersistence};

export type TriggerLogic = "OR" | "AND";

export type FrequencyCapping =
    | "always"
    | "daily"
    | "first_visit"
    | "once_per_session"
    | "until_form_submitted";

export interface MultiTriggerConfig {
    name: "MultiTrigger";
    logic: TriggerLogic;
    conditions: ExtendedTriggerDefinition[];
    persist?: TriggerPersistence;
    frequencyCapping?: FrequencyCapping;
}

// TriggerConfig for FloatingWidgetConfig - live-board compatible (no MultiTrigger)
export type TriggerConfig = TriggerDefinition;

// FullTriggerConfig for widgets package - includes MultiTrigger support
export type FullTriggerConfig = ExtendedTriggerDefinition | MultiTriggerConfig;

export interface FloatingWidgetConfig extends LiveConfig, LoadableConfig {
    floatPos?: FloatPos;

    // whether or not to show an opacity overlay behind the widget
    hasOverlay?: boolean;

    // whether or not to allow multiple instances of the widget
    singleInstance?: boolean;

    // todo: we dont necessarily need both options for temporary use
    // option 1
    triggers: Array<{page: string; on: any}>;

    // option 2
    pages: string[];
    trigger?: TriggerConfig;
}

type TriggerPersistenceFields = {
    [key: string]: number | string | boolean;
    showed?: number; // automatic field
    closed?: number; // automatic field
};

export type TriggerPersistence = {
    expiration: "never" | number; // number of seconds until it expires
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

export function isMultiTriggerConfig(trigger: FullTriggerConfig | undefined): trigger is MultiTriggerConfig {
    return trigger !== undefined && trigger.name === "MultiTrigger" && "logic" in trigger && "conditions" in trigger && Array.isArray(trigger.conditions);
}

export function isSingleTriggerDefinition(trigger: FullTriggerConfig | undefined): trigger is ExtendedTriggerDefinition {
    return trigger !== undefined && "name" in trigger && trigger.name !== "MultiTrigger";
}

export function normalizeTriggerConfig(trigger: FullTriggerConfig | undefined): MultiTriggerConfig | undefined {
    if (!trigger) return undefined;

    if (isMultiTriggerConfig(trigger)) {
        return trigger;
    }

    if (isSingleTriggerDefinition(trigger)) {
        return {
            name: "MultiTrigger",
            logic: "OR",
            conditions: [trigger],
            persist: trigger.persist,
        };
    }

    return undefined;
}
