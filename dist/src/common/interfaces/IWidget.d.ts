import { ruleId } from "./IPersonalization";
import { FloatPos, GridPos } from "./IPositions";
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
export declare type TriggerPersistence = {
    expiration: "never" | string;
    counts: {
        [key: string]: number;
        triggered?: number;
        closed?: number;
    };
    allowTriggerConditions?: {
        rules: TriggerPersistenceRule[];
        satisfy: "ALL" | "ANY";
        log?: Function;
        transformValueFn?: Function;
        previousValueFn?: Function;
    };
};
export declare type TriggerPersistenceRule = {
    property: string;
    op: "eq" | "ne" | "neq" | "gt" | "gte" | "lt" | "lte" | "startsWith" | "endsWith" | "contains" | "present" | "empty" | "absent" | "all" | "some" | "none" | "crosses";
    value: number | boolean | string;
    required?: boolean;
};
