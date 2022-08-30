import { LiveWidget } from "./LiveWidget";
export declare abstract class CookieConsentWidget extends LiveWidget {
    isCookieConsentable: boolean;
    abstract onlyRegulatedCountries: boolean;
    abstract show: () => {};
}
