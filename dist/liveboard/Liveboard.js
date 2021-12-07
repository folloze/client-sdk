export class Liveboard {
    constructor(fetch) {
        this.fetcher = fetch.fetcher;
    }
    getItems(payload) {
        return new Promise((resolve, reject) => {
            this.fetcher.post("url-getting-items", payload)
                .then(result => {
                resolve(result);
            })
                .catch(e => {
                console.error("could not get items", e);
                reject(e);
            });
        });
    }
}
//# sourceMappingURL=Liveboard.js.map