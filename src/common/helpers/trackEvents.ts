import {LitElement} from "lit";
import { DesignerEventTypes } from "../../analytics/Analytics";
import { editorEmit } from "./eventHelpers";

type AddSectionEventPayload = {
  sectionId?: string;
  sectionName: string;
  sectionType?: string;
  sectionCategory?: string;
}

type EditSectionEventPayload = {
  sectionName: string;
  isSectionManager: boolean;
}

type DeleteSectionEventPayload = {
  widgetId?: string;
  widgetName?: string;
  sectionName?: string;
  isFloatingWidget: boolean;
}

type DeleteWidgetEventPayload = {
  widgetId?: string;
  isFloatingWidget: boolean;
}

type EventPayload = AddSectionEventPayload | EditSectionEventPayload | DeleteSectionEventPayload

export class AbstractTracker {
  public trackingEventPayload;
  public action: DesignerEventTypes;

  constructor(trackingEventPayload: EventPayload) {
    this.trackingEventPayload = trackingEventPayload;
  }
}

export class TrackAddSection extends AbstractTracker {
  constructor(trackingEventPayload: AddSectionEventPayload) {
    super(trackingEventPayload);

    this.action = DesignerEventTypes.add_new_section;
    this.trackingEventPayload = {
      section_name: trackingEventPayload.sectionName,
      section_type: trackingEventPayload.sectionType,
      section_category: trackingEventPayload.sectionCategory
    };
  }
}

export class TrackDeleteSection extends AbstractTracker {
  constructor(trackingEventPayload: DeleteSectionEventPayload) {
    super(trackingEventPayload);

    this.action = DesignerEventTypes.delete_section;
    this.trackingEventPayload = {
      section_name: trackingEventPayload.sectionName,
      is_floating_widget: trackingEventPayload.isFloatingWidget
    };
  }
}

export class TrackDeleteWidget extends AbstractTracker {
  constructor(trackingEventPayload: DeleteWidgetEventPayload) {
    super(trackingEventPayload);

    this.action = DesignerEventTypes.delete_section;
    this.trackingEventPayload = {
      widget_id: trackingEventPayload.widgetId,
      is_floating_widget: trackingEventPayload.isFloatingWidget
    };
  }
}

export class TrackAddFloatingSection extends AbstractTracker {
  constructor(trackingEventPayload) {
    super(trackingEventPayload);

    this.action = DesignerEventTypes.add_floating_section;
    this.trackingEventPayload = {
      widget_name: trackingEventPayload.widgetName,
      widget_type: trackingEventPayload.widgetType,
      widget_category: trackingEventPayload.widgetCategory,
      is_floating_widget: trackingEventPayload.isFloatingWidget
    };
  }
}

export class TrackEditSection extends AbstractTracker {
  constructor(trackingEventPayload: EditSectionEventPayload) {
    super(trackingEventPayload);

    this.action = DesignerEventTypes.edit_section;
    this.trackingEventPayload = {
      section_name: trackingEventPayload.sectionName,
      is_section_manager: trackingEventPayload.isSectionManager
    };
  }
}

export class TrackPublishBoard extends AbstractTracker {
  constructor() {
    super(null);

    this.action = DesignerEventTypes.publish_board;
  }
}

export class TrackPreviewBoard extends AbstractTracker {
  constructor() {
    super(null);

    this.action = DesignerEventTypes.preview_board;
  }
}

export class TrackAddPersonalizationRule extends AbstractTracker {
  constructor(trackingEventPayload) {
    super(trackingEventPayload);

    this.action = DesignerEventTypes.added_rule;
    this.trackingEventPayload = {
      rule: {
        trackingEventPayload
      }
    };
  }
}

export type EventTracker =
  TrackAddSection
  | TrackDeleteSection
  | TrackDeleteWidget
  | TrackAddFloatingSection
  | TrackEditSection
  | TrackPreviewBoard
  | TrackPublishBoard
  | TrackAddPersonalizationRule;

export function trackEvent(host: LitElement, tracker: EventTracker) {
  editorEmit(host, "designer-event-tracking", {
    action: tracker.action,
    data: tracker.trackingEventPayload
  });
}
