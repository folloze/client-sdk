// The value is `<pageLoadId>-<seq>`: a prefix search on the page load id returns every
// request that page made, the full value pins down a single request.

export const REQUEST_ID_HEADER = "X-Request-Id";

// Kept on the global object so every Folloze bundle sharing a page (live-board, designer,
// widgets, folloze-client) reports the same page load id and one sequence.
const STATE_KEY = "__flzRequestIdState";

type RequestIdState = {
    pageLoadId: string;
    sequence: number;
};

type CryptoLike = {
    randomUUID?: () => string;
    getRandomValues?: (array: Uint8Array) => Uint8Array;
};

function randomId(): string {
    const cryptoObj: CryptoLike | undefined =
        typeof globalThis === "undefined" ? undefined : (globalThis.crypto as unknown as CryptoLike);

    if (cryptoObj?.randomUUID) {
        return cryptoObj.randomUUID();
    }
    if (cryptoObj?.getRandomValues) {
        const bytes = cryptoObj.getRandomValues(new Uint8Array(16));
        return Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
    }
    return `${Date.now().toString(16)}${Math.random().toString(16).slice(2, 14)}`;
}

function state(): RequestIdState {
    const host = (typeof window === "undefined" ? globalThis : window) as any;

    if (!host[STATE_KEY]) {
        host[STATE_KEY] = { pageLoadId: randomId(), sequence: 0 };
    }
    return host[STATE_KEY];
}

export function pageLoadId(): string {
    return state().pageLoadId;
}

export function nextRequestId(): string {
    const current = state();
    current.sequence += 1;

    return `${current.pageLoadId}-${current.sequence}`;
}
