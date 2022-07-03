import "./chunk.Z3GS5MY4.js";

// src/analytics/mocks.ts
var rules = (mock) => {
  mock.onPost(/live_board\/v2\/boards\/(\d+)\/lead_views/).reply(200);
  mock.onPost(/live_board\/v2\/items\/(\d+)\/lead_views/).reply(200);
  mock.onPost("/api/v1/tracking").reply(200);
  mock.onPost("/live_board/v1/tracking").reply(200);
  mock.onPost("/url-for-ping/pings").reply((config) => {
    const data = JSON.parse(config.data);
    console.debug("sending ping to analytic", data);
    return [200, "ping sent!"];
  });
  mock.onPost("/live_board/v1/session_validations").reply(200);
  mock.onPut("/live_board/v2/invitation_wrappers/1").reply(200);
  mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/message/).reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/contact/).reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/form/).reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/link/).reply(200, {
    id: 1,
    email: "email@company.com",
    name: "name",
    last_name: "lastname",
    anon_guest: false,
    company: null,
    group_user: false
  });
  mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/share/).reply(200, {
    id: 1,
    name: "name",
    last_name: "lastname",
    email: "email@company.com",
    company: null,
    anon_guest: false,
    group_user: false
  });
  mock.onPost(/live_board\/v1\/boards\/(\d+)\/shares/).reply(200);
};
export {
  rules
};
