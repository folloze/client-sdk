import {LiveFloatingWidget} from "./LiveFloatingWidget";
import {LeadResponseV1} from "../liveboard/ILiveboardTypes";
import {widgetEmit} from "./helpers/eventHelpers";
import {FlzEvent} from "./FlzEvent";
import {FLZ_EVENT_ACTION} from "./interfaces/IEvent";

const GATING_FORM_KEY = "gatingFormSubmitted";

export abstract class LiveFloatingGatingFormWidget extends LiveFloatingWidget {
    public readonly isGatingForm = true;

    protected lead: LeadResponseV1;
    protected boardId: number;
    private shouldBeShown: boolean = false;

    connectedCallback() {
        super.connectedCallback();
        widgetEmit(this, "get-state", undefined, state => {
            this.boardId = state.board.id;
            if (state.item_viewer?.current?.is_gated) {
                this.toggleOnOrOff();
            }
        });
    }

    incomingEvents(e: FlzEvent) {
        super.incomingEvents(e);
        const action: FLZ_EVENT_ACTION = e.action as FLZ_EVENT_ACTION;
        if (action === "widgets-scripts-loaded" && this.shouldBeShown) {
            // this is for solving a race condition when landing on gated item
            this.toggleOnOrOff();
        } else if (action === "changeItem" || action === "openItemViewer") {
            if (!e.payload?.is_gated) {
                this.close();
                return;
            }
            this.toggleOnOrOff();
        } else if (action === "itemViewerClosed") {
            this.close();
        }
    }

    toggleOnOrOff() {
        widgetEmit(this, "get-lead", undefined, lead => {
            this.lead = lead;
        });

        const isSubmittedAlready = this.isPersistSubmitExists(this.boardId);
        const isKnownLeadGated = this._data.enableForKnownUsers && !isSubmittedAlready;
        const showGated = this.lead.anon_guest || isKnownLeadGated;
        console.debug(`show gated form: ${showGated}`);
        if (showGated) {
            this.show();
            return;
        }
        this.close();
    }

    show() {
        setTimeout(() => {
            this.shouldBeShown = true;
            if (this._data?.ctaFormConfig?.form_id !== 0 && this.classList.contains("hidden")) {
                widgetEmit(this, "floating-widget-manager", {widget: this, command: "show"});
            }
        }, this._data.gatingFormDelay || 0);
    }

    close() {
        this.shouldBeShown = false;
        if (!this.classList.contains("hidden")) {
            widgetEmit(this, "floating-widget-manager", {widget: this, command: "hide"});
        }
    }

    protected persistSubmitToLocalStorage(boardId: number) {
        const gatedBoardIds = JSON.parse(localStorage.getItem(GATING_FORM_KEY) || "[]") as number[];
        if (!gatedBoardIds.includes(boardId)) {
            gatedBoardIds.push(boardId);
            localStorage.setItem(GATING_FORM_KEY, JSON.stringify(gatedBoardIds));
        }
    }

    protected isPersistSubmitExists(boardId: number): boolean {
        const persistedIdsStr = localStorage.getItem(GATING_FORM_KEY);
        if (!persistedIdsStr) {
            return false;
        }

        try {
            const gatedBoardIds = JSON.parse(persistedIdsStr) as number[];
            if (gatedBoardIds.includes(boardId)) {
                return true;
            }
        } catch (e) {
            console.error("could not parse gated board ids from local storage");
        }
        return false;
    }
}
