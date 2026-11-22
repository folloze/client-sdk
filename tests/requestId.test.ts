import { REQUEST_ID_HEADER, nextRequestId, pageLoadId } from "../src/common/RequestId";

describe("RequestId", () => {
    beforeEach(() => {
        delete (window as any).__flzRequestIdState;
    });

    it("names the header ActionDispatch::RequestId reads", () => {
        expect(REQUEST_ID_HEADER).toEqual("X-Request-Id");
    });

    it("keeps the page load id stable and increments the sequence", () => {
        const first = nextRequestId();
        const second = nextRequestId();

        expect(first).toEqual(`${pageLoadId()}-1`);
        expect(second).toEqual(`${pageLoadId()}-2`);
    });

    it("shares one page load id and sequence with the other bundles on the page", () => {
        (window as any).__flzRequestIdState = { pageLoadId: "from-another-bundle", sequence: 7 };

        expect(nextRequestId()).toEqual("from-another-bundle-8");
    });

    it("survives Rails' request id sanitisation, which strips anything outside [\\w\\-@]", () => {
        const id = nextRequestId();

        expect(id.replace(/[^\w\-@]/g, "")).toEqual(id);
        expect(id.length).toBeLessThanOrEqual(255);
    });

    it("starts a fresh page load id per page", () => {
        const first = pageLoadId();
        delete (window as any).__flzRequestIdState;

        expect(pageLoadId()).not.toEqual(first);
    });
});
