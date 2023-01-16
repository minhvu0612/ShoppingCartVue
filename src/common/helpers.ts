import router from '@/plugins/vue-router';
import isPlainObject from 'lodash/isPlainObject';
import mapKeys from 'lodash/mapKeys';
import trim from 'lodash/trim';
import i18n from '../plugins/vue-i18n';
import localStorageAuthService from './authStorage';
import { PageName } from './constants';
import { type IDropDownOption } from './interfaces';

import { ToastType, useToasts } from '@/components/toast/store';

export function isValidJSON(str: string) {
    try {
        const object = JSON.parse(str);
        if (object && typeof object === 'object') return true;
        return false;
    } catch (error) {
        return false;
    }
}

export function trimData(body: any): void {
    const trimValue = (item: any) => {
        mapKeys(item, (value, key) => {
            // remove string contain only space characters
            if (typeof value === 'string') {
                item[key] = value.trim();
            }

            // iterate array
            else if (Array.isArray(value)) {
                value.forEach((subValue, index) => {
                    // remove string contain only space characters
                    if (typeof subValue === 'string') {
                        value[index] = trim(subValue);
                    } else if (isPlainObject(subValue)) {
                        trimValue(subValue);
                    }
                });
            } else if (isPlainObject(value)) {
                trimValue(value);
            }
        });
    };

    trimValue(body);
}

export function translateYupError(
    yupError:
        | {
              i18nKey: string;
              params?: Record<string, string>;
          }
        | string,
): string {
    if (typeof yupError === 'string') {
        return i18n.global.t(yupError);
    }
    if (!yupError?.i18nKey) return '';
    return i18n.global.t(yupError?.i18nKey, { ...yupError?.params });
}

export function isStringify<T>(obj: T | Record<string, unknown>): boolean {
    try {
        JSON.stringify(obj);
    } catch (e) {
        return false;
    }
    return true;
}

export function showErrorNotificationFunction(message: string, title?: string): void {
    if (!message) return;
    const { appendToast } = useToasts();
    appendToast({ message, type: ToastType.ERROR, title: title || '' });
}

export function showSuccessNotificationFunction(message: string, title?: string): void {
    if (!message) return;
    const { appendToast } = useToasts();
    appendToast({ message, type: ToastType.SUCCESS, title: title || '' });
}

export function hasPermissionToAccessRoute(requiredPermissions: string[]): boolean {
    if (!requiredPermissions || requiredPermissions.length === 0) return true;

    // TODO: implement logic later
    return true;
}

export function parseLanguageSelectOptions(
    options: IDropDownOption[],
): IDropDownOption[] {
    return options.map((option: IDropDownOption) => ({
        label: i18n.global.t(`${option.label}`),
        value: option.value,
    }));
}

export const logout = () => {
    localStorageAuthService.resetAll();
    const currentPage = router.currentRoute?.value;
    if (currentPage?.meta?.requiresAuth) {
        router.push({
            name: PageName.LOGIN_PAGE,
        });
    }
};
