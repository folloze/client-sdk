export function trackAptrinsicEvent(eventName: string, eventProperties?: Record<string, unknown>) {
    if (!window["aptrinsic"]) {
        return;
    }

    window["aptrinsic"]('track', eventName, eventProperties);
}
