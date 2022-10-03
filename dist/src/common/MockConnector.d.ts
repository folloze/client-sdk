import MockAdapter from "axios-mock-adapter";
export default class MockConnector {
    static bindLiveBoard(mock: MockAdapter): Promise<void>;
    static bindDesigner(mock: MockAdapter): Promise<void>;
    static bindAnalytics(mock: MockAdapter): Promise<void>;
}
