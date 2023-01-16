import axios, { type AxiosRequestConfig } from 'axios';
import throttle from 'lodash/throttle';
import { HttpMiddleware } from './httpMiddleware';
import localStorageTokenService from '../../../common/authStorage';
import type { IBodyResponse, ILoginResponse } from '../../../common/interfaces';
import { logout } from '../../../common/helpers';

const sendRefreshToken = async () => {
    try {
        const response = (
            await axios.post(
                `${import.meta.env.VUE_APP_API_URL}/auth/refresh-token`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorageTokenService.getRefreshToken()}`,
                    },
                },
            )
        )?.data as IBodyResponse<ILoginResponse>;
        localStorageTokenService.setLoginUser(response?.data?.profile);
        localStorageTokenService.setAccessToken(response?.data?.accessToken?.token);
        localStorageTokenService.setAccessTokenExpiredAt(
            response?.data?.accessToken?.expiresIn,
        );
        localStorageTokenService.setRefreshToken(response?.data?.refreshToken?.token);
        localStorageTokenService.setRefreshTokenExpiredAt(
            response?.data?.refreshToken?.expiresIn,
        );
        return response?.data;
    } catch (error) {
        logout();
    }
};

const throttled = throttle(sendRefreshToken, 10000, { trailing: false });
export default class AuthMiddleware extends HttpMiddleware {
    async onRequest(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
        const tokenExpiredAt = localStorageTokenService.getAccessTokenExpiredAt();
        if (
            !tokenExpiredAt ||
            (tokenExpiredAt && tokenExpiredAt <= new Date().getTime())
        ) {
            // token expired, check refresh token
            const refreshToken = localStorageTokenService.getRefreshToken();
            const refreshTokenExpiredAt =
                +localStorageTokenService.getRefreshTokenExpiredAt();
            if (
                !refreshToken ||
                !refreshTokenExpiredAt ||
                refreshTokenExpiredAt <= new Date().getTime()
            ) {
                // refresh token expired
                logout();
            } else {
                // check refresh token ok, call refresh token api
                await throttled();
            }
        }
        // set authorization
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${localStorageTokenService.getAccessToken()}`,
        };
        return config;
    }
}
