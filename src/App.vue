<template>
	<router-view />
	<DialogConfirm />
	<Dialog />
	<Spinner />
</template>

<script setup>
import Spinner from "./components/core/spinner/Spinner.vue";
import DialogConfirm from "./components/core/dialog/DialogConfirm.vue";
import Dialog from "./components/core/dialog/Dialog.vue";
</script>


