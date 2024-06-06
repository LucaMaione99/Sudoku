<template>
    <button
        class="text-sm cursor-pointer rounded-md h-7 px-5 py-1"
        :class="{
            'bg-platform-primary text-white': active,
            'text-platform-text': !active,
            'btn-change-courses': !hover_transparent,
        }"
    >
        {{ text }}
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
    },
    hover_transparent: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped>
/* .btn-change-courses {
    @apply h-7 px-5 py-1;
} */

.btn-change-courses:hover,
.btn-change-courses:focus {
    @apply bg-platform-primary text-white rounded-lg;
    transition: all 500ms ease;
}
</style>
