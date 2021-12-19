import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../src/sdk";

let sdk: ClientSDK;

beforeAll(() => {
    sdk = new ClientSDK({useMock: true});
});

describe("testing sdk liveboard module", () => {
    it('checks that getImageBankSettings mock works as expected', async () => {
        await sdk.designer.getImageBankSettings(1)
            .then(result => expect(result.icons).toEqual("folloze"));
    });

    it('checks that getImageBankSettings mock works as expected', async () => {
        await sdk.designer.saveImageBankSettings(1, "banners", "folloze")
            .then(result => expect(result.icons).toEqual("folloze"));
    });

    it('checks that saveLiveBoard mock working as expected', async () => {
        await sdk.designer.saveLiveBoard({type: "test", data: {}})
            .then(result => expect(result.status == 200));
    });
});
