import { LiveFloatingWidget } from "./LiveFloatingWidget";
import { LeadResponseV1 } from "../liveboard/ILiveboardTypes";
import { FlzEvent } from "./FlzEvent";
export declare abstract class LiveFloatingGatingFormWidget extends LiveFloatingWidget {
    readonly isGatingForm = true;
    protected lead: LeadResponseV1;
    protected boardId: number;
    private shouldBeShown;
    private gatingDelayTimer;
    connectedCallback(): void;
    incomingEvents(e: FlzEvent): void;
    handleNewItem(item: any): void;
    toggleOnOrOff(): void;
    show(): void;
    close(): void;
    protected persistSubmitToLocalStorage(boardId: number): void;
    protected isPersistSubmitExists(boardId: number): boolean;
}
