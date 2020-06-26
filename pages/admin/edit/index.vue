<template>
  <div>
    <AdminPostForm :post="loadedPost" @submit="onSubmitted"></AdminPostForm>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    AdminPostForm
  },

  asyncData(params) {
      console.log(params);
      
    return axios
      .get(
        "https://latest-news-f9dc0.firebaseio.com/posts/" +
          params.from.params.id +
          ".json"
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: params.from.params.id }
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(res => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
