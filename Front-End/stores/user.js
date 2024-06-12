import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = {};
    },
  },
  getters: {
    getUser() {
      return this.user;
    },
  },
  persist: true,
});
