//
// // temporary file - do not delete yet
//

// import {LitElement} from "lit";
// import {FlzBoardEvent, FlzDesignerEvent} from "../FlzEvent";
// import {FLZ_DESIGNER_EVENT_ACTION, FLZ_LIVEBOARD_EVENT_ACTION} from "../interfaces/IEvent";
// import {LeadResponseV1} from "../../liveboard/ILiveboardTypes";
//
// export function flzEmit(event: events) {
//     event.emitter.dispatchEvent(event);
// }
//
// export function flzEmitPromise(event: events): Promise<unknown> {
//     return new Promise((resolve, reject) => {
//         event.onSuccess = (x: unknown) => {
//             if (event.onSuccess) {
//                 resolve(event.onSuccess(x));
//             } else {
//                 resolve(x);
//             }
//         };
//         event.emitter.dispatchEvent(event);
//     });
// }
//
// type events = getLead | getAllCategories;
//
// class getLead extends FlzBoardEvent {
//     constructor(el: LitElement, onSuccess: (lead: LeadResponseV1) => void, onError?: Function) {
//         super(el, "get-lead", undefined, onSuccess, onError);
//     }
// }
//
// class getAllCategories extends FlzBoardEvent {
//     constructor(el: LitElement, onSuccess: (lead: LeadResponseV1) => void, onError?: Function) {
//         super(el, "get-all-categories", undefined, onSuccess, onError);
//     }
// }
//
// flzEmit(new g());
//
// export function widgetEmit(
//     el: LitElement,
//     action: FLZ_LIVEBOARD_EVENT_ACTION,
//     payload?: any,
//     onSuccess?: Function,
//     onError?: Function,
// ): void {
//     el.dispatchEvent(new FlzBoardEvent(el, action, payload, onSuccess, onError));
// }
//
// export function editorEmit(
//     el: LitElement,
//     action: FLZ_DESIGNER_EVENT_ACTION,
//     payload?: any,
//     onSuccess?: Function,
//     onError?: Function,
// ): void {
//     el.dispatchEvent(new FlzDesignerEvent(el, action, payload, onSuccess, onError));
// }
//
// export function widgetEmitPromise(el: LitElement, action: FLZ_LIVEBOARD_EVENT_ACTION, payload?: any): Promise<any> {
//     return new Promise((resolve, reject) => {
//         widgetEmit(el, action, payload, resolve, reject);
//     });
// }
//
// export function editorEmitPromise(el: LitElement, action: FLZ_DESIGNER_EVENT_ACTION, payload?: any): Promise<any> {
//     return new Promise((resolve, reject) => {
//         editorEmit(el, action, payload, resolve, reject);
//     });
// }
