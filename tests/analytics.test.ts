import {ClientSDK} from "../src";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

test('sendCustomAnalyticEvent mock working as expected', async () => {
    await sdk.analytics.sendCustomAnalyticEvent({type: "test", data: {}})
        .then(result => expect(result.status == 201));
});
