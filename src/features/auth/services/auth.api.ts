import { ApiService } from '../../../plugins/axios/api';
import axiosService from '../../../plugins/axios';
import type { ILoginBody } from '../interfaces';

const defaultUser = {
    email: 'admin@tokyotechlab.com',
    password: 'tt@1234',
};

class AuthApiService extends ApiService {
    login(loginBody: ILoginBody): Promise<{ success: boolean }> {
        if (
            loginBody.email === defaultUser.email &&
            loginBody.password === defaultUser.password
        ) {
            return new Promise((resolve) => {
                resolve({ success: true });
            });
        }

        return new Promise((resolve) => {
            resolve({ success: false });
        });
    }
}
export const authApiService = new AuthApiService(
    { baseUrl: import.meta.env.VUE_APP_API_URL as string },
    axiosService,
);
