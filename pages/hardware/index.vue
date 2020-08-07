<template>
  <div>
    <div class="home-page">
      <div class="intro">
        <h1 class="intro-text intro-text_one intro-text_two" for="software">
          Hardware
        </h1>
      </div>
      <div class="background">
        <div :class="{ active: active }" class="img-wrap hardware"></div>
      </div>
      <div class="discover-more">
        <a href="#existing-posts" class="btn btn-white btn-animated"
          >Discover our news</a
        >
      </div>
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
    <section class="existing-posts hardware-posts" id="existing-posts">
      <div class="search-post ui-margin-b-small">
        <AppControlInput
          v-model="search"
          placeholder="Search"
        ></AppControlInput>
        <span><fa class="icons-item" :icon="['fa', 'search']"/></span>
      </div>
      <PostList :posts="loadedPosts"></PostList>
      <Pagination :page="page" :pages="pages" @clickedPage="clicked" />
    </section>
  </div>
</template>

<script>
import Pagination from "@/components/UI/Pagination.vue";
export default {
  components: {
    Pagination
  },
  data() {
    return {
      search: "",
      page: 1,
      perPage: 3,
      pages: [],
      active: true
    };
  },
  created() {
    this.setPages();
  },
  computed: {
    loadedPosts() {
      if (this.search && this.search != "") {
        const searchText = this.search.toLowerCase();
        return this.paginate(
          this.$store.getters.loadedPosts
            .filter(post => post.category == "hardware")
            .filter(post => {
              return (
                post.author.toLowerCase().includes(searchText) ||
                post.title.toLowerCase().includes(searchText) ||
                post.previewText.toLowerCase().includes(searchText) ||
                post.content.toLowerCase().includes(searchText) ||
                post.category.toLowerCase().includes(searchText)
              );
            })
        );
      }
      return this.paginate(
        this.$store.getters.loadedPosts.filter(
          post => post.category == "hardware"
        )
      );
    }
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(
        this.$store.getters.loadedPosts.filter(
          post => post.category == "hardware"
        ).length / this.perPage
      );
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    clicked(clickedPageVal) {
      this.page = clickedPageVal;
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
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
