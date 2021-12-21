import "./chunk.5KE7N75L.js";

// src/liveboard/mocks.ts
var rules = (mock) => {
  mock.onGet("/live_board/v1/boards/board_slug/").reply(200, {
    id: 1,
    slug: "board_slug",
    online_items_count: 0,
    organization_id: 1,
    name: "board",
    is_ssl: true
  });
  mock.onGet("/live_board/v1/boards/1/presenter").reply(200, {
    name: "Jane",
    last_name: "Doe",
    email: "mock@email.com",
    phone: "050-1234567",
    headline: "headline",
    company: "company",
    photo: "image_url",
    twitter: "twitter",
    linkedin: "linkedin"
  });
  mock.onGet("/live_board/v2/categories/1").reply(200, {
    id: 1,
    slug: "home",
    name: "home",
    category_type: 1,
    parent_category_id: 1,
    board_id: 1,
    url: "url/home",
    items_count: 3,
    subcategories_ids: [],
    description: "home category",
    images: []
  });
  mock.onGet("/live_board/v2/boards/1/categories").reply(200, {
    data: {
      "1": {
        id: 1,
        slug: "home",
        name: "home",
        category_type: 1,
        parent_category_id: 1,
        board_id: 1,
        url: "url/home",
        items_count: 3,
        subcategories_ids: [],
        description: "home category",
        images: []
      },
      "2": {
        id: 2,
        slug: "first",
        name: "first",
        category_type: 1,
        parent_category_id: 1,
        board_id: 1,
        url: "url/first",
        items_count: 3,
        subcategories_ids: [],
        description: "first category",
        images: []
      }
    },
    categories_ids: [1, 2]
  });
  mock.onPost("/live_board/v1/chat/user_chat").reply(200, { token: "abcd", chat_id: 123 });
  mock.onPost("/live_board/v1/content_items/1/snapshots").reply(200, { link_url: "abc.website.com", snapshot_url: "snapshot.website.com" });
  mock.onPost("/live_board/v1/content_items/1/analyses").reply(200, { secured: true });
  mock.onGet("/live_board/v1/content_items/1/files").reply(200, { url: "preview.url.com" });
  mock.onGet("/url-getting-items", { itemId: 1 }).reply(200, { items: [{ itemId: 1, title: "some title" }] });
  mock.onGet("/url-getting-items").reply(200, {
    items: [
      { itemId: 1, title: "some title" },
      { itemId: 1, title: "some title 2" }
    ]
  });
  mock.onPost("/live_board/v1/boards/1/campaign/message").reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost("/live_board/v1/boards/1/campaign/contact").reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost("/live_board/v1/boards/1/campaign/form").reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost("/live_board/v1/boards/1/campaign/link").reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost("/live_board/v1/boards/1/campaign/share").reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost("/live_board/v1/boards/1/shares").reply(200);
};
export {
  rules
};
