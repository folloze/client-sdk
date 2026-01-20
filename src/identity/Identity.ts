import {FetchService} from "../common/FetchService";

export type SignInRequest = {
    email: string;
};

export type SignInResponse = {
    session: string;
};

export type VerifyEmailRequest = {
    email: string;
    code: string;
    session: string;
};

export type VerifyEmailResponse = {
    success: boolean;
};

export class Identity {
    private fetchService: FetchService;

    constructor(fetch: FetchService) {
        this.fetchService = fetch;
    }

    /**
     * Sign in with email - sends a verification code to the user's email
     *
     * @param {string} email - The user's email address
     * @returns {SignInResponse} SignInResponse containing the session token
     */
    signIn(email: string): Promise<SignInResponse> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<SignInResponse>(
                    `${this.fetchService.options.identityServiceEndpoint}/sign_in`,
                    {email}
                )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not sign in", e);
                    reject(e);
                });
        });
    }

    /**
     * Verify email with the code sent to the user
     *
     * @param {string} email - The user's email address
     * @param {string} code - The verification code entered by the user
     * @param {string} session - The session token received from signIn
     * @returns {VerifyEmailResponse} VerifyEmailResponse
     */
    verifyEmail(email: string, code: string, session: string): Promise<VerifyEmailResponse> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<VerifyEmailResponse>(
                    `${this.fetchService.options.identityServiceEndpoint}/verify_email`,
                    {email, code, session}
                )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not verify email", e);
                    reject(e);
                });
        });
    }
}
