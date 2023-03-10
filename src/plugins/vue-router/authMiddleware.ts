import localStorageAuthService from '@/common/authStorage';
import { hasPermissionToAccessRoute } from '@/common/helpers';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export default async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
): Promise<void> => {
    const isPublic = to?.meta?.public || false;
    const onlyWhenLoggedOut = to?.meta?.onlyWhenLoggedOut || false;
    const loggedIn = !!localStorageAuthService.getAccessToken();
    const refreshToken = localStorageAuthService.getRefreshToken();
    const refreshTokenExpiredAt = localStorageAuthService.getRefreshTokenExpiredAt();

    if (isPublic) {
        // Do not allow user to visit entry page if they are logged in
        if (loggedIn && onlyWhenLoggedOut) {
            return next('/');
        }
        return next();
    }
    if (!isPublic && !loggedIn) {
        return next({
            path: '/login',
            query: { redirect: to.fullPath }, // Store the full path to redirect the user to after login
        });
    }
    if (
        !refreshToken ||
        !refreshTokenExpiredAt ||
        refreshTokenExpiredAt <= new Date().getTime()
    ) {
        localStorageAuthService.resetAll();
        return next({
            path: '/login',
            query: { redirect: to.path },
        });
    }
    if (loggedIn) {
        const requiredPermissions = (to?.meta?.requiredPermissions as string[]) || [];
        if (hasPermissionToAccessRoute(requiredPermissions)) return next();
        return next({ path: '/404' });
    }
    return next();
};
