<template>
	<Transition name="fade">
		<div
			class="bg-platform-body/80 backdrop-blur-sm w-screen h-screen fixed top-0 z-50"
			v-if="storeSpinner.active">
			<div class="loader flex flex-col items-center gap-2">
				<!-- <img src="@/assets/icons/logo.svg" class="w-30 h-30"/> -->
				<span class="text-platform-text text-lg">Caricamento...</span>
			</div>
		</div>
	</Transition>
</template>

<script setup>
import { useSpinnerStore } from "@/stores/handleSpinner";
const storeSpinner = useSpinnerStore();
</script>

<style scoped>
.loader {
	margin: auto;
	position: fixed;
	left: calc(50% - 52px);
	top: calc(50% - 56px);
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
	animation: load6 1.7s infinite ease, round 1.7s infinite ease;
}
.rotating-opacity {
	transform-origin: center center;
	animation: rotateY 6s linear infinite, opacityChange 6s linear infinite;
}

@keyframes opacityChange {
	0%,
	100% {
		fill-opacity: 1;
	}
	50% {
		fill-opacity: 0.2;
	}
}
</style>
