import {describe, expect, beforeAll} from "@jest/globals";
import {ClientSDK} from "../../src/sdk";
import { TargetType } from "../../src";

let sdk: ClientSDK;

const linkClickParams = {
  url: "www.cnn.com",
  targetType: "new_tab" as TargetType,
  details: {
    sectionName: 'test section name',
    widgetTag: 'test widget type'
  },
};

describe("test liveboard mocks module", () => {
  beforeAll(async () => {
    sdk = await ClientSDK.create({useMock: true, organizationId: 1});
  });

  it("trackLinkClick with valid payload", async () => {
    await sdk.liveboard.trackLinkClick(1, linkClickParams ).then(result => {
      expect(result.status).toEqual(200);
    });
  });

  it("trackLinkClick with missing targetType", async () => {
    await sdk.liveboard.trackLinkClick(1, {...linkClickParams, targetType: null} )
      .catch(err => {
        expect(err.response.status).toEqual(400);
      });
  });

  it("trackLinkClick with missing url", async () => {
    await sdk.liveboard.trackLinkClick(1, {...linkClickParams, url: null} )
      .catch(err => {
        expect(err.response.status).toEqual(400);
      });
  });
});

describe("testing liveboard module in preview", () => {
  beforeAll(async () => {
    sdk = await ClientSDK.create({useMock: true, organizationId: 1, isPreview: true});
  });

  it("checks that trackLinkCta mock works as expected", async () => {
    const spy = jest.spyOn(sdk.fetcher.fetcher, "post");
    await sdk.liveboard.trackLinkClick(1, linkClickParams).then(result => expect(result.status).toEqual(200));
    expect(spy).not.toHaveBeenCalled();
  });

});
