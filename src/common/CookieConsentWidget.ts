import {LiveWidget} from "./LiveWidget";

export abstract class CookieConsentWidget extends LiveWidget {
    isCookieConsentable: boolean = true;
    abstract getOnlyRegulatedCountriesValue();
    abstract isExplicitConsent(isRegulatedCountry: boolean): boolean;
    abstract show();
}