// src/analytics/Analytics.ts
var EventSources = /* @__PURE__ */ ((EventSources2) => {
  EventSources2["designer"] = "api";
  EventSources2["liveboard"] = "live_board";
  return EventSources2;
})(EventSources || {});
var eventPlatformBySource = {
  ["api" /* designer */]: "App",
  ["live_board" /* liveboard */]: "Campaign"
};
var LiveBoardEventTypes = /* @__PURE__ */ ((LiveBoardEventTypes2) => {
  LiveBoardEventTypes2[LiveBoardEventTypes2["viewed_board"] = 1] = "viewed_board";
  LiveBoardEventTypes2[LiveBoardEventTypes2["viewed_item"] = 2] = "viewed_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_next_item"] = 3] = "clicked_on_next_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_previous_item"] = 4] = "clicked_on_previous_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["confirmed_cookie_usage"] = 5] = "confirmed_cookie_usage";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_share_button"] = 6] = "clicked_on_share_button";
  LiveBoardEventTypes2[LiveBoardEventTypes2["shared_a_campaign"] = 7] = "shared_a_campaign";
  LiveBoardEventTypes2[LiveBoardEventTypes2["liked_an_item"] = 8] = "liked_an_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_cta"] = 9] = "clicked_on_cta";
  LiveBoardEventTypes2[LiveBoardEventTypes2["downloaded_an_item"] = 10] = "downloaded_an_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["changed_category"] = 11] = "changed_category";
  LiveBoardEventTypes2[LiveBoardEventTypes2["searched_items"] = 12] = "searched_items";
  return LiveBoardEventTypes2;
})(LiveBoardEventTypes || {});
var DesignerEventTypes = /* @__PURE__ */ ((DesignerEventTypes2) => {
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_logo"] = 17] = "clicked_on_logo";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_campaign_preview"] = 18] = "clicked_on_campaign_preview";
  DesignerEventTypes2[DesignerEventTypes2["viewed_design_tab"] = 19] = "viewed_design_tab";
  DesignerEventTypes2[DesignerEventTypes2["viewed_content_tab"] = 20] = "viewed_content_tab";
  DesignerEventTypes2[DesignerEventTypes2["changed_board_privacy_settings"] = 47] = "changed_board_privacy_settings";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_find_more_images"] = 51] = "clicked_on_find_more_images";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_search_image"] = 52] = "clicked_on_search_image";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_upload_an_image"] = 53] = "clicked_on_upload_an_image";
  DesignerEventTypes2[DesignerEventTypes2["uploaded_an_image"] = 54] = "uploaded_an_image";
  DesignerEventTypes2[DesignerEventTypes2["saved_campaign_design"] = 76] = "saved_campaign_design";
  DesignerEventTypes2[DesignerEventTypes2["discarded_campaign_design_changes"] = 77] = "discarded_campaign_design_changes";
  DesignerEventTypes2[DesignerEventTypes2["configured_personalization"] = 261] = "configured_personalization";
  DesignerEventTypes2[DesignerEventTypes2["deleted_personalization"] = 262] = "deleted_personalization";
  DesignerEventTypes2[DesignerEventTypes2["created_new_block"] = 282] = "created_new_block";
  DesignerEventTypes2[DesignerEventTypes2["added_rule"] = 283] = "added_rule";
  DesignerEventTypes2[DesignerEventTypes2["added_items_to_visible_to_everyone"] = 284] = "added_items_to_visible_to_everyone";
  DesignerEventTypes2[DesignerEventTypes2["changed_rule"] = 285] = "changed_rule";
  DesignerEventTypes2[DesignerEventTypes2["changed_block_title"] = 286] = "changed_block_title";
  DesignerEventTypes2[DesignerEventTypes2["saved_personalization_changes"] = 290] = "saved_personalization_changes";
  DesignerEventTypes2[DesignerEventTypes2["discarded_personalization_changes"] = 291] = "discarded_personalization_changes";
  DesignerEventTypes2[DesignerEventTypes2["change_rule_set_priority"] = 292] = "change_rule_set_priority";
  return DesignerEventTypes2;
})(DesignerEventTypes || {});
var Analytics = class {
  constructor(fetch) {
    this.fetchService = fetch;
  }
  trackLeadBoardView(boardId) {
    return this.fetchService.withDisableOnPreview(() => {
      return this.fetchService.fetcher.post(`/live_board/v2/boards/${boardId}/lead_views`).catch((e) => {
        console.error("could not track lead board view", e);
        throw e;
      });
    });
  }
  trackLeadItemView(itemId, guid) {
    return this.fetchService.withDisableOnPreview(() => {
      return this.fetchService.fetcher.post(`/live_board/v2/items/${itemId}/lead_views`, { guid }).catch((e) => {
        console.error("could not track lead item view", e);
        throw e;
      });
    });
  }
  trackEvent(eventId, data, source) {
    return this.fetchService.fetcher.post(`/${source}/v1/tracking`, {
      event: {
        id: eventId,
        data,
        platform: eventPlatformBySource[source]
      }
    }).catch((e) => {
      console.error("could not track action", e);
      throw e;
    });
  }
  sendPing(payload) {
    return this.fetchService.withDisableOnPreview(() => {
      return this.fetchService.fetcher.post(`${this.fetchService.options.pingEndpoint}/pings`, {
        lead_id: payload.leadId,
        board_id: payload.boardId,
        item_id: payload.itemId,
        client_guid: payload.guid
      });
    });
  }
  validateSession() {
    return this.fetchService.withDisableOnPreview(() => {
      return this.fetchService.fetcher.post("/live_board/v1/session_validations").catch((e) => {
        console.error("could not validate session", e);
        throw e;
      });
    });
  }
  createSession() {
    return this.fetchService.withDisableOnPreview(() => {
      return this.fetchService.fetcher.post("/live_board/v1/sessions").catch((e) => {
        console.error("could not create session", e);
        throw e;
      });
    });
  }
  updateInvitationUsed(token) {
    return this.fetchService.withDisableOnPreview(() => {
      return this.fetchService.fetcher.put(`/live_board/v2/invitation_wrappers/${token}`).catch((e) => {
        console.error("could not update invitation wrapper", e);
        throw e;
      });
    });
  }
};

export {
  EventSources,
  LiveBoardEventTypes,
  DesignerEventTypes,
  Analytics
};
