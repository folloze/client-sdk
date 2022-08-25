import {LiveWidget} from "./LiveWidget";

export abstract class CookieConsentWidget extends LiveWidget {
    isCookieConsentable: boolean = true;
    abstract onlyRegulatedCountries: boolean;
}