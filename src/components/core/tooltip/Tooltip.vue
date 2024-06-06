<template>
	<!-- :delay="[0, active ? 2000 : 0] -->
    <tippy ref="tip" theme="light-border" @click="activeTooltip" trigger="mouseenter click" >
        <slot />
        <template #content> {{ active ? activeText : tooltipText }} </template>
    </tippy>
</template>

<script setup>
import { ref } from "vue";
import "tippy.js/dist/tippy.css"; // optional for styling
import 'tippy.js/themes/light-border.css'
import { Tippy } from "vue-tippy";
import promise from "../../../promise/promises";

const active = ref(false);
const tip = ref();
const props = defineProps(["tooltipText", "position", "activeText"]);

async function activeTooltip() {
	if(!props.activeText) return;
	
	tip.value.hide();
	tip.value.show();
	
	active.value = true;
    await promise.delay(1500);
	tip.value.hide();
    await promise.delay(500);
    active.value = false;
}
</script>

<style></style>
