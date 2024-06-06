import { defineStore } from "pinia";

export const useSpinnerStore = defineStore({
	id: "spinner",
	state: () => ({
		active: false,
		count: 0,
	}),

	actions: {
		toggleSpinner() {
			this.active = !this.active;
		},
		startSpinner() {
			this.active = true;
			this.count++;
		},
		stopSpinner() {
			this.count--;
			if (this.count <= 0) {
				this.count = 0;
				this.active = false;
			}
		},
	},
	// persist: true,
});
