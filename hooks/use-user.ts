import { loginApi, sendOtpApi } from "@/api/user-api";
import { useQuery } from "@tanstack/react-query"

export const USER_KEYS = {
    sendOtp: (email: string) => ["send-otp", email] as const,
    login: (otp: string) => ["login", otp] as const,
} as const;

export const useSendOtpQuery = (email: string) => {
    return useQuery({
        queryKey: USER_KEYS.sendOtp(email),
        queryFn: () => email ? sendOtpApi(email) : null,
        enabled: !!email
    })
}

export const useLoginQuery = (otp: string, email: string | null) => {
    return useQuery({
        queryKey: USER_KEYS.login(otp),
        queryFn: () => (otp && email) ? loginApi(otp, email) : null,
        enabled: !!otp
    })
}