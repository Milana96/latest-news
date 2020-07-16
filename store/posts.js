import Vuex from "vuex";
import axios from "axios";

const posts = {
  namespaced: true,

  state: {
    loadedPosts: []
  },
  mutations: {
   setPosts(state, payload) {
       state.loadedPosts = payload;
   }
  },
  actions: {
   
  },
  getters: {
    loadedPosts(state) {
        return state.loadedPosts;
    }
  }
};

export default posts;
