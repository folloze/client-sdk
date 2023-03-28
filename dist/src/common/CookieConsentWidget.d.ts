import { LiveWidget } from "./LiveWidget";
export declare abstract class CookieConsentWidget extends LiveWidget {
    isCookieConsentable: boolean;
    abstract getOnlyRegulatedCountriesValue(): any;
    abstract show(): any;
}
