import Vuex from "vuex";
import axios from "axios";
import auth from "./auth";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth
    },
    state: {
      loadedPosts: [],
    },
    mutations: {
      SET_POSTS(state, payload) {
        state.loadedPosts = payload;
      },
      ADD_POST(state, payload) {
        state.loadedPosts.push(payload);
      },
      EDIT_POST(state, payload) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === payload.id
        );
        state.loadedPosts[postIndex] = payload;
      },
      REMOVE_POST(state, payload) {
        state.loadedPosts = state.loadedPosts.filter(
          post => post.id != payload
        );
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
            vuexContext.commit("SET_POSTS", postsArray);
          })
          .catch(err => {
            console.log(err);
          });
      },
      // fetchPosts(vuexContext, commit) {
      //   return axios
      //     .get("https://latest-news-f9dc0.firebaseio.com/posts.json")
      //     .then(result => {
      //       var postsArray = [];
      //       for (const key in result.data) {
      //         postsArray.push({ ...result.data[key], id: key });
      //       }
      //       vuexContext.commit("SET_POSTS", postsArray);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedData: new Date()
        };
        return axios
          .post(
            "https://latest-news-f9dc0.firebaseio.com/posts.json?auth=" +
              vuexContext.state.auth.token,
            createdPost
          )
          .then(result => {
            vuexContext.commit("ADD_POST", {
              ...createdPost,
              id: result.data.name
            });
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
              ".json?auth=" +
              vuexContext.state.auth.token,
            editedPost
          )
          .then(res => {
            vuexContext.commit("EDIT_POST", editedPost);
          })
          .catch(err => console.log(err));
      },
      removePost(vuexContext, postID) {
        axios
          .delete(
            "https://latest-news-f9dc0.firebaseio.com/posts/" +
              postID +
              ".json?auth=" +
              vuexContext.state.auth.token
          )
          .then(res => {
            vuexContext.commit("REMOVE_POST", postID);
          })
          .catch(e => console.log(e));
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
