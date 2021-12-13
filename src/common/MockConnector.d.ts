import MockAdapter from "axios-mock-adapter";
export default class MockConnector {
    static bindLiveBoard(mock: MockAdapter): void;
    static bindDesigner(mock: MockAdapter): void;
    static bindAnalytics(mock: MockAdapter): void;
}
