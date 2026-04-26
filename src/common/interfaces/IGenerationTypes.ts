import {type LiveWidgetEdit} from "../LiveWidgetEdit";
import {type LiveWidget} from "../LiveWidget";

/**
 * Primitive field types the server understands.
 * Mirrors JSON primitives so the server can decide how to validate / manipulate
 * the value. Semantic types (e.g. "categoryId") may be added later as the server
 * gains the ability to resolve them.
 */
export type SchemaFieldType = "string" | "number";

/**
 * Describes a single leaf field in the schema:
 * - A {@link SchemaFieldType} for a primitive value, or
 * - A `string[]` of allowed values to express an ad-hoc enum (e.g. `["draft", "published"]`).
 */
export type SchemaFieldDescriptor = SchemaFieldType | string[];

/**
 * Recursive description of a widget data shape sent to the server alongside the
 * generation request. Every key is optional so partial schemas are valid.
 * Object branches recurse, arrays and primitives terminate at a {@link SchemaFieldDescriptor}.
 */
export type SchemaDescriptor<T> = {
    [K in keyof T]?: NonNullable<T[K]> extends ReadonlyArray<unknown>
        ? SchemaFieldDescriptor
        : NonNullable<T[K]> extends object
        ? SchemaDescriptor<NonNullable<T[K]>>
        : SchemaFieldDescriptor;
};

export type WidgetDescription<T = unknown> = {
    description: string;
    purposes: string[];
    defaultPurpose: string;
    injectables: SectionInjectable[];
    dynamicArrayInjectables?: DynamicArrayInjectable[];
    /** Optional shape hint for the server. Omit when no schema validation is needed. */
    schema?: SchemaDescriptor<T>;
}

export type VisibilityConfig = {
    path: string;
    value: string;
}

export type DynamicArrayInjectable = {
    arrayPath: string;
    injectables: SectionInjectable[];
}

export type WidgetVariant = {
    widgetId: string;
    variants: Array<GeneratedText[]>;
    lastAction: string;
    currentEditor?: LiveWidgetEdit;
    lastOperation?: LastGenOperation;
}

export type LastGenOperation = {
    payload: GenRephrasePersonalizePayload | GenGenerateTextPayload,
    injectables?: SectionInjectable[],
}

export type GenAiDialogOperations = {
    openDialogFunc: CallableFunction,
    hasBeenExecuted: boolean
}

export type GenGenerateTextPayload = {
    action: string,
    widget: LiveWidget,
}

export type GenRephrasePersonalizePayload = GenGenerateTextPayload &{
    targetIndex: number,
}

export type GenAudienceTarget = {
    targetType: string;
    targetString: string;
};

export type GenAdditionalInfo = {
    targetAudience?: {
        type: "account" | "segment",
        name: string,
    }
}

export type GenerateTextWidgetData = {
    widgetId: string;
    widgetTag: string;
    injectables: SectionInjectable[];
    additionalInfo?: GenAdditionalInfo;
}

export type GenerateTextWidgetExtendedData = GenerateTextWidgetData & {
    description: string;
    purpose: string;
    product?: string;
    prompt?: string;
}

export type GenerateWidgetsTextsFromScratchRequest = {
    board: {
        goal: string,
        productName: string,
        details?: string,
    },
    widgets: GenerateTextWidgetExtendedData[],
    numberOfVariants: number;
}

export type GenerateWidgetsTextsFromPromptRequest = {
    prompt: string,
    widgets: GenerateTextWidgetExtendedData[],
    numberOfVariants: number;
}

export type GenRephraseWidgetsTextsRequest = {
    strategy: "personalize" | "shorten",
    widgets: GenerateTextWidgetData[],
    numberOfVariants: number;
}

export type GenTranslateWidgetsTextsRequest = {
    language: "Spanish" | "German" | "French" | "Portuguese" | "Japanese",
    widgets: GenerateTextWidgetData[],
}

export type GenTranslateResponseV1 = {
    widgets: GenWidgetVariance[]
}

export type GenRephraseResponseV1 = {
    variants: Array<{widgets: GenWidgetVariance[]}>
}
export type GenGenerateResponseV1 = GenRephraseResponseV1;

export type GenWidgetVariance = {
    widgetId: string,
    text: GeneratedText[]
}

type ExcludeEngines = "gen2" | "helix";

export type SectionInjectable = {
    name: string;
    path: string;
    value?: string;
    visibilityPath?: string;
    description: string;
    excludeEngine?: ExcludeEngines[];
}

export type WidgetGenerationConfig = {
    purpose?: string;
    product?: string;
    prompt?: string;
    targetAudienceId?: number;
    genByTarget?: GenAudienceTarget[];
};

export type PageGenerationConfig = {
    board?: {
        goal?: string;
        productName?: string;
        details?: string;
        genByTarget?: GenAudienceTarget[];
        language?: string;
        prompt?: string;
    };
    widgets?: {
        [key:string]: WidgetGenerationConfig
    }
}

export type GenerationConfig = {
    pages: {
        [key: string]: PageGenerationConfig
    }
}

export type GeneratedText = {
    text: string;
    path: string;
};

export type GeneratedWidgetText = {
    text: GeneratedText[];
    prompt: string;
    widgetId: string;
};

export type GenerateWidgetsTextsResponse = {
    widgets: GeneratedWidgetText[];
};

export type GenTextFromFile = {
    file: File;
    operation: 'extract_product';
}

export type GenTextFromUrl = {
    url: string;
    operation: 'extract_product';
}

export type GenTextResponse = {
    text: string;
}