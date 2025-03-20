import {PageGenerationConfig} from "../interfaces/IGenerationTypes";

export function canWidgetGenerateText(widgetId: string, widgetTagName: string, generateConfig: PageGenerationConfig | undefined): boolean {
  if (!window["follozeWidgetDescriptions"][widgetTagName.toLowerCase()]) {
      return false;
  }

  return !!(
      generateConfig &&
      generateConfig.board?.goal &&
      generateConfig.board?.productName &&
      generateConfig.widgets?.[widgetId]?.purpose
  );
}
