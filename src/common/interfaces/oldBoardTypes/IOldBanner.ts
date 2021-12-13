
export interface IOldBanner {
    cta: Cta;
    form: Form;
    show: boolean;
    header: Header;
    height: string;
    subtitle: Subtitle;
    background: Background;
    text_color: string;
    text_alignment: string;
    mobile_background: MobileBackground;
}

export interface Cta {
    form?: any;
    show: boolean;
    text?: any;
    type: string;
    metadata: Metadata;
    transparent: boolean;
    privacy_message?: any;
    privacy_message_id: string;
}

export interface Metadata {
    url?: any;
    form_id?: any;
}

export interface Metadata2 {
    form_id?: any;
}

export interface Form {
    form?: any;
    type: string;
    metadata: Metadata2;
    privacy_message?: any;
}

export interface Header {
    text: string;
}

export interface Subtitle {
    text: string;
}

export interface Image {
    id: number;
    fit: string;
    url: string;
    transformation: Transformation;
    displayable_section: string;
}

export interface Position {
    x: string;
    y: string;
}

export interface Background {
    url: string;
    tint: string;
    image: Image;
    image_id: number;
    position: Position;
}

export interface Image2 {
    id: number;
    fit: string;
    url?: any;
    transformation: Transformation2;
    displayable_section: string;
}

export interface Position2 {
    x: string;
    y: string;
}

export interface MobileBackground {
    url?: any;
    show: boolean;
    tint: string;
    image: Image2;
    image_id: number;
    position: Position2;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Transformation {
    // ??????
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Transformation2 {
    // ???????
}
