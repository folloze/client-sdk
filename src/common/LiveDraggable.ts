import { LitElement } from "lit";
import { IDraggable, Pos } from "./IDraggable";

export class LiveDraggable extends LitElement implements IDraggable {
    public zIndex: number = 10;
    public xOffset: number = 0;
    public yOffset: number = 0;
    public currentX: number = 0;
    public currentY: number = 0;
    public initialX: number = 0;
    public initialY: number = 0;
    public isDraggable: boolean = true;

    protected _pos: Pos;

    constructor() {
        super();
    }

    resetPosition() {
        this.zIndex = 10;
        this.xOffset = 0;
        this.yOffset = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.initialX = 0;
        this.initialY = 0;
        this.setAttribute("style", "");
    }

    set pos(pos: Pos | undefined | null) {
        if (pos) {
            this._pos = pos;
        } else {
            this._pos = { x: 0, y: 0 };
        }
        this.currentX = this.xOffset = this.initialX = this._pos.x;
        this.currentY = this.yOffset = this.initialY = this._pos.y;
        this.moveTo(this._pos);
    }

    get pos() {
        return this._pos;
    }

    moveTo(pos: Pos) {
        this.setAttribute("style", `transform: translate(${pos.x}px, ${pos.y}px); z-index: ${this.zIndex}`);
    }

    onDragStart(e: PointerEvent): void {
        console.log(e);
    }

    onDragEnd(e?: PointerEvent): void {
        this._pos = { x: Math.round(this.currentX), y: Math.round(this.currentY) };
        console.log("new pos", this._pos);
    }

    onDrag(e: PointerEvent) {
        this.setAttribute("style", `transform: translate(${this.currentX}px, ${this.currentY}px);`);
    }

    onClick(e: PointerEvent) {
        console.log("inner ckick", e);
    }

    refreshPos() {
        this.onDragEnd();
    }
}
