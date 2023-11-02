import { LiveWidget } from "./LiveWidget";
export declare abstract class CookieConsentWidget extends LiveWidget {
    isCookieConsentable: boolean;
    abstract getOnlyRegulatedCountriesValue(): any;
    abstract isExplicitConsent(isRegulatedCountry: boolean): boolean;
    abstract show(): any;
}
