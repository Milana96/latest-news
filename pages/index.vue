<template>
  <div>
    <div class="home-page">
      <img class="logo" src="~/assets/images/logo.png" alt="tech-logo">
      <section class="intro">
        <h1 class="tech">Get the latest tech news!</h1>
        <p class="intro-text">The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.</p>
      </section>
    </div>
    <section class="existing-posts">
      <PostList :posts="loadedPosts"></PostList>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    // this.$store.dispatch("fetchPosts");
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
