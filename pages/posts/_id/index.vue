<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <img class="post-image" :src="loadedPost.image" />
      <p class="post-content">{{ loadedPost.content }}</p>
      <div class="rating">
        <h3 class="rating-heading">Rate this post</h3>
        <span>
          <fa
            @click="ratePost(index)"
            v-for="index in count"
            :key="index"
            :class="{ rated: index <= rated }"
            class="icons-item"
            :icon="['fa', 'star']"
          />
        </span>
      </div>
      <section class="post-feedback">
        <p>
          Let me know what do you think about the post, send a mail to
        </p>
        <a href="mailto:feedback@my-awesome-domain.com"
          >mailto:feedback@my-awesome-domain.com</a
        >
      </section>
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
  data() {
    return {
      rated: 0,
      count: 5,
      postToRate: []
    };
  },
  computed: {
    otherPosts() {
      return this.$store.state.loadedPosts.filter( el => el.id != this.$route.params.id).slice(0, 2);
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
  created() {
    this.postToRate = this.$store.state.loadedPosts.filter(
      post => post.id == this.$route.params.id
    );
    console.log(this.postToRate);
    this.rated = this.postToRate[0].rate;
  },
  methods: {
    ratePost(ratedIndex) {
      if (ratedIndex < this.rated) {
        this.rated--;
        this.$store.commit("SET_RATE", {
          id: this.$route.params.id,
          rate: this.rated
        });
        this.postToRate[0].rate--;
      } else {
        this.rated++;
        this.$store.commit("SET_RATE", {
          id: this.$route.params.id,
          rate: this.rated
        });
        this.postToRate[0].rate++;
      }
    }
  }
};
</script>
