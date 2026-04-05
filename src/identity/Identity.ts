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
            // When the credentials flag is set to true on the client-side,
            // browsers do not allow the use of wildcards ( * ) for Access-Control-Allow-Origin.
            if (!(config.url?.includes(this.fetchService.options.analyticsServiceEndpoint) || config.url?.includes(this.fetchService.options.pingEndpoint))) {
                config.withCredentials = true;
            }
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

    public verifyEmail(email: string, code: string, session: string): Promise<VerifyEmailResponse> {
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
