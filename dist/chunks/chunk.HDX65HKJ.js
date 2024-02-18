import{y as i}from"./chunk.3REHG4RI.js";import{a as h}from"./chunk.TWUQ6LLZ.js";import{a,b as m}from"./chunk.KVVA2TM3.js";var l=class{constructor(t){this.fetchService=t}getBoard(t){return new Promise((o,r)=>{this.fetchService.fetcher.get(`/live_board/v1/boards/${t}/`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get board"),r(e)})})}getSellerInformation(t){return new Promise((o,r)=>{this.fetchService.fetcher.get(`/live_board/v1/boards/${t}/presenter`,{params:{token:this.fetchService.urlToken}}).then(e=>{e.status==206?setTimeout(()=>{this.getSellerInformation(t).then(o).catch(r)},2e3):o(e.data)}).catch(e=>{console.error("could not get seller"),r(e)})})}getCategory(t,o,r){return new Promise((e,s)=>{this.fetchService.fetcher.get(`/live_board/v2/categories/${t}`,{params:{board_id:o,by_slug:r}}).then(n=>{e(n.data)}).catch(n=>{console.error("could not get category",n),s(n)})})}getCategories(t){return new Promise((o,r)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${t}/categories`).then(e=>{e.status==206?setTimeout(()=>{this.getCategories(t).then(o).catch(r)},2e3):o(e.data)}).catch(e=>{console.error("could not get categories",e),r(e)})})}getUserChat(t,o){return new Promise((r,e)=>{this.fetchService.fetcher.post("/live_board/v1/chat/user_chat",{board_id:t,lead_id:o}).then(s=>{r(s.data)}).catch(s=>{console.error("could not get user chat",s),e(s)})})}async createChatUser(t){return this.fetchService.fetcher.post("/live_board/v2/chat/user",t)}getItem(t,o,r,e){return new Promise((s,n)=>{this.fetchService.fetcher.get(`/live_board/v2/items/${t}`,{params:{by_slug:r,board_id:o,with_preview_metadata:e}}).then(c=>{s(c.data)}).catch(c=>{console.error("could not get item",c),n(c)})})}getItems(t){return new Promise((o,r)=>{this.fetchService.fetcher.post(`/live_board/v2/boards/${t.boardId}/items`,i(t)).then(e=>{e.status==206?setTimeout(()=>{this.getItems(t).then(o).catch(r)},2e3):o(e.data)}).catch(e=>{console.error("could not get items"),r(e)})})}getHasItems(t){return new Promise((o,r)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${t}/items_presence`).then(e=>{e.status==206?setTimeout(()=>{this.getHasItems(t).then(o).catch(r)},2e3):o(e.data)}).catch(e=>{console.error("could not get has items"),r(e)})})}getJourneyItems(t,o){return new Promise((r,e)=>{this.fetchService.fetcher.post(`/live_board/v2/journeys/${t}`,i(o)).then(s=>{r(s.data)}).catch(s=>{console.error("could not get journey items",s),e(s)})})}getContentDownloadUrl(t){return new Promise((o,r)=>{this.fetchService.fetcher.get("/live_board/v2/downloads",{params:{content_item_id:t}}).then(e=>{o(e.data)}).catch(e=>{console.error("could not get download url",e),r(e)})})}createSnapshotUrl(t,o){return new Promise((r,e)=>{this.fetchService.fetcher.post(`/live_board/v1/content_items/${t}/snapshots`,{guid:o}).then(s=>{r(s.data)}).catch(s=>{console.error("could not create snapshot",s),e(s)})})}createItemAnalysis(t){return new Promise((o,r)=>{this.fetchService.fetcher.post(`/live_board/v1/content_items/${t}/analyses`).then(e=>{o(e.data)}).catch(e=>{console.error("could not create analysis",e),r(e)})})}getFileMetadata(t){return new Promise((o,r)=>{this.fetchService.fetcher.get(`/live_board/v1/content_items/${t}/files`).then(e=>{e.status==206?setTimeout(()=>{this.getFileMetadata(t).then(o).catch(r)},2e3):o(e.data)}).catch(e=>{console.error("could not get file url",e),r(e)})})}setCookiesConsent(t,o){return new Promise((r,e)=>{this.fetchService.fetcher.post(`/live_board/v1/boards/${t}/cookies_consents`,a({},i(o))).then(s=>{r(s.data)}).catch(s=>{console.error("could not get file url",s),e(s)})})}updateEnrichment(t,o,r){return new Promise((e,s)=>{this.fetchService.fetcher.post("/live_board/v2/enrichments",{type:t,request_time:r,enrichment_data:o}).then(()=>{e()}).catch(n=>{console.error("could not update enrichment",n),s(n)})})}updateCookieMatching(t,o,r){return new Promise((e,s)=>{this.fetchService.fetcher.post("/live_board/v2/cookie_matchings",{type:t,value:o,success:r}).then(()=>{e()}).catch(n=>{console.error("could not update cookie matching",n),s(n)})})}getGeoLocation(){return this.fetchService.withDisableOnPreview(()=>new Promise((t,o)=>{this.fetchService.fetcher.get("/live_board/v1/geo_location").then(r=>{t(r.data)}).catch(r=>{console.error("could not get geolocation",r),o(r)})}))}getCurrentLead(){return new Promise((t,o)=>{this.fetchService.fetcher.get("/live_board/v1/leads/me").then(r=>{t(r.data)}).catch(r=>{console.error("could not get current lead",r),o(r)})})}validateLead(t){return new Promise((o,r)=>{this.fetchService.fetcher.post("/live_board/v2/lead_validations",{board_id:t}).then(()=>{o()}).catch(e=>{console.error("could not validate lead",e),r(e)})})}stopTrackingForSession(){return new Promise((t,o)=>{this.fetchService.fetcher.delete("/live_board/v2/track_leads").then(r=>{t(r.data)}).catch(r=>{console.error("could not get stop tracking lead",r),o(r)})})}getLiveEventUrls(t){return new Promise((o,r)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${t}/live_event`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get current lead",e),r(e)})})}getOrganizationSettings(t){return new Promise((o,r)=>{this.fetchService.fetcher.get(`/live_board/v1/boards/${t}/organization_settings`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get organization settings",e),r(e)})})}setSessionCookie(t){return new Promise((o,r)=>{this.fetchService.fetcher.post(`/live_board/v1/boards/${t}/session_cookies`).then(e=>{o(e.data)}).catch(e=>{console.error("could not create session cookie",e),r(e)})})}getFormData(t,o,r=null){return new Promise((e,s)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${t}/forms/${o}`,{params:{privacy_message_id:r}}).then(n=>{e(n.data)}).catch(n=>{console.error("could not get form data",n),s(n)})})}getPrivacyMessage(t,o){return new Promise((r,e)=>{this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${o}`,{params:{element_type:h.privacy_message,board_id:t}}).then(s=>r(s.data)).catch(s=>{console.error("could not get form privacy message",s),e(s)})})}getFooter(t,o){return new Promise((r,e)=>{this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${o}`,{params:{element_type:h.footer,board_id:t}}).then(s=>r(s.data)).catch(s=>{console.error("could not get form privacy message",s),e(s)})})}getFormPrivacyMessage(t,o){return new Promise((r,e)=>{this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${o}`,{params:{element_type:h.form_privacy_message,board_id:t}}).then(s=>r(s.data)).catch(s=>{console.error("could not get form privacy message",s),e(s)})})}saveMessageCta(t,o){return this.fetchService.withDisableOnPreview(()=>new Promise((r,e)=>this.notifyIdentity(t,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${t}/campaign/message`,a({},i(o))).then(n=>{r(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveContactCta(t,o){return this.fetchService.withDisableOnPreview(()=>new Promise((r,e)=>this.notifyIdentity(t,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${t}/campaign/contact`,a({},i(o))).then(n=>{r(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveFormCta(t,o){return this.fetchService.withDisableOnPreview(()=>new Promise((r,e)=>this.notifyIdentity(t,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${t}/campaign/form`,i(o)).then(n=>r(n.data)).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveLinkCta(t,o){return this.fetchService.withDisableOnPreview(()=>new Promise((r,e)=>this.notifyIdentity(t,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${t}/campaign/link`,a({},i(o))).then(n=>{r(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}trackLinkClick(t,o){return this.fetchService.withDisableOnPreview(()=>new Promise((r,e)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${t}/campaign/link_click`,a({},i(o))).then(s=>{r(s)}).catch(s=>{console.error("could not submit cta",s),e(s)})}))}saveShareCta(t,o){return this.fetchService.withDisableOnPreview(()=>new Promise((r,e)=>this.notifyIdentity(t,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${t}/campaign/share`,a({},i(o))).then(n=>{r(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveShareByEmailCta(t,o,r){return this.fetchService.withDisableOnPreview(()=>new Promise((e,s)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${t}/shares`,{email:o,invitation_id:r}).then(()=>{e()}).catch(n=>{console.error("could not submit cta",n),s(n)})}))}getEnrichment(t){let o=(r,e)=>{this.fetchService.fetcher.get(`/live_board/v3/boards/${t}/board_configuration`).then(s=>{r(s)}).catch(s=>{console.error("could not get enrichment",s),e()})};return this.fetchService.withPartialContent(o,500,20)}notifyIdentity(t,o){return this.fetchService.options.analyticsServiceEndpoint?this.fetchService.fetcher.put("/live_board/v2/leads/identity",m(a({},o),{board_id:t})):new Promise(r=>r({status:200}))}};export{l as a};
