export interface IOldFooter {
    id: number;
    logo: Logo;
    name: string;
    show: boolean;
    text?: any;
    state: number;
    labels?: any;
    custom_id: number;
    element_id: number;
    text_color: TextColor;
    description: string;
    is_standard: boolean;
    background_color: string;
    tracking_consent?: any;
    show_in_item_view?: any;
}

export interface Logo {
    show: boolean;
    image?: any;
    image_id?: any;
}

export interface TextColor {
    type: number;
    color: string;
}

