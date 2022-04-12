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
};
export {
  rules
};
