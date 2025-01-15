import { APP_CONSTANTS } from './constants';
import { getUrl, postApi } from './fetch-facade';

export async function sendOtpApi(email: string): Promise<any> {
    const url = getUrl(APP_CONSTANTS.sendOtp);
    return postApi(url, {
        email,
    });
}

export async function loginApi(otp: string, email: string): Promise<any> {
    const url = getUrl(APP_CONSTANTS.login);
    return postApi(url, {
        otp,
        email
    });
}

// export async function useRefreshTokenApi(): Promise<any> {
//     const url = getUrl(APP_CONSTANTS.refreshToken);
//     return postApi(url, {});
// }
