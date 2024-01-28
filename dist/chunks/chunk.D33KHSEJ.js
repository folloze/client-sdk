var n=(c=>(c[c.viewed_board=1]="viewed_board",c[c.viewed_item=2]="viewed_item",c[c.clicked_on_next_item=3]="clicked_on_next_item",c[c.clicked_on_previous_item=4]="clicked_on_previous_item",c[c.confirmed_cookie_usage=5]="confirmed_cookie_usage",c[c.clicked_on_share_button=6]="clicked_on_share_button",c[c.shared_a_campaign=7]="shared_a_campaign",c[c.liked_an_item=8]="liked_an_item",c[c.clicked_on_cta=9]="clicked_on_cta",c[c.downloaded_an_item=10]="downloaded_an_item",c[c.changed_category=11]="changed_category",c[c.searched_items=12]="searched_items",c))(n||{}),h=(o=>(o[o.clicked_on_logo=17]="clicked_on_logo",o[o.clicked_on_campaign_preview=18]="clicked_on_campaign_preview",o[o.viewed_design_tab=19]="viewed_design_tab",o[o.viewed_content_tab=20]="viewed_content_tab",o[o.changed_board_privacy_settings=47]="changed_board_privacy_settings",o[o.clicked_on_find_more_images=51]="clicked_on_find_more_images",o[o.clicked_on_search_image=52]="clicked_on_search_image",o[o.clicked_on_upload_an_image=53]="clicked_on_upload_an_image",o[o.uploaded_an_image=54]="uploaded_an_image",o[o.saved_campaign_design=76]="saved_campaign_design",o[o.discarded_campaign_design_changes=77]="discarded_campaign_design_changes",o[o.configured_personalization=261]="configured_personalization",o[o.deleted_personalization=262]="deleted_personalization",o[o.created_new_block=282]="created_new_block",o[o.added_rule=283]="added_rule",o[o.added_items_to_visible_to_everyone=284]="added_items_to_visible_to_everyone",o[o.changed_rule=285]="changed_rule",o[o.changed_block_title=286]="changed_block_title",o[o.saved_personalization_changes=290]="saved_personalization_changes",o[o.discarded_personalization_changes=291]="discarded_personalization_changes",o[o.change_rule_set_priority=292]="change_rule_set_priority",o[o.add_new_section=325]="add_new_section",o[o.add_floating_section=326]="add_floating_section",o[o.delete_section=327]="delete_section",o[o.delete_floating_section=328]="delete_floating_section",o[o.edit_section=329]="edit_section",o[o.publish_board=330]="publish_board",o[o.preview_board=331]="preview_board",o[o.edit_editable_component=332]="edit_editable_component",o[o.add_personalization_rule_from_designer=333]="add_personalization_rule_from_designer",o))(h||{}),_=class{constructor(t){this.fetchService=t}trackLeadBoardView(t){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/boards/${t}/lead_views`).catch(i=>{throw console.error("could not track lead board view",i),i}))}trackLeadItemView(t,i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/items/${t}/lead_views`,{guid:i}).catch(e=>{throw console.error("could not track lead item view",e),e}))}trackLeadContentView(t,i,e,r){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${t}/lead_views`,{guid:e,item_id:r,source_type:i}).catch(d=>{throw console.error("could not track lead item view",d),d}))}trackUserEvent(t,i){return this.fetchService.fetcher.post("/api/v1/tracking",{event:{id:t,data:i,platform:{id:1,name:"App"}}}).catch(e=>{throw console.error("could not track action",e),e})}trackLeadEvent(t,i){return this.fetchService.fetcher.post("/live_board/v1/tracking",{event:{id:t,data:i,platform:{id:2,name:"Campaign"}}}).catch(e=>{throw console.error("could not track action",e),e})}sendPing(t){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.pingEndpoint}/pings`,{lead_id:t.leadId,board_id:t.boardId,item_id:t.itemId,content_item_id:t.contentItemId,client_guid:t.guid}))}validateSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/session_validations").catch(t=>{throw console.error("could not validate session",t),t}))}createSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/sessions").catch(t=>{throw console.error("could not create session",t),t}))}updateInvitationUsed(t){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.put(`/live_board/v2/invitation_wrappers/${t}`).catch(i=>{throw console.error("could not update invitation wrapper",i),i}))}sendBeacon(t){var i;if((i=this.fetchService.options)==null?void 0:i.isPreview)return!0;try{let e=`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/lead_events`,r=JSON.stringify({events:t});return navigator.sendBeacon(e,r)}catch(e){console.error("could not send beacon",e)}}trackDownloadFile(t,i,e){return new Promise((r,d)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/downloads`,{source_type:t,content_item_id:i,item_id:e}).then(()=>{r()}).catch(a=>{console.error("could not track download content",a),d(a)})})}trackDownloadFileV2(t,i,e){return new Promise((r,d)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${i}/downloads`,{source_type:t,item_id:e}).then(()=>{r()}).catch(a=>{console.error("could not track download content",a),d(a)})})}trackLeadLikeContent(t,i,e){return new Promise((r,d)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/likes`,{source_type:t,content_item_id:i,item_id:e}).then(()=>{r()}).catch(a=>{console.error("could not track like content",a),d(a)})})}trackLeadLikeContentV2(t,i,e){return new Promise((r,d)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${i}/likes`,{source_type:t,item_id:e}).then(()=>{r()}).catch(a=>{console.error("could not track like content",a),d(a)})})}publishLeadEvents(t,i,e){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v2/sphere/publish_lead_events",{content_item_id:t,timestamp:i,event_name:e}).catch(r=>{throw console.error("could not update invitation wrapper",r),r}))}};export{n as a,h as b,_ as c};
