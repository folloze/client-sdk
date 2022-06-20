export type Pos2d = {
    x: number;
    y: number;
};

// by order top, right, bottom, left
export type cssPos = [number, number, number, number];

export type GridPos = {
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;

    layer?: number;
    span?: number;
    spanMin?: number;
    spanMax?: number;

    padding?: cssPos;
    minHeight?: string;
};

type Vertical = "top" | "middle" | "bottom";
type Horizontal = "start" | "middle" | "end";

export type FloatPos = {
    // pos will align the floating widget by distance from the edge and the origin point
    pos?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };

    // whether or not to make it float as not part of the page
    // default is true
    isFixedToViewPort?: boolean;

    // the point inside the floating element to align by
    // default is ["start", "top"]
    originPoint?: [Horizontal, Vertical];
};
