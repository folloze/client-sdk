import { type FetchService } from "../common/FetchService";
export type SignInResponse = {
    session: string;
    flz_tryme_user?: string;
};
export type VerifyEmailResponse = {
    id: number;
    email: string;
};
export declare class Identity {
    private fetchService;
    constructor(fetch: FetchService);
    signIn(email: string): Promise<SignInResponse>;
    verifyEmail(email: string, code: number, session: string): Promise<VerifyEmailResponse>;
}
