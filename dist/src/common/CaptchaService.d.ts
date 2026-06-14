export declare class CaptchaService {
    private static getSiteKey;
    private static isRecaptchaAvailable;
    static getCaptchaToken(action: string): Promise<string | null>;
}
declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: {
                action: string;
            }) => Promise<string>;
        };
    }
}
