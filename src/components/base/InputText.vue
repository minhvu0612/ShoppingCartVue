<script setup lang="ts">
import { useField } from 'vee-validate';
import { translateYupError } from '../../common/helpers';

interface Props {
    name: string;
    label?: string;
    variant?: 'outlined' | 'filled' | 'plain' | 'underlined' | 'solo';
    placeholder?: string;
    isRequired?: boolean;
    value?: string;
    readonly?: boolean;
    clearable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'outlined',
    isRequired: false,
});

const { value: inputValue, errorMessage } = useField(props.name);

const emit = defineEmits(['change', 'keydown.enter']);

const onChange = (value: string): void => {
    emit('change', value);
};
const onEnter = (): void => {
    emit('keydown.enter');
};
</script>

<template>
    <div class="d-flex flex-column input-wrapper">
        <label v-if="variant === 'solo' && label" class="label">
            {{ label }}
            <span v-if="isRequired" class="mark-required">*</span>
        </label>
        <v-text-field
            :value="value || inputValue"
            density="compact"
            :label="variant === 'solo' ? undefined : props.label"
            type="text"
            v-model="inputValue"
            :placeholder="props.placeholder"
            :variant="props.variant"
            color="primary"
            :error="!!errorMessage"
            :error-messages="
                errorMessage ? [translateYupError(errorMessage || '')] : undefined
            "
            hide-details="auto"
            :readonly="readonly"
            :clearable="clearable"
            @update:model-value="onChange"
            @keydown.enter="onEnter"
        ></v-text-field>
    </div>
</template>
<style lang="scss" scoped>
.input-wrapper {
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
