import {type FetchService} from "../common/FetchService";
import {type AxiosResponse} from "axios";

export type TrackAttendanceType = "create" | "update";
export type LiveEventActivityType = "attended_event" | "opened_zoom" | "viewed_recording";

const ACTIVITY_CODES = {
    attended_event: 0,
    opened_zoom: 1,
    viewed_recording: 2,
};

export type TrackAttendanceData = {
    boardId: number;
    widgetId: string;
    guid: string;
    activityType: LiveEventActivityType;
    eventName: string;
};

export default class LiveEventAnalytics {
    private fetchService: FetchService;

    constructor(fetcher: FetchService) {
        this.fetchService = fetcher;
    }

    trackAttendance(
        trackType: TrackAttendanceType,
        data: TrackAttendanceData,
    ): Promise<AxiosResponse> {
        return this.fetchService.withDisableOnPreview(() => {
            const method = trackType === "create" ? "post" : "put";
  
            return this.fetchService.fetcher[method](
                `${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${data.boardId}/attend_activities`,
                {
                    widget_id: data.widgetId,
                    event_name: data.eventName,
                    guid: data.guid,
                    activity_type: this.getActivityCode(data.activityType),
                },
            ).catch(e => {
                console.error("Could not track event attendence", e);
                throw e;
            });
        });
    }

    private getActivityCode(activityType: LiveEventActivityType): number {
        return ACTIVITY_CODES[activityType];
    }    
}
