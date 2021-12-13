
export interface IDraggable {
    isDraggable: boolean;
    xOffset: number;
    yOffset: number;
    currentX: number;
    currentY: number;
    onDrag: (event: PointerEvent) => void;
}

export type Pos = {
    x: number;
    y: number;
}
