/**
 * remove previously created light dom tunnels
 *
 * @param host - the shadow dom elements that initiated the light dom tunnel
 * @param slotId - the id used to connect the tunnel between elements (usually the widgetId)
 */
import { LiveWidget } from "../LiveWidget";
export declare function destroyTunnelToLightDom(host: Element, slotId: string): void;
/**
 * creates a slotted tunnel from the host shadow component to use with html that needs to be in the light dom
 *
 * @param host - the widget / component that want to host a light dom document fragment
 * @param html - the document fragment itself (the code that should be in light dom)
 * @param slotId - the id used to create the slotted tunnel between shadow roots (usually the widgetId)
 */
export declare function createTunnelToLightDom(host: Element, html: DocumentFragment, slotId: string): void;
export declare function findAncestorWidget(base: Element): LiveWidget | undefined;
export declare function isElementWidget(el: HTMLElement): boolean;
export declare function isElementFollozeWidget(el: HTMLElement): boolean;
