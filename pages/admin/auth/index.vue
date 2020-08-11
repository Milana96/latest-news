<template>
  <div class="container">
    <div class="container-inner">
      <h2 class="auth-label"><span>Log In</span><span>Sign Up</span></h2>
      <input type="checkbox" class="checkbox" name="reg-log" id="reg-log" />
      <label for="reg-log"></label>
      <div class="card-3d-wrap">
        <div class="card-3d-wrapper">
          <div class="front">
            <form class="container-inner-form front" @submit.prevent="onSubmit">
              <label class="sign-log" for="logIn">Log in</label>
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
      }
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
    }
  }
};
</script>
