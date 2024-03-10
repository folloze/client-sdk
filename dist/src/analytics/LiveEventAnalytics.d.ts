import { type FetchService } from "../common/FetchService";
import { type AxiosResponse } from "axios";
export declare type TrackAttendanceType = "create" | "update";
export declare type ActivityType = "attended_event" | "viewed_recording";
export default class LiveEventAnalytics {
    private fetchService;
    constructor(fetcher: FetchService);
    trackAttendance(trackType: TrackAttendanceType, data: {
        boardId: number;
        widgetId: string;
        guid: string;
        activityType: ActivityType;
        eventName: string;
    }): Promise<AxiosResponse>;
    private getActivityCode;
}
