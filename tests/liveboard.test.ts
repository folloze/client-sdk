import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

describe("test liveboard mocks module", () => {
    it('checks that getItems (all) mock work as expected', async () => {
        await sdk.liveboard.getItems()
            .then(result => expect(result.status == 201));
    });

    it('checks that getItems mock work as expected', async () => {
        await sdk.liveboard.getItems({itemId: 1})
            .then(result => expect(result.status == 201));
    });
});
