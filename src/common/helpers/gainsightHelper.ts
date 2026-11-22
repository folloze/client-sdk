declare global {
    interface Window {
        aptrinsic?: (...args: unknown[]) => void;
    }
}

export function trackAptrinsicEvent(eventName: string, eventProperties?: Record<string, unknown>) {
    if (!window.aptrinsic) {
        return;
    }

    window.aptrinsic('track', eventName, eventProperties);
}

export function identifyAptrinsicUser(data: { id: string; email: string }) {
    if (!window.aptrinsic) {
        return;
    }

    window.aptrinsic('identify', {
        id: data.id,
        email: data.email,
    });
}
