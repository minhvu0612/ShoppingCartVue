<script lang="ts" setup>
import { useField } from 'vee-validate';
import { translateYupError } from '../../common/helpers';

interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    variant?: 'outlined' | 'filled' | 'plain' | 'underlined' | 'solo';
    items: { title: string; value: any }[];
    isRequired?: boolean;
    error?: string;
    readonly?: boolean;
    clearable?: boolean;
    color?: string;
    valueComparator?: (a: any, b: any) => boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isRequired: false,
    variant: 'outlined',
    color: 'primary',
});
const emit = defineEmits(['change']);

const { value: inputValue, errorMessage } = useField(props.name);

const onChange = (value: string): void => {
    emit('change', value);
};
</script>

<template>
    <div class="d-flex flex-column select-wrapper">
        <label v-if="variant === 'solo' && label" class="label">
            {{ label }}
            <span v-if="isRequired" class="mark-required">*</span>
        </label>
        <v-select
            v-model="inputValue"
            :label="variant === 'solo' ? undefined : label"
            :placeholder="props.placeholder"
            :items="props.items"
            :variant="props.variant"
            :error="!!errorMessage"
            @update:model-value="onChange"
            :error-messages="
                errorMessage ? [translateYupError(errorMessage || '')] : undefined
            "
            :menu-props="{ maxHeight: 268 }"
            :value-comparator="valueComparator"
            :readonly="readonly"
            hide-details="auto"
            :clearable="clearable"
            :color="color"
        ></v-select>
    </div>
</template>

<style lang="scss" scoped>
.select-wrapper {
    width: 100%;
}

.v-input {
    width: 100%;
}

:deep(.v-field) {
    border-radius: 8px;
}

:deep(.v-field__append-inner) {
    padding-top: 8px;
}

.label {
    margin-bottom: 10px;
    width: 100%;
}

.mark-required {
    color: $color-red;
}
</style>
