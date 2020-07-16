<template>
  <div class="container">
    <div class="bg-video">
      <video class="bg-video-content" autoplay muted loop>
        <source src="~/assets/images/tech-video.mp4" type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
    <div class="container-inner">
      <form class="container-inner-form" @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author name</AppControlInput
        >
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.content" control-type="textarea"
          >Content</AppControlInput
        >
        <AppControlInput v-model="editedPost.image">Thumbnail</AppControlInput>
        <AppControlInput
          v-model="editedPost.previewText"
          control-type="textarea"
          >Preview Text</AppControlInput
        >
        <AppButton type="submit">Save</AppButton>
        <AppButton type="button" btn-style="cancel" @click="onCancel"
          >Cancel</AppButton
        >
      </form>
      <img class="container-inner-image" src="~/assets/images/new-post-img.jpg" alt="">
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
            previewText: ""
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
