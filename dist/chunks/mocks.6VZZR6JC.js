import {
  CampaignElementsTypes,
  ImageBankCategory,
  ImageGalleryTypes
} from "./chunk.B6G457LR.js";
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
            rules: [{
              attribute_id: 18,
              attribute_values: ["any value"],
              id: "rule_776.2880741331646",
              index: 0,
              result: { source_type: 2, isLoading: false }
            }]
          }
        }
      },
      items: {},
      promotion: { items: { 0: {} } }
    },
    is_enabled: true
  };
  mock.onGet("/api/v1/image_gallery", {
    params: {
      bank_category: ImageBankCategory.banners,
      type: ImageGalleryTypes.campaign,
      organization_id: 1
    }
  }).reply(200, [
    {
      "fit": "cover",
      "url": "campaign-image-url"
    }
  ]);
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
  mock.onPut(/api\/v1\/boards\/(\d+)\/forms/).reply(200, {
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
  mock.onGet(/prism\/(\d+)\/campaign_elements/, { params: { element_type: CampaignElementsTypes.footer } }).reply(200, {
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
  mock.onGet(/prism\/(\d+)\/campaign_elements/, { params: { element_type: CampaignElementsTypes.privacy_message } }).reply(200, {
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
  mock.onGet(/prism\/(\d+)\/campaign_elements/, { params: { element_type: CampaignElementsTypes.form_privacy_message } }).reply(200, {
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
          checkboxes: [{
            label: "First Checkbox",
            name: "form_privacy_checkbox_1",
            is_required: false
          }],
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
  mock.onPut(/api\/v1\/boards\/(\d+)\/layout\/(\d+)/).reply(200);
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
