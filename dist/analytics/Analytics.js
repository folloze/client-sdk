export class Analytics {
    constructor(fetch) {
        this.fetcher = fetch.fetcher;
    }
    sendCustomAnalyticEvent(payload) {
        return new Promise((resolve, reject) => {
            this.fetcher.post("/url-for-custom-analytic-event", payload)
                .then(result => {
                resolve(result);
            })
                .catch(e => {
                console.error("could not send custom analytic event", e);
                reject(e);
            });
        });
    }
}
//# sourceMappingURL=Analytics.js.map