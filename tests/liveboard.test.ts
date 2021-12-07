import {ClientSDK} from "../src";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

test('getItems (all) mock work as expected', async () => {
    await sdk.liveboard.getItems()
        .then(result => expect(result.status == 201));
});

test('getItems mock work as expected', async () => {
    await sdk.liveboard.getItems({itemId: 1})
        .then(result => expect(result.status == 201));
});
