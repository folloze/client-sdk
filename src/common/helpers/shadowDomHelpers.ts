/**
 * remove previously created light dom tunnels
 *
 * @param host - the shadow dom elements that initiated the light dom tunnel
 * @param slotId - the id used to connect the tunnel between elements (usually the widgetId)
 */
export function destroyTunnelToLightDom(host: Element, slotId: string) {
    const parent = host.getRootNode() as ShadowRoot | Document;
    parent.querySelector(`slot[name=${slotId}]`)?.remove();
    if (parent === document) {
        return;
    }
    if (parent && isShadowRoot(parent)) {
        destroyTunnelToLightDom(parent.host, slotId);
    }
}

/**
 * creates a slotted tunnel from the host shadow component to use with html that needs to be in the light dom
 *
 * @param host - the widget / component that want to host a light dom document fragment
 * @param html - the document fragment itself (the code that should be in light dom)
 * @param slotId - the id used to create the slotted tunnel between shadow roots (usually the widgetId)
 */
export function createTunnelToLightDom(host: Element, html: DocumentFragment, slotId: string) {
    tunnelToLightDomRecursion(host, html, slotId, []);
}

const isShadowRoot = (node: ShadowRoot | Document): node is ShadowRoot => {
    return (node as ShadowRoot).host && (node as ShadowRoot).mode == "open";
};

const tunnelToLightDomRecursion = (
    host: Element,
    html: DocumentFragment,
    slotId: string,
    shadowElArr: Element[] = [],
) => {
    if (host.shadowRoot) {
        shadowElArr.push(host);
    }

    const parent = host.getRootNode() as ShadowRoot | Document;

    if (parent === document) {
        for (const [i, shadowEl] of shadowElArr.entries()) {
            const slot = document.createElement("slot");
            if (i !== 0) {
                slot.setAttribute("slot", slotId);
            }
            slot.setAttribute("name", slotId);
            if (i === shadowElArr.length - 1) {
                slot.appendChild(html);
            }
            shadowEl.querySelector(`slot[name=${slotId}]`)?.remove();
            shadowEl.appendChild(slot);
        }
        return;
    }
    if (parent && isShadowRoot(parent)) {
        tunnelToLightDomRecursion(parent.host, html, slotId, shadowElArr);
    }
};

export function findAncestorElement(selector: string, base: Element) {
    function findClosest(el) {
        if (!el || el === document || el === window) {
            return null;
        }

        const found = el.closest(selector);

        if (found) {
            return found;
        } else {
            return findClosest(el.getRootNode().host);
        }
    }

    return findClosest(base);
}