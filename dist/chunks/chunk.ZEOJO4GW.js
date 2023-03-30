import{y as i}from"./chunk.TGN3ZZKD.js";import{a as n}from"./chunk.TWUQ6LLZ.js";import{a as c}from"./chunk.KVVA2TM3.js";var p=class{constructor(t){this.fetchService=t,this.fetcher=t.fetcher}publishLiveBoard(t,a=!0){return new Promise((o,e)=>{this.fetcher.post(`/api/v1/boards/${t}/publish`,{with_go_online:a}).then(r=>{o(r.data)}).catch(r=>{console.error("could not publish live board",r),e(r)})})}getImageGallery(t){return new Promise((a,o)=>{this.fetcher.get("/api/v1/image_gallery",{params:c({},i(t))}).then(e=>{a(e.data)}).catch(e=>{console.error("could not get image gallery",e),o(e)})})}getVideosGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"videos",type:"video"})}getBannerImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"banners",type:"campaign"})}getMobileImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"mobile_banners",type:"campaign"})}getIconsImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"icons",type:"icon"})}getLogosImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"logos",type:"campaign"})}searchImageGallery(t,a){return this.getImageGallery({type:"search",query:t,count:a||20})}getImageUploadUrl(t){return new Promise((a,o)=>{this.fetcher.post("/api/v1/upload_urls",{type:t}).then(e=>{a(e.data)}).catch(e=>{console.error("could not get upload url",e),o(e)})})}getForms(t){return new Promise((a,o)=>{this.fetcher.get(`api/v1/boards/${t}/forms`).then(e=>a(e.data)).catch(e=>{console.error("could not get forms",e),o(e)})})}createForm(t,a){return new Promise((o,e)=>{this.fetcher.post(`api/v1/boards/${t}/forms`,i(a)).then(r=>o(r.data)).catch(r=>{console.error("could not save form",r),e(r)})})}updateForm(t,a,o){return new Promise((e,r)=>{this.fetcher.put(`api/v1/boards/${t}/forms/${a}`,i(o)).then(s=>e(s.data)).catch(s=>{console.error("could not save form",s),r(s)})})}getCampaignElements(t,a){return new Promise((o,e)=>{this.fetcher.get(`prism/${t}/campaign_elements`,{params:{element_type:a}}).then(r=>o(r.data)).catch(r=>{console.error("could not get campaign elements",r),e(r)})})}getFooters(t){return this.getCampaignElements(t,n.footer)}getPrivacyMessages(t){return this.getCampaignElements(t,n.privacy_message)}getFormPrivacyMessages(t){return this.getCampaignElements(t,n.form_privacy_message)}getPrivacySettings(t){return new Promise((a,o)=>{this.fetcher.get(`/api/v1/organizations/${t}/settings/privacy`).then(e=>a(e.data)).catch(e=>{console.error("could not get privacy settings",e),o(e)})})}getEmailTemplates(t){return new Promise((a,o)=>{this.fetcher.get(`api/v1/boards/${t}/email_templates`).then(e=>a(e.data)).catch(e=>{console.error("could not get email templates",e),o(e)})})}getBoardHasPersonalization(t,a){return new Promise((o,e)=>{this.fetcher.get(`api/v1/organizations/${t}/settings/personalizations`,{params:{board_id:a}}).then(r=>o(r.data)).catch(r=>{console.error("could not get personalization setting",r),e(r)})})}getFeatureSettings(t){return new Promise((a,o)=>{this.fetcher.get(`/api/v1/organizations/${t}/settings/features`).then(e=>a(e.data)).catch(e=>{console.error("could not get feature settings",e),o(e)})})}getPersonalization(t){return new Promise((a,o)=>{this.fetcher.get(`/prism/${t}/personalization`).then(e=>a(e.data)).catch(e=>{console.error("could not get personalization",e),o(e)})})}savePersonalization(t,a){return new Promise((o,e)=>{this.fetcher.put(`/prism/${t}/personalization`,a).then(r=>o(r.data)).catch(r=>{console.error("could not save personalization",r),e(r)})})}saveLiveBoard(t,a){return new Promise((o,e)=>{this.fetcher.put(`/api/v1/boards/${t}/config`,{config:a}).then(r=>o({status:r.status,data:r.data})).catch(r=>{var s,m,g;if(((s=r.response)==null?void 0:s.status)===409||((m=r.response)==null?void 0:m.status)===406){let l=((g=r.response)==null?void 0:g.status)===409?"conflict":"unacceptable";console.warn(`could not save - ${l}`),o({status:r.response.status,data:r.response.data})}else console.error("could not save liveBoard config",r),e(r)})})}getLiveBoardConfig(t){return new Promise((a,o)=>{this.fetcher.get(`/api/v1/boards/${t}/config`).then(e=>{e.data.published_hash=e.data.unpublished_config.meta.newHash,a(e.data)}).catch(e=>{console.error("could not save get liveBoard config",e),o(e)})})}searchBoardContacts(t,a){return new Promise((o,e)=>{this.fetcher.get("/api/v1/search/board_contacts",{params:{board_id:t,query:a}}).then(r=>o(r.data)).catch(r=>{console.error("could not get board contacts",r),e(r)})})}getMergeTagsByBoard(t,a){return new Promise((o,e)=>{this.fetcher.get(`/api/v1/boards/${t}/merge_tags`,{params:{context_type:a}}).then(r=>o(r.data)).catch(r=>{console.error("could not get board merge tags",r),e(r)})})}getMergeTagValues(t,a){return new Promise((o,e)=>{this.fetcher.get(`/api/v1/merge_tags/${a}/merge_tags_lookups`,{params:{organization_id:t}}).then(r=>o(r.data)).catch(r=>{console.error("could not get merge tag values",r),e(r)})})}};export{p as a};
