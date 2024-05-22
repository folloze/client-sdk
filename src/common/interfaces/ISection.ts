import {FeatureName} from "./IInitialState";
import {FlzEditableImageData, FlzEditableVideoData} from "../../designer/IDesignerTypes";
import {FloatingWidgetConfig, RibbonConfig, WidgetConfig} from "./IWidget";

export type AddListItem = {
    category: string;
    type: string;
    config: any;
    description: string;
    image: string;
    name: string;
};

export interface SectionListItem extends AddListItem {
    type: SectionType;
    config: PredefinedSection;
    restriction?: {
        requiresFeatures: FeatureName[];
        type: "useCase" | "premium";
        valueStatement: string;
        useCaseName?: string;
    }
}

export interface CustomSectionListItem extends SectionListItem {
    id: number;
}

export interface WidgetListItem extends AddListItem {
    type: WidgetType;
    config: WidgetConfig | FloatingWidgetConfig;
}

export type SectionType = "header" | "footer" | "body";
export type WidgetType = "contact-card" | string;

export type PredefinedSection = {
    sections: Record<string, SectionConfig>;
    widgets?: Record<string, WidgetConfig>;
    ribbons?: Record<string, RibbonConfig>;
};

export type SectionConfig = {
    id: string;
    name?: string;
    type?: SectionType;
    anchor?: string;
};

export type BackgroundImage = {
    image: FlzEditableImageData;
    position: string;
    size: "cover" | "contain" | string;
    repeat: string;
};

export type BackgroundVideo = {
    video: FlzEditableVideoData;
    position: string;
};

export type WidgetDescription = {
    description: string;
    purposes: string[];
    defaultPurpose: string;
    injectables: SectionInjectable[];
    dynamicArrayInjectables?: DynamicArrayInjectable[];
}

export type SectionInjectable = {
    name: string;
    path: string;
    visibilityPath?: string;
    description: string;
}

export type VisibilityConfig = {
    path: string;
    value: string;
}

export type DynamicArrayInjectable = {
    arrayPath: string;
    injectables: SectionInjectable[];
}