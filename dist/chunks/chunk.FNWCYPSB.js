var d=(i=>(i[i.viewed_board=1]="viewed_board",i[i.viewed_item=2]="viewed_item",i[i.clicked_on_next_item=3]="clicked_on_next_item",i[i.clicked_on_previous_item=4]="clicked_on_previous_item",i[i.confirmed_cookie_usage=5]="confirmed_cookie_usage",i[i.clicked_on_share_button=6]="clicked_on_share_button",i[i.shared_a_campaign=7]="shared_a_campaign",i[i.liked_an_item=8]="liked_an_item",i[i.clicked_on_cta=9]="clicked_on_cta",i[i.downloaded_an_item=10]="downloaded_an_item",i[i.changed_category=11]="changed_category",i[i.searched_items=12]="searched_items",i))(d||{}),_=(o=>(o[o.clicked_on_logo=17]="clicked_on_logo",o[o.clicked_on_campaign_preview=18]="clicked_on_campaign_preview",o[o.viewed_design_tab=19]="viewed_design_tab",o[o.viewed_content_tab=20]="viewed_content_tab",o[o.changed_board_privacy_settings=47]="changed_board_privacy_settings",o[o.clicked_on_find_more_images=51]="clicked_on_find_more_images",o[o.clicked_on_search_image=52]="clicked_on_search_image",o[o.clicked_on_upload_an_image=53]="clicked_on_upload_an_image",o[o.uploaded_an_image=54]="uploaded_an_image",o[o.saved_campaign_design=76]="saved_campaign_design",o[o.discarded_campaign_design_changes=77]="discarded_campaign_design_changes",o[o.configured_personalization=261]="configured_personalization",o[o.deleted_personalization=262]="deleted_personalization",o[o.created_new_block=282]="created_new_block",o[o.added_rule=283]="added_rule",o[o.added_items_to_visible_to_everyone=284]="added_items_to_visible_to_everyone",o[o.changed_rule=285]="changed_rule",o[o.changed_block_title=286]="changed_block_title",o[o.saved_personalization_changes=290]="saved_personalization_changes",o[o.discarded_personalization_changes=291]="discarded_personalization_changes",o[o.change_rule_set_priority=292]="change_rule_set_priority",o[o.add_new_section=325]="add_new_section",o[o.add_floating_section=326]="add_floating_section",o[o.delete_section=327]="delete_section",o[o.delete_floating_section=328]="delete_floating_section",o[o.edit_section=329]="edit_section",o[o.publish_board=330]="publish_board",o[o.preview_board=331]="preview_board",o[o.edit_editable_component=332]="edit_editable_component",o[o.add_personalization_rule_from_designer=333]="add_personalization_rule_from_designer",o))(_||{}),h=class{constructor(c){this.fetchService=c}trackLeadBoardView(c){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/boards/${c}/lead_views`).catch(t=>{throw console.error("could not track lead board view",t),t}))}trackLeadItemView(c,t){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/items/${c}/lead_views`,{guid:t}).catch(a=>{throw console.error("could not track lead item view",a),a}))}trackUserEvent(c,t){return this.fetchService.fetcher.post("/api/v1/tracking",{event:{id:c,data:t,platform:{id:1,name:"App"}}}).catch(a=>{throw console.error("could not track action",a),a})}trackLeadEvent(c,t){return this.fetchService.fetcher.post("/live_board/v1/tracking",{event:{id:c,data:t,platform:{id:2,name:"Campaign"}}}).catch(a=>{throw console.error("could not track action",a),a})}sendPing(c){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.pingEndpoint}/pings`,{lead_id:c.leadId,board_id:c.boardId,item_id:c.itemId,content_item_id:c.contentItemId,client_guid:c.guid}))}validateSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/session_validations").catch(c=>{throw console.error("could not validate session",c),c}))}createSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/sessions").catch(c=>{throw console.error("could not create session",c),c}))}updateInvitationUsed(c){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.put(`/live_board/v2/invitation_wrappers/${c}`).catch(t=>{throw console.error("could not update invitation wrapper",t),t}))}sendBeacon(c){var t;if((t=this.fetchService.options)==null?void 0:t.isPreview)return!0;try{let a=`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/lead_events`,r=JSON.stringify({events:c});return navigator.sendBeacon(a,r)}catch(a){console.error("could not send beacon",a)}}};export{d as a,_ as b,h as c};