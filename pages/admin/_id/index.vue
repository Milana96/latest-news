<template>
  <div>
    <AdminPostForm :post="loadedPost" @submit="onSubmited"></AdminPostForm>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    asyncData(context) {
      return axios
        .get(
          "https://latest-news-f9dc0.firebaseio.com/posts/" +
            context.params.postId +
            ".json"
        )
        .then(res => {
          return {
            loadedPost: { ...res.data, id: context.params.postId }
          };
        })
        .catch(e => {
          console.log(e);
        });
    },
    onSubmited(editedPost) {
      // edit post
    }
  }
};
</script>
