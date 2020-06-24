<template>
    <div class="existing-posts">
        <PostPreview v-for="post in posts" :key="post.id"
            :id="post.id"
            :is-admin="isAdmin"
            :title="post.title"
            :image="post.image"
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