import{a as l}from"./chunk.R2MBWYP6.js";var r=e=>{let s={id:1,content_item_id:1,category_ids:[1],category_item_data:[{id:1,position:65536,route:"foo.bar.com/baz/boo/amazoncom-spend-less-smile-more"}],description:"item description",image:{id:21,displayable_section:null,fit:"cover",transformation:{},url:"https://images.folloze.com/image/fetch/http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"},is_gated:null,item_source:1,item_type:"snapshot",presented_item_type:"snapshot",likes_count:0,link_url:"https://www.amazon.com/",name:"Amazon.com. Spend less. Smile more.",seo_title:"Amazon.com. Spend less. Smile more.",open_in_new_tab:null,slug:"amazoncom-spend-less-smile-more",status:1,views_count:17,route:"foo.bar.com/baz/items/amazoncom-spend-less-smile-more",is_content_item:!1};e.onGet("/live_board/v1/boards/board_slug/").reply(200,{id:1,slug:"board_slug",online_items_count:0,organization_id:1,name:"board",seo_title:"board",is_ssl:!0}),e.onGet(/\/live_board\/v1\/boards\/(\d+)\/presenter/).reply(200,{company:"Folloze",email:"itamarg@folloze.com",headline:"VP of R&D",last_name:"Golan",linkedin:"https://www.linkedin.com/in/itamar-golan-014b9789/",name:"Itamar",phone:"054-3423804",photo:"//images.folloze.com/image/upload/fifb4zu6yfam4bzx0vdm.jpg",twitter:"itamarGolan1"}),e.onGet("/live_board/v2/categories/1").reply(200,{id:1,slug:"home",name:"home",seo_title:"home",category_type:1,parent_category_id:1,board_id:1,url:"url/home",items_count:3,subcategories_ids:[],description:"home category",images:[],route:"/foo/home"});let t=/\/live_board\/v2\/boards\/(\d+)\/categories/;e.onGet(t).reply(o=>{let a=parseInt(t.exec(o.url)[1]);return[200,{data:{"1":{id:1,slug:"home",name:"home",category_type:1,parent_category_id:1,board_id:a,url:"url/home",items_count:3,subcategories_ids:[],description:"home category",images:[],route:"/foo/home"},"2":{id:2,slug:"first",name:"first",category_type:1,parent_category_id:1,board_id:a,url:"url/first",items_count:3,subcategories_ids:[],description:"first category",images:[],route:"/foo/first"}},categories_ids:[1,2]}]}),e.onPost("/live_board/v1/chat/user_chat").reply(200,{token:"abcd",chat_id:123}),e.onGet("/live_board/v2/items/1").reply(200,s),e.onPost(/\/live_board\/v2\/boards\/(\d+)\/items/).reply(o=>[200,{item_ids:[1],data:{"1":l({},s)},most_viewed_item_id:1}]),e.onGet("/live_board/v2/boards/1/items_presence").reply(200,{has_items:!0}),e.onPost(/\/live_board\/v2\/items\/1\/likes/).reply(200),e.onPost("/live_board/v2/journeys/1").reply(200,{items:{"1":{category_id:null,category_name:null,category_slug:null,content_item_id:3,description:"previos item description",id:3,image:{fit:"cover",url:"https://images.folloze.com/image/fetch/http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"},is_gated:null,item_source:1,item_type:"snapshot",journey_index:1,liked_by_user:!1,link_url:"https://www.amazon.com/",name:"Amazon.com. Spend less. Smile more.",open_in_new_tab:null,secured:!0,slug:"amazoncom-spend-less-smile-more",snapshot_url:"https://folloze-optimized.s3.amazonaws.com/development/item/3/snapshot_content/png.png"},"2":{category_id:null,category_name:null,category_slug:null,content_item_id:1720,description:"current item description",id:1720,image:{fit:"cover",url:"https://images.folloze.com/image/fetch/https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},is_gated:null,item_source:1,item_type:"link",journey_index:2,liked_by_user:!1,link_url:"https://www.wikipedia.org/",name:"Wikipedia The Free Encyclopedia",open_in_new_tab:null,secured:!0,slug:"wikipedia-the-free-encyclopedia",snapshot_url:null},"3":{category_id:1,category_name:"home1",category_slug:"home1",content_item_id:3,description:"next item description",id:3,image:{fit:"cover",url:"https://images.folloze.com/image/fetch/http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"},is_gated:null,item_source:1,item_type:"snapshot",journey_index:3,liked_by_user:!1,link_url:"https://www.amazon.com/",name:"Amazon.com. Spend less. Smile more.",open_in_new_tab:null,secured:!0,slug:"amazoncom-spend-less-smile-more",snapshot_url:"https://folloze-optimized.s3.amazonaws.com/development/item/3/snapshot_content/png.png"}},items_count:4,journey_index:2,next_item_index:3,prev_item_index:1,current_item:{category_id:null,category_name:null,category_slug:null,content_item_id:1720,description:"current item description",id:1720,image:{fit:"cover",url:"https://images.folloze.com/image/fetch/https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},is_gated:null,item_source:1,item_type:"link",journey_index:2,liked_by_user:!1,link_url:"https://www.wikipedia.org/",name:"Wikipedia The Free Encyclopedia",open_in_new_tab:null,secured:!0,slug:"wikipedia-the-free-encyclopedia",snapshot_url:null}}),e.onGet("/live_board/v2/items/1/downloads").reply(200,{download_url:"https://url-for-download.com"}),e.onGet("/live_board/v2/downloads",{content_item_id:1}).reply(200,{download_url:"https://url-for-download.com"}),e.onGet("/live_board/v2/items/0/downloads").reply(400,{text:"This file is currently not available for download. Please try again later."}),e.onPost("/live_board/v1/content_items/1/snapshots").reply(200,{link_url:"abc.website.com",snapshot_url:"snapshot.website.com"}),e.onPost("/live_board/v1/content_items/1/analyses").reply(200,{secured:!0}),e.onGet("/live_board/v1/content_items/1/files").reply(200,{preview_metadata:{url:"preview.url.com"}}),e.onPost("/live_board/v1/boards/1/cookies_consents").reply(200),e.onPost("/live_board/v2/enrichments").reply(200),e.onGet("/live_board/v1/geo_location").reply(200,{city:"tel aviv",continent:"asia",country:"israel",country_code:"il",state:"ta"}),e.onGet("/live_board/v1/leads/me").reply(200,{id:1,name:"John",last_name:"Doe",company:"folloze",email:"john.doe@folloze.com",anon_guest:!1}),e.onPost("/live_board/v2/lead_validations",{board_id:1}).reply(200),e.onDelete("/live_board/v2/track_leads").reply(200,{id:1,name:"Guest1",last_name:null,company:null,email:null,anon_guest:!0}),e.onGet("/live_board/v2/boards/1/live_event").reply(200,{meeting_url:"https://vimeo.com/624909436"}),e.onGet("/live_board/v1/boards/1/organization_settings").reply(200,{privacy:{restrict_export_data:!1,privacy_warning_provider:"app",emails_privacy_disclaimer:{html:"<p><br></p><p></p>",is_enabled:!1},mail_blast_privacy_message:{html:"<p>Please add contacts that you have previous business relationship with</p>",is_enabled:!1},disable_share_button_on_board:!1,block_mail_blast_auto_approval:!1,block_mail_blast_quick_approval:!1}}),e.onPost("/live_board/v1/sessions").reply(200,{guid:"abc"}),e.onPost(/live_board\/v1\/boards\/(\d+)\/session_cookies/).reply(200,1),e.onGet(/live_board\/v2\/boards\/(\d+)\/forms\/(\d+)/).reply(200,{form:{form_type:1,name:"form name",form_title:"form title",submit_label:"form submit label",success_message:"form success message",submit_redirect_url:"https://www.folloze.com",fields:{name:{label:"Name",order:1,placeholder:"First Name",state:"optional",type:"text"},email:{label:"Email",order:2,placeholder:"your@email.here",state:"required",type:"email"}},script:"",auto_fill:!0,munchkin_id:"170-ADG-863",form_id:"5",base_url:"//app-sj25.marketo.com",custom_script:""},privacy_message:{is_standard:!0,message:{html:"<div>I'm a privacy message data</div>"},text_area:{html:"<div>I'm a privacy text area data</div>"},checkbox_area:{threshold:1,label:"checkbox label",checkboxes:[{label:"first checkbox",name:"first_checkbox",is_required:!1},{label:"second checkbox",name:"second_checkbox",is_required:!0}]}}}),e.onGet(/live_board\/v2\/campaign_elements\/(\d+)/).reply(o=>{let a={};return o.params.element_type=="1"?a={id:1,element_id:1,name:"footer",description:"The Folloze standard footer.",state:1,is_standard:!0,logo:{show:!0,url:"https://images.folloze.com/image/fetch/http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"},text:"my footer text",labels:[{text:"section",url:"https://www.folloze.com"}],background_color:"organce",show_in_item_view:!0,text_color:{type:0,color:"#eeeeee"},tracking_consent:{show:!0,button_label:"Do not track me",dialog_button_label:"my help text",dialog_text:"my dialog text"}}:o.params.element_type=="2"?a={can_close:!0,description:"The Folloze standard privacy message.",element_id:0,id:2,is_standard:!0,is_top:!0,link:"https://sites.google.com/a/folloze.com/terms-of-service/privacy-policy",message:"We use cookies to give you the best experience. if you do nothing, we'll assume that's ok",name:"Standard Privacy Message",state:1}:o.params.element_type=="3"&&(a={id:1,element_id:1,name:"form privacy message",state:1,is_standard:!0,message:{html:"<div>I'm a privacy message data</div>"},text_area:{html:"<div>I'm a privacy text area data</div>"},checkbox_area:{threshold:1,label:"checkbox label",checkboxes:[{label:"first checkbox",name:"first_checkbox",is_required:!1},{label:"second checkbox",name:"second_checkbox",is_required:!0}]}}),[200,a]}),e.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/message/).reply(200,{id:1,name:"name",last_name:"lastname",email:"email@company.com",company:null,anon_guest:!1,group_user:!1}),e.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/contact/).reply(200,{id:1,name:"name",last_name:"lastname",email:"email@company.com",company:null,anon_guest:!1,group_user:!1}),e.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/form/).reply(200,{id:1,name:"name",last_name:"lastname",email:"email@company.com",company:null,anon_guest:!1,group_user:!1}),e.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/link_click/).reply(o=>{let a={},i=200,n=JSON.parse(o.data);return(!n.target_type||!n.url)&&(i=400),[i,a]}),e.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/link/).reply(200,{id:1,email:"email@company.com",name:"name",last_name:"lastname",anon_guest:!1,company:null,group_user:!1}),e.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/share/).reply(200,{id:1,name:"name",last_name:"lastname",email:"email@company.com",company:null,anon_guest:!1,group_user:!1}),e.onPost(/live_board\/v1\/boards\/(\d+)\/shares/).reply(200),e.onGet(/live_board\/v3\/boards\/(\d+)\/board_configuration/).reply(200,{board_configuration:void 0,personalization_rules_results:{}})};export{r as rules};