import { type FetchService } from "../common/FetchService";
import { type AxiosResponse } from "axios";
export declare type TrackAttendanceType = "create" | "update";
export declare type LiveEventActivityType = "attended_event" | "viewed_recording";
export declare type TrackAttendanceData = {
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
