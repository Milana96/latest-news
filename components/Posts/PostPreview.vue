<template>
  <nuxt-link :to="postLink">
    <div class="post-preview">
      <article class="post-preview-side post-preview-side-front">
        <div
          class="post-preview-image"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
        <div class="post-preview-content">
          <h1>{{ title }}</h1>
          <p>{{ previewText }}</p>
          <small>{{ author }}</small>
          <small class="category">{{ category }}</small>
        </div>
        <div class="rating">
          <span>
            <fa
              v-for="index in count"
              :key="index"
              :class="{ rated: index <= rate }"
              class="icons-item"
              :icon="['fa', 'star']"
            />
          </span>
        </div>
      </article>
      <article class="post-preview-side post-preview-side-back">
        <h1>Click me to find out more!</h1>
      </article>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    rate: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // rated: 0,
      count: 5,
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    }
  }
};
</script>
