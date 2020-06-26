import Vuex from "vuex";
import axios from "axios";
import auth from "./auth";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth
    },
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload;
      },
      addPost(state, payload) {
        state.loadedPosts.push(payload);
      },
      editPost(state, payload) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === payload.id);
        state.loadedPosts[postIndex] = payload;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://latest-news-f9dc0.firebaseio.com/posts.json")
          .then(result => {
            var postsArray = [];
            for (const key in result.data) {
              postsArray.push({ ...result.data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(err => {
            console.log(err);
          });
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedData: new Date()
        }
        return axios
        .post("https://latest-news-f9dc0.firebaseio.com/posts.json", createdPost)
        .then(result => {
          vuexContext.commit('addPost', {...createdPost, id: result.data.name});
        })
        .catch(err => {
          console.log(err);
        });
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put(
          "https://latest-news-f9dc0.firebaseio.com/posts/" +
            editedPost.id +
            ".json",
          editedPost
        )
        .then(res => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch(err => console.log(err));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
