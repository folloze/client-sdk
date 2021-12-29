import MockAdapter from "axios-mock-adapter";


export default class MockConnector {

    static bindLiveBoard(mock: MockAdapter) {
        import("../liveboard/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import liveboard mocks", e));
    }

    static bindDesigner(mock: MockAdapter) {
        import("../designer/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import designer mocks", e));
    }

    static bindAnalytics(mock: MockAdapter) {
        import("../analytics/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import analytics mocks", e));
    }
}
