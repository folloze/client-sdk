import{b as n}from"./chunk.HBA5WTQJ.js";import{a as c}from"./chunk.TWUQ6LLZ.js";import{a as i,b as m}from"./chunk.R2MBWYP6.js";var d=class{constructor(t){this.fetchService=t,this.fetcher=t.fetcher}publishLiveBoard(t,o=!0){return new Promise((a,e)=>{this.fetcher.post(`/api/v1/boards/${t}/publish`,{with_go_online:o}).then(r=>{a(r.data)}).catch(r=>{console.error("could not publish live board",r),e(r)})})}getImageGallery(t){return new Promise((o,a)=>{this.fetcher.get("/api/v1/image_gallery",{params:i({},n(t))}).then(e=>{o(e.data)}).catch(e=>{console.error("could not get image gallery",e),a(e)})})}createPersonalGalleryMedia(t){let o=m(i({},t),{isPersonal:!0,organizationId:this.fetchService.organizationId});return new Promise((a,e)=>{this.fetcher.post("/api/v1/organization_images",n(o)).then(r=>{a(r.data)}).catch(r=>{console.error("could not create organization image",r),e(r)})})}deletePersonalGalleryMedia(t){return new Promise((o,a)=>{this.fetcher.delete(`/api/v1/organization_images/${t}`).then(()=>{o()}).catch(e=>{console.error("could not delete organization image",e),a(e)})})}getVideosGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"videos",type:"video"})}getImagesImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"images",type:"designer",category:"images"})}getBannersImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"banners",type:"designer",category:"banners"})}getPersonalVideosGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"videos",type:"video",isPersonal:!0})}getPersonalImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"images",type:"campaign",isPersonal:!0})}getMobileImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"mobile_banners",type:"designer",category:"mobile"})}getIconsImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"icons",type:"designer",category:"icons"})}getLogosImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"logos",type:"designer",category:"logos"})}getThumbnailsImageGallery(){return this.getImageGallery({organizationId:this.fetchService.organizationId,bankCategory:"thumbnails",type:"campaign",category:"thumbnails"})}searchImageGallery(t,o){return this.getImageGallery({type:"search",query:t,count:o||20})}getImageUploadUrl(t){return new Promise((o,a)=>{this.fetcher.post("/api/v1/upload_urls",{type:t}).then(e=>{o(e.data)}).catch(e=>{console.error("could not get upload url",e),a(e)})})}getForms(t,o){return new Promise((a,e)=>{this.fetcher.get(`api/v1/boards/${t}/forms`,{params:{additional_form_id:o}}).then(r=>a(r.data)).catch(r=>{console.error("could not get forms",r),e(r)})})}createForm(t,o){return new Promise((a,e)=>{this.fetcher.post(`api/v1/boards/${t}/forms`,n(o)).then(r=>a(r.data)).catch(r=>{console.error("could not save form",r),e(r)})})}updateForm(t,o,a){return new Promise((e,r)=>{this.fetcher.put(`api/v1/boards/${t}/forms/${o}`,n(a)).then(s=>e(s.data)).catch(s=>{console.error("could not save form",s),r(s)})})}getCampaignElements(t,o){return new Promise((a,e)=>{this.fetcher.get(`prism/${t}/campaign_elements`,{params:{element_type:o}}).then(r=>a(r.data)).catch(r=>{console.error("could not get campaign elements",r),e(r)})})}getFooters(t){return this.getCampaignElements(t,c.footer)}getPrivacyMessages(t){return this.getCampaignElements(t,c.privacy_message)}getFormPrivacyMessages(t){return this.getCampaignElements(t,c.form_privacy_message)}getPrivacySettings(t){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/organizations/${t}/settings/privacy`).then(e=>o(e.data)).catch(e=>{console.error("could not get privacy settings",e),a(e)})})}getEmailTemplates(t){return new Promise((o,a)=>{this.fetcher.get(`api/v1/boards/${t}/email_templates`).then(e=>o(e.data)).catch(e=>{console.error("could not get email templates",e),a(e)})})}getBoardHasPersonalization(t,o){return new Promise((a,e)=>{this.fetcher.get(`api/v1/organizations/${t}/settings/personalizations`,{params:{board_id:o}}).then(r=>a(r.data)).catch(r=>{console.error("could not get personalization setting",r),e(r)})})}getFeatureSettings(t){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/organizations/${t}/settings/features`).then(e=>o(e.data)).catch(e=>{console.error("could not get feature settings",e),a(e)})})}getPersonalization(t){return new Promise((o,a)=>{this.fetcher.get(`/prism/${t}/personalization`).then(e=>o(e.data)).catch(e=>{console.error("could not get personalization",e),a(e)})})}savePersonalization(t,o){return new Promise((a,e)=>{this.fetcher.put(`/prism/${t}/personalization`,o).then(r=>a(r.data)).catch(r=>{console.error("could not save personalization",r),e(r)})})}saveLiveBoard(t,o){return new Promise((a,e)=>{this.fetcher.put(`/api/v1/boards/${t}/config`,{config:o}).then(r=>a({status:r.status,data:r.data})).catch(r=>{var s,l,g;if(((s=r.response)==null?void 0:s.status)===409||((l=r.response)==null?void 0:l.status)===406){let u=((g=r.response)==null?void 0:g.status)===409?"conflict":"unacceptable";console.warn(`could not save - ${u}`),a({status:r.response.status,data:r.response.data})}else console.error("could not save liveBoard config",r),e(r)})})}getLiveBoardConfig(t){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/boards/${t}/config`).then(e=>{e.data.published_hash=e.data.unpublished_config.meta.newHash,o(e.data)}).catch(e=>{console.error("could not save get liveBoard config",e),a(e)})})}searchBoardContacts(t,o){return new Promise((a,e)=>{this.fetcher.get("/api/v1/search/board_contacts",{params:{board_id:t,query:o}}).then(r=>a(r.data)).catch(r=>{console.error("could not get board contacts",r),e(r)})})}getMergeTags(t,o,a){return new Promise((e,r)=>{this.fetcher.get(`/api/v1/organizations/${t}/merge_tags`,{params:{board_id:o,filters:a}}).then(s=>e(s.data)).catch(s=>{console.error("could not get merge tags",s),r(s)})})}getMergeTagValues(t,o){return new Promise((a,e)=>{this.fetcher.get(`/api/v1/merge_tags/${o}/merge_tags_lookups`,{params:{organization_id:t}}).then(r=>a(r.data)).catch(r=>{console.error("could not get merge tag values",r),e(r)})})}getDesignerThemes(t){return new Promise((o,a)=>{this.fetcher.get(`/api/v1/boards/${t}/designer_themes`).then(e=>o(e.data)).catch(e=>{console.error("could not get designer themes",e),a(e)})})}generateWidgetsText(t){let o=(a,e,r)=>{this.fetcher.post("/api/v1/boards/widgets_texts",m(i({},t),{guid:r})).then(s=>a(s)).catch(s=>{console.error("could not generate widgets texts",s),e(s)})};return this.fetchService.withPartialContent(o,500,30)}getCustomSections(){return new Promise((t,o)=>{this.fetcher.get("/api/v1/custom_sections").then(a=>t(a.data)).catch(a=>{console.error("could not get saved sections",a),o(a)})})}getCustomFloatingWidgets(){return new Promise((t,o)=>{this.fetcher.get("/api/v1/custom_sections/floating_widgets").then(a=>t(a.data)).catch(a=>{console.error("could not get saved sections",a),o(a)})})}createCustomSection(t){return new Promise((o,a)=>{this.fetcher.post("/api/v1/custom_sections",t).then(e=>o(e.data)).catch(e=>{console.error("could not save section",e),a(e)})})}deleteCustomSection(t){return new Promise((o,a)=>{this.fetcher.delete(`/api/v1/custom_sections/${t}`).then(e=>o(e.data)).catch(e=>{console.error("could not delete section",e),a(e)})})}updateCustomSection(t,o){return new Promise((a,e)=>{this.fetcher.put(`/api/v1/custom_sections/${t}`,o).then(r=>a(r.data)).catch(r=>{console.error("could not update section",r),e(r)})})}async createOrUpdateChatConversation(t,o,a={}){return this.fetchService.fetcher.post("/api/v2/boards/chat/conversations",i({board_id:t,widget_id:o},a))}};export{d as a};
