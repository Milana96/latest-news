<template>
    <div class="existing-posts-preview">
        <PostPreview v-for="post in posts" :key="post.id"
            :id="post.id"
            :is-admin="isAdmin"
            :title="post.title"
            :image="post.image"
            :author="post.author"
            :previewText="post.previewText"
        ></PostPreview>
    </div>
</template>

<script>
import PostPreview from "./PostPreview";
export default {
    components: {
        PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
      posts: {
        type: Array,
        required: true
      }
    }
}
</script>