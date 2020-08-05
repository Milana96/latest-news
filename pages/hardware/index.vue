<template>
  <div>
    <div class="home-page">
      <img class="logo" src="~/assets/images/logo.png" alt="tech-logo" />
      <section class="intro">
        <h1 class="tech ui-margin-b-small">
          Get the latest tech news about hardware!
        </h1>
        <p class="intro-text">
          The latest tech news about the world's best (and sometimes worst)
          hardware and much more.
        </p>
      </section>
      <a href="#existing-posts" class="btn btn-white btn-animated"
        >Discover our news</a
      >
    </div>
    <section class="home-page-about">
      <div class="ui-center ui-margin-b-medium">
        <h2 class="heading-secondary">
          Exciting news about hardware
        </h2>
      </div>
      <div class="home-page-about-row">
        <div class="col-1-of-2">
          <h3 class="heading-tertiary ui-margin-b-small">
            You are going to fall in love with technology
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            deserunt reprehenderit sapiente inventore error facilis quibusdam
            nulla, nostrum voluptate sint iure, voluptatem illum aspernatur
            ullam ex adipisci labore eaque consequatur.
          </p>
          <h3 class="heading-tertiary ui-margin-b-small">
            Some best and (sometimes) the worst news about the technology
          </h3>
          <p>
            From top companies like Google and Apple to tiny startups vying for
            your attention, Verge Tech has the latest in what matters in
            technology daily.
          </p>
        </div>
        <div class="col-1-of-2 ui-flex-center">
          <div class="composition">
            <img
              src="~/assets/images/hardware-img.jpg"
              alt=""
              class="composition-photo composition-photo-p1"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="existing-posts" id="existing-posts">
      <PostList :posts="loadedPosts"></PostList>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts.filter(
        post => post.category.toLowerCase() == "hardware"
      );
    }
  }
};
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
