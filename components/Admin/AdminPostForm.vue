<template>
  <div class="new-post-wrapper">
    <div class="bg-video">
      <video class="bg-video-content" autoplay muted loop>
        <source src="~/assets/images/tech-video.mp4" type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
    <div class="new-post-inner">
      <div class="new-post-inner-intro">
        A world is waiting for you to write best article about latest technology
        news!
      </div>
      <form class="new-post-inner-form" @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author" placeholder="Author name">
          <span> <fa :icon="['fas', 'user']"/></span>
        </AppControlInput>
        <AppControlInput v-model="editedPost.title" placeholder="Title">
          <span> <fa :icon="['fas', 'heading']"/></span>
        </AppControlInput>
        <AppControlInput
          class="textareaLabel"
          v-model="editedPost.content"
          control-type="textarea"
          placeholder="Content"
          >Content</AppControlInput
        >
        <AppControlInput v-model="editedPost.image" placeholder="Thumbnail link">
          <span> <fa :icon="['fas', 'image']"/></span>
        </AppControlInput>
        <AppControlInput
          class="textareaLabel"
          v-model="editedPost.previewText"
          control-type="textarea"
          placeholder="Preview"
          >Preview text</AppControlInput
        >
        <AppControlInput
          v-model="editedPost.category"
          placeholder="Category (Hardware / Software)"
        >
          <span> <fa :icon="['fas', 'tv']"/></span
        ></AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton type="button" btn-style="cancel" @click="onCancel"
          >Cancel</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  created() {
    console.log(this.post);
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            image: "",
            content: "",
            previewText: "",
            category: ""
          }
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>
