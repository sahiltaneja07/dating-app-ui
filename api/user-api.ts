import { APP_CONSTANTS } from './constants';
import { getUrl, postApi } from "./fetch-facade";

export async function sendOtpApi(email: string): Promise<string> {
    return postApi(getUrl(APP_CONSTANTS.sendOtp), {
        email: email
    });
}

export async function loginApi(otp: string): Promise<string> {
    return postApi(getUrl(APP_CONSTANTS.login), {
        otp: otp
    });
}

