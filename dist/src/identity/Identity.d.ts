import { FetchService } from "../common/FetchService";
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
export declare class Identity {
    private fetchService;
    constructor(fetch: FetchService);
    /**
     * Sign in with email - sends a verification code to the user's email
     *
     * @param {string} email - The user's email address
     * @returns {SignInResponse} SignInResponse containing the session token
     */
    signIn(email: string): Promise<SignInResponse>;
    /**
     * Verify email with the code sent to the user
     *
     * @param {string} email - The user's email address
     * @param {string} code - The verification code entered by the user
     * @param {string} session - The session token received from signIn
     * @returns {VerifyEmailResponse} VerifyEmailResponse
     */
    verifyEmail(email: string, code: string, session: string): Promise<VerifyEmailResponse>;
}
