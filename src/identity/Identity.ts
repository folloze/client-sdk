import {type FetchService} from "../common/FetchService";

export type SignInResponse = {
    session: string;
    flz_tryme_user?: string;
};

export type VerifyEmailResponse = {
    id: number;
    email: string;
};

export class Identity {
    private fetchService: FetchService;

    constructor(fetch: FetchService) {
        this.fetchService = fetch;

        this.fetchService.fetcher.interceptors.request.use(config => {
            config.withCredentials = true;
            return config;
        });
    }

    public signIn(email: string): Promise<SignInResponse> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<SignInResponse>(`${this.fetchService.options.identityServiceEndpoint}/tryme/sign_in`, {email})
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not sign in", e);
                    reject(e);
                });
        });
    }

    public verifyEmail(email: string, code: number, session: string): Promise<VerifyEmailResponse> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<VerifyEmailResponse>(`${this.fetchService.options.identityServiceEndpoint}/tryme/verify_email`, {email, code, session})
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
