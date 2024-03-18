import{y as c}from"./chunk.3REHG4RI.js";import{a as i}from"./chunk.TWUQ6LLZ.js";import{a as n,b as l}from"./chunk.KVVA2TM3.js";var p=class{constructor(r){this.fetchService=r,this.fetcher=r.fetcher}publishLiveBoard(r,a=!0){return new Promise((o,e)=>{this.fetcher.post(`/api/v1/boards/${r}/publish`,{with_go_online:a}).then(t=>{o(t.data)}).catch(t=>{console.error("could not publish live board",t),e(t)})})}getImageGallery(r){return new Promise((a,o)=>{this.fetcher.get("/api/v1/image_gallery",{params:n({},c(r))}).then(e=>{a(e.data)}).catch(e=>{console.error("could not get image gallery",e),o(e)})})}getVideosGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"videos",type:"video"})}getBannerImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"banners",type:"campaign"})}getMobileImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"mobile_banners",type:"campaign"})}getIconsImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"icons",type:"icon"})}getLogosImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"logos",type:"campaign"})}searchImageGallery(r,a){return this.getImageGallery({type:"search",query:r,count:a||20})}getImageUploadUrl(r){return new Promise((a,o)=>{this.fetcher.post("/api/v1/upload_urls",{type:r}).then(e=>{a(e.data)}).catch(e=>{console.error("could not get upload url",e),o(e)})})}getForms(r,a){return new Promise((o,e)=>{this.fetcher.get(`api/v1/boards/${r}/forms`,{params:{additional_form_id:a}}).then(t=>o(t.data)).catch(t=>{console.error("could not get forms",t),e(t)})})}createForm(r,a){return new Promise((o,e)=>{this.fetcher.post(`api/v1/boards/${r}/forms`,c(a)).then(t=>o(t.data)).catch(t=>{console.error("could not save form",t),e(t)})})}updateForm(r,a,o){return new Promise((e,t)=>{this.fetcher.put(`api/v1/boards/${r}/forms/${a}`,c(o)).then(s=>e(s.data)).catch(s=>{console.error("could not save form",s),t(s)})})}getCampaignElements(r,a){return new Promise((o,e)=>{this.fetcher.get(`prism/${r}/campaign_elements`,{params:{element_type:a}}).then(t=>o(t.data)).catch(t=>{console.error("could not get campaign elements",t),e(t)})})}getFooters(r){return this.getCampaignElements(r,i.footer)}getPrivacyMessages(r){return this.getCampaignElements(r,i.privacy_message)}getFormPrivacyMessages(r){return this.getCampaignElements(r,i.form_privacy_message)}getPrivacySettings(r){return new Promise((a,o)=>{this.fetcher.get(`/api/v1/organizations/${r}/settings/privacy`).then(e=>a(e.data)).catch(e=>{console.error("could not get privacy settings",e),o(e)})})}getEmailTemplates(r){return new Promise((a,o)=>{this.fetcher.get(`api/v1/boards/${r}/email_templates`).then(e=>a(e.data)).catch(e=>{console.error("could not get email templates",e),o(e)})})}getBoardHasPersonalization(r,a){return new Promise((o,e)=>{this.fetcher.get(`api/v1/organizations/${r}/settings/personalizations`,{params:{board_id:a}}).then(t=>o(t.data)).catch(t=>{console.error("could not get personalization setting",t),e(t)})})}getFeatureSettings(r){return new Promise((a,o)=>{this.fetcher.get(`/api/v1/organizations/${r}/settings/features`).then(e=>a(e.data)).catch(e=>{console.error("could not get feature settings",e),o(e)})})}getPersonalization(r){return new Promise((a,o)=>{this.fetcher.get(`/prism/${r}/personalization`).then(e=>a(e.data)).catch(e=>{console.error("could not get personalization",e),o(e)})})}savePersonalization(r,a){return new Promise((o,e)=>{this.fetcher.put(`/prism/${r}/personalization`,a).then(t=>o(t.data)).catch(t=>{console.error("could not save personalization",t),e(t)})})}saveLiveBoard(r,a){return new Promise((o,e)=>{this.fetcher.put(`/api/v1/boards/${r}/config`,{config:a}).then(t=>o({status:t.status,data:t.data})).catch(t=>{var s,m,g;if(((s=t.response)==null?void 0:s.status)===409||((m=t.response)==null?void 0:m.status)===406){let u=((g=t.response)==null?void 0:g.status)===409?"conflict":"unacceptable";console.warn(`could not save - ${u}`),o({status:t.response.status,data:t.response.data})}else console.error("could not save liveBoard config",t),e(t)})})}getLiveBoardConfig(r){return new Promise((a,o)=>{this.fetcher.get(`/api/v1/boards/${r}/config`).then(e=>{e.data.published_hash=e.data.unpublished_config.meta.newHash,a(e.data)}).catch(e=>{console.error("could not save get liveBoard config",e),o(e)})})}searchBoardContacts(r,a){return new Promise((o,e)=>{this.fetcher.get("/api/v1/search/board_contacts",{params:{board_id:r,query:a}}).then(t=>o(t.data)).catch(t=>{console.error("could not get board contacts",t),e(t)})})}getMergeTags(r,a,o){return new Promise((e,t)=>{this.fetcher.get(`/api/v1/organizations/${r}/merge_tags`,{params:{board_id:a,filters:o}}).then(s=>e(s.data)).catch(s=>{console.error("could not get merge tags",s),t(s)})})}getMergeTagValues(r,a){return new Promise((o,e)=>{this.fetcher.get(`/api/v1/merge_tags/${a}/merge_tags_lookups`,{params:{organization_id:r}}).then(t=>o(t.data)).catch(t=>{console.error("could not get merge tag values",t),e(t)})})}getDesignerThemes(r){return new Promise((a,o)=>{this.fetcher.get(`/api/v1/boards/${r}/designer_themes`).then(e=>a(e.data)).catch(e=>{console.error("could not get designer themes",e),o(e)})})}generateWidgetsText(r){let a=(o,e,t)=>{this.fetcher.post("/api/v1/boards/widgets_texts",l(n({},r),{guid:t})).then(s=>o(s)).catch(s=>{console.error("could not generate widgets texts",s),e(s)})};return this.fetchService.withPartialContent(a,500,30)}getCustomSections(){return new Promise((r,a)=>{this.fetcher.get("/api/v1/custom_sections").then(o=>r(o.data)).catch(o=>{console.error("could not get saved sections",o),a(o)})})}createCustomSection(r){return new Promise((a,o)=>{this.fetcher.post("/api/v1/custom_sections",r).then(e=>a(e.data)).catch(e=>{console.error("could not save section",e),o(e)})})}deleteCustomSection(r){return new Promise((a,o)=>{this.fetcher.delete(`/api/v1/custom_sections/${r}`).then(e=>a(e.data)).catch(e=>{console.error("could not delete section",e),o(e)})})}updateCustomSection(r,a){return new Promise((o,e)=>{this.fetcher.put(`/api/v1/custom_sections/${r}`,a).then(t=>o(t.data)).catch(t=>{console.error("could not update section",t),e(t)})})}async createOrUpdateChatConversation(r,a,o={}){return this.fetchService.fetcher.post("/api/v2/boards/chat/conversations",n({board_id:r,widget_id:a},o))}};export{p as a};