<script setup lang="ts">
import { ref } from 'vue';
import { useField } from 'vee-validate';
import { translateYupError } from '../../common/helpers';
interface Props {
    name: string;
    label?: string;
    variant?: 'outlined' | 'filled' | 'plain' | 'underlined' | 'solo';
    placeholder?: string;
    allowShowPassword?: boolean;
    isRequired?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    allowShowPassword: true,
    isRequired: false,
    variant: 'outlined',
});

const emit = defineEmits(['change', 'keydown.enter']);

const onEnter = (): void => {
    emit('keydown.enter');
};

const { value: inputValue, errorMessage } = useField(props.name);

const isShowPassword = ref(false);

function onClickIconEye() {
    isShowPassword.value = !isShowPassword.value;
}
</script>

<template>
    <div class="d-flex flex-column input-text-wrapper">
        <label v-if="variant === 'solo' && label" class="label">
            {{ label }}
            <span v-if="isRequired" class="mark-required">*</span>
        </label>
        <v-text-field
            density="compact"
            :label="variant === 'solo' ? undefined : props.label"
            :type="isShowPassword ? 'text' : 'password'"
            v-model="inputValue"
            :placeholder="props.placeholder"
            :variant="props.variant"
            :error="!!errorMessage"
            color="primary"
            :error-messages="
                errorMessage ? [translateYupError(errorMessage || '')] : undefined
            "
            hide-details="auto"
            @keydown.enter="onEnter"
        >
            <template v-if="props.allowShowPassword" v-slot:append-inner>
                <v-icon @mouseup.stop @click="onClickIconEye">
                    {{ isShowPassword ? 'mdi-eye-off' : 'mdi-eye' }}
                </v-icon>
            </template>
        </v-text-field>
    </div>
</template>
<style lang="scss" scoped>
.input-text-wrapper {
    width: 100%;
}

.label {
    margin-bottom: 10px;
    width: 100%;
}

.mark-required {
    color: $color-red;
}

:deep(.v-field) {
    border-radius: 8px;
}
</style>
