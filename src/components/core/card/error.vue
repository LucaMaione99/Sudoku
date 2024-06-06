<template>
    <div class="flex bg-white w-full border-y border border-platform-border rounded-lg">
        <div
            class="min-w-[90px] flex justify-center bg-platform-red/10 rounded-lg"
            style="clip-path: ellipse(71% 100% at 16% 52%)"
        >
            <img class="w-10" src="@/assets/icons/card-error.svg" alt="info" />
        </div>
        <div class="p-7 text-sm text-platform-red" v-html="text">
            
        </div>
    </div>
</template>

<script setup>
defineProps({
    text: String
})
</script>
