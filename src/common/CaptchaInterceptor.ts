import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { CaptchaService } from './CaptchaService';

export class CaptchaInterceptor {
    public static setupCaptchaInterceptor(fetcher: AxiosInstance): void {
        fetcher.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
            if (config.captcha && config.method?.toLowerCase() === 'post' && config.data) {
                const data = config.data;
                if (!data.guid) {
                    try {
                        const captchaToken = await CaptchaService.getCaptchaToken(config.url || 'default');
                        if (captchaToken) {
                            data.captcha = captchaToken;
                        }
                    } catch (e) {
                        console.debug('CAPTCHA service not available', e);
                    }
                }
            }
            return config;
        });
    }
}

