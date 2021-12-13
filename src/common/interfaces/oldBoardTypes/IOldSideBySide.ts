import {Cta} from "./IOldBanner";

export interface IOldSideBySide {
    show: boolean;
    areas: Area[];
}

export interface Area {
    key: number;
    show: boolean;
    title: Title;
    strips: Strip[];
    position: Position;
}

export interface Strip {
    key: number;
    sections: Section[];
}

export interface Section {
    key: number;
    data: Data;
    type: string;
    position: string;
}

export interface Title {
    text: string;
    subtext: string;
}

export interface Link {
    url: string;
    open_type: string;
}

export interface Settings {
    id: number;
    fit: string;
    url: string;
    tint: string;
    is_loading: boolean;
    source_type: number;
}

export interface Image {
    link?: Link;
    settings?: Settings;
}

export interface Data {
    image?: Image;
    paragraph?: Paragraph;
}

export interface Paragraph {
    cta: Cta;
    icons: any;
    title: string;
    description: string;
}

export interface Position {
    label: string;
    value: number;
    location: string;
}




