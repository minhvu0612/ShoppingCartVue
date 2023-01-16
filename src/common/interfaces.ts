import { type AxiosResponse } from 'axios';
import { HttpStatus, OrderDirection } from './constants';

export interface IBodyResponse<T> extends AxiosResponse {
    success: boolean;
    isRequestError?: boolean;
    code: HttpStatus;
    message: string;
    data: T;
    errors?: { key: string; message: string; errorCode: HttpStatus }[];
}

export interface IUser {
    email: string;
}

export interface ILoginResponse {
    accessToken: {
        token: string;
        expiresIn: number;
    };
    refreshToken: {
        token: string;
        expiresIn: number;
    };
    profile: IUser;
}

export interface ICommonGetListQuery {
    page?: number;
    limit?: number;
    keyword?: string;
    orderDirection?: OrderDirection;
}

export interface IGetListResponse<T> {
    items: T[];
    totalItems: number;
}

export interface IDropDownOption {
    value?: string | number;
    label?: string;
}
