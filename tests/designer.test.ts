import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

describe("testing sdk liveboard module", () => {
    it('checks that saveLiveBoard mock working as expected', async () => {
        await sdk.designer.saveLiveBoard({type: "test", data: {}})
            .then(result => expect(result.status == 200));
    });
});
