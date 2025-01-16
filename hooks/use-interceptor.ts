'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useBaseContext } from '@/contexts/base.context';
import { getUrl, postApi } from '@/api/fetch-facade';
import { APP_CONSTANTS } from '@/api/constants';

const fetchRefreshToken = async () => {
    const { setUser } = useBaseContext();

    const url = getUrl(APP_CONSTANTS.refreshToken);
    const { data }: any = await postApi(url, {});
    setUser(data.user);
}

const useInterceptor = () => {

    useEffect(() => {
        const responseInterceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config;
                if (
                    error.response.status === 401 &&
                    error.response.data.message === 'RefreshToken Expired'
                ) {
                    // navigate to /user/login
                    //throw error, catch it in global error handling and handle route
                } else if (
                    error.response.status === 401 &&
                    error.response.data.message === 'AccessToken Expired' &&
                    !prevRequest.sent
                ) {
                    prevRequest.sent = true;
                    await fetchRefreshToken();
                    return axios(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => axios.interceptors.response.eject(responseInterceptor);
    });

    return axios;
};

export default useInterceptor;
