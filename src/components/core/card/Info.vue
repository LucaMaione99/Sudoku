<template>
    <div
        class="flex bg-platform-primary-light md:bg-white w-full border-y border border-platform-border rounded-lg"
    >
        <div
            class="min-w-[90px] hidden md:flex justify-center bg-platform-primary-light rounded-lg"
            style="clip-path: ellipse(71% 100% at 16% 52%)"
        >
            <img class="w-3" src="@/assets/icons/info.svg" alt="info" />
        </div>
        <div class="p-7 text-sm">
            <div class="text-platform-text md:hidden text-lg">Info</div>
            {{ text }} <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    text: String,
});
</script>
