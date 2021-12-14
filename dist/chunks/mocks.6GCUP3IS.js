import "./chunk.5KE7N75L.js";

// src/analytics/mocks.ts
var rules = (mock) => {
  mock.onPost("/url-for-custom-analytic-event").reply((config) => {
    const data = JSON.parse(config.data);
    console.debug("sending analytic data to server", data);
    return [201, "analytic saved!"];
  });
  mock.onPost("/url-for-ping").reply((config) => {
    const data = JSON.parse(config.data);
    console.debug("sending ping to analytic", data);
    return [200, "ping sent!"];
  });
};
export {
  rules
};
