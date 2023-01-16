import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { authApiService } from '../services/auth.api';
import type { ILoginBody } from '../interfaces';
import type { IUser } from '@/common/interfaces';
import localStorageAuthService from '@/common/authStorage';

export const useLoginStore = defineStore('login', () => {
    const loginUser: IUser = reactive({
        email: '',
    });

    async function login({ email, password }: ILoginBody) {
        const response = await authApiService.login({ email, password });
        if (response?.success) {
            loginUser.email = email;
            localStorageAuthService.setLoginUser(loginUser);
        } else {
            loginUser.email = '';
        }
        return response;
    }

    return { loginUser, login };
});
