import MockAdapter from "axios-mock-adapter";
import {
    ImageBankResponseV1, ImageBankType, GalleryImage, UploadUrlResponseV1, FormV1,
    CampaignElementResponseV1, CampaignElementsTypes
} from "./IDesignerTypes";

export const rules = (mock: MockAdapter) => {
    const providerUrl = "https://api.cloudinary.com/v1_1/folloze/image/upload";

    mock.onPost("/api/imagegallery", {type: "campaign"})
        .reply<GalleryImage[]>(200, [
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293464/heroimage08_cac4xn.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293367/heroimage05_fv80gz.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293483/heroimage09_hv8u2j.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293654/heroimage13_vj9xog.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293397/heroimage07_kfdzpt.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293642/heroimage12_scxoe5.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293358/heroimage04_juy5ao.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293629/heroimage11_tmy9fd.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293378/heroimage06_vnii1d.png"
            },
            {
                "fit": "cover",
                "url": "https://images.folloze.com/image/upload/v1451293493/heroimage10_jgxm62.png"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimage03_wpxdzu.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimages06_compressed_lgozdi.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimages04_compressed_z9xtqb.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimages08_compressed_s9lkse.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimages03_compressed_sycsdr.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimage02_dr1wdi.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimage14_oglfdj.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimages12_compressed_rlzfx5.jpg",
                "fit": "cover"
            },
            {
                "url": "https://images.folloze.com/image/upload/heroimages11_compressed_uztxpu.jpg",
                "fit": "cover"
            }
        ]);

    //banners
    mock.onPost("/api/imagegallery", {type: "image_bank", bank_category: 1, organization_id: 1})
        .reply<GalleryImage[]>(200, [
            {
                fit: "cover",
                url: "https://images.folloze.com/image/upload/v1640510372/cjo48nkp0gtsk8pjrkjb.jpg"
            },
            {
                fit: "cover",
                url: "https://images.folloze.com/image/upload/v1640684303/iog6rsbluzw2y07koz26.jpg"
            }
        ]);
    
    //icons
    mock.onPost("/api/imagegallery", {type: "image_bank", bank_category: 4, organization_id: 1})
        .reply<GalleryImage[]>(200, [
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

    mock.onPost("/api/imagegallery", {type: "search", query: "bug"})
        .reply<GalleryImage[]>(200, [
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
                url: "https://images.folloze.com/image/fetch/https://i2.wp.com/www.gardeningknowhow.com/wp-content/uploads/2014/07/milkweed-bug.jpg?fit=1722,1115\u0026ssl=1",
                fit: "cover"
            },
            {
                url: "https://images.folloze.com/image/fetch/https://i2.wp.com/www.gardeningknowhow.com/wp-content/uploads/2014/07/milkweed-bug.jpg?fit=1722,1115\u0026ssl=1",
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
                "url":"https://images.folloze.com/image/fetch/http://www.brisbaneinsects.com/brisbane_lygaeoidbugs/images/DSC_6659.jpg",
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
        ]);
    
    mock.onGet("/api/v1/organizations/1/settings/image_bank")
        .reply<ImageBankResponseV1>(200, {
            icons: ImageBankType.folloze,
            logos: ImageBankType.folloze,
            banners: ImageBankType.folloze,
            thumbnails: ImageBankType.folloze,
            mobile_banners: ImageBankType.folloze
        });

    mock.onPut("/api/v1/organizations/1/settings/image_bank")
        .reply<ImageBankResponseV1>(200, {
            icons: ImageBankType.folloze,
            logos: ImageBankType.folloze,
            banners: ImageBankType.folloze,
            thumbnails: ImageBankType.folloze,
            mobile_banners: ImageBankType.folloze
        });

    mock.onPost("/api/v1/upload_urls")
        .reply<UploadUrlResponseV1>(200, {
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
    
    mock.onPost(providerUrl)
        .reply(200, {secure_url: 'https://uploaded_url.com'});

    mock.onGet("api/v1/boards/1/forms")
        .reply<Record<string, FormV1>>(200, {
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
                    fields: {
                        name: {
                            label: "Name",
                            order: 1,
                            placeholder: "First Name",
                            state: "optional",
                            type: "text",
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
                    script: "<script type='text/javascript'>alert('hey!')</script>",
                    auto_fill: "true",
                    form_title: "Enter details here",
                    submit_label: "email me",
                    success_message: "thanks!",
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
        })

    mock.onPost("api/v1/boards/1/forms")
        .reply<FormV1>(200, {
            board_id: 1,
            form_type: 2,
            id: 2,
            name: "External Form",
            organization_id: 1,
            state: null,
            data: {
                script: "<script type='text/javascript'>alert('hey!')</script>",
                auto_fill: "true",
                form_title: "Enter details here",
                submit_label: "email me",
                success_message: "thanks!",
            }
        })

    mock.onPut("api/v1/boards/1/forms")
        .reply<FormV1>(200, {
            board_id: 1,
            form_type: 2,
            id: 2,
            name: "External Form",
            organization_id: 1,
            state: null,
            data: {
                script: "<script type='text/javascript'>alert('hey!')</script>",
                auto_fill: "true",
                form_title: "Enter details here",
                submit_label: "email me",
                success_message: "thanks!",
            }
        })

    mock.onGet("prism/1/campaign_elements", {params: {element_type: CampaignElementsTypes.footer}})
        .reply<CampaignElementResponseV1>(200, {
            default_id: 0,
            data: {
                "0": {
                    background_color: "#eeeeee",
                    description: "The default footer style, you may choose others from the list. ",
                    element_id: 0,
                    id: 3,
                    is_standard: true,
                    labels: null,
                    logo: {show: false},
                    name: "Standard Footer",
                    show_in_item_view: false,
                    state: 1,
                    text: null,
                    text_color: {type: 0, color: "#eeeeee"},
                    tracking_consent: {show: false}
                }
            }
        })

    mock.onGet("prism/1/campaign_elements", {params: {element_type: CampaignElementsTypes.privacy_message}})
        .reply<CampaignElementResponseV1>(200, {
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
        })

    mock.onGet("prism/1/campaign_elements", {params: {element_type: CampaignElementsTypes.form_privacy_message}})
        .reply<CampaignElementResponseV1>(200, {
            default_id: 0,
            data: {
                "0": {
                    checkbox_area: {threshold: 2, label: null, checkboxes: []},
                    element_id: 0,
                    id: 4,
                    is_standard: true,
                    message: null,
                    name: "None",
                    state: 1,
                    text_area: null,
                },
                "5": {
                    checkbox_area: {
                        checkboxes: [{
                            label: "fdsfsd",
                            name: "form_privacy_checkbox_1",
                            is_required: false
                        }],
                        label: "fsdfds",
                        threshold: 2
                    },
                    element_id: 5,
                    id: 5,
                    is_standard: null,
                    message: {html: "<p>fdsfsdfsdf</p><p>fdsfsdf</p>"},
                    name: "New Form fdsfs Message",
                    state: null,
                    text_area: null
                }
            }
        })

    mock.onPost("/url-for-saving-live-board")
        .reply(200);
};
