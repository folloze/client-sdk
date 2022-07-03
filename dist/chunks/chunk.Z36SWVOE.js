import {
  CampaignElementsTypes
} from "./chunk.G52EPVC6.js";
import {
  keysToSnakeCase
} from "./chunk.JQDT3QVW.js";
import {
  __spreadValues
} from "./chunk.Z3GS5MY4.js";

// src/designer/Designer.ts
var Designer = class {
  constructor(fetch) {
    this.fetchService = fetch;
    this.fetcher = fetch.fetcher;
  }
  publishLiveBoard(boardId, withGoOnline = true) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/api/v1/boards/${boardId}/publish`, { with_go_online: withGoOnline }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not publish live board", e);
        reject(e);
      });
    });
  }
  getImageGallery(payload) {
    return new Promise((resolve, reject) => {
      this.fetcher.get("/api/v1/image_gallery", { params: __spreadValues({}, keysToSnakeCase(payload)) }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get image gallery", e);
        reject(e);
      });
    });
  }
  getBannerImageGallery() {
    return this.getImageGallery({
      organizationId: this.fetchService.organizationId,
      bankCategory: "banners",
      type: "campaign"
    });
  }
  getMobileImageGallery() {
    return this.getImageGallery({
      organizationId: this.fetchService.organizationId,
      bankCategory: "mobile_banners",
      type: "campaign"
    });
  }
  getIconsImageGallery() {
    return this.getImageGallery({
      organizationId: this.fetchService.organizationId,
      bankCategory: "icons",
      type: "icon"
    });
  }
  getLogosImageGallery() {
    return this.getImageGallery({
      organizationId: this.fetchService.organizationId,
      bankCategory: "logos",
      type: "campaign"
    });
  }
  searchImageGallery(query, count) {
    return this.getImageGallery({ type: "search", query, count: count || 20 });
  }
  getImageUploadUrl(uploadType) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/api/v1/upload_urls", { type: uploadType }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get upload url", e);
        reject(e);
      });
    });
  }
  getForms(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`api/v1/boards/${boardId}/forms`).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get forms", e);
        reject(e);
      });
    });
  }
  createForm(boardId, form) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`api/v1/boards/${boardId}/forms`, keysToSnakeCase(form)).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not save form", e);
        reject(e);
      });
    });
  }
  updateForm(boardId, formId, form) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`api/v1/boards/${boardId}/forms/${formId}`, keysToSnakeCase(form)).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not save form", e);
        reject(e);
      });
    });
  }
  getCampaignElements(boardId, elementType) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`prism/${boardId}/campaign_elements`, {
        params: { element_type: elementType }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get campaign elements", e);
        reject(e);
      });
    });
  }
  getFooters(boardId) {
    return this.getCampaignElements(boardId, CampaignElementsTypes.footer);
  }
  getPrivacyMessages(boardId) {
    return this.getCampaignElements(boardId, CampaignElementsTypes.privacy_message);
  }
  getFormPrivacyMessages(boardId) {
    return this.getCampaignElements(boardId, CampaignElementsTypes.form_privacy_message);
  }
  getPrivacySettings(organizationId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/organizations/${organizationId}/settings/privacy`).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get privacy settings", e);
        reject(e);
      });
    });
  }
  getEmailTemplates(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`api/v1/boards/${boardId}/email_templates`).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get email templates", e);
        reject(e);
      });
    });
  }
  getBoardHasPersonalization(organizationId, boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`api/v1/organizations/${organizationId}/settings/personalizations`, { params: { board_id: boardId } }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get personalization setting", e);
        reject(e);
      });
    });
  }
  getFeatureSettings(organizationId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/organizations/${organizationId}/settings/features`).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get feature settings", e);
        reject(e);
      });
    });
  }
  getPersonalization(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/prism/${boardId}/personalization`).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get personalization", e);
        reject(e);
      });
    });
  }
  savePersonalization(boardId, personalization) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`/prism/${boardId}/personalization`, personalization).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not save personalization", e);
        reject(e);
      });
    });
  }
  saveLiveBoard(boardId, config) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`/api/v1/boards/${boardId}/config`, {
        config,
        theme_id: null
      }).then((result) => resolve({ status: result.status, data: result.data })).catch((e) => {
        var _a;
        if (((_a = e.response) == null ? void 0 : _a.status) === 409) {
          console.warn("could not save - conflict");
          resolve({ status: e.response.status, data: e.response.data });
        } else {
          console.error("could not save liveBoard config", e);
          reject(e);
        }
      });
    });
  }
  getLiveBoardConfig(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/boards/${boardId}/config`).then((result) => {
        result.data.published_hash = result.data.unpublished_config.meta.newHash;
        resolve(result.data);
      }).catch((e) => {
        console.error("could not save get liveBoard config", e);
        reject(e);
      });
    });
  }
  searchBoardContacts(boardId, query) {
    return new Promise((resolve, reject) => {
      this.fetcher.get("/api/v1/search/board_contacts", {
        params: {
          board_id: boardId,
          query
        }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get board contacts", e);
        reject(e);
      });
    });
  }
  getMergeTagsByBoard(boardId, contextType) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/boards/${boardId}/merge_tags`, {
        params: { context_type: contextType }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get board merge tags", e);
        reject(e);
      });
    });
  }
  getMergeTagValues(organizationId, mergeTagId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/merge_tags/${mergeTagId}/merge_tags_lookups`, {
        params: { organization_id: organizationId }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get merge tag values", e);
        reject(e);
      });
    });
  }
};

export {
  Designer
};
