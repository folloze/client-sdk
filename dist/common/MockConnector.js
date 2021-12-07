export default class MockConnector {
    static bindLiveBoard(mock) {
        import("../liveboard/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import liveboard mocks", e));
    }
    static bindDesigner(mock) {
        import("../designer/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import designer mocks", e));
    }
    static bindAnalytics(mock) {
        import("../analytics/mocks")
            .then(module => module.rules(mock))
            .catch(e => console.error("could not import analytics mocks", e));
    }
}
//# sourceMappingURL=MockConnector.js.map