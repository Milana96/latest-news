<template>
    <div>
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmited"/>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
    components: {
        AdminPostForm
    },
    methods: {
        onSubmited(postData) {
            axios.post('https://latest-news-f9dc0.firebaseio.com/posts.json', postData)
            .then((result) => {
                console.log(result);
                this.$router.push('/admin');
            })
            .catch((err) => {console.log(err);
            })
        }
    },
}
</script>