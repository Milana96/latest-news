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
      <ValidationObserver
        ref="observer"
        @submit.prevent="onSave"
        v-slot="{ invalid }"
      >
        <form class="new-post-inner-form">
          <ValidationProvider
            v-slot="{ errors }"
            name="author"
            rules="required"
          >
            <AppControlInput
              v-model="editedPost.author"
              placeholder="Author name"
            >
              <span> <fa :icon="['fas', 'user']" /></span>
            </AppControlInput>
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="title" rules="required">
            <AppControlInput v-model="editedPost.title" placeholder="Title">
              <span> <fa :icon="['fas', 'heading']" /></span>
            </AppControlInput>
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="content"
            rules="required"
          >
            <AppControlInput
              class="textareaLabel"
              v-model="editedPost.content"
              control-type="textarea"
              placeholder="Content"
              >Content</AppControlInput
            >
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="image" rules="required">
            <AppControlInput
              placeholder="Type image URL"
              v-model="editedPost.image"
            >
              <span> <fa :icon="['fas', 'image']" /></span>
            </AppControlInput>
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="preview"
            rules="required"
          >
            <AppControlInput
              class="textareaLabel"
              v-model="editedPost.previewText"
              control-type="textarea"
              placeholder="Preview"
              >Preview text</AppControlInput
            >
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="category"
            rules="required"
          >
            <AppControlInput
              v-model="editedPost.category"
              placeholder="Category (Hardware / Software)"
            >
              <span> <fa :icon="['fas', 'tv']" /></span
            ></AppControlInput>
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </ValidationProvider>
          <AppButton type="submit" :disabled="invalid">Save</AppButton>
          <AppButton type="button" btn-style="cancel" @click="onCancel"
            >Cancel</AppButton
          >
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
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
            rate: 0,
            category: "",
          },
    };
  },
  methods: {
    async onSave() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        // ABORT!!
        alert("This post is not valid!");
      }
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
