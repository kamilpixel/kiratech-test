import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({}),
  actions: {
    async getUser(page = 1, gender = '') {
      const API_URL = import.meta.env.VITE_API_URL;
      return await axios.get(
        `${API_URL}/?page=${page}&results=10&gender=${gender}`
      );
    },
  },
});
