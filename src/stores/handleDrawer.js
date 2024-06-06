import { defineStore } from "pinia";

export const useDrawerStore = defineStore({
	id: "drawer",
	state: () => ({
		active: false,
		voiceActive: 0,
	}),

	actions: {
		toggleDrawer() {
			document.body.classList.remove("menuOpen");
			this.active = !this.active;
			if (window.innerWidth < 1024 && this.active) {
				document.body.classList.add("menuOpen");
			}
		},
		setDrawer(status) {
			document.body.classList.remove("menuOpen");
			this.active = status;
			if (window.innerWidth < 1024 && this.active) {
				document.body.classList.add("menuOpen");
			}
		},
	},

	getters: {
		drawerClass(state) {
			if (!state.active) {
				return "-translate-x-full";
			}
			return "";
		},
	},
	persist: {
		storage: sessionStorage,
	},
});
