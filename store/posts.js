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
    fetchPosts(vuexContext, commit) {
        return axios.get('https://latest-news-f9dc0.firebaseio.com/posts.json')
            .then((result) => {
                var postsArray = [];
                for (const key in result.data) {
                    postsArray.push({...result.data[key], id: key});
                }
                console.log(postsArray);
                
                vuexContext.commit('setPosts', postsArray);
            })
            .catch((err) => {console.log(err);
            })
    }
  },
  getters: {
    loadedPosts(state) {
        return state.loadedPosts;
    }
  }
};

export default posts;
