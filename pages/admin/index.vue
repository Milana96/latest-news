<template>
  <div class="admin">
    <div class="admin-inner">
      <section class="admin-inner-intro">
        <h1 class="tech ui-margin-b-small">Get the latest tech news!</h1>
        <div class="admin-inner-intro-text">
          The latest tech news about the world's best (and sometimes worst)
          hardware, apps, and much more. From top companies like Google and
          Apple to tiny startups vying for your attention, Verge Tech has the
          latest in what matters in technology daily.
        </div>
        <h1 class="tech">ADMIN</h1>
        <p class="create-post">
          This is the place where you can write the latest tech news about the
          hardware, apps and much more.
        </p>
        <div class="admin-buttons">
          <AppButton @click="$router.push('/admin/new-post')"
            >Create post</AppButton
          >
          <AppButton @click="onLogout">Logout</AppButton>
        </div>
      </section>
    </div>
    <section class="existing-posts">
      <div class="search-post ui-margin-b-small">
        <AppControlInput
          v-model="search"
          placeholder="Search"
        ></AppControlInput>
        <span><fa class="icons-item" :icon="['fa', 'search']"/></span>
      </div>
      <PostList isAdmin :posts="loadedPosts"></PostList>
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
  layout: "admin",
  middleware: ["check-auth", "auth"],
  data() {
    return {
      search: "",
      page: 1,
      perPage: 3,
      pages: []
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
          this.$store.getters.loadedPosts.filter(post => {
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
      return this.paginate(this.$store.getters.loadedPosts);
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/admin/auth");
      });
    },
    setPages() {
      let numberOfPages = Math.ceil(
        this.$store.getters.loadedPosts.length / this.perPage
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
