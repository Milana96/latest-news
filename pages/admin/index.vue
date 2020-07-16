<template>
  <div class="admin">
    <div class="home-page">
      <img class="logo" src="~/assets/images/logo.png" alt="tech-logo" />
      <section class="intro">
        <h1 class="tech">Get the latest tech news!</h1>
        <p class="intro-text">
          The latest tech news about the world's best (and sometimes worst)
          hardware, apps, and much more. From top companies like Google and
          Apple to tiny startups vying for your attention, Verge Tech has the
          latest in what matters in technology daily.
        </p>
      </section>
    </div>
    <div class="featured-posts">
      <h1 class="tech">ADMIN</h1>
      <p class="create-post">
        This is the place where you can create write the latest tech news 
        about the hardware, apps and much more.
      </p>
       <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
      <section class="existing-posts">
        <PostList isAdmin :posts="loadedPosts"></PostList>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>
