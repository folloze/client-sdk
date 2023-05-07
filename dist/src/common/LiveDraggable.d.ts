import { LitElement } from "lit";
import { IDraggable, Pos } from "./IDraggable";
export declare class LiveDraggable extends LitElement implements IDraggable {
    zIndex: number;
    xOffset: number;
    yOffset: number;
    currentX: number;
    currentY: number;
    initialX: number;
    initialY: number;
    isDraggable: boolean;
    protected _pos: Pos;
    constructor();
    resetPosition(): void;
    set pos(pos: Pos | undefined | null);
    get pos(): Pos | undefined | null;
    moveTo(pos: Pos): void;
    onDragStart(e: PointerEvent): void;
    onDragEnd(e?: PointerEvent): void;
    onDrag(e: PointerEvent): void;
    onClick(e: PointerEvent): void;
    refreshPos(): void;
}
