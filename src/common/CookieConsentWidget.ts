import {LiveWidget} from "./LiveWidget";

export abstract class CookieConsentWidget extends LiveWidget {
    abstract onlyRegulatedCountries: boolean;
}