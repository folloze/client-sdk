import MockAdapter from "axios-mock-adapter";
import { BoardResponseV1, BoardSellerResponseV1, CategoryResponseV2, CategoriesResponseV2,
    UserChatResponseV1, ItemResponseV2, ItemsResponseV2, HasItemResponseV2, SnapshotUrlResponseV1,
    ItemAnalysisResponseV1, ItemFileMetadataResponseV1, CtaResponseV1, GeoLocationResponseV1, LeadResponseV1
} from './ILiveboardTypes';

export const rules = (mock: MockAdapter) => {
    const item = {
        id: 1,
        category_ids: [1],
        category_item_data: [{id: 1, position: 65536}],
        description: "item description",
        image: {
            id: 21,
            displayable_section: null,
            fit: "cover",
            transformation: {},
            url: "https://images.folloze.com/image/fetch/http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"
        },
        is_gated: null,
        item_source: 1,
        item_type: "snapshot",
        likes_count: 0,
        link_url: "https://www.amazon.com/",
        name: "Amazon.com. Spend less. Smile more.",
        open_in_new_tab: null,
        slug: "amazoncom-spend-less-smile-more",
        status: 1,
        views_count: 17
    };

    mock.onGet("/live_board/v1/boards/board_slug/")
        .reply<BoardResponseV1>(200, {
            id: 1,
            slug: 'board_slug',
            online_items_count: 0,
            organization_id: 1,
            name: 'board',
            is_ssl: true
        });

    mock.onGet("/live_board/v1/boards/1/presenter")
        .reply<BoardSellerResponseV1>(200, {
            name: 'Jane',
            last_name: 'Doe',
            email: 'mock@email.com',
            phone: '050-1234567',
            headline: 'headline',
            company: 'company',
            photo: 'image_url',
            twitter: 'twitter',
            linkedin: 'linkedin'
        });

    mock.onGet("/live_board/v2/categories/1")
        .reply<CategoryResponseV2>(200, {
            id: 1,
            slug: 'home',
            name: 'home',
            category_type: 1,
            parent_category_id: 1,
            board_id: 1,
            url: 'url/home',
            items_count: 3,
            subcategories_ids: [],
            description: 'home category',
            images: []
        });

    mock.onGet("/live_board/v2/boards/1/categories")
        .reply<CategoriesResponseV2>(200, {
            data: {
                '1': {
                    id: 1,
                    slug: 'home',
                    name: 'home',
                    category_type: 1,
                    parent_category_id: 1,
                    board_id: 1,
                    url: 'url/home',
                    items_count: 3,
                    subcategories_ids: [],
                    description: 'home category',
                    images: []
                },
                '2': {
                    id: 2,
                    slug: 'first',
                    name: 'first',
                    category_type: 1,
                    parent_category_id: 1,
                    board_id: 1,
                    url: 'url/first',
                    items_count: 3,
                    subcategories_ids: [],
                    description: 'first category',
                    images: []
                }
            },
            categories_ids: [1,2]
        });

    mock.onPost("/live_board/v1/chat/user_chat")
        .reply<UserChatResponseV1>(200, {token: 'abcd', chat_id: 123});

    mock.onGet("/live_board/v2/items/1")
        .reply<ItemResponseV2>(200, item);

    mock.onGet("/live_board/v2/boards/1/items")
        .reply<ItemsResponseV2>(200, {
            item_ids: [1],
            data: {"1": {...item}},
            most_viewed_item_id: 1,
        });

    mock.onGet("/live_board/v2/boards/1/items_presence")
        .reply<HasItemResponseV2>(200, {has_items: true})

    mock.onPost("/live_board/v1/content_items/1/snapshots")
        .reply<SnapshotUrlResponseV1>(200, {link_url: "abc.website.com", snapshot_url: "snapshot.website.com"});

    mock.onPost("/live_board/v1/content_items/1/analyses")
        .reply<ItemAnalysisResponseV1>(200, {secured: true});

    mock.onGet("/live_board/v1/content_items/1/files")
        .reply<ItemFileMetadataResponseV1>(200, {preview_metadata: {url: 'preview.url.com'}});

    mock.onGet("/url-getting-items", {itemId: 1})
        .reply(200, {items: [{itemId:1, title: "some title"}]});
    
    mock.onPost("/live_board/v1/boards/1/cookies_consents")
        .reply(200);

    mock.onPost("/live_board/v1/boards/1/campaign/message")
        .reply<CtaResponseV1>(200, {
            id: 1,
            name: "name",
            last_name: "lastname",
            email: "email@company.com",
            company: null,
            anon_guest: false,
            group_user: false
        });

    mock.onPost("/live_board/v1/boards/1/campaign/contact")
        .reply<CtaResponseV1>(200, {
            id: 1,
            name: "name",
            last_name: "lastname",
            email: "email@company.com",
            company: null,
            anon_guest: false,
            group_user: false
        });

    mock.onPost("/live_board/v1/boards/1/campaign/form")
        .reply<CtaResponseV1>(200, {
            id: 1,
            name: "name",
            last_name: "lastname",
            email: "email@company.com",
            company: null,
            anon_guest: false,
            group_user: false
        });

    mock.onPost("/live_board/v1/boards/1/campaign/link")
        .reply<CtaResponseV1>(200, {
            id: 1,
            name: "name",
            last_name: "lastname",
            email: "email@company.com",
            company: null,
            anon_guest: false,
            group_user: false
        });

    mock.onPost("/live_board/v1/boards/1/campaign/share")
        .reply<CtaResponseV1>(200, {
            id: 1,
            name: "name",
            last_name: "lastname",
            email: "email@company.com",
            company: null,
            anon_guest: false,
            group_user: false
        });

    mock.onPost("/live_board/v1/boards/1/shares")
        .reply<void>(200);

    mock.onPost("/live_board/v2/enrichments")
        .reply<void>(200);

    mock.onGet("/live_board/v1/geo_location")
        .reply<GeoLocationResponseV1>(200, {
            city: "tel aviv",
            continent: "asia",
            country: "israel",
            country_code: "il",
            state: "ta"  
        });

    mock.onPost("/live_board/v2/invitation_wrappers/1")
        .reply<void>(200);

    mock.onGet("/live_board/v1/leads/me")
        .reply<LeadResponseV1>(200, {
            id: 1,
            name: "John",
            last_name: "Doe",
            company: "folloze",
            email: "john.doe@folloze.com",
            anon_guest: false
        })

    mock.onPost("/live_board/v2/lead_validations", {board_id: 1})
        .reply<void>(200)

    mock.onDelete("/live_board/v2/track_leads")
        .reply<LeadResponseV1>(200, {
            id: 1,
            name: "Guest1",
            last_name: null,
            company: null,
            email: null,
            anon_guest: true
        })

};
