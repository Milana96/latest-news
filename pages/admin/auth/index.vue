<template>
  <div class="container container-auth">
    <div class="container-inner">
      <h2 class="auth-label"><span>Log In</span><span>Sign Up</span></h2>
      <input type="checkbox" class="checkbox" name="reg-log" id="reg-log" />
      <label for="reg-log"></label>
      <div class="card-3d-wrap">
        <div class="card-3d-wrapper">
          <div class="front">
            <form class="container-inner-form front" @submit.prevent="onSubmit">
              <label class="sign-log" for="logIn">Log in</label>
              <AppControlInput
                v-if="!reset"
                type="email"
                v-model="authData.email"
                >Email address</AppControlInput
              >
              <AppControlInput v-if="reset" type="email" v-model="resetEmail"
                >Email address</AppControlInput
              >
              <AppControlInput
                v-if="!reset"
                type="password"
                v-model="authData.password"
                >Password</AppControlInput
              >
              <p class="forget-password" v-if="!reset" @click="resetPassword"
                >Forget your password?</p
              >
              <AppButton v-if="!reset" type="submit">
                Submit
              </AppButton>
              <AppButton v-if="reset" type="submit" @click="sendResetEmail">
                Reset password
              </AppButton>
            </form>
          </div>
          <div class="back">
            <form class="container-inner-form" @submit.prevent="onSubmitSignUp">
              <label class="sign-log" for="signUp">Sign up</label>
              <AppControlInput type="email" v-model="authData.email"
                >Email address</AppControlInput
              >
              <AppControlInput type="password" v-model="authData.password"
                >Password</AppControlInput
              >
              <AppButton type="submit">
                Submit
              </AppButton>
            </form>
          </div>
        </div>
      </div>
      <!-- Reset password success popup -->
      <div id="subscribe">
        <h2>
          Email has been sent to you, please check and verify!
        </h2>
        <span class="close" id="close">
           <fa @click="closeForm" :icon="['fas', 'times']" />
        </span>
      </div>
      <!-- Reset password success popup -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      authData: {
        email: "",
        password: "",
        isLogin: true
      },
      resetEmail: "",
      reset: false
    };
  },
  methods: {
    onSubmitSignUp() {
      this.authData.isLogin = false;
      this.$store.dispatch("auth/authenticateUser", this.authData).then(() => {
        this.$router.push("/admin");
      });
    },
    onSubmit() {
      this.$store.dispatch("auth/authenticateUser", this.authData).then(() => {
        this.$router.push("/admin");
      });
    },
    resetPassword() {
      this.reset = true;
    },
    sendResetEmail() {
      this.$store.dispatch("auth/resetPassword", this.resetEmail);
      this.reset = false;
      this.openForm();
    },
    openForm() {
      var subscribe = document.getElementById("subscribe");
      subscribe.classList.add("animated");
      subscribe.classList.add("fadeIn");
      subscribe.classList.add("resetEmail");
      setTimeout(function() {
        subscribe.style.display = "block";
      }, 1000);
    },
    closeForm() {
      var subscribe = document.getElementById("subscribe");
      subscribe.classList.add("animated");
      subscribe.classList.add("fadeOut");
      setTimeout(function() {
        subscribe.style.display = "none";
      }, 1000);
    }
  }
};
</script>
