<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate | date }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what do you think about the post, send a mail to
      </p>
      <a href="mailto:feedback@my-awesome-domain.com"
        >mailto:feedback@my-awesome-domain.com</a
      >
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData(context) {
    return axios
      .get("https://latest-news-f9dc0.firebaseio.com/posts" + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
    }
};
</script>
