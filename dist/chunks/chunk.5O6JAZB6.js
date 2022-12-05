var r=(a=>(a.designer="api",a.liveboard="live_board",a))(r||{}),d={api:{id:1,name:"App"},live_board:{id:2,name:"Campaign"}},l=(c=>(c[c.viewed_board=1]="viewed_board",c[c.viewed_item=2]="viewed_item",c[c.clicked_on_next_item=3]="clicked_on_next_item",c[c.clicked_on_previous_item=4]="clicked_on_previous_item",c[c.confirmed_cookie_usage=5]="confirmed_cookie_usage",c[c.clicked_on_share_button=6]="clicked_on_share_button",c[c.shared_a_campaign=7]="shared_a_campaign",c[c.liked_an_item=8]="liked_an_item",c[c.clicked_on_cta=9]="clicked_on_cta",c[c.downloaded_an_item=10]="downloaded_an_item",c[c.changed_category=11]="changed_category",c[c.searched_items=12]="searched_items",c))(l||{}),h=(o=>(o[o.clicked_on_logo=17]="clicked_on_logo",o[o.clicked_on_campaign_preview=18]="clicked_on_campaign_preview",o[o.viewed_design_tab=19]="viewed_design_tab",o[o.viewed_content_tab=20]="viewed_content_tab",o[o.changed_board_privacy_settings=47]="changed_board_privacy_settings",o[o.clicked_on_find_more_images=51]="clicked_on_find_more_images",o[o.clicked_on_search_image=52]="clicked_on_search_image",o[o.clicked_on_upload_an_image=53]="clicked_on_upload_an_image",o[o.uploaded_an_image=54]="uploaded_an_image",o[o.saved_campaign_design=76]="saved_campaign_design",o[o.discarded_campaign_design_changes=77]="discarded_campaign_design_changes",o[o.configured_personalization=261]="configured_personalization",o[o.deleted_personalization=262]="deleted_personalization",o[o.created_new_block=282]="created_new_block",o[o.added_rule=283]="added_rule",o[o.added_items_to_visible_to_everyone=284]="added_items_to_visible_to_everyone",o[o.changed_rule=285]="changed_rule",o[o.changed_block_title=286]="changed_block_title",o[o.saved_personalization_changes=290]="saved_personalization_changes",o[o.discarded_personalization_changes=291]="discarded_personalization_changes",o[o.change_rule_set_priority=292]="change_rule_set_priority",o[o.add_new_section=325]="add_new_section",o[o.add_floating_section=326]="add_floating_section",o[o.delete_section=327]="delete_section",o[o.delete_floating_section=328]="delete_floating_section",o[o.edit_section=329]="edit_section",o[o.publish_board=330]="publish_board",o[o.enable_personalization=331]="enable_personalization",o[o.create_personalization_rule=332]="create_personalization_rule",o[o.preview_board=333]="preview_board",o[o.archive_board=334]="archive_board",o))(h||{}),m=class{constructor(i){this.fetchService=i}trackLeadBoardView(i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`/live_board/v2/boards/${i}/lead_views`).catch(a=>{throw console.error("could not track lead board view",a),a}))}trackLeadItemView(i,a){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`/live_board/v2/items/${i}/lead_views`,{guid:a}).catch(_=>{throw console.error("could not track lead item view",_),_}))}trackEvent(i,a,_){return this.fetchService.fetcher.post(`/${_}/v1/tracking`,{event:{id:i,data:a,platform:{id:d[_].id,name:d[_].name}}}).catch(t=>{throw console.error("could not track action",t),t})}sendPing(i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.pingEndpoint}/pings`,{lead_id:i.leadId,board_id:i.boardId,item_id:i.itemId,client_guid:i.guid}))}validateSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/session_validations").catch(i=>{throw console.error("could not validate session",i),i}))}createSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/sessions").catch(i=>{throw console.error("could not create session",i),i}))}updateInvitationUsed(i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.put(`/live_board/v2/invitation_wrappers/${i}`).catch(a=>{throw console.error("could not update invitation wrapper",a),a}))}};export{r as a,l as b,h as c,m as d};
