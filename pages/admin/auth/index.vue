<template>
  <div class="admin-auth-container">
    <form @submit.prevent="onSubmit">
      <AppControlInput type="email" v-model="authData.email"
        >Email address</AppControlInput
      >
      <AppControlInput type="password" v-model="authData.password"
        >Password</AppControlInput
      >
      <AppButton type="submit">{{ authData.isLogin ? "Login" : "Sign Up" }}</AppButton>
      <AppButton
        type="button"
        btn-style="inverted"
        style="margin-left: 10px"
        @click="authData.isLogin = !authData.isLogin"
        >Switch to {{ authData.isLogin ? "Sign Up" : "Login" }}</AppButton
      >
    </form>
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
      this.$store
        .dispatch("auth/authenticateUser", this.authData)
        .then(() => {
          this.$router.push("/admin")
        });
    }
  }
};
</script>
