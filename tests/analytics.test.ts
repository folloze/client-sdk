import {ClientSDK} from "../src";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

test('sendCustomAnalyticEvent mock working as expected', async () => {
    await sdk.analytics.sendCustomAnalyticEvent({type: "test", data: {}})
        .then(result => expect(result.status).toEqual(201));
});


test('sendPing mock data', async () => {
    await sdk.analytics.sendPing({
        boardId: 0,
        guid: "",
        leadId: 0,
        time: ""
    }).then(result => {
        expect(result.status).toEqual(200);
    });
});
