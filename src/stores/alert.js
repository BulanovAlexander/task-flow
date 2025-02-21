import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    showAlert: false,
    notification: {
      type: "",
      title: "",
      message: "",
    },
  }),
  actions: {
    notify(notification) {
      this.showAlert = true;
      this.notification = {
        ...notification,
      };
      setTimeout(() => {
        this.showAlert = false;
      }, 2000);
    },
  },
});
