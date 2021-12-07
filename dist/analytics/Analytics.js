export class Analytics {
    constructor(fetch) {
        this.fetcher = fetch.fetcher;
    }
    sendCustomAnalyticEvent(payload) {
        return this.fetcher.post("/url-for-custom-analytic-event", payload);
    }
    sendPing(payload) {
        return this.fetcher.post("/url-for-ping", payload);
    }
}
//# sourceMappingURL=Analytics.js.map