import {ClientSDK} from "../src";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

test('saveLiveBoard mock working as expected', async () => {
    await sdk.designer.saveLiveBoard({type: "test", data: {}})
        .then(result => expect(result.status == 200));
});
