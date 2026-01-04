import { IFollozeState } from './interfaces/IFollozeState';

export class CaptchaService {
    private static getSiteKey(): string {
        const follozeState = (window as unknown as { FollozeState?: IFollozeState }).FollozeState;
        return follozeState?.envConfig?.INVISIBLE_RECAPTCHA_SITE_KEY || '';
    }

    private static isRecaptchaAvailable(): boolean {
        return typeof window.grecaptcha !== 'undefined' && !!this.getSiteKey();
    }

    public static async getCaptchaToken(action: string): Promise<string | null> {
        if (!this.isRecaptchaAvailable() || !window.grecaptcha) {
            return null;
        }

        return new Promise((resolve) => {
            window.grecaptcha!.ready(() => {
                window.grecaptcha!
                    .execute(this.getSiteKey(), { action })
                    .then((token) => resolve(token))
                    .catch(() => resolve(null));
            });
        });
    }
}

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    }
}
