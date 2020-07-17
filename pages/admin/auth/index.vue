<template>
  <div class="container">
    <div class="bg-video">
      <video class="bg-video-content" autoplay muted loop>
        <source src="~/assets/images/auth-video.mp4" type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
    <div class="container-inner">
      <form class="container-inner-form" @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="authData.email"
          >Email address</AppControlInput
        >
        <AppControlInput type="password" v-model="authData.password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{
          authData.isLogin ? "Login" : "Sign Up"
        }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="authData.isLogin = !authData.isLogin"
          >Switch to {{ authData.isLogin ? "Sign Up" : "Login" }}</AppButton
        >
      </form>
      <img
        class="container-inner-image auth"
        src="~/assets/images/auth-img.jpg"
        alt=""
      />
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
    onSubmit() {
      this.$store.dispatch("auth/authenticateUser", this.authData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
