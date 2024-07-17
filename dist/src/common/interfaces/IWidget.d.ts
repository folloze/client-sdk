import { ruleId } from "./IPersonalization";
import { FloatPos, GridPos } from "./IPositions";
import { DotNestedKeys } from "../helpers/helpers";
export declare type closable = {
    close: () => void;
};
export interface LiveConfig {
    id: string;
    data: any;
    personalization?: {
        rulesBatchId: string;
        rulesData: Record<ruleId, {
            data: any;
        }>;
    };
}
export interface GridConfig extends LiveConfig {
    sectionId: string;
    position: GridPos;
}
export interface LoadableConfig extends LiveConfig {
    widgetTag: string;
    widgetScripts: string;
    _widgetScripts?: string;
}
export interface WidgetConfig extends LiveConfig, GridConfig, LoadableConfig {
}
export interface RibbonConfig extends LiveConfig, GridConfig, LoadableConfig {
}
export interface FloatingWidgetConfig extends LiveConfig, LoadableConfig {
    floatPos?: FloatPos;
    hasOverlay?: boolean;
    singleInstance?: boolean;
    triggers: Array<{
        page: string;
        on: any;
    }>;
    pages: string[];
    trigger: undefined | {
        name: "ByWidgetTrigger";
        persist?: TriggerPersistence;
    } | {
        name: "TimerTrigger";
        options: {
            repeat: number;
            time: number;
        };
        persist?: TriggerPersistence;
    } | {
        name: "OnEventTrigger";
        options: {
            repeat: number;
            eventName: string;
        };
        persist?: TriggerPersistence;
    } | {
        name: "LeaveTrigger";
        persist?: TriggerPersistence;
    };
}
declare type TriggerPersistenceFields = {
    [key: string]: number | string | boolean;
    showed?: number;
    closed?: number;
};
export declare type TriggerPersistence = {
    expiration: "never" | number;
    fields: TriggerPersistenceFields;
    showConditions?: {
        rules: TriggerPersistenceRule[];
        satisfy: "ALL" | "ANY";
        transformValueFn?: Function;
        previousValueFn?: Function;
        log?: Function;
    };
};
export declare type TriggerPersistenceData = {
    updated: string;
    fields: TriggerPersistenceFields;
};
export declare type TriggerPersistenceRule = {
    property: DotNestedKeys<{
        persisted: TriggerPersistenceData;
    } & Omit<FloatingWidgetConfig, "trigger">>;
    op: "eq" | "ne" | "neq" | "gt" | "gte" | "lt" | "lte" | "startsWith" | "endsWith" | "contains" | "present" | "empty" | "absent" | "all" | "some" | "none" | "crosses";
    value: number | boolean | string;
    required?: boolean;
};
export {};
