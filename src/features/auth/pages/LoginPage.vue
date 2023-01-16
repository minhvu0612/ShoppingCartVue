<script setup lang="ts">
import {
    showErrorNotificationFunction,
    showSuccessNotificationFunction,
} from '@/common/helpers';
import yup from '@/plugins/yup';
import { useField, useForm } from 'vee-validate';
import { useI18n } from 'vue-i18n';
import InputPassword from '../../../components/base/InputPassword.vue';
import InputText from '../../../components/base/InputText.vue';
import { useLoginStore } from '../stores/login.store';

const { t } = useI18n();
const loginStore = useLoginStore();

const loginFormSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const { handleSubmit } = useForm({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: loginFormSchema,
});
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');

const doLogin = handleSubmit(async () => {
    const response = await loginStore.login({
        email: email.value,
        password: password.value,
    });
    if (response?.success) {
        showSuccessNotificationFunction(t('auth.login.loginResult.success'));
    } else {
        showErrorNotificationFunction(t('auth.login.loginResult.error'));
    }
});
</script>

<template>
    <div class="d-flex justify-center align-center login-page-wrapper">
        <div class="login-form-wrapper">
            <v-responsive class="login-block-1">
                <img src="@/assets/images/authentication/login-block-1.svg" alt="" />
            </v-responsive>
            <v-responsive class="login-block-2">
                <img src="@/assets/images/authentication/login-block-2.svg" alt="" />
            </v-responsive>
            <v-card class="d-flex flex-column mt-sm-0 pa-6 login-form-body">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <div class="mb-3 logo-wrapper d-flex justify-center">
                                <img
                                    src="../../../assets/images/logo.png"
                                    alt=""
                                    height="40"
                                />
                            </div>
                        </v-col>

                        <v-col cols="12">
                            <InputText
                                name="email"
                                :label="$t('auth.login.email.label')"
                                :placeholder="$t('auth.login.email.placeholder')"
                                variant="outlined"
                                @keydown.enter="doLogin"
                            />
                        </v-col>
                        <v-col cols="12">
                            <InputPassword
                                name="password"
                                :label="$t('auth.login.password.label')"
                                :placeholder="$t('auth.login.password.placeholder')"
                                variant="outlined"
                                @keydown.enter="doLogin"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                class="mt-1"
                                color="primary"
                                width="100%"
                                elevation="1"
                                type="button"
                                @click="doLogin"
                            >
                                {{ $t('auth.login.button.login') }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login-page-wrapper {
    height: 100vh;
    position: relative;

    .login-form-body {
        max-width: 448px;
        width: 100%;
        border-width: 0px;
        box-shadow: none;
        border-color: rgba(var(--v-border-color), var(--v-border-opacity));
        box-shadow: 0 3px 9px 1px rgba(var(--v-theme-on-surface), 0.03),
            0 9px 8px rgba(var(--v-theme-on-surface), 0.02),
            0 1px 6px 4px rgba(var(--v-theme-on-surface), 0.01);
        border-radius: 6px;
    }

    .login-form-wrapper {
        position: relative;
        :deep(.v-responsive) {
            position: absolute;
        }
        .login-block-1 {
            inset-block-start: -77px;
            inset-inline-start: -40px;
        }
        .login-block-2 {
            inset-block-end: -55px;
            inset-inline-end: -55px;
        }
    }
}
</style>
