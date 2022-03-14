type DocOrShadowRoot = Document | DocumentFragment | DocumentOrShadowRoot | null;

export function makeDragElement(dom: DocOrShadowRoot, el: HTMLElement, handleEl: string) {
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

    function elementDrag(e: any) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        const newTop = el.offsetTop - pos2;
        const newLeft = el.offsetLeft - pos1;

        // vertical limiter
        // if (newTop <= 0 || newTop >= window.innerHeight - el.offsetHeight) {
        //     return;
        // }

        // horizontal limiter
        if (newLeft <= 0 || newLeft >= window.innerWidth - el.offsetWidth) {
            return;
        }

        // set the element's new position:
        el.style.top = newTop + "px";
        el.style.left = newLeft + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
