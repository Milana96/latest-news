import axios from "axios";
import Cookie from "js-cookie";

const auth = {
  namespaced: true,

  state: {
    token: null
  },

  getters: {
    isAuthenticated(state) {
      return state.token != null;
    }
  },

  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    CLEAR_TOKEN(state) {
      state.token = null;
    }
  },

  actions: {
    authenticateUser(vuexContext, authData) {
      let authURL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        process.env.fbAPIKey;
      if (!authData.isLogin) {
        authURL =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          process.env.fbAPIKey;
      }
      return axios
        .post(authURL, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(result => {
          vuexContext.commit("SET_TOKEN", result.data.idToken);
          localStorage.setItem("token", result.data.idToken);
          localStorage.setItem(
            "tokenExpiration",
            new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000
          );
          Cookie.set("jwt", result.data.idToken);
          Cookie.set(
            "expirationDate",
            new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000
          );
        })
        .catch(e => console.log(e));
    },
    initAuth(vuexContext, req) {
      let token, expirationDate;
      if (req) {
        if (!req.headers.cookie) {
          return;
        }
        const jwtCookie = req.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("jwt="));
        if (!jwtCookie) {
          return;
        }
        token = jwtCookie.split("=")[1];
        expirationDate = req.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("expirationDate="))
          .split("=")[1];
      } else {
        if (process.client) {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
      }
      if (new Date().getTime() > Number.parseInt(expirationDate) || !token) {
        console.log("No token or invalid token");
        vuexContext.dispatch("logout");
        return;
      }
      vuexContext.commit("SET_TOKEN", token);
    },
    logout(vuexContext) {
      vuexContext.commit("CLEAR_TOKEN");
      Cookie.remove("jwt");
      Cookie.remove("expirationDate");
      if (process.client) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
      }
    },
    resetPassword(vuexContext, resetData) {
      const resetURL =
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBmgklka-DYxF9KZfkcmW4KNR0O-f8jS0g";
      return axios
        .post(resetURL, {
          requestType: "PASSWORD_RESET",
          email: resetData
        })
        .then(result => {
          console.log("Success");
          this.$router.push("/admin");
        })
        .catch(e => console.log(e));
    }
  }
};

export default auth;
