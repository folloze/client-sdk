import {FloatingWidgetConfig} from "../interfaces/IWidget";

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
        // @ts-ignore
        if (position === "fixed" && fwc.floatPos.pos?.top?.startsWith("0")) {
            calculatedStyles += `top: calc(${fwc.floatPos.pos.top} + var(--edit-fz-system-control-bar-height, 0px));`;
        } else {
            calculatedStyles += `top: ${fwc.floatPos.pos.top};`;
        }
    }
    if (fwc.floatPos.pos.right !== undefined) {
        calculatedStyles += `right: ${fwc.floatPos.pos.right};`;
    }
    if (fwc.floatPos.pos.bottom !== undefined) {
        calculatedStyles += `bottom: ${fwc.floatPos.pos.bottom};`;
    }
    if (fwc.floatPos.pos.left !== undefined) {
        calculatedStyles += `left: ${fwc.floatPos.pos.left};`;
    }

    // change origin point
    const vertical = fwc.floatPos.originPoint?.[0] || "0";
    const horizontal = fwc.floatPos.originPoint?.[1] || "0";
    calculatedStyles += `translate: ${floatingPosStrToPercent(vertical)} ${floatingPosStrToPercent(horizontal)}`;
    return calculatedStyles;
}
