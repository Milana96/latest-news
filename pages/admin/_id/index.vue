<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <img class="post-image" :src="loadedPost.image" />
      <p class="post-content">{{ loadedPost.content }}</p>
      <section class="post-feedback">
        <p>
          Let me know what do you think about the post, send a mail to
        </p>
        <a class="post-feedback" href="mailto:feedback@my-awesome-domain.com"
          >mailto:feedback@my-awesome-domain.com</a
        >
      </section>
      <div class="icons">
        <nuxt-link
          :to="{ path: '/admin/edit', params: { id: $route.params.id } }"
          class="icons-item"
        >
          <span>
            <fa :icon="['fas', 'pencil-alt']" />
          </span>
        </nuxt-link>
        <!-- <button > -->
          <span @click="removePost">
            <fa class="icons-item" :icon="['fa', 'trash']" />
          </span>
        <!-- </button> -->
      </div>
    </section>
    <section class="other-posts">
      <h2 class="next-up">Next up in TECH</h2>
      <PostList :posts="otherPosts"></PostList>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
   // uncomment and fix later
  // middleware: ['check-auth', 'auth'],
  data() {
    return {
      postID: ""
    };
  },
  computed: {
    otherPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  asyncData(context) {
    return axios
      .get(
        "https://latest-news-f9dc0.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then(res => {
        return {
          loadedPost: res.data
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    removePost() {
      this.$store.dispatch("removePost", this.$route.params.id).then(res => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
