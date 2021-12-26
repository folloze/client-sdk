import MockAdapter from "axios-mock-adapter";


export default class MockConnector {

    static async bindLiveBoard(mock: MockAdapter) {
        await import("../liveboard/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import liveboard mocks", e));
    }

    static async bindDesigner(mock: MockAdapter) {
        await import("../designer/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import designer mocks", e));
    }

    static async bindAnalytics(mock: MockAdapter) {
        await import("../analytics/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import analytics mocks", e));
    }
}
