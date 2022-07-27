import {FloatChildrenContainer} from "./controllers/FloatersChildrenContainer";

type DocOrShadowRoot = Document | DocumentFragment | DocumentOrShadowRoot | null;

export function makeDragElement(
    dom: DocOrShadowRoot,
    el: HTMLElement,
    handleEl: string,
    containEl?: HTMLElement,
    childrenContainer?: FloatChildrenContainer,
) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (handleEl) {
        /* if present, the header is where you move the DIV from:*/
        // @ts-ignore
        dom.querySelector(handleEl).onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        el.onmousedown = dragMouseDown;
    }

    const topLimit =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--edit-fz-system-control-bar-height")) ||
        0;

    function dragMouseDown(e: any) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function defaultLimiter(pos1, pos2) {
        let newTop = el.offsetTop - pos2;
        let newLeft = el.offsetLeft - pos1;

        // vertical limiter
        // if (newTop <= 0 || newTop >= window.innerHeight - el.offsetHeight) {
        //     return;
        // }
        if (newTop <= topLimit) {
            newTop = topLimit + 1;
        }

        // horizontal limiter
        if (newLeft <= 0 || newLeft >= window.innerWidth - el.offsetWidth) {
            if (newLeft < 5) {
                newLeft = 1;
            } else {
                newLeft = window.innerWidth - el.offsetWidth - 1;
            }
        }

        return [newLeft, newTop];
    }

    function elementContainerLimiter(x, y) {
        const floatingRect = el.getBoundingClientRect();
        const limiterRect = containEl.getBoundingClientRect();

        let newTop = el.offsetTop - y;
        let newLeft = el.offsetLeft - x;

        // vertical limiter
        if (newTop <= 0) {
            newTop = 1;
        } else if (newTop >= limiterRect.height - floatingRect.height) {
            newTop = containEl.offsetHeight - el.offsetHeight - 1;
        }

        // horizontal limiter
        if (newLeft <= 0 || newLeft >= limiterRect.width - floatingRect.width) {
            if (newLeft < 5) {
                newLeft = 1;
            } else {
                newLeft = containEl.offsetWidth - el.offsetWidth - 1;
            }
        }

        return [newLeft, newTop];
    }

    function elementDrag(e: DragEvent) {
        // @ts-ignore
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newLeft: number;
        let newTop: number;
        if (containEl) {
            [newLeft, newTop] = elementContainerLimiter(pos1, pos2);
        } else {
            [newLeft, newTop] = defaultLimiter(pos1, pos2);
        }

        // set the element's new position:
        el.style.top = newTop + "px";
        el.style.left = newLeft + "px";

        if (childrenContainer && childrenContainer?.all().length > 0) {
            childrenContainer.all().map(x => {
                x.style.top = e.movementY + parseInt(x.style.top) + "px";
                x.style.left = e.movementX + parseInt(x.style.left) + "px";
            });
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
