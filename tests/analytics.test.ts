import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

describe("testing analytics module", () => {
    it('checks that sendCustomAnalyticEvent mock working as expected', async () => {
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
