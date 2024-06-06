<template>
    <button
        :disabled="disable"
        :class="{
            'bg-platform-body border border-platform-border text-platform-sub-text ':
                disable,
            'bg-white border-platform-primary text-platform-primary hover:bg-platform-primary-light   duration-500':
                !disable,
        }"
        class="min-w-[90px] px-4 py-1.5 rounded-md border text-center"
    >
        {{ text }}
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    text: String,
    disable: {
        type: Boolean,
        default: false,
    },
});
</script>
