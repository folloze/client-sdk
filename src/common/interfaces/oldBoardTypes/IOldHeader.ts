import {Cta, Image, Image2} from "./IOldBanner";

export interface IOldHeader {
    cta: Cta;
    logo: Logo;
    show: boolean;
    social: Social;
    tagline: Tagline;
    background: Background;
    secondary_logo: SecondaryLogo;
    show_contributors: boolean;
}

export interface Logo {
    url: string;
    link?: any;
    show: boolean;
    image: Image;
    image_id: number;
    with_padding: boolean;
}

export interface Social {
    email: boolean;
    twitter: boolean;
    facebook: boolean;
    linkedin: boolean;
}

export interface Tagline {
    text: string;
}

export interface Background {
    show: boolean;
}

export interface SecondaryLogo {
    image: Image2;
    image_id: number;
}


