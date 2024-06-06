<template>
  <button
    :disabled="disabled"
    :class="{
      'bg-platform-body border border-platform-border text-platform-sub-text': disabled,
      'bg-platform-primary text-white duration-500 hover:bg-platform-hover-color border-platform-primary  hover:border-platform-hover-color':
        !disabled,
    }"
    class="min-w-16 px-4 py-1.5 rounded-md text-center border"
  >
    <slot> </slot>
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
