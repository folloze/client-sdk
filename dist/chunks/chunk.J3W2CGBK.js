import{a as h}from"./chunk.TWUQ6LLZ.js";import{y as i}from"./chunk.YMAHRAD4.js";import{a,b as m}from"./chunk.KVVA2TM3.js";var l=class{constructor(r){this.fetchService=r}getBoard(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v1/boards/${r}/`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get board"),t(e)})})}getSellerInformation(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v1/boards/${r}/presenter`,{params:{token:this.fetchService.urlToken}}).then(e=>{e.status==206?setTimeout(()=>{this.getSellerInformation(r).then(o).catch(t)},2e3):o(e.data)}).catch(e=>{console.error("could not get seller"),t(e)})})}getCategory(r,o,t){return new Promise((e,s)=>{this.fetchService.fetcher.get(`/live_board/v2/categories/${r}`,{params:{board_id:o,by_slug:t}}).then(n=>{e(n.data)}).catch(n=>{console.error("could not get category",n),s(n)})})}getCategories(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${r}/categories`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get categories",e),t(e)})})}getUserChat(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.post("/live_board/v1/chat/user_chat",{board_id:r,lead_id:o}).then(s=>{t(s.data)}).catch(s=>{console.error("could not get user chat",s),e(s)})})}getItem(r,o,t,e){return new Promise((s,n)=>{this.fetchService.fetcher.get(`/live_board/v2/items/${r}`,{params:{by_slug:t,board_id:o,with_preview_metadata:e}}).then(c=>{s(c.data)}).catch(c=>{console.error("could not get item",c),n(c)})})}getItems(r){return new Promise((o,t)=>{this.fetchService.fetcher.post(`/live_board/v2/boards/${r.boardId}/items`,i(r)).then(e=>{e.status==206?setTimeout(()=>{this.getItems(r).then(o).catch(t)},2e3):o(e.data)}).catch(e=>{console.error("could not get items"),t(e)})})}getHasItems(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${r}/items_presence`).then(e=>{e.status==206?setTimeout(()=>{this.getHasItems(r).then(o).catch(t)},2e3):o(e.data)}).catch(e=>{console.error("could not get has items"),t(e)})})}likeItem(r){return new Promise((o,t)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/items/${r}/likes`).then(()=>{o()}).catch(e=>{console.error("could not like item",e),t(e)})})}getJourneyItems(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.post(`/live_board/v2/journeys/${r}`,i(o)).then(s=>{t(s.data)}).catch(s=>{console.error("could not get journey items",s),e(s)})})}getItemDownloadUrl(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v2/items/${r}/downloads`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get download url",e),t(e)})})}createSnapshotUrl(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.post(`/live_board/v1/content_items/${r}/snapshots`,{guid:o}).then(s=>{t(s.data)}).catch(s=>{console.error("could not create snapshot",s),e(s)})})}createItemAnalysis(r){return new Promise((o,t)=>{this.fetchService.fetcher.post(`/live_board/v1/content_items/${r}/analyses`).then(e=>{o(e.data)}).catch(e=>{console.error("could not create analysis",e),t(e)})})}getFileMetadata(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v1/content_items/${r}/files`).then(e=>{e.status==206?setTimeout(()=>{this.getFileMetadata(r).then(o).catch(t)},2e3):o(e.data)}).catch(e=>{console.error("could not get file url",e),t(e)})})}setCookiesConsent(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.post(`/live_board/v1/boards/${r}/cookies_consents`,a({},i(o))).then(s=>{t(s.data)}).catch(s=>{console.error("could not get file url",s),e(s)})})}updateEnrichment(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.post("/live_board/v2/enrichments",{type:r,enrichment_data:o}).then(()=>{t()}).catch(s=>{console.error("could not update enrichment",s),e(s)})})}updateCookieMatching(r,o,t){return new Promise((e,s)=>{this.fetchService.fetcher.post("/live_board/v2/cookie_matchings",{type:r,value:o,success:t}).then(()=>{e()}).catch(n=>{console.error("could not update cookie matching",n),s(n)})})}getGeoLocation(){return this.fetchService.withDisableOnPreview(()=>new Promise((r,o)=>{this.fetchService.fetcher.get("/live_board/v1/geo_location").then(t=>{r(t.data)}).catch(t=>{console.error("could not get geolocation",t),o(t)})}))}getCurrentLead(){return new Promise((r,o)=>{this.fetchService.fetcher.get("/live_board/v1/leads/me").then(t=>{r(t.data)}).catch(t=>{console.error("could not get current lead",t),o(t)})})}validateLead(r){return new Promise((o,t)=>{this.fetchService.fetcher.post("/live_board/v2/lead_validations",{board_id:r}).then(()=>{o()}).catch(e=>{console.error("could not validate lead",e),t(e)})})}stopTrackingForSession(){return new Promise((r,o)=>{this.fetchService.fetcher.delete("/live_board/v2/track_leads").then(t=>{r(t.data)}).catch(t=>{console.error("could not get stop tracking lead",t),o(t)})})}getLiveEventUrls(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${r}/live_event`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get current lead",e),t(e)})})}getOrganizationSettings(r){return new Promise((o,t)=>{this.fetchService.fetcher.get(`/live_board/v1/boards/${r}/organization_settings`).then(e=>{o(e.data)}).catch(e=>{console.error("could not get organization settings",e),t(e)})})}setSessionCookie(r){return new Promise((o,t)=>{this.fetchService.fetcher.post(`/live_board/v1/boards/${r}/session_cookies`).then(e=>{o(e.data)}).catch(e=>{console.error("could not create session cookie",e),t(e)})})}getFormData(r,o,t=null){return new Promise((e,s)=>{this.fetchService.fetcher.get(`/live_board/v2/boards/${r}/forms/${o}`,{params:{privacy_message_id:t}}).then(n=>{e(n.data)}).catch(n=>{console.error("could not get form data",n),s(n)})})}getPrivacyMessage(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${o}`,{params:{element_type:h.privacy_message,board_id:r}}).then(s=>t(s.data)).catch(s=>{console.error("could not get form privacy message",s),e(s)})})}getFooter(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${o}`,{params:{element_type:h.footer,board_id:r}}).then(s=>t(s.data)).catch(s=>{console.error("could not get form privacy message",s),e(s)})})}getFormPrivacyMessage(r,o){return new Promise((t,e)=>{this.fetchService.fetcher.get(`/live_board/v2/campaign_elements/${o}`,{params:{element_type:h.form_privacy_message,board_id:r}}).then(s=>t(s.data)).catch(s=>{console.error("could not get form privacy message",s),e(s)})})}saveMessageCta(r,o){return this.fetchService.withDisableOnPreview(()=>new Promise((t,e)=>this.notifyIdentity(r,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${r}/campaign/message`,a({},i(o))).then(n=>{t(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveContactCta(r,o){return this.fetchService.withDisableOnPreview(()=>new Promise((t,e)=>this.notifyIdentity(r,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${r}/campaign/contact`,a({},i(o))).then(n=>{t(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveFormCta(r,o){return this.fetchService.withDisableOnPreview(()=>new Promise((t,e)=>this.notifyIdentity(r,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${r}/campaign/form`,i(o)).then(n=>t(n.data)).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveLinkCta(r,o){return this.fetchService.withDisableOnPreview(()=>new Promise((t,e)=>this.notifyIdentity(r,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${r}/campaign/link`,a({},i(o))).then(n=>{t(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}trackLinkClick(r,o){return this.fetchService.withDisableOnPreview(()=>new Promise((t,e)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${r}/campaign/link_click`,a({},i(o))).then(s=>{t(s)}).catch(s=>{console.error("could not submit cta",s),e(s)})}))}saveShareCta(r,o){return this.fetchService.withDisableOnPreview(()=>new Promise((t,e)=>this.notifyIdentity(r,o).then(s=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${r}/campaign/share`,a({},i(o))).then(n=>{t(n.data)}).catch(n=>{console.error("could not submit cta",n),e(n)})})))}saveShareByEmailCta(r,o,t){return this.fetchService.withDisableOnPreview(()=>new Promise((e,s)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${r}/shares`,{email:o,invitation_id:t}).then(()=>{e()}).catch(n=>{console.error("could not submit cta",n),s(n)})}))}getEnrichment(r){let o=(t,e)=>{this.fetchService.fetcher.get(`/live_board/v3/boards/${r}/board_configuration`).then(s=>{t(s)}).catch(s=>{console.error("could not get enrichment",s),e()})};return this.fetchService.withPartialContent(o,500,20)}notifyIdentity(r,o){return this.fetchService.options.analyticsServiceEndpoint?this.fetchService.fetcher.put("/live_board/v2/leads/identity",m(a({},o),{board_id:r})):new Promise(t=>t({status:200}))}};export{l as a};
