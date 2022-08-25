import {
  keysToSnakeCase
} from "./chunk.WXVSHK2H.js";
import {
  CampaignElementsTypes
} from "./chunk.G52EPVC6.js";
import {
  __spreadValues
} from "./chunk.Z3GS5MY4.js";

// src/liveboard/Liveboard.ts
var Liveboard = class {
  constructor(fetch) {
    this.fetchService = fetch;
  }
  getBoard(boardSlug) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v1/boards/${boardSlug}/`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get board");
        reject(e);
      });
    });
  }
  getSellerInformation(boardId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v1/boards/${boardId}/presenter`, {
        params: { token: this.fetchService.urlToken }
      }).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getSellerInformation(boardId).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e) => {
        console.error("could not get seller");
        reject(e);
      });
    });
  }
  getCategory(categoryIdOrSlug, boardId, bySlug) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/categories/${categoryIdOrSlug}`, {
        params: {
          board_id: boardId,
          by_slug: bySlug
        }
      }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get category", e);
        reject(e);
      });
    });
  }
  getCategories(boardId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/boards/${boardId}/categories`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get categories", e);
        reject(e);
      });
    });
  }
  getUserChat(boardId, leadId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post("/live_board/v1/chat/user_chat", {
        board_id: boardId,
        lead_id: leadId
      }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get user chat", e);
        reject(e);
      });
    });
  }
  getItem(itemId, boardId, bySlug) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/items/${itemId}`, {
        params: { by_slug: bySlug, board_id: boardId }
      }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get item", e);
        reject(e);
      });
    });
  }
  getItems(params) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post(`/live_board/v2/boards/${params.boardId}/items`, keysToSnakeCase(params)).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getItems(params).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e) => {
        console.error("could not get items");
        reject(e);
      });
    });
  }
  getHasItems(boardId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/boards/${boardId}/items_presence`).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getHasItems(boardId).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e) => {
        console.error("could not get has items");
        reject(e);
      });
    });
  }
  likeItem(itemId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post(`/live_board/v2/items/${itemId}/likes`).then(() => {
        resolve();
      }).catch((e) => {
        console.error("could not like item", e);
        reject(e);
      });
    });
  }
  getJourneyItems(itemId, options) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post(`/live_board/v2/journeys/${itemId}`, keysToSnakeCase(options)).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get journey items", e);
        reject(e);
      });
    });
  }
  getItemDownloadUrl(itemId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/items/${itemId}/downloads`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get download url", e);
        reject(e);
      });
    });
  }
  createSnapshotUrl(contentItemId, guid) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post(`/live_board/v1/content_items/${contentItemId}/snapshots`, { guid }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not create snapshot", e);
        reject(e);
      });
    });
  }
  createItemAnalysis(contentItemId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post(`/live_board/v1/content_items/${contentItemId}/analyses`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not create analysis", e);
        reject(e);
      });
    });
  }
  getFileMetadata(contentItemId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v1/content_items/${contentItemId}/files`).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getFileMetadata(contentItemId).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e) => {
        console.error("could not get file url", e);
        reject(e);
      });
    });
  }
  setCookiesConsent(boardId, options) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/cookies_consents`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get file url", e);
        reject(e);
      });
    });
  }
  updateEnrichment(type, enrichmentData) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post("/live_board/v2/enrichments", {
        type,
        enrichment_data: enrichmentData
      }).then(() => {
        resolve();
      }).catch((e) => {
        console.error("could not update enrichment", e);
        reject(e);
      });
    });
  }
  getGeoLocation() {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get("/live_board/v1/geo_location").then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get geolocation", e);
        reject(e);
      });
    });
  }
  getCurrentLead() {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get("/live_board/v1/leads/me").then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get current lead", e);
        reject(e);
      });
    });
  }
  validateLead(boardId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post("/live_board/v2/lead_validations", { board_id: boardId }).then(() => {
        resolve();
      }).catch((e) => {
        console.error("could not validate lead", e);
        reject(e);
      });
    });
  }
  stopTrackingForSession() {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.delete("/live_board/v2/track_leads").then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get stop tracking lead", e);
        reject(e);
      });
    });
  }
  getLiveEventUrls(boardId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/boards/${boardId}/live_event`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get current lead", e);
        reject(e);
      });
    });
  }
  getOrganizationSettings(boardId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v1/boards/${boardId}/organization_settings`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get organization settings", e);
        reject(e);
      });
    });
  }
  setSessionCookie(boardId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/session_cookies`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not create session cookie", e);
        reject(e);
      });
    });
  }
  getFormData(boardId, formId, privacyMessageId = null) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/boards/${boardId}/forms/${formId}`, {
        params: {
          privacy_message_id: privacyMessageId
        }
      }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get form data", e);
        reject(e);
      });
    });
  }
  getPrivacyMessage(boardId, elementId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${elementId}`, {
        params: { element_type: CampaignElementsTypes.privacy_message, board_id: boardId }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get form privacy message", e);
        reject(e);
      });
    });
  }
  getFooter(boardId, elementId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${elementId}`, {
        params: { element_type: CampaignElementsTypes.footer, board_id: boardId }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get form privacy message", e);
        reject(e);
      });
    });
  }
  getFormPrivacyMessage(boardId, elementId) {
    return new Promise((resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${elementId}`, {
        params: { element_type: CampaignElementsTypes.form_privacy_message, board_id: boardId }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get form privacy message", e);
        reject(e);
      });
    });
  }
  saveMessageCta(boardId, options) {
    return this.fetchService.withDisableOnPreview(() => {
      return new Promise((resolve, reject) => {
        this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/message`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
          resolve(result.data);
        }).catch((e) => {
          console.error("could not submit cta", e);
          reject(e);
        });
      });
    });
  }
  saveContactCta(boardId, options) {
    return this.fetchService.withDisableOnPreview(() => {
      return new Promise((resolve, reject) => {
        this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/contact`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
          resolve(result.data);
        }).catch((e) => {
          console.error("could not submit cta", e);
          reject(e);
        });
      });
    });
  }
  saveFormCta(boardId, options) {
    return this.fetchService.withDisableOnPreview(() => {
      return new Promise((resolve, reject) => {
        this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/form`, keysToSnakeCase(options)).then((result) => resolve(result.data)).catch((e) => {
          console.error("could not submit cta", e);
          reject(e);
        });
      });
    });
  }
  saveLinkCta(boardId, options) {
    return this.fetchService.withDisableOnPreview(() => {
      return new Promise((resolve, reject) => {
        this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/link`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
          resolve(result.data);
        }).catch((e) => {
          console.error("could not submit cta", e);
          reject(e);
        });
      });
    });
  }
  saveShareCta(boardId, options) {
    return this.fetchService.withDisableOnPreview(() => {
      return new Promise((resolve, reject) => {
        this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/share`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
          resolve(result.data);
        }).catch((e) => {
          console.error("could not submit cta", e);
          reject(e);
        });
      });
    });
  }
  saveShareByEmailCta(boardId, email, invitationId) {
    return this.fetchService.withDisableOnPreview(() => {
      return new Promise((resolve, reject) => {
        this.fetchService.fetcher.post(`/live_board/v1/boards/${boardId}/shares`, {
          email,
          invitation_id: invitationId
        }).then(() => {
          resolve();
        }).catch((e) => {
          console.error("could not submit cta", e);
          reject(e);
        });
      });
    });
  }
  getEnrichment(boardId) {
    const func = (resolve, reject) => {
      this.fetchService.fetcher.get(`/live_board/v3/boards/${boardId}/board_configuration`).then((result) => {
        resolve(result);
      }).catch((e) => {
        console.error("could not get enrichment", e);
        reject();
      });
    };
    return this.fetchService.withPartialContent(func, 500, 20);
  }
};

export {
  Liveboard
};
