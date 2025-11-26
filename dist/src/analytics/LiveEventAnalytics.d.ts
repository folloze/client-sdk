import { type FetchService } from "../common/FetchService";
import { type AxiosResponse } from "axios";
export type TrackAttendanceType = "create" | "update";
export type LiveEventActivityType = "attended_event" | "opened_zoom" | "viewed_recording";
export type TrackAttendanceData = {
    boardId: number;
    widgetId: string;
    guid: string;
    activityType: LiveEventActivityType;
    eventName: string;
};
export default class LiveEventAnalytics {
    private fetchService;
    constructor(fetcher: FetchService);
    trackAttendance(trackType: TrackAttendanceType, data: TrackAttendanceData): Promise<AxiosResponse>;
    private getActivityCode;
}
