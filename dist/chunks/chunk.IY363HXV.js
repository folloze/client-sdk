import{b as i}from"./chunk.IPSOLFWP.js";import{a as c}from"./chunk.TWUQ6LLZ.js";import{a as n,b as m}from"./chunk.R2MBWYP6.js";var p=class{constructor(r){this.fetchService=r,this.fetcher=r.fetcher}publishLiveBoard(r,o=!0){return new Promise((a,e)=>{this.fetcher.post(`/api/v1/boards/${r}/publish`,{with_go_online:o}).then(t=>{a(t.data)}).catch(t=>{console.error("could not publish live board",t),e(t)})})}getImageGallery(r){return new Promise((o,a)=>{this.fetcher.get("/api/v1/image_gallery",{params:n({},i(r))}).then(e=>{o(e.data)}).catch(e=>{console.error("could not get image gallery",e),a(e)})})}createPersonalGalleryMedia(r){console.log("test");let o=m(n({},r),{isPersonal:!0,organizationId:this.fetchService.organizationId});return new Promise((a,e)=>{this.fetcher.post("/api/v1/organization_images",i(o)).then(t=>{a(t.data)}).catch(t=>{console.error("could not create organization image",t),e(t)})})}getVideosGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"videos",type:"video"})}getBannerImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"banners",type:"campaign"})}getPersonalVideosGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"videos",type:"video",isPersonal:!0})}getPersonalImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"banners",type:"campaign",isPersonal:!0})}getMobileImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"mobile_banners",type:"campaign"})}getIconsImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"icons",type:"icon"})}getLogosImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"logos",type:"campaign"})}searchImageGallery(r,o){return this.getImageGallery({type:"search",query:r,count:o||20})}getImageUploadUrl(r){return new Promise((o,a)=>{this.fetcher.post("/api/v1/upload_urls",{type:r}).then(e=>{o(e.data)}).catch(e=>{console.error("could not get upload url",e),a(e)})})}getForms(r,o){return new Promise((a,e)=>{this.fetcher.get(`api/v1/boards/${r}/forms`,{params:{additional_form_id:o}}).then(t=>a(t.data)).catch(t=>{console.error("could not get forms",t),e(t)})})}createForm(r,o){return new Promise((a,e)=>{this.fetcher.post(`api/v1/boards/${r}/forms`,i(o)).then(t=>a(t.data)).catch(t=>{console.error("could not save form",t),e(t)})})}updateForm(r,o,a){return new Promise((e,t)=>{this.fetcher.put(`api/v1/boards/${r}/forms/${o}`,i(a)).then(s=>e(s.data)).catch(s=>{console.error("could not save form",s),t(s)})})}getCampaignElements(r,o){return new Promise((a,e)=>{this.fetcher.get(`prism/${r}/campaign_elements`,{params:{element_type:o}}).then(t=>a(t.data)).catch(t=>{console.error("could not get campaign elements",t),e(t)})})}getFooters(r){return this.getCampaignElements(r,c.footer)}getPrivacyMessages(r){return this.getCampaignElements(r,c.privacy_message)}getFormPrivacyMessages(r){return this.getCampaignElements(r,c.form_privacy_message)}getPrivacySettings(r){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/organizations/${r}/settings/privacy`).then(e=>o(e.data)).catch(e=>{console.error("could not get privacy settings",e),a(e)})})}getEmailTemplates(r){return new Promise((o,a)=>{this.fetcher.get(`api/v1/boards/${r}/email_templates`).then(e=>o(e.data)).catch(e=>{console.error("could not get email templates",e),a(e)})})}getBoardHasPersonalization(r,o){return new Promise((a,e)=>{this.fetcher.get(`api/v1/organizations/${r}/settings/personalizations`,{params:{board_id:o}}).then(t=>a(t.data)).catch(t=>{console.error("could not get personalization setting",t),e(t)})})}getFeatureSettings(r){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/organizations/${r}/settings/features`).then(e=>o(e.data)).catch(e=>{console.error("could not get feature settings",e),a(e)})})}getPersonalization(r){return new Promise((o,a)=>{this.fetcher.get(`/prism/${r}/personalization`).then(e=>o(e.data)).catch(e=>{console.error("could not get personalization",e),a(e)})})}savePersonalization(r,o){return new Promise((a,e)=>{this.fetcher.put(`/prism/${r}/personalization`,o).then(t=>a(t.data)).catch(t=>{console.error("could not save personalization",t),e(t)})})}saveLiveBoard(r,o){return new Promise((a,e)=>{this.fetcher.put(`/api/v1/boards/${r}/config`,{config:o}).then(t=>a({status:t.status,data:t.data})).catch(t=>{var s,l,g;if(((s=t.response)==null?void 0:s.status)===409||((l=t.response)==null?void 0:l.status)===406){let u=((g=t.response)==null?void 0:g.status)===409?"conflict":"unacceptable";console.warn(`could not save - ${u}`),a({status:t.response.status,data:t.response.data})}else console.error("could not save liveBoard config",t),e(t)})})}getLiveBoardConfig(r){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/boards/${r}/config`).then(e=>{e.data.published_hash=e.data.unpublished_config.meta.newHash,o(e.data)}).catch(e=>{console.error("could not save get liveBoard config",e),a(e)})})}searchBoardContacts(r,o){return new Promise((a,e)=>{this.fetcher.get("/api/v1/search/board_contacts",{params:{board_id:r,query:o}}).then(t=>a(t.data)).catch(t=>{console.error("could not get board contacts",t),e(t)})})}getMergeTags(r,o,a){return new Promise((e,t)=>{this.fetcher.get(`/api/v1/organizations/${r}/merge_tags`,{params:{board_id:o,filters:a}}).then(s=>e(s.data)).catch(s=>{console.error("could not get merge tags",s),t(s)})})}getMergeTagValues(r,o){return new Promise((a,e)=>{this.fetcher.get(`/api/v1/merge_tags/${o}/merge_tags_lookups`,{params:{organization_id:r}}).then(t=>a(t.data)).catch(t=>{console.error("could not get merge tag values",t),e(t)})})}getDesignerThemes(r){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/boards/${r}/designer_themes`).then(e=>o(e.data)).catch(e=>{console.error("could not get designer themes",e),a(e)})})}generateWidgetsText(r){let o=(a,e,t)=>{this.fetcher.post("/api/v1/boards/widgets_texts",m(n({},r),{guid:t})).then(s=>a(s)).catch(s=>{console.error("could not generate widgets texts",s),e(s)})};return this.fetchService.withPartialContent(o,500,30)}getCustomSections(){return new Promise((r,o)=>{this.fetcher.get("/api/v1/custom_sections").then(a=>r(a.data)).catch(a=>{console.error("could not get saved sections",a),o(a)})})}createCustomSection(r){return new Promise((o,a)=>{this.fetcher.post("/api/v1/custom_sections",r).then(e=>o(e.data)).catch(e=>{console.error("could not save section",e),a(e)})})}deleteCustomSection(r){return new Promise((o,a)=>{this.fetcher.delete(`/api/v1/custom_sections/${r}`).then(e=>o(e.data)).catch(e=>{console.error("could not delete section",e),a(e)})})}updateCustomSection(r,o){return new Promise((a,e)=>{this.fetcher.put(`/api/v1/custom_sections/${r}`,o).then(t=>a(t.data)).catch(t=>{console.error("could not update section",t),e(t)})})}async createOrUpdateChatConversation(r,o,a={}){return this.fetchService.fetcher.post("/api/v2/boards/chat/conversations",n({board_id:r,widget_id:o},a))}};export{p as a};
