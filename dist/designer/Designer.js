export class Designer {
    constructor(fetch) {
        this.fetcher = fetch.fetcher;
    }
    saveLiveBoard(payload) {
        return new Promise((resolve, reject) => {
            this.fetcher.post("/url-for-saving-live-board", payload)
                .then(result => {
                resolve(result);
            })
                .catch(e => {
                console.error("could not save liveboard", e);
                reject(e);
            });
        });
    }
}
//# sourceMappingURL=Designer.js.map