import { ruleId } from "./IPersonalization";
import { FloatPos, GridPos } from "./IPositions";
import { DotNestedKeys } from "../helpers/helpers";
export type closable = {
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
export type TriggerDefinition = {
    name: "ByWidgetTrigger";
    persist?: TriggerPersistence;
} | {
    name: "TimerTrigger";
    options: {
        repeat: number;
        time: number;
        timeUnit?: "seconds" | "minutes";
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
} | {
    name: "AtExactlyTrigger";
    options: {
        time: string;
    };
    persist?: TriggerPersistence;
} | {
    name: "ScrollTrigger";
    options: {
        percentage: number;
    };
    persist?: TriggerPersistence;
} | {
    name: "UserClicksTrigger";
    options: {
        target: "item" | "cta_button" | "submit_form";
    };
    persist?: TriggerPersistence;
} | {
    name: "PageLoadTrigger";
    persist?: TriggerPersistence;
} | {
    name: "FormSubmittedTrigger";
    persist?: TriggerPersistence;
} | {
    name: "AfterItemsTrigger";
    options: {
        itemCount: number;
    };
    persist?: TriggerPersistence;
} | {
    name: "TabSwitchedTrigger";
    persist?: TriggerPersistence;
};
export type TriggerLogic = "OR" | "AND";
export type FrequencyCapping = "always" | "daily" | "first_visit" | "once_per_session" | "until_form_submitted";
export interface MultiTriggerConfig {
    logic: TriggerLogic;
    conditions: TriggerDefinition[];
    persist?: TriggerPersistence;
    frequencyCapping?: FrequencyCapping;
}
export type TriggerConfig = TriggerDefinition | MultiTriggerConfig;
export interface FloatingWidgetConfig extends LiveConfig, LoadableConfig {
    floatPos?: FloatPos;
    hasOverlay?: boolean;
    singleInstance?: boolean;
    triggers: Array<{
        page: string;
        on: any;
    }>;
    pages: string[];
    trigger?: TriggerConfig;
}
type TriggerPersistenceFields = {
    [key: string]: number | string | boolean;
    showed?: number;
    closed?: number;
};
export type TriggerPersistence = {
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
export type TriggerPersistenceData = {
    updated: string;
    fields: TriggerPersistenceFields;
};
export type TriggerPersistenceRule = {
    property: DotNestedKeys<{
        persisted: TriggerPersistenceData;
    } & Omit<FloatingWidgetConfig, "trigger">>;
    op: "eq" | "ne" | "neq" | "gt" | "gte" | "lt" | "lte" | "startsWith" | "endsWith" | "contains" | "present" | "empty" | "absent" | "all" | "some" | "none" | "crosses";
    value: number | boolean | string;
    required?: boolean;
};
export declare function isMultiTriggerConfig(trigger: TriggerConfig | undefined): trigger is MultiTriggerConfig;
export declare function isSingleTriggerDefinition(trigger: TriggerConfig | undefined): trigger is TriggerDefinition;
export declare function normalizeTriggerConfig(trigger: TriggerConfig | undefined): MultiTriggerConfig | undefined;
export {};
