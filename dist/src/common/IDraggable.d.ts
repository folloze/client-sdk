export interface IDraggable {
    isDraggable: boolean;
    xOffset: number;
    yOffset: number;
    currentX: number;
    currentY: number;
    onDrag: (event: PointerEvent) => void;
}
export declare type Pos = {
    x: number;
    y: number;
};
