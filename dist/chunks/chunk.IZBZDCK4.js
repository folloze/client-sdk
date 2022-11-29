var _=(r=>(r.designer="api",r.liveboard="live_board",r))(_||{}),d={api:"App",live_board:"Campaign"},h=(o=>(o[o.viewed_board=1]="viewed_board",o[o.viewed_item=2]="viewed_item",o[o.clicked_on_next_item=3]="clicked_on_next_item",o[o.clicked_on_previous_item=4]="clicked_on_previous_item",o[o.confirmed_cookie_usage=5]="confirmed_cookie_usage",o[o.clicked_on_share_button=6]="clicked_on_share_button",o[o.shared_a_campaign=7]="shared_a_campaign",o[o.liked_an_item=8]="liked_an_item",o[o.clicked_on_cta=9]="clicked_on_cta",o[o.downloaded_an_item=10]="downloaded_an_item",o[o.changed_category=11]="changed_category",o[o.searched_items=12]="searched_items",o))(h||{}),l=(c=>(c[c.clicked_on_logo=17]="clicked_on_logo",c[c.clicked_on_campaign_preview=18]="clicked_on_campaign_preview",c[c.viewed_design_tab=19]="viewed_design_tab",c[c.viewed_content_tab=20]="viewed_content_tab",c[c.changed_board_privacy_settings=47]="changed_board_privacy_settings",c[c.clicked_on_find_more_images=51]="clicked_on_find_more_images",c[c.clicked_on_search_image=52]="clicked_on_search_image",c[c.clicked_on_upload_an_image=53]="clicked_on_upload_an_image",c[c.uploaded_an_image=54]="uploaded_an_image",c[c.saved_campaign_design=76]="saved_campaign_design",c[c.discarded_campaign_design_changes=77]="discarded_campaign_design_changes",c[c.configured_personalization=261]="configured_personalization",c[c.deleted_personalization=262]="deleted_personalization",c[c.created_new_block=282]="created_new_block",c[c.added_rule=283]="added_rule",c[c.added_items_to_visible_to_everyone=284]="added_items_to_visible_to_everyone",c[c.changed_rule=285]="changed_rule",c[c.changed_block_title=286]="changed_block_title",c[c.saved_personalization_changes=290]="saved_personalization_changes",c[c.discarded_personalization_changes=291]="discarded_personalization_changes",c[c.change_rule_set_priority=292]="change_rule_set_priority",c))(l||{}),e=class{constructor(i){this.fetchService=i}trackLeadBoardView(i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`/live_board/v2/boards/${i}/lead_views`).catch(r=>{throw console.error("could not track lead board view",r),r}))}trackLeadItemView(i,r){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`/live_board/v2/items/${i}/lead_views`,{guid:r}).catch(t=>{throw console.error("could not track lead item view",t),t}))}trackEvent(i,r,t){return this.fetchService.fetcher.post(`/${t}/v1/tracking`,{event:{id:i,data:r,platform:d[t]}}).catch(a=>{throw console.error("could not track action",a),a})}sendPing(i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.pingEndpoint}/pings`,{lead_id:i.leadId,board_id:i.boardId,item_id:i.itemId,client_guid:i.guid}))}validateSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/session_validations").catch(i=>{throw console.error("could not validate session",i),i}))}createSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/sessions").catch(i=>{throw console.error("could not create session",i),i}))}updateInvitationUsed(i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.put(`/live_board/v2/invitation_wrappers/${i}`).catch(r=>{throw console.error("could not update invitation wrapper",r),r}))}};export{_ as a,h as b,l as c,e as d};