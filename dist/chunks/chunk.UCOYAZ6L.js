import {
  CampaignElementsTypes,
  ImageGalleryTypes
} from "./chunk.FPDLHEHA.js";
import {
  keysToSnakeCase
} from "./chunk.FJ3V2PYX.js";
import {
  __spreadValues
} from "./chunk.Z3GS5MY4.js";

// src/designer/Designer.ts
var Designer = class {
  constructor(fetch) {
    this.fetcher = fetch.fetcher;
  }
  getImageGallery(payload) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/api/imagegallery", __spreadValues({}, keysToSnakeCase(payload))).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get image gallery", e);
        reject(e);
      });
    });
  }
  getQueryImageGallery(query) {
    return this.getImageGallery({ type: ImageGalleryTypes.search, query });
  }
  getImageBankGallery(organizationId, bankCategory) {
    return this.getImageGallery({
      type: ImageGalleryTypes.imageBank,
      organizationId,
      bankCategory
    });
  }
  getCampaignImageGallery() {
    return this.getImageGallery({ type: ImageGalleryTypes.campaign });
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
  getImageBankSettings(organizationId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/organizations/${organizationId}/settings/image_bank`).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not get image bank settings", e);
        reject(e);
      });
    });
  }
  saveImageBankSettings(organizationId, categoryName, source) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`/api/v1/organizations/${organizationId}/settings/image_bank`, {
        params: {
          category_name: categoryName,
          value: source
        }
      }).then((result) => {
        resolve(result.data);
      }).catch((e) => {
        console.error("could not set image bank settings", e);
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
  updateForm(boardId, form) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`api/v1/boards/${boardId}/forms`, keysToSnakeCase(form)).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not save form", e);
        reject(e);
      });
    });
  }
  getCampaignElements(boardId, elementType) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`prism/${boardId}/campaign_elements`, { params: { element_type: elementType } }).then((result) => resolve(result.data)).catch((e) => {
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
  getBoardHasItems(boardId, leadingItemId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get("/api/v1/preview/board_items_presence", {
        params: {
          board_id: boardId,
          leading_item_id: leadingItemId
        }
      }).then((result) => resolve(result.data)).catch((e) => {
        console.error("could not get board has items", e);
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
  saveLiveBoard(payload) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/url-for-saving-live-board", payload).then((result) => {
        resolve(result);
      }).catch((e) => {
        console.error("could not save liveboard", e);
        reject(e);
      });
    });
  }
};

export {
  Designer
};
