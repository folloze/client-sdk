import {FloatingWidgetConfig} from "../interfaces/IWidget";
import {GridPos} from "../interfaces/IPositions";

export function floatingPosStrToPercent(str) {
    const obj = {
        top: "0%",
        bottom: "-100%",
        start: "0%",
        middle: "-50%",
        end: "-100%",
    };
    return obj[str];
}

export function getFloatingWidgetPosition(fwc: FloatingWidgetConfig): string {
    let position = "absolute";
    if (fwc.floatPos.isFixedToViewPort) {
        position = "fixed";
    }

    let calculatedStyles = `position: ${position};`;
    if (fwc.floatPos.pos.top !== undefined) {
        // @ts-ignore - todo: this is only to support strings when in the schema its numbers without migrations.
        let top: string = fwc.floatPos.pos.top;
        if (typeof top === "number") {
            top = top + "px";
        }
        if (position === "fixed" && top.startsWith("0")) {
            calculatedStyles += `top: calc(${top} + var(--edit-fz-system-control-bar-height, 0px));`;
        } else {
            calculatedStyles += `top: ${top};`;
        }

        if(top.endsWith("px")){
            calculatedStyles += `--top-offset: ${top};`;
        }
    }
    if (fwc.floatPos.pos.right !== undefined) {
        // @ts-ignore
        let right: string = fwc.floatPos.pos.right;
        if (typeof right === "number") {
            right = right + "px";
        }
        calculatedStyles += `right: ${right};`;
    }
    if (fwc.floatPos.pos.bottom !== undefined) {
        // @ts-ignore
        let bottom: string = fwc.floatPos.pos.bottom;
        if (typeof bottom === "number") {
            bottom = bottom + "px";
        }
        calculatedStyles += `bottom: ${bottom};`;
    }
    if (fwc.floatPos.pos.left !== undefined) {
        // @ts-ignore
        let left: string = fwc.floatPos.pos.left;
        if (typeof left === "number") {
            left = left + "px";
        }
        calculatedStyles += `left: ${left};`;
    }

    if (fwc.floatPos.padding !== undefined) {
        const top = fwc.floatPos.padding.top || "0";
        const right = fwc.floatPos.padding.right || "0";
        const bottom = fwc.floatPos.padding.bottom || "0";
        const left = fwc.floatPos.padding.left || "0";
        calculatedStyles += `padding: ${top} ${right} ${bottom} ${left};`;
    }

    // change origin point
    const vertical = fwc.floatPos.originPoint?.[0] || "0";
    const horizontal = fwc.floatPos.originPoint?.[1] || "0";
    calculatedStyles += `transform: translate(${floatingPosStrToPercent(vertical)}, ${floatingPosStrToPercent(
        horizontal,
    )});`;
    return calculatedStyles;
}

export function positionToGridArea(p: GridPos): string {
    return `${p.rowStart} / ${p.colStart} / ${p.rowEnd} / ${p.colEnd}`;
}

export function getWidgetStyleByPosition(p: GridPos) {
    let result = "";
    if (p?.hasOwnProperty("rowStart")) {
        if ((p as GridPos).hasOwnProperty("layer")) {
            result += `z-index: ${p.layer};`;
        }
        if ((p as GridPos).hasOwnProperty("minHeight")) {
            result += `min-height: ${p.minHeight};`;
        }
        if ((p as GridPos).hasOwnProperty("padding")) {
            result += `--fz-tmp-padd-top: ${p.padding[0]};
                --fz-tmp-padd-right: ${p.padding[1]};
                --fz-tmp-padd-bottom: ${p.padding[2]};
                --fz-tmp-padd-left: ${p.padding[3]};`;
            // result += `padding: calc(${p.padding[0]} * var(--fz-section-padding-step))
            //     calc(${p.padding[1]} * var(--fz-section-padding-step))
            //     calc(${p.padding[2]} * var(--fz-section-padding-step))
            //     calc(${p.padding[3]} * var(--fz-section-padding-step));`;
        }
        result += "grid-area: " + positionToGridArea(p as GridPos);
        return result;
    }
}
