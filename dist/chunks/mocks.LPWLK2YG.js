import{a as o}from"./chunk.TWUQ6LLZ.js";import"./chunk.KVVA2TM3.js";var T=e=>{let l="https://api.cloudinary.com/v1_1/folloze/image/upload",r={auto_assign_inviter:{},campaign:{banner:{},contact_card:{card:{}},footer:{},general:{},header:{logo:{image:{merge_tag_ids:[18],rules:[{attribute_id:18,attribute_values:["any value"],id:"rule_776.2880741331646",index:0,result:{source_type:2,isLoading:!1}}]}}},items:{},promotion:{items:{0:{}}}},is_enabled:!0},n=/api\/v1\/boards\/(\d+)\/publish/;e.onPost(n).reply(a=>{if(parseInt(n.exec(a.url)[1])===666)return[208];let t={activation_state:{online:!1},allow_embedding:!1,auto_upgrade_widgets:!1,config:void 0,config_info:{published_hash:"",state:void 0},id:0,integrations:{},is_ssl:!1,is_v3_live:!0,landing_page:"registration",name:"",online_items_count:0,organization_id:0,privacy:{cookie_management:void 0,element_id:0,personal_info_concealment:!1,privacy_warning_check:!1,regulated_countries_only:!1},slug:""};return[200,{activation_state:{online:!1},allow_embedding:!1,auto_upgrade_widgets:!1,config:void 0,config_info:{published_hash:"",state:void 0},id:0,integrations:{},is_ssl:!1,landing_page:"registration",name:"",online_items_count:0,organization_id:0,privacy:{cookie_management:void 0,element_id:0,personal_info_concealment:!1,privacy_warning_check:!1,regulated_countries_only:!1},slug:""}]}),e.onGet("/api/v1/image_gallery",{params:{organization_id:1,bank_category:"banners",type:"campaign"}}).reply(200,[{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293464/heroimage08_cac4xn.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293367/heroimage05_fv80gz.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293483/heroimage09_hv8u2j.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293654/heroimage13_vj9xog.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293397/heroimage07_kfdzpt.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293642/heroimage12_scxoe5.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293358/heroimage04_juy5ao.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293629/heroimage11_tmy9fd.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293378/heroimage06_vnii1d.png"},{fit:"cover",url:"https://images.folloze.com/image/upload/v1451293493/heroimage10_jgxm62.png"},{url:"https://images.folloze.com/image/upload/heroimage03_wpxdzu.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimages06_compressed_lgozdi.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimages04_compressed_z9xtqb.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimages08_compressed_s9lkse.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimages03_compressed_sycsdr.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimage02_dr1wdi.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimage14_oglfdj.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimages12_compressed_rlzfx5.jpg",fit:"cover"},{url:"https://images.folloze.com/image/upload/heroimages11_compressed_uztxpu.jpg",fit:"cover"}]),e.onGet("/api/v1/image_gallery",{params:{organization_id:1,bank_category:"icons",type:"icon"}}).reply(200,[{url:"https://images.folloze.com/image/upload/v1640686386/svzkkcxgxvekrdexyisz.png",fit:"cover"},{url:"https://images.folloze.com/image/upload/v1640686314/ilmmffwrlm2rv8quriml.png",fit:"cover"},{url:"https://images.folloze.com/image/upload/v1640686372/o9tfjjaynitx01czqpmy.png",fit:"cover"},{url:"https://images.folloze.com/image/upload/v1640686376/cjlc8wmtndwp8rfcweq3.png",fit:"cover"}]),e.onGet("/api/v1/image_gallery",{params:{organization_id:1,bank_category:"logos",type:"campaign"}}).reply(200,[{url:"https://images.folloze.com/image/upload/v1640686386/svzkkcxgxvekrdexyisz.png",fit:"cover"},{url:"https://images.folloze.com/image/upload/v1640686314/ilmmffwrlm2rv8quriml.png",fit:"cover"},{url:"https://images.folloze.com/image/upload/v1640686372/o9tfjjaynitx01czqpmy.png",fit:"cover"}]),e.onGet("/api/v1/image_gallery",{params:{organization_id:1,bank_category:"mobile_banners",type:"campaign"}}).reply(200,[{url:"https://images.folloze.com/image/upload/v1640686386/svzkkcxgxvekrdexyisz.png",fit:"cover"},{url:"https://images.folloze.com/image/upload/v1640686314/ilmmffwrlm2rv8quriml.png",fit:"cover"}]),e.onGet("/api/v1/image_gallery").reply(a=>{if(a.params.type!=="search")throw new Error("this mock is only for search type query");if(!a.params.query)throw new Error("there is no query attached to this request");return[200,[{url:"https://images.folloze.com/image/fetch/https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555446925/shape/mentalfloss/800px-cotton_harlequin_bugs.jpg?itok=GHLRk9OC",fit:"cover"},{url:"https://images.folloze.com/image/fetch/https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555446925/shape/mentalfloss/800px-cotton_harlequin_bugs.jpg?itok=GHLRk9OC",fit:"contained"},{url:"https://images.folloze.com/image/fetch/https://blog.growingwithscience.com/wp-content/uploads/2012/01/2011-mesquite-bug.jpg",fit:"cover"},{url:"https://images.folloze.com/image/fetch/https://blog.growingwithscience.com/wp-content/uploads/2012/01/2011-mesquite-bug.jpg",fit:"contained"},{url:"https://images.folloze.com/image/fetch/https://i2.wp.com/www.gardeningknowhow.com/wp-content/uploads/2014/07/milkweed-bug.jpg?fit=1722,1115&ssl=1",fit:"cover"},{url:"https://images.folloze.com/image/fetch/https://i2.wp.com/www.gardeningknowhow.com/wp-content/uploads/2014/07/milkweed-bug.jpg?fit=1722,1115&ssl=1",fit:"contained"},{url:"https://images.folloze.com/image/fetch/https://cdn.britannica.com/44/125544-050-9ADBFAB9/Red-bug.jpg",fit:"cover"},{url:"https://images.folloze.com/image/fetch/https://cdn.britannica.com/44/125544-050-9ADBFAB9/Red-bug.jpg",fit:"contained"},{url:"https://images.folloze.com/image/fetch/https://pnwhandbooks.org/sites/pnwhandbooks/files/insect/images/landscape-stink-bug/wredshoulderedsbadult0165.jpg",fit:"cover"},{url:"https://images.folloze.com/image/fetch/https://pnwhandbooks.org/sites/pnwhandbooks/files/insect/images/landscape-stink-bug/wredshoulderedsbadult0165.jpg",fit:"contained"},{url:"https://images.folloze.com/image/fetch/http://www.brisbaneinsects.com/brisbane_lygaeoidbugs/images/DSC_6659.jpg",fit:"cover"},{url:"https://images.folloze.com/image/fetch/http://www.brisbaneinsects.com/brisbane_lygaeoidbugs/images/DSC_6659.jpg",fit:"contained"},{url:"https://images.folloze.com/image/fetch/http://ucanr.edu/blogs/slomggarden/blogfiles/40859_original.jpg",fit:"cover"},{url:"https://images.folloze.com/image/fetch/http://ucanr.edu/blogs/slomggarden/blogfiles/40859_original.jpg",fit:"contained"}]]}),e.onPost("/api/v1/upload_urls").reply(200,{file_name:"file_name",method:"post",params:{api_key:"abcabcabc",signature:"asdasdasd",timestamp:1640527164},get_url:"//images.folloze.com/image/upload/",put_url:l}),e.onPost(l).reply(200,{secure_url:"https://uploaded_url.com"}),e.onGet(/api\/v1\/boards\/(\d+)\/forms/).reply(200,{"1":{board_id:1,form_type:1,id:1,name:"Classic Form",organization_id:1,state:null,data:{form_title:"Sign up!",submit_label:"email me",success_message:"thanks!",submit_redirect_url:"https://www.folloze.com",fields:{name:{label:"Name",order:1,placeholder:"First Name",state:"optional",type:"text"},email:{label:"Email",order:2,placeholder:"your@email.here",state:"required",type:"email"}}}},"2":{board_id:1,form_type:2,id:2,name:"External Form",organization_id:1,state:null,data:{script:"<script type='text/javascript'>alert('hey!')<\/script>",form_title:"Enter details here"}},"3":{board_id:1,form_type:3,id:3,name:"Marketo Form",organization_id:1,state:null,data:{custom_script:"alert('HEY!')",munchkin_id:"abc-def-ghi",base_url:"//app-sj25.marketo.com",form_id:"1"}}}),e.onPost(/api\/v1\/boards\/(\d+)\/forms/).reply(200,{board_id:1,form_type:2,id:2,name:"External Form",organization_id:1,state:null,data:{script:"<script type='text/javascript'>alert('hey!')<\/script>",auto_fill:!0,form_title:"Enter details here",submit_label:"email me",success_message:"thanks!",submit_redirect_url:"https://www.folloze.com"}}),e.onPut(/api\/v1\/boards\/(\d+)\/forms\/(\d+)/).reply(200,{board_id:1,form_type:2,id:2,name:"External Form",organization_id:1,state:null,data:{script:"<script type='text/javascript'>alert('hey!')<\/script>",auto_fill:!0,form_title:"Enter details here",submit_label:"email me",success_message:"thanks!",submit_redirect_url:"https://www.folloze.com"}}),e.onGet(/prism\/(\d+)\/campaign_elements/,{params:{element_type:o.footer}}).reply(200,{default_id:0,data:{"0":{background_color:"#eeeeee",description:"The default footer style, you may choose others from the list. ",element_id:0,id:3,is_standard:!0,labels:null,logo:{show:!1},name:"Standard Footer",show_in_item_view:!1,state:1,text:null,text_color:{type:0,color:"#eeeeee"},tracking_consent:{show:!1}}}}),e.onGet(/prism\/(\d+)\/campaign_elements/,{params:{element_type:o.privacy_message}}).reply(200,{default_id:0,data:{"0":{can_close:!0,description:"The Folloze standard privacy message.",element_id:0,id:2,is_standard:!0,is_top:!0,link:"https://sites.google.com/a/folloze.com/terms-of-service/privacy-policy",message:"We use cookies to give you the best experience. if you do nothing, we'll assume that's ok",name:"Standard Privacy Message",state:1}}}),e.onGet(/prism\/(\d+)\/campaign_elements/,{params:{element_type:o.form_privacy_message}}).reply(200,{default_id:0,data:{"0":{checkbox_area:{threshold:2,label:null,checkboxes:[]},element_id:0,id:4,is_standard:!0,message:null,name:"None",state:1,text_area:null},"5":{checkbox_area:{checkboxes:[{label:"First Checkbox",name:"form_privacy_checkbox_1",is_required:!1}],label:"Checkbox Area",threshold:2},element_id:5,id:5,is_standard:null,message:{html:"<p>privacy text</p><p>more privacy text</p>"},name:"New Form Privacy Message",state:null,text_area:null}}}),e.onGet(/api\/v1\/organizations\/(\d+)\/settings\/privacy/).reply(200,{block_mail_blast_auto_approval:!1,block_mail_blast_quick_approval:!1,disable_share_button_on_board:!1,emails_privacy_disclaimer:{html:"<p><br></p><p></p>",is_enabled:!1},mail_blast_privacy_message:{html:"<p>Please add contacts that you have previous business relationship with</p>",is_enabled:!1},privacy_warning_provider:"app",restrict_export_data:!1}),e.onGet(/api\/v1\/organizations\/(\d+)\/settings\/personalizations/).reply(200,{personalization:!0}),e.onGet(/api\/v1\/organizations\/(\d+)\/settings\/features/).reply(200,{accounts_dashboard:!0,advanced_reports:!1,analytics_dashboards:!1,app_sso_login:!1,articles:!0,board_embedding:!0,change_custom_domain:!1,chat:!1,email_callbacks_subscription:!1,enable_seo:!0,items_limit:!0,live_event:!0,ms_crm_integration:!1,personalization:!0,set_group_board:!1}),e.onGet("/api/v1/preview/board_items_presence").reply(200,{has_items:!0}),e.onGet(/prism\/(\d+)\/personalization/).reply(200,r),e.onPut(/prism\/(\d+)\/personalization/).reply(200,r);let s=/api\/v1\/boards\/(\d+)\/config/;e.onPut(s).reply(a=>{var p,d;let m=parseInt(s.exec(a.url)[1]),t=(p=JSON.parse(a.data).config.meta)==null?void 0:p.newHash,g=JSON.parse(a.data).config.id;if(m===1){let c="testHash",i=(d=JSON.parse(a.data).config.meta)==null?void 0:d.originHash;if(!i||i===c&&t!==i)return[200,{config:JSON.parse(a.data).config,published_hash:t||"newHash",is_board_online:!0}];if(g===66)return[409,{msg:"conflict - could not save config",config:{id:1,meta:{savedTime:null,localSaveTime:10,originHash:t,newHash:t},pages:{default:{name:"default",displayName:"Main Page",grid:{maxWidth:"1024px",gap:{x:"0",y:"0"},columns:{colNum:12,colWidth:"1fr"},rows:{rowNum:0,rowHeight:"25px"}},sections:{},widgets:{},ribbons:{}}}},published_hash:"",is_board_online:!0,user:{id:-1,name:"Itamar",email:"some@example.email",bio_settings:null,linkedin:null,twitter:null,image:"linkToImage"}}];if(t===i)return[208,{config:JSON.parse(a.data).config,published_hash:t||"newHash",is_board_online:!0}]}return[200,{config:JSON.parse(a.data).config,published_hash:t,is_board_online:!0}]}),e.onGet(s).reply(a=>[200,{published_config:{id:66,meta:{savedTime:null,localSaveTime:10,originHash:"bla",newHash:"bla"},pages:{default:{name:"default",displayName:"Main Page",grid:{maxWidth:"1024px",gap:{x:"0",y:"0"},columns:{colNum:12,colWidth:"1fr"},rows:{rowNum:0,rowHeight:"25px"}},sections:{},widgets:{},ribbons:{}}}},unpublished_config:{id:66,meta:{savedTime:null,localSaveTime:10,originHash:"bla",newHash:"bla"},pages:{default:{name:"default",displayName:"Main Page",grid:{maxWidth:"1024px",gap:{x:"0",y:"0"},columns:{colNum:12,colWidth:"1fr"},rows:{rowNum:0,rowHeight:"25px"}},sections:{},widgets:{},ribbons:{}}}},published_hash:"asdasdasdasd",is_board_online:!0}]),e.onGet(/api\/v1\/boards\/(\d+)\/email_templates/).reply(200,{"1":{id:1,name:"template name",board_id:1,created_by:{id:1,full_name:"template full name"},created_at:null,updated_at:null,is_default:!1,invitation_type:1,subject:"template subject",text:"template text",logo:"template logo",template:!0}}),e.onGet("/api/v1/search/board_contacts").reply(200,[{id:1,name:"user name",email:"user@email.com",bio_settings:{},linkedin:{},twitter:{},image:"https://images.folloze.com/image/upload/v1451293464/heroimage08_cac4xn.png"},{id:2,name:"second user name",email:"user_a@email.com",bio_settings:{},linkedin:{},twitter:{},image:"https://images.folloze.com/image/upload/v1451293367/heroimage05_fv80gz.png"}]),e.onGet(/api\/v1\/boards\/(\d+)\/merge_tags/).reply(200,[{id:1,is_enabled:!0,label:"Lead Company",name:"lead_company",provider:"folloze",allow_text_replacement:!0,allow_user_input:!0},{id:2,is_enabled:!0,label:"Account Revenue Range",name:"kickfire_account_revenue_range",provider:"kickfire",allow_text_replacement:!0,allow_user_input:!1}]),e.onGet(/api\/v1\/merge_tags\/(\d+)\/merge_tags_lookups/).reply(200,{1:[{id:"any value",name:"any value"},{id:"first value",name:"First Value"}]}),e.onGet(/api\/v1\/board\/(\d+)\/designer_themes/).reply(200,{1:{id:1,name:"system theme",status:"archived",style:"style css",type:"system"},2:{id:2,name:"theme name",status:"published",style:"another style css",type:"basic"}})};export{T as rules};
