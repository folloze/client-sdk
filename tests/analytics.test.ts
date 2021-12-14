import {ClientSDK} from "../src";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

describe("testing analytics module", () => {
    it('checks that sendLeadBoardView mock works as expected', async () => {
        await sdk.analytics.sendLeadBoardView({boardId: 1})
            .then(result => expect(result.status).toEqual(200))
    })

    it('checks that sendCustomAnalyticEvent mock works as expected', async () => {
        await sdk.analytics.sendCustomAnalyticEvent({type: "test", data: {}})
            .then(result => expect(result.status).toEqual(201));
    });

    it('checks that sendPing mock data works', async () => {
        await sdk.analytics.sendPing({
            boardId: 0,
            guid: "",
            leadId: 0,
            time: ""
        }).then(result => {
            expect(result.status).toEqual(200);
        });
    });

});
