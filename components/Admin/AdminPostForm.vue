<template>
  <div class="container">
    <form class="admin-post-form" @submit.prevent="onSave">
      <AppControlInput v-model="editedPost.author">Author name</AppControlInput>
      <AppControlInput v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput v-model="editedPost.content" control-type="textarea"
        >Content</AppControlInput
      >
      <AppControlInput v-model="editedPost.image"
        >Thumbnail</AppControlInput
      >
      <AppControlInput v-model="editedPost.previewText" control-type="textarea"
        >Preview Text</AppControlInput
      >
      <AppButton type="submit">Save</AppButton>
      <AppButton type="button" btn-style="cancel" @click="onCancel"
        >Cancel</AppButton
      >
    </form>
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
