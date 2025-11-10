import { type LiveWidgetEdit } from "../LiveWidgetEdit";
import { type LiveWidget } from "../LiveWidget";
export type WidgetDescription = {
    description: string;
    purposes: string[];
    defaultPurpose: string;
    injectables: SectionInjectable[];
    dynamicArrayInjectables?: DynamicArrayInjectable[];
};
export type VisibilityConfig = {
    path: string;
    value: string;
};
export type DynamicArrayInjectable = {
    arrayPath: string;
    injectables: SectionInjectable[];
};
export type WidgetVariant = {
    widgetId: string;
    variants: Array<GeneratedText[]>;
    lastAction: string;
    currentEditor?: LiveWidgetEdit;
    lastOperation?: LastGenOperation;
};
export type LastGenOperation = {
    payload: GenRephrasePersonalizePayload | GenGenerateTextPayload;
    injectables?: SectionInjectable[];
};
export type GenAiDialogOperations = {
    openDialogFunc: CallableFunction;
    hasBeenExecuted: boolean;
};
export type GenGenerateTextPayload = {
    action: string;
    widget: LiveWidget;
};
export type GenRephrasePersonalizePayload = GenGenerateTextPayload & {
    targetIndex: number;
};
export type GenAudienceTarget = {
    targetType: string;
    targetString: string;
};
export type GenAdditionalInfo = {
    targetAudience?: {
        type: "account" | "segment";
        name: string;
    };
};
export type GenerateTextWidgetData = {
    widgetId: string;
    widgetTag: string;
    injectables: SectionInjectable[];
    additionalInfo?: GenAdditionalInfo;
};
export type GenerateTextWidgetExtendedData = GenerateTextWidgetData & {
    description: string;
    purpose: string;
    product?: string;
    prompt?: string;
};
export type GenerateWidgetsTextsFromScratchRequest = {
    board: {
        goal: string;
        productName: string;
        details?: string;
    };
    widgets: GenerateTextWidgetExtendedData[];
    numberOfVariants: number;
};
export type GenerateWidgetsTextsFromPromptRequest = {
    prompt: string;
    widgets: GenerateTextWidgetExtendedData[];
    numberOfVariants: number;
};
export type GenRephraseWidgetsTextsRequest = {
    strategy: "personalize" | "shorten";
    widgets: GenerateTextWidgetData[];
    numberOfVariants: number;
};
export type GenTranslateWidgetsTextsRequest = {
    language: "Spanish" | "German" | "French" | "Portuguese" | "Japanese";
    widgets: GenerateTextWidgetData[];
};
export type GenTranslateResponseV1 = {
    widgets: GenWidgetVariance[];
};
export type GenRephraseResponseV1 = {
    variants: Array<{
        widgets: GenWidgetVariance[];
    }>;
};
export type GenGenerateResponseV1 = GenRephraseResponseV1;
export type GenWidgetVariance = {
    widgetId: string;
    text: GeneratedText[];
};
type ExcludeEngines = "gen2" | "helix";
export type SectionInjectable = {
    name: string;
    path: string;
    value?: string;
    visibilityPath?: string;
    description: string;
    excludeEngine?: ExcludeEngines[];
};
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
        [key: string]: WidgetGenerationConfig;
    };
};
export type GenerationConfig = {
    pages: {
        [key: string]: PageGenerationConfig;
    };
};
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
};
export type GenTextFromUrl = {
    url: string;
    operation: 'extract_product';
};
export type GenTextResponse = {
    text: string;
};
export {};
