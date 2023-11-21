import {type GenerationConfig} from "../interfaces/IBoard";

export function canWidgetGenerateText(widgetId: string, widgetTagName: string, generateConfig: GenerationConfig): boolean {
  if (!window["follozeSectionDescriptions"][widgetTagName.toLowerCase()]) {
      return false;
  }

  return !!(
      generateConfig &&
      generateConfig.board?.goal &&
      generateConfig.board?.productName &&
      generateConfig.widgets?.[widgetId]?.purpose &&
      generateConfig.widgets?.[widgetId]?.elaboratedPurpose
  );
}

export const BOARD_GOALS = [
    "Product/Solution Overview",
    "Content Nurturing",
    "Account Based Page",
    "Landing Page",
    "Event Registration"
];