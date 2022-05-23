import {
  CampaignElementsTypes
} from "./chunk.G52EPVC6.js";
import "./chunk.Z3GS5MY4.js";

// src/designer/mocks.ts
var rules = (mock) => {
  const providerUrl = "https://api.cloudinary.com/v1_1/folloze/image/upload";
  const personalization = {
    auto_assign_inviter: {},
    campaign: {
      banner: {},
      contact_card: { card: {} },
      footer: {},
      general: {},
      header: {
        logo: {
          image: {
            merge_tag_ids: [18],
            rules: [
              {
                attribute_id: 18,
                attribute_values: ["any value"],
                id: "rule_776.2880741331646",
                index: 0,
                result: { source_type: 2, isLoading: false }
              }
            ]
          }
        }
      },
      items: {},
      promotion: { items: { 0: {} } }
    },
    is_enabled: true
  };
  const publishBoardRegex = /api\/v1\/boards\/(\d+)\/publish/;
  mock.onPost(publishBoardRegex).reply((config) => {
    const boardId = parseInt(publishBoardRegex.exec(config.url)[1]);
    if (boardId === 666) {
      return [208];
    }
    const board = {
      activation_state: { online: false },
      allow_embedding: false,
      auto_upgrade_widgets: false,
      config: void 0,
      config_info: { published_hash: "", state: void 0 },
      id: 0,
      integrations: {},
      is_ssl: false,
      landing_page: "registration",
      name: "",
      online_items_count: 0,
      organization_id: 0,
      privacy: {
        cookie_management: void 0,
        element_id: 0,
        personal_info_concealment: false,
        privacy_warning_check: false,
        regulated_countries_only: false
      },
      slug: ""
    };
    return [
      200,
      {
        activation_state: { online: false },
        allow_embedding: false,
        auto_upgrade_widgets: false,
        config: void 0,
        config_info: { published_hash: "", state: void 0 },
        id: 0,
        integrations: {},
        is_ssl: false,
        landing_page: "registration",
        name: "",
        online_items_count: 0,
        organization_id: 0,
        privacy: {
          cookie_management: void 0,
          element_id: 0,
          personal_info_concealment: false,
          privacy_warning_check: false,
          regulated_countries_only: false
        },
        slug: ""
      }
    ];
  });
  mock.onGet("/api/v1/image_gallery", {
    params: { organization_id: 1, bank_category: "banners", type: "campaign" }
  }).reply(200, [
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293464/heroimage08_cac4xn.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293367/heroimage05_fv80gz.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293483/heroimage09_hv8u2j.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293654/heroimage13_vj9xog.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293397/heroimage07_kfdzpt.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293642/heroimage12_scxoe5.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293358/heroimage04_juy5ao.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293629/heroimage11_tmy9fd.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293378/heroimage06_vnii1d.png"
    },
    {
      fit: "cover",
      url: "https://images.folloze.com/image/upload/v1451293493/heroimage10_jgxm62.png"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimage03_wpxdzu.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimages06_compressed_lgozdi.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimages04_compressed_z9xtqb.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimages08_compressed_s9lkse.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimages03_compressed_sycsdr.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimage02_dr1wdi.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimage14_oglfdj.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimages12_compressed_rlzfx5.jpg",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/heroimages11_compressed_uztxpu.jpg",
      fit: "cover"
    }
  ]);
  mock.onGet("/api/v1/image_gallery", {
    params: { organization_id: 1, bank_category: "icons", type: "campaign" }
  }).reply(200, [
    {
      url: "https://images.folloze.com/image/upload/v1640686386/svzkkcxgxvekrdexyisz.png",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/v1640686314/ilmmffwrlm2rv8quriml.png",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/v1640686372/o9tfjjaynitx01czqpmy.png",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/v1640686376/cjlc8wmtndwp8rfcweq3.png",
      fit: "cover"
    }
  ]);
  mock.onGet("/api/v1/image_gallery", {
    params: { organization_id: 1, bank_category: "logos", type: "campaign" }
  }).reply(200, [
    {
      url: "https://images.folloze.com/image/upload/v1640686386/svzkkcxgxvekrdexyisz.png",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/v1640686314/ilmmffwrlm2rv8quriml.png",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/v1640686372/o9tfjjaynitx01czqpmy.png",
      fit: "cover"
    }
  ]);
  mock.onGet("/api/v1/image_gallery", {
    params: { organization_id: 1, bank_category: "mobile_banners", type: "campaign" }
  }).reply(200, [
    {
      url: "https://images.folloze.com/image/upload/v1640686386/svzkkcxgxvekrdexyisz.png",
      fit: "cover"
    },
    {
      url: "https://images.folloze.com/image/upload/v1640686314/ilmmffwrlm2rv8quriml.png",
      fit: "cover"
    }
  ]);
  mock.onGet("/api/v1/image_gallery").reply((config) => {
    if (config.params.type !== "search") {
      throw new Error("this mock is only for search type query");
    }
    if (!config.params.query) {
      throw new Error("there is no query attached to this request");
    }
    return [
      200,
      [
        {
          url: "https://images.folloze.com/image/fetch/https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555446925/shape/mentalfloss/800px-cotton_harlequin_bugs.jpg?itok=GHLRk9OC",
          fit: "cover"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555446925/shape/mentalfloss/800px-cotton_harlequin_bugs.jpg?itok=GHLRk9OC",
          fit: "contained"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://blog.growingwithscience.com/wp-content/uploads/2012/01/2011-mesquite-bug.jpg",
          fit: "cover"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://blog.growingwithscience.com/wp-content/uploads/2012/01/2011-mesquite-bug.jpg",
          fit: "contained"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://i2.wp.com/www.gardeningknowhow.com/wp-content/uploads/2014/07/milkweed-bug.jpg?fit=1722,1115&ssl=1",
          fit: "cover"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://i2.wp.com/www.gardeningknowhow.com/wp-content/uploads/2014/07/milkweed-bug.jpg?fit=1722,1115&ssl=1",
          fit: "contained"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://cdn.britannica.com/44/125544-050-9ADBFAB9/Red-bug.jpg",
          fit: "cover"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://cdn.britannica.com/44/125544-050-9ADBFAB9/Red-bug.jpg",
          fit: "contained"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://pnwhandbooks.org/sites/pnwhandbooks/files/insect/images/landscape-stink-bug/wredshoulderedsbadult0165.jpg",
          fit: "cover"
        },
        {
          url: "https://images.folloze.com/image/fetch/https://pnwhandbooks.org/sites/pnwhandbooks/files/insect/images/landscape-stink-bug/wredshoulderedsbadult0165.jpg",
          fit: "contained"
        },
        {
          url: "https://images.folloze.com/image/fetch/http://www.brisbaneinsects.com/brisbane_lygaeoidbugs/images/DSC_6659.jpg",
          fit: "cover"
        },
        {
          url: "https://images.folloze.com/image/fetch/http://www.brisbaneinsects.com/brisbane_lygaeoidbugs/images/DSC_6659.jpg",
          fit: "contained"
        },
        {
          url: "https://images.folloze.com/image/fetch/http://ucanr.edu/blogs/slomggarden/blogfiles/40859_original.jpg",
          fit: "cover"
        },
        {
          url: "https://images.folloze.com/image/fetch/http://ucanr.edu/blogs/slomggarden/blogfiles/40859_original.jpg",
          fit: "contained"
        }
      ]
    ];
  });
  mock.onPost("/api/v1/upload_urls").reply(200, {
    file_name: "file_name",
    method: "post",
    params: {
      api_key: "abcabcabc",
      signature: "asdasdasd",
      timestamp: 1640527164
    },
    get_url: "//images.folloze.com/image/upload/",
    put_url: providerUrl
  });
  mock.onPost(providerUrl).reply(200, { secure_url: "https://uploaded_url.com" });
  mock.onGet(/api\/v1\/boards\/(\d+)\/forms/).reply(200, {
    "1": {
      board_id: 1,
      form_type: 1,
      id: 1,
      name: "Classic Form",
      organization_id: 1,
      state: null,
      data: {
        form_title: "Sign up!",
        submit_label: "email me",
        success_message: "thanks!",
        submit_redirect_url: "https://www.folloze.com",
        fields: {
          name: {
            label: "Name",
            order: 1,
            placeholder: "First Name",
            state: "optional",
            type: "text"
          },
          email: {
            label: "Email",
            order: 2,
            placeholder: "your@email.here",
            state: "required",
            type: "email"
          }
        }
      }
    },
    "2": {
      board_id: 1,
      form_type: 2,
      id: 2,
      name: "External Form",
      organization_id: 1,
      state: null,
      data: {
        script: "<script type='text/javascript'>alert('hey!')<\/script>",
        form_title: "Enter details here"
      }
    },
    "3": {
      board_id: 1,
      form_type: 3,
      id: 3,
      name: "Marketo Form",
      organization_id: 1,
      state: null,
      data: {
        custom_script: "alert('HEY!')",
        munchkin_id: "abc-def-ghi",
        base_url: "//app-sj25.marketo.com",
        form_id: "1"
      }
    }
  });
  mock.onPost(/api\/v1\/boards\/(\d+)\/forms/).reply(200, {
    board_id: 1,
    form_type: 2,
    id: 2,
    name: "External Form",
    organization_id: 1,
    state: null,
    data: {
      script: "<script type='text/javascript'>alert('hey!')<\/script>",
      auto_fill: true,
      form_title: "Enter details here",
      submit_label: "email me",
      success_message: "thanks!",
      submit_redirect_url: "https://www.folloze.com"
    }
  });
  mock.onPut(/api\/v1\/boards\/(\d+)\/forms\/(\d+)/).reply(200, {
    board_id: 1,
    form_type: 2,
    id: 2,
    name: "External Form",
    organization_id: 1,
    state: null,
    data: {
      script: "<script type='text/javascript'>alert('hey!')<\/script>",
      auto_fill: true,
      form_title: "Enter details here",
      submit_label: "email me",
      success_message: "thanks!",
      submit_redirect_url: "https://www.folloze.com"
    }
  });
  mock.onGet(/prism\/(\d+)\/campaign_elements/, {
    params: { element_type: CampaignElementsTypes.footer }
  }).reply(200, {
    default_id: 0,
    data: {
      "0": {
        background_color: "#eeeeee",
        description: "The default footer style, you may choose others from the list. ",
        element_id: 0,
        id: 3,
        is_standard: true,
        labels: null,
        logo: { show: false },
        name: "Standard Footer",
        show_in_item_view: false,
        state: 1,
        text: null,
        text_color: { type: 0, color: "#eeeeee" },
        tracking_consent: { show: false }
      }
    }
  });
  mock.onGet(/prism\/(\d+)\/campaign_elements/, {
    params: { element_type: CampaignElementsTypes.privacy_message }
  }).reply(200, {
    default_id: 0,
    data: {
      "0": {
        can_close: true,
        description: "The Folloze standard privacy message.",
        element_id: 0,
        id: 2,
        is_standard: true,
        is_top: true,
        link: "https://sites.google.com/a/folloze.com/terms-of-service/privacy-policy",
        message: "We use cookies to give you the best experience. if you do nothing, we'll assume that's ok",
        name: "Standard Privacy Message",
        state: 1
      }
    }
  });
  mock.onGet(/prism\/(\d+)\/campaign_elements/, {
    params: { element_type: CampaignElementsTypes.form_privacy_message }
  }).reply(200, {
    default_id: 0,
    data: {
      "0": {
        checkbox_area: { threshold: 2, label: null, checkboxes: [] },
        element_id: 0,
        id: 4,
        is_standard: true,
        message: null,
        name: "None",
        state: 1,
        text_area: null
      },
      "5": {
        checkbox_area: {
          checkboxes: [
            {
              label: "First Checkbox",
              name: "form_privacy_checkbox_1",
              is_required: false
            }
          ],
          label: "Checkbox Area",
          threshold: 2
        },
        element_id: 5,
        id: 5,
        is_standard: null,
        message: { html: "<p>privacy text</p><p>more privacy text</p>" },
        name: "New Form Privacy Message",
        state: null,
        text_area: null
      }
    }
  });
  mock.onGet(/api\/v1\/organizations\/(\d+)\/settings\/privacy/).reply(200, {
    block_mail_blast_auto_approval: false,
    block_mail_blast_quick_approval: false,
    disable_share_button_on_board: false,
    emails_privacy_disclaimer: {
      html: "<p><br></p><p></p>",
      is_enabled: false
    },
    mail_blast_privacy_message: {
      html: "<p>Please add contacts that you have previous business relationship with</p>",
      is_enabled: false
    },
    privacy_warning_provider: "app",
    restrict_export_data: false
  });
  mock.onGet(/api\/v1\/organizations\/(\d+)\/settings\/personalizations/).reply(200, {
    personalization: true
  });
  mock.onGet(/api\/v1\/organizations\/(\d+)\/settings\/features/).reply(200, {
    accounts_dashboard: true,
    advanced_reports: false,
    analytics_dashboards: false,
    app_sso_login: false,
    articles: true,
    board_embedding: true,
    change_custom_domain: false,
    chat: false,
    email_callbacks_subscription: false,
    enable_seo: true,
    items_limit: true,
    live_event: true,
    ms_crm_integration: false,
    personalization: true,
    set_group_board: false
  });
  mock.onGet("/api/v1/preview/board_items_presence").reply(200, { has_items: true });
  mock.onGet(/prism\/(\d+)\/personalization/).reply(200, personalization);
  mock.onPut(/prism\/(\d+)\/personalization/).reply(200, personalization);
  const saveLiveBoardRegex = /api\/v1\/boards\/(\d+)\/config/;
  mock.onPut(saveLiveBoardRegex).reply((config) => {
    var _a, _b;
    const boardId = parseInt(saveLiveBoardRegex.exec(config.url)[1]);
    const newHash = (_a = JSON.parse(config.data).config.meta) == null ? void 0 : _a.newHash;
    const data = JSON.parse(config.data).config;
    const layoutId = data.id;
    if (boardId === 1) {
      const someTestOriginHash = "testHash";
      const originHash = (_b = JSON.parse(config.data).config.meta) == null ? void 0 : _b.originHash;
      if (!originHash || originHash === someTestOriginHash && newHash !== originHash) {
        return [
          200,
          {
            config: JSON.parse(config.data).config,
            published_hash: newHash || "newHash",
            is_board_online: true
          }
        ];
      }
      if (layoutId === 66) {
        return [
          409,
          {
            msg: "conflict - could not save config",
            config: {
              id: 1,
              meta: {
                savedTime: null,
                localSaveTime: 10,
                originHash: newHash,
                newHash
              },
              pages: {
                default: {
                  name: "default",
                  grid: {
                    maxWidth: "1024px",
                    gap: { x: "0", y: "0" },
                    columns: { colNum: 12, colWidth: "1fr" },
                    rows: { rowNum: 0, rowHeight: "25px" }
                  },
                  sections: {},
                  widgets: {},
                  ribbons: {}
                }
              }
            },
            published_hash: "",
            is_board_online: true,
            user: {
              id: -1,
              name: "Itamar",
              email: "some@example.email",
              bio_settings: null,
              linkedin: null,
              twitter: null,
              image: "linkToImage"
            }
          }
        ];
      }
      if (newHash === originHash) {
        return [
          208,
          {
            config: JSON.parse(config.data).config,
            published_hash: newHash || "newHash",
            is_board_online: true
          }
        ];
      }
    }
    return [
      200,
      {
        config: JSON.parse(config.data).config,
        published_hash: newHash,
        is_board_online: true
      }
    ];
  });
  mock.onGet(saveLiveBoardRegex).reply((config) => {
    return [
      200,
      {
        published_config: {
          id: 66,
          meta: {
            savedTime: null,
            localSaveTime: 10,
            originHash: "bla",
            newHash: "bla"
          },
          pages: {
            default: {
              name: "default",
              grid: {
                maxWidth: "1024px",
                gap: { x: "0", y: "0" },
                columns: { colNum: 12, colWidth: "1fr" },
                rows: { rowNum: 0, rowHeight: "25px" }
              },
              sections: {},
              widgets: {},
              ribbons: {}
            }
          }
        },
        unpublished_config: {
          id: 66,
          meta: {
            savedTime: null,
            localSaveTime: 10,
            originHash: "bla",
            newHash: "bla"
          },
          pages: {
            default: {
              name: "default",
              grid: {
                maxWidth: "1024px",
                gap: { x: "0", y: "0" },
                columns: { colNum: 12, colWidth: "1fr" },
                rows: { rowNum: 0, rowHeight: "25px" }
              },
              sections: {},
              widgets: {},
              ribbons: {}
            }
          }
        }
      }
    ];
  });
  mock.onGet(/api\/v1\/boards\/(\d+)\/email_templates/).reply(200, {
    "1": {
      id: 1,
      name: "template name",
      board_id: 1,
      created_by: {
        id: 1,
        full_name: "template full name"
      },
      created_at: null,
      updated_at: null,
      is_default: false,
      invitation_type: 1,
      subject: "template subject",
      text: "template text",
      logo: "template logo",
      template: true
    }
  });
  mock.onGet("/api/v1/search/board_contacts").reply(200, [
    {
      id: 1,
      name: "user name",
      email: "user@email.com",
      bio_settings: {},
      linkedin: {},
      twitter: {},
      image: "https://images.folloze.com/image/upload/v1451293464/heroimage08_cac4xn.png"
    },
    {
      id: 2,
      name: "second user name",
      email: "user_a@email.com",
      bio_settings: {},
      linkedin: {},
      twitter: {},
      image: "https://images.folloze.com/image/upload/v1451293367/heroimage05_fv80gz.png"
    }
  ]);
};
export {
  rules
};
