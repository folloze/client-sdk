import {type GenerationConfig} from "../interfaces/IBoard";

export function canWidgetGenerateText(widgetId: string, widgetTagName: string, generateConfig: GenerationConfig | undefined): boolean {
  if (!window["follozeWidgetDescriptions"][widgetTagName.toLowerCase()]) {
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
