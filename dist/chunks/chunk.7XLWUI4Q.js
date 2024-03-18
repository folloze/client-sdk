var _={attended_event:0,viewed_recording:2},d=class{constructor(e){this.fetchService=e}trackAttendance(e,i){return this.fetchService.withDisableOnPreview(()=>{let o=e==="create"?"post":"put";return this.fetchService.fetcher[o](`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${i.boardId}/attend_activities`,{widget_id:i.widgetId,event_name:i.eventName,guid:i.guid,activity_type:this.getActivityCode(i.activityType)}).catch(r=>{throw console.error("Could not track event attendence",r),r})})}getActivityCode(e){return _[e]}};var l=(c=>(c[c.viewed_board=1]="viewed_board",c[c.viewed_item=2]="viewed_item",c[c.clicked_on_next_item=3]="clicked_on_next_item",c[c.clicked_on_previous_item=4]="clicked_on_previous_item",c[c.confirmed_cookie_usage=5]="confirmed_cookie_usage",c[c.clicked_on_share_button=6]="clicked_on_share_button",c[c.shared_a_campaign=7]="shared_a_campaign",c[c.liked_an_item=8]="liked_an_item",c[c.clicked_on_cta=9]="clicked_on_cta",c[c.downloaded_an_item=10]="downloaded_an_item",c[c.changed_category=11]="changed_category",c[c.searched_items=12]="searched_items",c))(l||{}),s=(t=>(t[t.clicked_on_logo=17]="clicked_on_logo",t[t.clicked_on_campaign_preview=18]="clicked_on_campaign_preview",t[t.viewed_design_tab=19]="viewed_design_tab",t[t.viewed_content_tab=20]="viewed_content_tab",t[t.changed_board_privacy_settings=47]="changed_board_privacy_settings",t[t.clicked_on_find_more_images=51]="clicked_on_find_more_images",t[t.clicked_on_search_image=52]="clicked_on_search_image",t[t.clicked_on_upload_an_image=53]="clicked_on_upload_an_image",t[t.uploaded_an_image=54]="uploaded_an_image",t[t.saved_campaign_design=76]="saved_campaign_design",t[t.discarded_campaign_design_changes=77]="discarded_campaign_design_changes",t[t.configured_personalization=261]="configured_personalization",t[t.deleted_personalization=262]="deleted_personalization",t[t.created_new_block=282]="created_new_block",t[t.added_rule=283]="added_rule",t[t.added_items_to_visible_to_everyone=284]="added_items_to_visible_to_everyone",t[t.changed_rule=285]="changed_rule",t[t.changed_block_title=286]="changed_block_title",t[t.saved_personalization_changes=290]="saved_personalization_changes",t[t.discarded_personalization_changes=291]="discarded_personalization_changes",t[t.change_rule_set_priority=292]="change_rule_set_priority",t[t.add_new_section=325]="add_new_section",t[t.add_floating_section=326]="add_floating_section",t[t.delete_section=327]="delete_section",t[t.delete_floating_section=328]="delete_floating_section",t[t.edit_section=329]="edit_section",t[t.publish_board=330]="publish_board",t[t.preview_board=331]="preview_board",t[t.edit_editable_component=332]="edit_editable_component",t[t.add_personalization_rule_from_designer=333]="add_personalization_rule_from_designer",t))(s||{}),m=class{constructor(e){this.fetchService=e,this.liveEvent=new d(e)}trackLeadBoardView(e){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/boards/${e}/lead_views`).catch(i=>{throw console.error("could not track lead board view",i),i}))}trackLeadItemView(e,i){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/items/${e}/lead_views`,{guid:i}).catch(o=>{throw console.error("could not track lead item view",o),o}))}trackLeadContentView(e,i,o,r){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${e}/lead_views`,{guid:o,item_id:r,source_type:i}).catch(n=>{throw console.error("could not track lead item view",n),n}))}trackUserEvent(e,i){return this.fetchService.fetcher.post("/api/v1/tracking",{event:{id:e,data:i,platform:{id:1,name:"App"}}}).catch(o=>{throw console.error("could not track action",o),o})}trackLeadEvent(e,i){return this.fetchService.fetcher.post("/live_board/v1/tracking",{event:{id:e,data:i,platform:{id:2,name:"Campaign"}}}).catch(o=>{throw console.error("could not track action",o),o})}sendPing(e){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post(`${this.fetchService.options.pingEndpoint}/pings`,{lead_id:e.leadId,board_id:e.boardId,item_id:e.itemId,content_item_id:e.contentItemId,client_guid:e.guid}))}validateSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/session_validations").catch(e=>{throw console.error("could not validate session",e),e}))}createSession(){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v1/sessions").catch(e=>{throw console.error("could not create session",e),e}))}updateInvitationUsed(e){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.put(`/live_board/v2/invitation_wrappers/${e}`).catch(i=>{throw console.error("could not update invitation wrapper",i),i}))}sendBeacon(e){var i;if((i=this.fetchService.options)==null?void 0:i.isPreview)return!0;try{let o=`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/lead_events`,r=JSON.stringify({events:e});return navigator.sendBeacon(o,r)}catch(o){console.error("could not send beacon",o)}}trackDownloadFile(e,i,o){return new Promise((r,n)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/downloads`,{source_type:e,content_item_id:i,item_id:o}).then(()=>{r()}).catch(a=>{console.error("could not track download content",a),n(a)})})}trackDownloadFileV2(e,i,o){return new Promise((r,n)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${i}/downloads`,{source_type:e,item_id:o}).then(()=>{r()}).catch(a=>{console.error("could not track download content",a),n(a)})})}trackLeadLikeContent(e,i,o){return new Promise((r,n)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/likes`,{source_type:e,content_item_id:i,item_id:o}).then(()=>{r()}).catch(a=>{console.error("could not track like content",a),n(a)})})}trackLeadLikeContentV2(e,i,o){return new Promise((r,n)=>{this.fetchService.fetcher.post(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${i}/likes`,{source_type:e,item_id:o}).then(()=>{r()}).catch(a=>{console.error("could not track like content",a),n(a)})})}publishLeadEvents(e,i,o){return this.fetchService.withDisableOnPreview(()=>this.fetchService.fetcher.post("/live_board/v2/sphere/publish_lead_events",{content_item_id:e,timestamp:i,event_name:o}).catch(r=>{throw console.error("could not update invitation wrapper",r),r}))}};export{l as a,s as b,m as c};