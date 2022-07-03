import MockAdapter from "axios-mock-adapter";
import {CtaResponseV1} from "../liveboard/ILiveboardTypes";

export const rules = (mock: MockAdapter) => {

    mock.onPost(/live_board\/v2\/boards\/(\d+)\/lead_views/)
        .reply<void>(200);

    mock.onPost(/live_board\/v2\/items\/(\d+)\/lead_views/)
        .reply<void>(200);

    mock.onPost("/api/v1/tracking")
        .reply<void>(200);

    mock.onPost("/live_board/v1/tracking")
        .reply<void>(200);

    mock.onPost("/url-for-ping/pings")
        .reply(config => {
            const data = JSON.parse(config.data);
            console.debug("sending ping to analytic", data);
            return [200, "ping sent!"];
        });

    mock.onPost("/live_board/v1/session_validations")
        .reply<void>(200);


    mock.onPut("/live_board/v2/invitation_wrappers/1")
        .reply<void>(200);

    // CTA
    mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/message/).reply<CtaResponseV1>(200, {
        id: 1,
        name: "name",
        last_name: "lastname",
        email: "email@company.com",
        company: null,
        anon_guest: false,
        group_user: false,
    });

    mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/contact/).reply<CtaResponseV1>(200, {
        id: 1,
        name: "name",
        last_name: "lastname",
        email: "email@company.com",
        company: null,
        anon_guest: false,
        group_user: false,
    });
    mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/form/).reply<CtaResponseV1>(200, {
        id: 1,
        name: "name",
        last_name: "lastname",
        email: "email@company.com",
        company: null,
        anon_guest: false,
        group_user: false,
    });

    mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/link/).reply<CtaResponseV1>(200, {
        id: 1,
        email: "email@company.com",
        name: "name",
        last_name: "lastname",
        anon_guest: false,
        company: null,
        group_user: false,
    });

    mock.onPost(/live_board\/v1\/boards\/(\d+)\/campaign\/share/).reply<CtaResponseV1>(200, {
        id: 1,
        name: "name",
        last_name: "lastname",
        email: "email@company.com",
        company: null,
        anon_guest: false,
        group_user: false,
    });

    mock.onPost(/live_board\/v1\/boards\/(\d+)\/shares/).reply<void>(200);
    // END -CTA
};
