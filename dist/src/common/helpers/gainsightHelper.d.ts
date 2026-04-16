declare global {
    interface Window {
        aptrinsic?: (...args: unknown[]) => void;
    }
}
export declare function trackAptrinsicEvent(eventName: string, eventProperties?: Record<string, unknown>): void;
export declare function identifyAptrinsicUser(data: {
    id: string;
    email: string;
}): void;
