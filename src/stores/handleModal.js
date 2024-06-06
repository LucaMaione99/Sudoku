import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    activeModal: false,
    activeModalConfirm: false,
    activeFullUserModal: false,
    activeFullChatbotModal: false,
    activeFullCompanyModal: false,
    activeFullAnticipoModal: false,
    title: "",
    msg: "",
    contentHtml:"",
    callbackConfirm: "",
    callback: "",
    icon: true,
    buttonVisible: true,
    backgroundHtml: "",
    backgroundImg: "",
    buttonConfirmText: "OK",
    buttonCancelText: "Annulla",
  }),

  actions: {
    openFullAnticipoModal() {
      document.body.classList.add("modalOpen");
      this.activeFullAnticipoModal = true;
    },
    openFullUserModal() {
      document.body.classList.add("modalOpen");
      this.activeFullUserModal = true;
    },
    openFullChatbotModal() {
      document.body.classList.add("modalOpen");
      this.activeFullChatbotModal = true;
    },
    openFullCompanyModal() {
      document.body.classList.add("modalOpen");
      this.activeFullCompanyModal = true;
    },
    closeFullModal() {
      document.body.classList.remove("modalOpen");

      this.activeFullUserModal = false;
      this.activeFullChatbotModal = false;
      this.activeFullCompanyModal = false;
      this.activeFullAnticipoModal = false;
    },
    closeFullUserModal() {
      document.body.classList.remove("modalOpen");
      this.activeFullUserModal = false;
    },
    closeFullChatbotModal() {
      document.body.classList.remove("modalOpen");
      this.activeFullChatbotModal = false;
    },
    closeFullCompanyModal() {
      document.body.classList.remove("modalOpen");
      this.activeFullCompanyModal = false;
    },
    closeFullAnticipoModal() {
      document.body.classList.remove("modalOpen");
      this.activeFullAnticipoModal = false;
    },
    openModal(data) {
      document.body.classList.add("modalOpen");

      this.activeModal = true;
      this.msg = data.text || "";
      this.contentHtml = data.contentHtml || "";
      this.title = data.title || "";
      this.callback = data.callback || "";
      if (!data.hasOwnProperty("icon")) data.icon = true;
      this.icon = data.icon;
      if (!data.hasOwnProperty("buttonVisible")) data.buttonVisible = true;
      this.buttonVisible = data.buttonVisible;
      this.backgroundHtml = data.backgroundHtml || "";
      this.backgroundImg = data.backgroundImg || "";
      this.buttonConfirmText = data.buttonConfirmText || "OK";
    },
    openModalConfirm(data) {
      document.body.classList.add("modalOpen");

      this.activeModalConfirm = true;
      this.msg = data.text || "";
      this.contentHtml = data.contentHtml || "";
      this.title = data.title || "";
      this.callbackConfirm = data.onConfirm || "";
      this.callback = data.onClose || "";
      if (!data.hasOwnProperty("icon")) data.icon = true;
      this.icon = data.icon;
      this.backgroundHtml = data.backgroundHtml || "";
      this.backgroundImg = data.backgroundImg || "";
      this.buttonConfirmText = data.buttonConfirmText || "Conferma";
      this.buttonCancelText = data.buttonCancelText || "Annulla";
    },
    closeModal(info = "") {
      //info contiene informazion provenienza chiusura modale
      document.body.classList.remove("modalOpen");
      this.activeModal = false;
      this.activeModalConfirm = false;
      this.msg = "";
      this.contentHtml = "";
      this.title = "";
      this.icon = true;
      this.buttonVisible = true;
      this.backgroundHtml = "";
      this.backgroundImg = "";
      this.buttonConfirmText = "Conferma";
      this.buttonCancelText = "Annulla";
      if (typeof this.callback === "function") {
        this.callback(info);
        this.callback = "";
      }
    },
    confirmModal() {
      document.body.classList.remove("modalOpen");

      this.activeModal = false;
      this.activeModalConfirm = false;
      this.msg = "";
      this.contentHtml = "";
      this.title = "";
      this.icon = true;
      this.backgroundHtml = "";
      this.backgroundImg = "";
      this.buttonConfirmText = "Conferma";
      this.buttonCancelText = "Annulla";
      if (typeof this.callbackConfirm === "function") {
        this.callbackConfirm();
        this.callbackConfirm = "";
      }
    },
  },
  // persist: true,
});
